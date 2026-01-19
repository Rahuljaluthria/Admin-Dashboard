const themeBtn = document.getElementById("themeBtn");
const themeBtn2 = document.getElementById("themeBtn2");

const body = document.body;

const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");

const pageTitle = document.getElementById("pageTitle");
const pageSubtitle = document.getElementById("pageSubtitle");

const pageData = {
  dashboard: {
    title: "Dashboard",
    subtitle: "Overview of your system"
  },
  users: {
    title: "Users",
    subtitle: "Manage and track users"
  },
  orders: {
    title: "Orders",
    subtitle: "Track customer orders"
  },
  analytics: {
    title: "Analytics",
    subtitle: "View traffic and performance"
  },
  settings: {
    title: "Settings",
    subtitle: "Customize your admin dashboard"
  }
};

// Theme switch function
function toggleTheme() {
  body.classList.toggle("dark-theme");

  const isDark = body.classList.contains("dark-theme");

  themeBtn.innerText = isDark ? "☀ Light Mode" : "🌙 Dark Mode";
  if (themeBtn2) themeBtn2.innerText = isDark ? "☀ Light Mode" : "🌙 Dark Mode";
}

//Sidebar navigation switch
function openPage(pageId) {
  // remove active menu
  navLinks.forEach(btn => btn.classList.remove("active"));

  // hide all pages
  pages.forEach(p => p.classList.remove("active-page"));

  // show selected page
  document.getElementById(pageId).classList.add("active-page");

  // active nav button
  document.querySelector(`[data-page="${pageId}"]`).classList.add("active");

  // update top title
  pageTitle.innerText = pageData[pageId].title;
  pageSubtitle.innerText = pageData[pageId].subtitle;
}

//events for nav buttons
navLinks.forEach(btn => {
  btn.addEventListener("click", () => {
    const pageId = btn.getAttribute("data-page");
    openPage(pageId);
  });
});

//theme events
themeBtn.addEventListener("click", toggleTheme);
if (themeBtn2) themeBtn2.addEventListener("click", toggleTheme);

//Default load
openPage("dashboard");
