const userMenu = document.getElementById('user-menu');
if (userMenu) {
    userMenu.open = false;
}

function toggleUserMenu() {

    if (userMenu) {
        userMenu.open = !userMenu.open;

        if (userMenu.open) {
            userMenu.className = 'user-menu';
        }
        else {
            userMenu.className = 'hidden';
        }
    }

}

window.onclick = (event) => {
    if (!event.target.matches('.dropBtn') && userMenu.open) {

        toggleUserMenu();
        console.log('test');
    }
}