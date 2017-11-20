const userMenu = document.getElementById('user-menu');
userMenu.open = false;

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