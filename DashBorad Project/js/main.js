var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
    if (sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true
    }
}

function closeSidebar() {
    if (sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false
    }
}
// this wont have to deal with graphs and charts 