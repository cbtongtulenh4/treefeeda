// Sample conversion data
const conversionsData = [
  {
    date: "2025-07-05 14:22:15",
    source: "S",
    goal: "Adult dating 1",
    clickId: "...abc123ef",
    extClickId: "-",
    subsource: "no_subsource",
    device: "desktop",
    country: "Germany",
    countryCode: "DE",
    amount: "$8.50",
    type: "Conversion",
  },
  {
    date: "2025-07-05 12:18:42",
    source: "S",
    goal: "Adult dating 2",
    clickId: "...def456gh",
    extClickId: "-",
    subsource: "no_subsource",
    device: "mobile",
    country: "France",
    countryCode: "FR",
    amount: "$7.20",
    type: "Conversion",
  },
  {
    date: "2025-07-04 18:35:28",
    source: "S",
    goal: "Adult dating 1",
    clickId: "...ghi789jk",
    extClickId: "-",
    subsource: "no_subsource",
    device: "tablet",
    country: "Italy",
    countryCode: "IT",
    amount: "$6.80",
    type: "Conversion",
  },
  {
    date: "2025-07-04 16:45:33",
    source: "S",
    goal: "Adult dating 3",
    clickId: "...jkl012mn",
    extClickId: "-",
    subsource: "no_subsource",
    device: "mobile",
    country: "Spain",
    countryCode: "ES",
    amount: "$5.90",
    type: "Conversion",
  },
  {
    date: "2025-07-04 09:12:17",
    source: "S",
    goal: "Adult dating 1",
    clickId: "...mno345pq",
    extClickId: "-",
    subsource: "no_subsource",
    device: "desktop",
    country: "Netherlands",
    countryCode: "NL",
    amount: "$9.10",
    type: "Conversion",
  },
  {
    date: "2025-07-03 22:58:41",
    source: "S",
    goal: "Adult dating 2",
    clickId: "...pqr678st",
    extClickId: "-",
    subsource: "no_subsource",
    device: "mobile",
    country: "Belgium",
    countryCode: "BE",
    amount: "$4.75",
    type: "Conversion",
  },
  {
    date: "2025-07-03 20:33:55",
    source: "S",
    goal: "Adult dating 1",
    clickId: "...stu901vw",
    extClickId: "-",
    subsource: "no_subsource",
    device: "desktop",
    country: "Sweden",
    countryCode: "SE",
    amount: "$11.20",
    type: "Conversion",
  },
  {
    date: "2025-07-03 15:27:09",
    source: "S",
    goal: "Adult dating 3",
    clickId: "...vwx234yz",
    extClickId: "-",
    subsource: "no_subsource",
    device: "mobile",
    country: "Norway",
    countryCode: "NO",
    amount: "$10.50",
    type: "Conversion",
  },
  {
    date: "2025-07-03 09:36:26",
    source: "S",
    goal: "Adult dating 1",
    clickId: "...afbcfb7c",
    extClickId: "-",
    subsource: "no_subsource",
    device: "mobile",
    country: "Austria",
    countryCode: "AT",
    amount: "$7.00",
    type: "Conversion",
  },
  {
    date: "2025-07-02 19:44:12",
    source: "S",
    goal: "Adult dating 2",
    clickId: "...yza567bc",
    extClickId: "-",
    subsource: "no_subsource",
    device: "tablet",
    country: "Denmark",
    countryCode: "DK",
    amount: "$8.90",
    type: "Conversion",
  },
  {
    date: "2025-07-02 17:21:38",
    source: "S",
    goal: "Adult dating 1",
    clickId: "...bcd890ef",
    extClickId: "-",
    subsource: "no_subsource",
    device: "desktop",
    country: "Finland",
    countryCode: "FI",
    amount: "$9.75",
    type: "Conversion",
  },
  {
    date: "2025-07-02 14:15:22",
    source: "S",
    goal: "Adult dating 3",
    clickId: "...efg123hi",
    extClickId: "-",
    subsource: "no_subsource",
    device: "mobile",
    country: "Poland",
    countryCode: "PL",
    amount: "$3.20",
    type: "Conversion",
  },
  {
    date: "2025-07-02 08:26:24",
    source: "S",
    goal: "Adult dating 1",
    clickId: "...f95fb273",
    extClickId: "-",
    subsource: "no_subsource",
    device: "mobile",
    country: "United Kingdom",
    countryCode: "GB",
    amount: "$6.00",
    type: "Conversion",
  },
  {
    date: "2025-07-01 23:52:47",
    source: "S",
    goal: "Adult dating 2",
    clickId: "...hij456kl",
    extClickId: "-",
    subsource: "no_subsource",
    device: "desktop",
    country: "Ireland",
    countryCode: "IE",
    amount: "$7.80",
    type: "Conversion",
  },
  {
    date: "2025-07-01 21:18:33",
    source: "S",
    goal: "Adult dating 1",
    clickId: "...klm789no",
    extClickId: "-",
    subsource: "no_subsource",
    device: "mobile",
    country: "Portugal",
    countryCode: "PT",
    amount: "$5.40",
    type: "Conversion",
  },
  {
    date: "2025-07-01 18:45:19",
    source: "S",
    goal: "Adult dating 3",
    clickId: "...nop012qr",
    extClickId: "-",
    subsource: "no_subsource",
    device: "tablet",
    country: "Switzerland",
    countryCode: "CH",
    amount: "$12.30",
    type: "Conversion",
  },
  {
    date: "2025-07-01 16:33:05",
    source: "S",
    goal: "Adult dating 1",
    clickId: "...qrs345tu",
    extClickId: "-",
    subsource: "no_subsource",
    device: "desktop",
    country: "Czech Republic",
    countryCode: "CZ",
    amount: "$4.10",
    type: "Conversion",
  },
  {
    date: "2025-07-01 13:27:51",
    source: "S",
    goal: "Adult dating 2",
    clickId: "...tuv678wx",
    extClickId: "-",
    subsource: "no_subsource",
    device: "mobile",
    country: "Slovakia",
    countryCode: "SK",
    amount: "$3.80",
    type: "Conversion",
  },
  {
    date: "2025-07-01 10:14:37",
    source: "S",
    goal: "Adult dating 1",
    clickId: "...wxy901za",
    extClickId: "-",
    subsource: "no_subsource",
    device: "desktop",
    country: "Hungary",
    countryCode: "HU",
    amount: "$2.90",
    type: "Conversion",
  },
  {
    date: "2025-07-01 00:19:32",
    source: "S",
    goal: "Adult dating 1",
    clickId: "...6eedcc70",
    extClickId: "-",
    subsource: "no_subsource",
    device: "mobile",
    country: "United Kingdom",
    countryCode: "GB",
    amount: "$6.00",
    type: "Conversion",
  },
  {
    date: "2025-06-30 22:24:33",
    source: "S",
    goal: "Adult dating 1",
    clickId: "...25b59ad1",
    extClickId: "-",
    subsource: "no_subsource",
    device: "mobile",
    country: "Zimbabwe",
    countryCode: "ZW",
    amount: "$0.06",
    type: "Conversion",
  },
  {
    date: "2025-06-30 19:41:28",
    source: "S",
    goal: "Adult dating 3",
    clickId: "...zab234cd",
    extClickId: "-",
    subsource: "no_subsource",
    device: "tablet",
    country: "Romania",
    countryCode: "RO",
    amount: "$2.60",
    type: "Conversion",
  },
  {
    date: "2025-06-30 16:12:34",
    source: "S",
    goal: "Adult dating 1",
    clickId: "...ddf7e5b7",
    extClickId: "-",
    subsource: "no_subsource",
    device: "mobile",
    country: "Hungary",
    countryCode: "HU",
    amount: "$2.40",
    type: "Conversion",
  },
  {
    date: "2025-06-30 13:58:16",
    source: "S",
    goal: "Adult dating 2",
    clickId: "...cde567ef",
    extClickId: "-",
    subsource: "no_subsource",
    device: "desktop",
    country: "Bulgaria",
    countryCode: "BG",
    amount: "$1.80",
    type: "Conversion",
  },
  {
    date: "2025-06-30 11:25:42",
    source: "S",
    goal: "Adult dating 1",
    clickId: "...efg890hi",
    extClickId: "-",
    subsource: "no_subsource",
    device: "mobile",
    country: "Croatia",
    countryCode: "HR",
    amount: "$3.50",
    type: "Conversion",
  },
  {
    date: "2025-06-30 07:00:30",
    source: "S",
    goal: "Adult dating 1",
    clickId: "...463451a7",
    extClickId: "-",
    subsource: "no_subsource",
    device: "mobile",
    country: "South Africa",
    countryCode: "ZA",
    amount: "$1.60",
    type: "Conversion",
  },
  {
    date: "2025-06-29 20:33:18",
    source: "S",
    goal: "Adult dating 3",
    clickId: "...hij123jk",
    extClickId: "-",
    subsource: "no_subsource",
    device: "desktop",
    country: "Slovenia",
    countryCode: "SI",
    amount: "$4.20",
    type: "Conversion",
  },
  {
    date: "2025-06-29 17:47:25",
    source: "S",
    goal: "Adult dating 1",
    clickId: "...jkl456mn",
    extClickId: "-",
    subsource: "no_subsource",
    device: "tablet",
    country: "Estonia",
    countryCode: "EE",
    amount: "$5.70",
    type: "Conversion",
  },
  {
    date: "2025-06-29 14:22:11",
    source: "S",
    goal: "Adult dating 2",
    clickId: "...mno789pq",
    extClickId: "-",
    subsource: "no_subsource",
    device: "mobile",
    country: "Latvia",
    countryCode: "LV",
    amount: "$4.90",
    type: "Conversion",
  },
  {
    date: "2025-06-29 11:15:37",
    source: "S",
    goal: "Adult dating 1",
    clickId: "...pqr012st",
    extClickId: "-",
    subsource: "no_subsource",
    device: "desktop",
    country: "Lithuania",
    countryCode: "LT",
    amount: "$5.30",
    type: "Conversion",
  },
  {
    date: "2025-06-28 22:41:53",
    source: "S",
    goal: "Adult dating 3",
    clickId: "...stu345vw",
    extClickId: "-",
    subsource: "no_subsource",
    device: "mobile",
    country: "Greece",
    countryCode: "GR",
    amount: "$3.70",
    type: "Conversion",
  },
  {
    date: "2025-06-28 19:28:44",
    source: "S",
    goal: "Adult dating 1",
    clickId: "...vwx678yz",
    extClickId: "-",
    subsource: "no_subsource",
    device: "tablet",
    country: "Cyprus",
    countryCode: "CY",
    amount: "$6.40",
    type: "Conversion",
  },
  {
    date: "2025-06-28 16:55:29",
    source: "S",
    goal: "Adult dating 2",
    clickId: "...yza901bc",
    extClickId: "-",
    subsource: "no_subsource",
    device: "desktop",
    country: "Malta",
    countryCode: "MT",
    amount: "$7.60",
    type: "Conversion",
  },
  {
    date: "2025-06-28 13:12:15",
    source: "S",
    goal: "Adult dating 1",
    clickId: "...bcd234ef",
    extClickId: "-",
    subsource: "no_subsource",
    device: "mobile",
    country: "Luxembourg",
    countryCode: "LU",
    amount: "$9.80",
    type: "Conversion",
  },
  {
    date: "2025-06-28 06:45:33",
    source: "S",
    goal: "Adult dating 1",
    clickId: "...6312e81d",
    extClickId: "-",
    subsource: "no_subsource",
    device: "mobile",
    country: "United States",
    countryCode: "US",
    amount: "$6.00",
    type: "Conversion",
  },
  {
    date: "2025-06-27 23:37:48",
    source: "S",
    goal: "Adult dating 3",
    clickId: "...efg567hi",
    extClickId: "-",
    subsource: "no_subsource",
    device: "desktop",
    country: "Canada",
    countryCode: "CA",
    amount: "$8.20",
    type: "Conversion",
  },
  {
    date: "2025-06-27 20:14:22",
    source: "S",
    goal: "Adult dating 1",
    clickId: "...hij890kl",
    extClickId: "-",
    subsource: "no_subsource",
    device: "tablet",
    country: "Mexico",
    countryCode: "MX",
    amount: "$2.10",
    type: "Conversion",
  },
  {
    date: "2025-06-27 17:51:36",
    source: "S",
    goal: "Adult dating 2",
    clickId: "...klm123no",
    extClickId: "-",
    subsource: "no_subsource",
    device: "mobile",
    country: "Brazil",
    countryCode: "BR",
    amount: "$1.90",
    type: "Conversion",
  },
  {
    date: "2025-06-27 14:28:41",
    source: "S",
    goal: "Adult dating 1",
    clickId: "...nop456qr",
    extClickId: "-",
    subsource: "no_subsource",
    device: "desktop",
    country: "Argentina",
    countryCode: "AR",
    amount: "$1.70",
    type: "Conversion",
  },
  {
    date: "2025-06-27 10:32:29",
    source: "S",
    goal: "Adult dating 1",
    clickId: "...681f8c72",
    extClickId: "-",
    subsource: "no_subsource",
    device: "mobile",
    country: "Australia",
    countryCode: "AU",
    amount: "$8.00",
    type: "Conversion",
  },
  {
    date: "2025-06-26 21:45:17",
    source: "S",
    goal: "Adult dating 3",
    clickId: "...qrs789tu",
    extClickId: "-",
    subsource: "no_subsource",
    device: "tablet",
    country: "New Zealand",
    countryCode: "NZ",
    amount: "$9.30",
    type: "Conversion",
  },
  {
    date: "2025-06-26 18:22:33",
    source: "S",
    goal: "Adult dating 1",
    clickId: "...tuv012wx",
    extClickId: "-",
    subsource: "no_subsource",
    device: "desktop",
    country: "Japan",
    countryCode: "JP",
    amount: "$11.50",
    type: "Conversion",
  },
  {
    date: "2025-06-26 16:09:49",
    source: "S",
    goal: "Adult dating 1",
    clickId: "...4b7c3618",
    extClickId: "-",
    subsource: "no_subsource",
    device: "mobile",
    country: "Bulgaria",
    countryCode: "BG",
    amount: "$0.24",
    type: "Conversion",
  },
  {
    date: "2025-06-26 13:56:25",
    source: "S",
    goal: "Adult dating 2",
    clickId: "...wxy345za",
    extClickId: "-",
    subsource: "no_subsource",
    device: "mobile",
    country: "South Korea",
    countryCode: "KR",
    amount: "$10.20",
    type: "Conversion",
  },
  {
    date: "2025-06-26 10:43:11",
    source: "S",
    goal: "Adult dating 1",
    clickId: "...zab678cd",
    extClickId: "-",
    subsource: "no_subsource",
    device: "tablet",
    country: "Singapore",
    countryCode: "SG",
    amount: "$13.40",
    type: "Conversion",
  },
  {
    date: "2025-06-25 22:19:57",
    source: "S",
    goal: "Adult dating 3",
    clickId: "...cde901ef",
    extClickId: "-",
    subsource: "no_subsource",
    device: "desktop",
    country: "Hong Kong",
    countryCode: "HK",
    amount: "$12.80",
    type: "Conversion",
  },
  {
    date: "2025-06-25 19:36:43",
    source: "S",
    goal: "Adult dating 1",
    clickId: "...efg234hi",
    extClickId: "-",
    subsource: "no_subsource",
    device: "mobile",
    country: "Taiwan",
    countryCode: "TW",
    amount: "$8.70",
    type: "Conversion",
  },
  {
    date: "2025-06-25 16:23:29",
    source: "S",
    goal: "Adult dating 2",
    clickId: "...hij567kl",
    extClickId: "-",
    subsource: "no_subsource",
    device: "desktop",
    country: "Malaysia",
    countryCode: "MY",
    amount: "$4.60",
    type: "Conversion",
  },
  {
    date: "2025-06-25 13:10:15",
    source: "S",
    goal: "Adult dating 1",
    clickId: "...klm890no",
    extClickId: "-",
    subsource: "no_subsource",
    device: "tablet",
    country: "Thailand",
    countryCode: "TH",
    amount: "$3.30",
    type: "Conversion",
  },
]

