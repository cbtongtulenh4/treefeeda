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

function initSidebar() {
  const collapseBtn = document.querySelector(".collapse-btn")
  const sidebar = document.querySelector(".sidebar")
  const mainContent = document.querySelector(".main-content")
  const sidebarToggle = document.getElementById("sidebar-toggle")

  collapseBtn.addEventListener("click", () => {
    sidebar.classList.add("collapsed")
    mainContent.classList.add("expanded")
    sidebarToggle.classList.add("visible")
  })

  sidebarToggle.addEventListener("click", () => {
    sidebar.classList.remove("collapsed")
    mainContent.classList.remove("expanded")
    sidebarToggle.classList.remove("visible")
  })
}


function initNavItems(){
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(item => {
    item.addEventListener('click', function(){
      navItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initProfileDropdown()
  initDropdownItems()
  initSidebar()
  initNavItems()
})
