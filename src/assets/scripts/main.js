const link_groups = document.querySelectorAll('.link-group');

link_groups.forEach(link_group => {
    link_group.addEventListener('click', (ev) => {
        const element = ev.currentTarget;
        const icon = element.querySelector('img');
        const src = icon.getAttribute('src');

        if (src === icon.getAttribute('src-opened'))
            icon.src = icon.getAttribute('src-closed')
        else
            icon.src = icon.getAttribute('src-opened')

        element.classList.toggle('wrapper--active');
    });
});

document.getElementById('nav-opener').addEventListener('click', toggleMenu);
document.getElementById('nav-closer').addEventListener('click', toggleMenu);

function toggleMenu() {
    document.getElementById('modal-nav').classList.toggle('hidden');
}