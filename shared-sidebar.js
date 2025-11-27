// Shared Sidebar JavaScript Functions
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('expanded');
}

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    sidebar.classList.remove('collapsed');
    mainContent.classList.remove('expanded');
}

// Set active navigation item based on current page
function setActiveNavItem() {
    const currentPage = getCurrentPageIdentifier();
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.classList.remove('active');
        const pageData = item.getAttribute('data-page');
        if (pageData === currentPage) {
            item.classList.add('active');
        }
    });
}

// Get current page identifier from filename
function getCurrentPageIdentifier() {
    const path = window.location.pathname;
    const filename = path.split('/').pop().toLowerCase();
    
    if (filename.includes('teacher dashboard') || filename.includes('dashboard')) {
        return 'dashboard';
    } else if (filename.includes('student')) {
        return 'student';
    } else if (filename.includes('ai mentor') || filename.includes('ai-mentor')) {
        return 'ai-mentor';
    } else if (filename.includes('exam') || filename.includes('test')) {
        return 'exam';
    } else if (filename.includes('research') || filename.includes('analyse')) {
        return 'research';
    } else if (filename.includes('help') || filename.includes('study')) {
        return 'study';
    } else if (filename.includes('notification')) {
        return 'notification';
    } else if (filename.includes('project')) {
        return 'project';
    } else if (filename.includes('analytics')) {
        return 'analytics';
    }
    return 'dashboard'; // default
}

// Initialize sidebar when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavItem();
});