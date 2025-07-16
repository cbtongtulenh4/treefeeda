// --- Fake Data Generation ---
function generateFakePayments(count) {
  const payments = []
  for (let i = 0; i < count; i++) {
    const startDate = new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000)
    const endDate = new Date(startDate.getTime() + Math.random() * 30 * 24 * 60 * 60 * 1000)
    const amount = (Math.random() * (500 - 50) + 50).toFixed(2)
    const commission = (Math.random() * 5).toFixed(2)
    const statuses = ["Paid", "Pending", "Failed"]
    const status = statuses[Math.floor(Math.random() * statuses.length)]
    const methods = ["USDT-trc20", "Bank Transfer", "PayPal"]
    const method = methods[Math.floor(Math.random() * methods.length)]

    payments.push({
      id: `payment-${i}`,
      dateRange: `${startDate.getFullYear()}-${(startDate.getMonth() + 1).toString().padStart(2, "0")}-${startDate.getDate().toString().padStart(2, "0")} ${startDate.getHours().toString().padStart(2, "0")}:${startDate.getMinutes().toString().padStart(2, "0")} - ${endDate.getFullYear()}-${(endDate.getMonth() + 1).toString().padStart(2, "0")}-${endDate.getDate().toString().padStart(2, "0")} ${endDate.getHours().toString().padStart(2, "0")}:${endDate.getMinutes().toString().padStart(2, "0")}`,
      method: method,
      note: `Transaction ${i + 1}`,
      amount: Number.parseFloat(amount),
      commission: Number.parseFloat(commission),
      status: status,
    })
  }
  return payments
}

function generateFakeChatMessages() {
  return [
    {
      id: "msg1",
      sender: "user",
      text: "hi",
      timestamp: "Just now",
      avatar: null,
    },
    {
      id: "msg2",
      sender: "user",
      text: "my offer #15306 was rejected i want to ask why and is there any way to reapply, i can't click on any part of offer #15306",
      timestamp: "May 20, seen",
      avatar: null,
    },
    {
      id: "msg3",
      sender: "agent",
      text: "You have a personal manager, write to her - she will quickly answer your questions",
      timestamp: "Today",
      avatar: "/placeholder.svg?height=24&width=24",
    },
    {
      id: "msg4",
      sender: "agent",
      text: "Ask us anything – we'll get back to you.",
      timestamp: "Today",
      avatar: "/placeholder.svg?height=24&width=24",
    },
  ]
}

// --- Payment Table Logic ---
function renderPayments(payments) {
  const tableBody = document.getElementById("payment-table-body")
  tableBody.innerHTML = "" // Clear existing rows

  payments.forEach((payment) => {
    const row = document.createElement("tr")
    row.innerHTML = `
            <td class="font-medium">${payment.dateRange}</td>
            <td>${payment.method}</td>
            <td>${payment.note}</td>
            <td class="text-right text-green">$${payment.amount.toFixed(2)}</td>
            <td class="text-right">$${payment.commission.toFixed(2)}</td>
            <td>
                <div class="status-indicator">
                    <span class="dot"></span>
                    ${payment.status}
                </div>
            </td>
            <td>
                <button class="action-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-sm"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                </button>
            </td>
        `
    tableBody.appendChild(row)
  })
}

// --- Hint Toggle Logic ---
document.addEventListener("DOMContentLoaded", () => {
  const toggleHintButton = document.getElementById("toggle-hint-button")
  const hintContent = document.getElementById("hint-content")
  const chevronIcon = toggleHintButton.querySelector(".chevron-down")

  toggleHintButton.addEventListener("click", () => {
    hintContent.classList.toggle("hidden")
    chevronIcon.classList.toggle("rotate-180")
    toggleHintButton.innerHTML = hintContent.classList.contains("hidden")
      ? `Show hint <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-sm chevron-down"><path d="m6 9 6 6 6-6"></path></svg>`
      : `Hide hint <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-sm chevron-down rotate-180"><path d="m6 9 6 6 6-6"></path></svg>`
  })
})

// --- Chat Box Logic ---
const chatBoxContainer = document.getElementById("chat-box-container")
const openChatButton = document.getElementById("open-chat-button")
const closeChatButton = document.getElementById("close-chat-button")
const chatMessagesDiv = document.getElementById("chat-messages")
const messageInput = document.getElementById("message-input")
const sendMessageButton = document.getElementById("send-message-button")
const messageLengthSpan = document.getElementById("message-length")
const messagesEndRef = document.getElementById("messages-end-ref")

let currentChatMessages = [] // Will be populated on initial load

function renderChatMessages() {
  chatMessagesDiv.innerHTML = "" // Clear existing messages
  currentChatMessages.forEach((message) => {
    const messageElement = document.createElement("div")
    messageElement.classList.add("chat-message", message.sender)

    let avatarHtml = ""
    if (message.sender === "agent" && message.avatar) {
      avatarHtml = `<img src="${message.avatar}" alt="" class="chat-avatar">`
    }

    messageElement.innerHTML = `
            ${message.sender === "agent" ? avatarHtml : ""}
            <div class="message-bubble ${message.sender}">
                <p>${message.text}</p>
                <span class="message-timestamp">${message.timestamp}</span>
            </div>
            `
        // ${message.sender === "user" ? `<span class="message-timestamp">${message.timestamp}</span>` : ""}
    chatMessagesDiv.appendChild(messageElement)
  })
  scrollToBottom()
}

function addChatMessage(sender, text) {
  const newMessage = {
    id: `msg-${currentChatMessages.length + 1}`,
    sender: sender,
    text: text,
    timestamp: "Just now",
    avatar: sender === "agent" ? "/placeholder.svg?height=24&width=24" : null,
  }
  currentChatMessages.push(newMessage)
  renderChatMessages()
  messageInput.value = ""
  updateMessageLength()
}

function scrollToBottom() {
  messagesEndRef.scrollIntoView({ behavior: "smooth" })
}

function updateMessageLength() {
  messageLengthSpan.textContent = `${messageInput.value.length} / 5.000`
}

// Event Listeners for Chat Box
openChatButton.addEventListener("click", () => {
  chatBoxContainer.classList.remove("hidden")
  openChatButton.classList.add("hidden")
  scrollToBottom()
})

closeChatButton.addEventListener("click", () => {
  chatBoxContainer.classList.add("hidden")
  openChatButton.classList.remove("hidden")
})

sendMessageButton.addEventListener("click", () => {
  if (messageInput.value.trim()) {
    addChatMessage("user", messageInput.value.trim())
  }
})

messageInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && messageInput.value.trim()) {
    addChatMessage("user", messageInput.value.trim())
  }
})

messageInput.addEventListener("input", updateMessageLength)

// --- Initial Page Load ---
document.addEventListener("DOMContentLoaded", () => {
  // Render payments
  const payments = generateFakePayments(5)
  renderPayments(payments)

  // Render chat messages
  currentChatMessages = generateFakeChatMessages()
  renderChatMessages()

  // Initially hide chatbox and show open button
  chatBoxContainer.classList.add("hidden")
  openChatButton.classList.remove("hidden")
})