// Country flag mapping
const countryFlags = {
  AT: "🇦🇹",
  GB: "🇬🇧",
  ZW: "🇿🇼",
  HU: "🇭🇺",
  ZA: "🇿🇦",
  US: "🇺🇸",
  AU: "🇦🇺",
  BG: "🇧🇬",
  NZ: "🇳🇿",
  SI: "🇸🇮",
  CA: "🇨🇦",
  MU: "🇲🇺",
  DE: "🇩🇪",
  FR: "🇫🇷",
  IT: "🇮🇹",
  ES: "🇪🇸",
  NL: "🇳🇱",
  BE: "🇧🇪",
  SE: "🇸🇪",
  NO: "🇳🇴",
  DK: "🇩🇰",
  FI: "🇫🇮",
  PL: "🇵🇱",
  IE: "🇮🇪",
  PT: "🇵🇹",
  CH: "🇨🇭",
  CZ: "🇨🇿",
  SK: "🇸🇰",
  RO: "🇷🇴",
  HR: "🇭🇷",
  EE: "🇪🇪",
  LV: "🇱🇻",
  LT: "🇱🇹",
  GR: "🇬🇷",
  CY: "🇨🇾",
  MT: "🇲🇹",
  LU: "🇱🇺",
  MX: "🇲🇽",
  BR: "🇧🇷",
  AR: "🇦🇷",
  JP: "🇯🇵",
  KR: "🇰🇷",
  SG: "🇸🇬",
  HK: "🇭🇰",
  TW: "🇹🇼",
  MY: "🇲🇾",
  TH: "🇹🇭",
}

