// Shared Sidebar JavaScript Functions
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('open');
}