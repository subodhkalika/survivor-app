window.onload = function() {
    const addClientMenu = document.getElementById('add_client_menu');
    const viewClientMenu = document.getElementById('view_client_menu');
    if (addClientMenu) {
        addClientMenu.addEventListener('click', () => {
            location.href='add.html';
        });
    }
    if (viewClientMenu) {
        viewClientMenu.addEventListener('click', () => {
            location.href='view.html';
        });
    }
} 