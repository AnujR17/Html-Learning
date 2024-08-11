document.addEventListener('DOMContentLoaded', () => {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sideNav = document.getElementById('sideNav');
    const mainContent = document.querySelector('main');

    sidebarToggle.addEventListener('click', () => {
        sideNav.classList.toggle('open');
        mainContent.classList.toggle('sidebar-open');
    });
});