// Pagination and sorting state
let currentPage = 1
let pageSize = 10
let sortColumn = null
let sortDirection = "asc"
let filteredData = [...conversionsData]

// Function to sort data
function sortData(column, direction) {
  return [...filteredData].sort((a, b) => {
    let aVal, bVal

    switch (column) {
      case "date":
        aVal = new Date(a.date)
        bVal = new Date(b.date)
        break
      case "amount":
        aVal = Number.parseFloat(a.amount.replace("$", ""))
        bVal = Number.parseFloat(b.amount.replace("$", ""))
        break
      case "extClickId":
        aVal = a.extClickId
        bVal = b.extClickId
        break
      case "subsource":
        aVal = a.subsource
        bVal = b.subsource
        break
      default:
        return 0
    }

    if (aVal < bVal) return direction === "asc" ? -1 : 1
    if (aVal > bVal) return direction === "asc" ? 1 : -1
    return 0
  })
}

// Function to get paginated data
function getPaginatedData() {
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize

  let dataToShow = filteredData
  if (sortColumn) {
    dataToShow = sortData(sortColumn, sortDirection)
  }

  return dataToShow.slice(startIndex, endIndex)
}

// Function to populate the table
function populateTable() {
  const tableBody = document.getElementById("conversions-table")
  const paginatedData = getPaginatedData()

  tableBody.innerHTML = ""

  paginatedData.forEach((conversion) => {
    const row = document.createElement("tr")

    row.innerHTML = `
      <td>${conversion.date}</td>
      <td>
        <span class="source-tag">
          <i class="fas fa-star"></i>
          ${conversion.source} • ${conversion.goal}
        </span>
      </td>
      <td>-</td>
      <td><span class="click-id">${conversion.clickId}</span></td>
      <td>${conversion.extClickId}</td>
      <td>${conversion.subsource}</td>
      <td>
        <i class="fas fa-${conversion.device === "mobile" ? "mobile-alt" : conversion.device === "tablet" ? "tablet-alt" : "desktop"} device-icon"></i>
      </td>
      <td>
        <div class="country-flag">
          <span>${countryFlags[conversion.countryCode] || "🏳️"}</span>
          <span>${conversion.country}</span>
        </div>
      </td>
      <td><span class="amount">${conversion.amount}</span></td>
      <td><span class="conversion-badge">${conversion.type}</span></td>
      <td></td>
    `

    tableBody.appendChild(row)
  })

  updatePaginationInfo()
  updatePaginationControls()
}

