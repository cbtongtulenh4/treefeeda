document.addEventListener("DOMContentLoaded", () => {
  // --- Utility Functions ---
  function showToast(message, type = "info") {
    const toastContainer = document.getElementById("toast-container")
    const toast = document.createElement("div")
    toast.className = `toast ${type}`
    toast.textContent = message
    toastContainer.appendChild(toast)

    setTimeout(() => {
      toast.classList.add("show")
    }, 10) // Small delay to trigger CSS transition

    setTimeout(() => {
      toast.classList.remove("show")
      toast.addEventListener("transitionend", () => toast.remove())
    }, 3000)
  }

  function showMessageBox(elementId, message, type = "info") {
    const messageBox = document.getElementById(elementId)
    messageBox.textContent = message
    messageBox.className = `message-box ${type}`
    messageBox.style.display = "block"
    setTimeout(() => {
      messageBox.style.display = "none"
    }, 5000)
  }

  // --- Tab Switching Logic ---
  const tabTriggers = document.querySelectorAll(".tab-trigger")
  const tabContents = document.querySelectorAll(".tab-content")

  tabTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      // Deactivate all triggers and contents
      tabTriggers.forEach((t) => t.classList.remove("active"))
      tabContents.forEach((c) => c.classList.remove("active"))

      // Activate clicked trigger and corresponding content
      trigger.classList.add("active")
      const targetTabId = trigger.dataset.tab
      document.getElementById(targetTabId).classList.add("active")
    })
  })

  // --- Profile Tab Logic ---
  const profileForm = document.getElementById("profile-form")
  const saveProfileBtn = document.getElementById("save-profile-btn")
  const profileMessage = document.getElementById("profile-message")

  // Toggle password visibility
  document.querySelectorAll(".toggle-password").forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target
      const passwordInput = document.getElementById(targetId)
      const icon = button.querySelector("i")

      if (passwordInput.type === "password") {
        passwordInput.type = "text"
        icon.classList.remove("fa-eye")
        icon.classList.add("fa-eye-slash")
      } else {
        passwordInput.type = "password"
        icon.classList.remove("fa-eye-slash")
        icon.classList.add("fa-eye")
      }
    })
  })

  profileForm.addEventListener("submit", async (event) => {
    event.preventDefault()
    saveProfileBtn.disabled = true
    saveProfileBtn.textContent = "Saving..."
    profileMessage.style.display = "none"

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const formData = new FormData(profileForm)
    const data = Object.fromEntries(formData.entries())
    console.log("Saving profile:", data)

    // Simulate success/failure
    const success = Math.random() > 0.1 // 90% success rate for demo

    if (success) {
      showMessageBox("profile-message", "Profile updated successfully!", "success")
      showToast("Profile updated successfully!", "success")
    } else {
      showMessageBox("profile-message", "Failed to update profile. Please try again.", "error")
      showToast("Failed to update profile.", "error")
    }

    saveProfileBtn.disabled = false
    saveProfileBtn.textContent = "Save Changes"
  })

  // --- Payment Info Tab Logic ---
  const inactiveAccountsTableBody = document.getElementById("inactive-accounts-table-body")
  const createNewPaymentBtn = document.getElementById("create-new-payment-btn")
  const editActivePaymentBtn = document.getElementById("edit-active-payment-btn")
  const deleteActivePaymentBtn = document.getElementById("delete-active-payment-btn")

  // Fake data for payment methods
  let paymentMethods = [
    {
      id: "1",
      method: "BTC",
      account: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
      minAmount: 50,
      notice: "Bitcoin payments only",
      status: "inactive",
    },
    {
      id: "2",
      method: "ETH",
      account: "0x742d35Cc6634C0532925a3b8D4C2C4e4C4C4C4",
      minAmount: 25,
      notice: "Ethereum network",
      status: "inactive",
    },
    {
      id: "3",
      method: "PayPal",
      account: "payments@example.com",
      minAmount: 10,
      notice: "PayPal business account",
      status: "inactive",
    },
    {
      id: "4",
      method: "USDT-erc20",
      account: "0x8ba1f109551bD432803012645Hac136c22C4C4C4",
      minAmount: 100,
      notice: "ERC-20 network only",
      status: "inactive",
    },
  ]

  const activePaymentMethod = {
    id: "active-1",
    method: "USDT-trc20",
    account: "TLJrWZ826P2qrV4GfhcKMGeUj79JQsuR3",
    minAmount: 100,
    notice: "",
    status: "active",
  }

  function renderInactiveAccounts() {
    inactiveAccountsTableBody.innerHTML = "" // Clear existing rows

    if (paymentMethods.length === 0) {
      inactiveAccountsTableBody.innerHTML = `
                <tr>
                    <td colspan="5" class="no-data">
                        <div class="no-data-icon"><div></div></div>
                        <p>No data</p>
                    </td>
                </tr>
            `
      return
    }

    paymentMethods.forEach((payment) => {
      const row = document.createElement("tr")
      row.innerHTML = `
                <td>${payment.method}</td>
                <td class="break-all">${payment.account}</td>
                <td>${payment.notice || "-"}</td>
                <td><span class="badge">Inactive</span></td>
                <td class="actions-cell">
                    <button class="btn btn-ghost btn-success activate-btn" data-id="${payment.id}">
                        <i class="fas fa-play"></i>
                    </button>
                    <button class="btn btn-ghost edit-btn" data-id="${payment.id}">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-ghost btn-danger delete-btn" data-id="${payment.id}">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </td>
            `
      inactiveAccountsTableBody.appendChild(row)
    })

    // Add event listeners to new buttons
    inactiveAccountsTableBody.querySelectorAll(".activate-btn").forEach((button) => {
      button.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.id
        handleActivatePayment(id)
      })
    })
    inactiveAccountsTableBody.querySelectorAll(".edit-btn").forEach((button) => {
      button.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.id
        const paymentToEdit = paymentMethods.find((p) => p.id === id)
        if (paymentToEdit) {
          openPaymentMethodDialog(paymentToEdit)
        }
      })
    })
    inactiveAccountsTableBody.querySelectorAll(".delete-btn").forEach((button) => {
      button.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.id
        const paymentToDelete = paymentMethods.find((p) => p.id === id)
        if (paymentToDelete) {
          openDeleteConfirmationDialog(paymentToDelete)
        }
      })
    })
  }

  // --- Payment Method Dialog Logic ---
  const paymentMethodDialogOverlay = document.getElementById("payment-method-dialog-overlay")
  const paymentMethodForm = document.getElementById("payment-method-form")
  const paymentDialogTitle = document.getElementById("payment-dialog-title")
  const paymentDialogDescription = document.getElementById("payment-dialog-description")
  const paymentIdInput = document.getElementById("payment-id")
  const paymentMethodSelect = document.getElementById("payment-method-select")
  const paymentAccountInput = document.getElementById("payment-account")
  const paymentMinAmountInput = document.getElementById("payment-min-amount")
  const paymentNoticeTextarea = document.getElementById("payment-notice")
  const savePaymentBtn = document.getElementById("save-payment-btn")
  const cancelPaymentDialogBtn = document.getElementById("cancel-payment-dialog")

  let currentEditingPaymentId = null // To track if we are editing or creating

  function openPaymentMethodDialog(payment = null) {
    paymentMethodForm.reset() // Clear form
    paymentIdInput.value = ""
    currentEditingPaymentId = null

    if (payment) {
      paymentDialogTitle.textContent = "Edit Payment Method"
      paymentDialogDescription.textContent = "Update your payment method details."
      savePaymentBtn.textContent = "Update"
      paymentIdInput.value = payment.id
      paymentMethodSelect.value = payment.method
      paymentAccountInput.value = payment.account
      paymentMinAmountInput.value = payment.minAmount
      paymentNoticeTextarea.value = payment.notice
      currentEditingPaymentId = payment.id
    } else {
      paymentDialogTitle.textContent = "Create New Payment Method"
      paymentDialogDescription.textContent = "Add a new payment method to your account."
      savePaymentBtn.textContent = "Create"
    }
    paymentMethodDialogOverlay.classList.add("open")
  }

  function closePaymentMethodDialog() {
    paymentMethodDialogOverlay.classList.remove("open")
  }

  createNewPaymentBtn.addEventListener("click", () => openPaymentMethodDialog())
  cancelPaymentDialogBtn.addEventListener("click", closePaymentMethodDialog)

  editActivePaymentBtn.addEventListener("click", () => openPaymentMethodDialog(activePaymentMethod))

  paymentMethodForm.addEventListener("submit", async (event) => {
    event.preventDefault()
    savePaymentBtn.disabled = true
    savePaymentBtn.textContent = currentEditingPaymentId ? "Updating..." : "Creating..."

    const formData = new FormData(paymentMethodForm)
    const data = Object.fromEntries(formData.entries())

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const success = Math.random() > 0.1 // 90% success rate

    if (success) {
      if (currentEditingPaymentId) {
        // Update existing payment method (for inactive list)
        const index = paymentMethods.findIndex((p) => p.id === currentEditingPaymentId)
        if (index !== -1) {
          paymentMethods[index] = { ...paymentMethods[index], ...data }
        }
        // If editing active, this would update the active one (not implemented in this simple demo)
        showToast("Payment method updated successfully!", "success")
      } else {
        // Create new payment method
        const newId = String(Date.now()) // Simple unique ID
        paymentMethods.push({ ...data, id: newId, status: "inactive" })
        showToast("Payment method created successfully!", "success")
      }
      renderInactiveAccounts() // Re-render table
      closePaymentMethodDialog()
    } else {
      showToast("Failed to save payment method. Please try again.", "error")
    }

    savePaymentBtn.disabled = false
    savePaymentBtn.textContent = currentEditingPaymentId ? "Update" : "Create"
  })

  // --- Delete Confirmation Dialog Logic ---
  const deleteConfirmationDialogOverlay = document.getElementById("delete-confirmation-dialog-overlay")
  const deleteMethodNameSpan = document.getElementById("delete-method-name")
  const confirmDeleteBtn = document.getElementById("confirm-delete-btn")
  const cancelDeleteDialogBtn = document.getElementById("cancel-delete-dialog")

  let paymentToDeleteId = null

  function openDeleteConfirmationDialog(payment) {
    paymentToDeleteId = payment.id
    deleteMethodNameSpan.textContent = payment.method
    deleteConfirmationDialogOverlay.classList.add("open")
  }

  function closeDeleteConfirmationDialog() {
    deleteConfirmationDialogOverlay.classList.remove("open")
    paymentToDeleteId = null
  }

  cancelDeleteDialogBtn.addEventListener("click", closeDeleteConfirmationDialog)

  deleteActivePaymentBtn.addEventListener("click", () => openDeleteConfirmationDialog(activePaymentMethod))

  confirmDeleteBtn.addEventListener("click", async () => {
    confirmDeleteBtn.disabled = true
    confirmDeleteBtn.textContent = "Deleting..."

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const success = Math.random() > 0.1 // 90% success rate

    if (success) {
      if (paymentToDeleteId === activePaymentMethod.id) {
        // Handle deletion of active method (e.g., clear active, show message)
        showToast("Active payment method deleted successfully!", "success")
        // In a real app, you'd likely have logic to select a new active or prompt user
      } else {
        // Delete from inactive list
        paymentMethods = paymentMethods.filter((p) => p.id !== paymentToDeleteId)
        renderInactiveAccounts() // Re-render table
        showToast("Payment method deleted successfully!", "success")
      }
      closeDeleteConfirmationDialog()
    } else {
      showToast("Failed to delete payment method. Please try again.", "error")
    }

    confirmDeleteBtn.disabled = false
    confirmDeleteBtn.textContent = "Delete"
  })

  async function handleActivatePayment(id) {
    showToast("Activating payment method...", "info")
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const success = Math.random() > 0.1 // 90% success rate

    if (success) {
      // In a real app, you'd move this to active and potentially deactivate current active
      paymentMethods = paymentMethods.filter((p) => p.id !== id)
      renderInactiveAccounts()
      showToast("Payment method activated successfully!", "success")
    } else {
      showToast("Failed to activate payment method. Please try again.", "error")
    }
  }

  // Initial render of inactive accounts
  renderInactiveAccounts()
})
