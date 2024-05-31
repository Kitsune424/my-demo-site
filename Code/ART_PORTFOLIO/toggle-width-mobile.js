document.addEventListener('DOMContentLoaded', () => {
    const wideButton = document.getElementById('wide-button');
    const sidebarMobileMenu = document.querySelector('.sidebar-mobile-menu');
    const linkButtons = document.querySelector('.link-buttons');
    let clickButton = false;

    wideButton.addEventListener('click', () => {
        if (!clickButton){
            console.log(clickButton)
            clickButton = !clickButton;
            sidebarMobileMenu.style.display = 'flex';
            linkButtons.style.display = 'flex'; 
        }
        else{
            console.log(clickButton)
            clickButton = !clickButton;
            sidebarMobileMenu.style.display = 'none';
            linkButtons.style.display = 'none'; 
        }
    });
});