// Function to update pagination info
function updatePaginationInfo() {
  const startIndex = (currentPage - 1) * pageSize + 1
  const endIndex = Math.min(currentPage * pageSize, filteredData.length)
  const total = filteredData.length

  document.getElementById("pagination-info").textContent = `Showing ${startIndex}-${endIndex} of ${total} entries`
}

// Function to update pagination controls
function updatePaginationControls() {
  const totalPages = Math.ceil(filteredData.length / pageSize)
  const paginationNumbers = document.getElementById("pagination-numbers")
  const prevBtn = document.getElementById("prev-btn")
  const nextBtn = document.getElementById("next-btn")

  // Update prev/next buttons
  prevBtn.disabled = currentPage === 1
  nextBtn.disabled = currentPage === totalPages

  // Generate page numbers
  paginationNumbers.innerHTML = ""

  const maxVisiblePages = 5
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1)
  }

  for (let i = startPage; i <= endPage; i++) {
    const pageBtn = document.createElement("button")
    pageBtn.className = `page-number ${i === currentPage ? "active" : ""}`
    pageBtn.textContent = i
    pageBtn.addEventListener("click", () => {
      currentPage = i
      populateTable()
    })
    paginationNumbers.appendChild(pageBtn)
  }
}

// Function to handle sorting
function handleSort(column) {
  if (sortColumn === column) {
    sortDirection = sortDirection === "asc" ? "desc" : "asc"
  } else {
    sortColumn = column
    sortDirection = "asc"
  }

  // Update sort indicators
  document.querySelectorAll(".sortable").forEach((th) => {
    th.classList.remove("sort-asc", "sort-desc")
  })

  const currentTh = document.querySelector(`[data-sort="${column}"]`)
  if (currentTh) {
    currentTh.classList.add(sortDirection === "asc" ? "sort-asc" : "sort-desc")
  }

  currentPage = 1 // Reset to first page when sorting
  populateTable()
}

