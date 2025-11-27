function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const floatingToggle = document.getElementById('floatingToggle');

    if (window.innerWidth <= 768) {
        sidebar.classList.toggle('open');
    } else {
        sidebar.classList.toggle('sidebar-collapsed');
        mainContent.classList.toggle('sidebar-collapsed');
        if (floatingToggle) {
            floatingToggle.classList.toggle('show');
        }
    }
}

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    }
}

function openExportModal() {
    const modal = document.getElementById('exportModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeExportModal() {
    const modal = document.getElementById('exportModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function downloadReport() {
    alert('Report download functionality would be implemented here');
    closeExportModal();
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('exportModal');
    if (modal && event.target === modal) {
        closeExportModal();
    }
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    
    if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
        if (!sidebar.contains(event.target) && !mobileBtn.contains(event.target)) {
            closeSidebar();
        }
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const floatingToggle = document.getElementById('floatingToggle');
    
    if (window.innerWidth > 768) {
        sidebar.classList.remove('open');
        if (sidebar.classList.contains('sidebar-collapsed')) {
            mainContent.classList.add('sidebar-collapsed');
            if (floatingToggle) {
                floatingToggle.classList.add('show');
            }
        } else {
            mainContent.classList.remove('sidebar-collapsed');
            if (floatingToggle) {
                floatingToggle.classList.remove('show');
            }
        }
    } else {
        sidebar.classList.remove('sidebar-collapsed');
        mainContent.classList.remove('sidebar-collapsed');
        if (floatingToggle) {
            floatingToggle.classList.remove('show');
        }
    }
});