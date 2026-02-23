function toggleDetails(id, button) {
    const content = document.getElementById(id);
    const isActive = content.classList.contains('show');
    if (isActive) {
        content.classList.remove('show');
        button.classList.remove('active');
    } else {
        content.classList.add('show');
        button.classList.add('active');
    }
}
