document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const miniprofile = document.querySelector('.mini-profile');
    const miniinfo = document.querySelector('.mini-info');
    const toggleButton = document.getElementById('toggle-width-btn');
    let clickButton = false;
    
    toggleButton.addEventListener('click', () => {
        if (!clickButton) {
            clickButton = !clickButton;
            sidebar.style.width = '25%';
            miniprofile.style.flexDirection = 'row';
            miniinfo.style.display = 'flex';
            toggleButton.style.rotate = '0deg';
        } else {
            clickButton = !clickButton;
            sidebar.style.width = '7%';
            miniprofile.style.flexDirection = 'column';
            toggleButton.style.rotate = '180deg';
            miniinfo.style.display = 'none';
        }
    });
});