// Function to handle search by date
function handleSearch() {
  const startDate = document.getElementById("start-date").value
  const endDate = document.getElementById("end-date").value

  if (!startDate || !endDate) {
    alert("Please select both start and end dates")
    return
  }

  const start = new Date(startDate)
  const end = new Date(endDate)
  end.setHours(23, 59, 59, 999) // Include the entire end date

  filteredData = conversionsData.filter((conversion) => {
    const conversionDate = new Date(conversion.date)
    return conversionDate >= start && conversionDate <= end
  })

  currentPage = 1
  populateTable()

  console.log(`Filtered ${filteredData.length} records between ${startDate} and ${endDate}`)
}

// Function to handle refresh
function handleRefresh() {
  const refreshBtn = document.querySelector(".refresh-btn i")
  refreshBtn.style.animation = "spin 1s linear"

  setTimeout(() => {
    refreshBtn.style.animation = ""
    // Reset filters and reload all data
    filteredData = [...conversionsData]
    currentPage = 1
    sortColumn = null
    sortDirection = "asc"

    // Reset sort indicators
    document.querySelectorAll(".sortable").forEach((th) => {
      th.classList.remove("sort-asc", "sort-desc")
    })

    populateTable()
    console.log("Data refreshed")
  }, 1000)
}

// Function to handle date range changes
function handleDateChange() {
  const startDate = document.getElementById("start-date").value
  const endDate = document.getElementById("end-date").value
  console.log("Date range changed:", startDate, "to", endDate)
}

// Add CSS animation for refresh button
const style = document.createElement("style")
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`
document.head.appendChild(style)

// Profile dropdown functionality
function initProfileDropdown() {
  const userProfile = document.getElementById("user-profile")
  const profileDropdown = document.getElementById("profile-dropdown")
  const logoutBtn = document.getElementById("logout-btn")
  let isDropdownOpen = false

  userProfile.addEventListener("click", (e) => {
    e.stopPropagation()
    toggleDropdown()
  })

  document.addEventListener("click", (e) => {
    if (!userProfile.contains(e.target) && isDropdownOpen) {
      closeDropdown()
    }
  })

  logoutBtn.addEventListener("click", handleLogout)

  function toggleDropdown() {
    if (isDropdownOpen) {
      closeDropdown()
    } else {
      openDropdown()
    }
  }

  function openDropdown() {
    profileDropdown.classList.add("show")
    userProfile.classList.add("active")
    isDropdownOpen = true

    const overlay = document.createElement("div")
    overlay.className = "dropdown-overlay"
    overlay.addEventListener("click", closeDropdown)
    document.body.appendChild(overlay)
  }

  function closeDropdown() {
    profileDropdown.classList.remove("show")
    userProfile.classList.remove("active")
    isDropdownOpen = false

    const overlay = document.querySelector(".dropdown-overlay")
    if (overlay) {
      overlay.remove()
    }
  }

  function handleLogout() {
    const confirmLogout = confirm("Are you sure you want to logout?")

    if (confirmLogout) {
      logoutBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Logging out...</span>'

      setTimeout(() => {
        alert("Logged out successfully!")
        logoutBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i><span>Logout</span>'
        closeDropdown()
      }, 1500)
    }
  }
}

// Add dropdown item click handlers
function initDropdownItems() {
  const dropdownItems = document.querySelectorAll(".dropdown-item:not(.logout-item)")

  dropdownItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      const text = item.querySelector("span").textContent
      console.log(`Clicked on: ${text}`)

      switch (text) {
        case "Profile Settings":
          alert("Navigate to Profile Settings")
          break
        case "Account Settings":
          alert("Navigate to Account Settings")
          break
        case "Notifications":
          alert("Navigate to Notifications")
          break
      }
    })
  })
}

// Initialize sorting functionality
function initSorting() {
  // Add data-sort attributes and click handlers to sortable columns
  const sortableColumns = [
    { selector: "th:first-child", column: "date" },
    { selector: "th:nth-child(5)", column: "extClickId" },
    { selector: "th:nth-child(6)", column: "subsource" },
    { selector: "th:nth-child(9)", column: "amount" },
  ]

  sortableColumns.forEach(({ selector, column }) => {
    const th = document.querySelector(selector)
    if (th) {
      th.classList.add("sortable")
      th.setAttribute("data-sort", column)
      th.addEventListener("click", () => handleSort(column))
    }
  })
}

// Initialize pagination controls
function initPagination() {
  const prevBtn = document.getElementById("prev-btn")
  const nextBtn = document.getElementById("next-btn")
  const pageSizeSelect = document.getElementById("page-size")

  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--
      populateTable()
    }
  })

  nextBtn.addEventListener("click", () => {
    const totalPages = Math.ceil(filteredData.length / pageSize)
    if (currentPage < totalPages) {
      currentPage++
      populateTable()
    }
  })

  pageSizeSelect.addEventListener("change", (e) => {
    pageSize = Number.parseInt(e.target.value)
    currentPage = 1
    populateTable()
  })
}



// Add initSidebar to the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", () => {
  populateTable()
  initProfileDropdown()
  initDropdownItems()
  initSorting()
  initPagination()

  // Add event listeners
  document.querySelector(".refresh-btn").addEventListener("click", handleRefresh)
  document.querySelector(".search-btn").addEventListener("click", handleSearch)
  document.getElementById("start-date").addEventListener("change", handleDateChange)
  document.getElementById("end-date").addEventListener("change", handleDateChange)

  // Remove the old sidebar collapse functionality
  document.querySelector(".collapse-btn").removeEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar")
    const mainContent = document.querySelector(".main-content")

    if (sidebar.style.transform === "translateX(-100%)") {
      sidebar.style.transform = "translateX(0)"
      mainContent.style.marginLeft = "240px"
    } else {
      sidebar.style.transform = "translateX(-100%)"
      mainContent.style.marginLeft = "0"
    }
  })
})
