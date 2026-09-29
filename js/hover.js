const hoverBlock = document.querySelector('.hover-block');
const text = hoverBlock.querySelector('p');

document.querySelectorAll('[data-hover]').forEach(e => {
    e.addEventListener('mouseenter', () => {
        text.innerHTML = e.dataset.hover;
        hoverBlock.classList.add('visible');
    });

    e.addEventListener('mousemove', ev => {
        const x = Math.min(ev.clientX - 12, window.innerWidth - hoverBlock.offsetWidth - 4);
        const y = Math.min(ev.clientY - hoverBlock.offsetHeight, window.innerHeight - hoverBlock.offsetHeight - 4);
        hoverBlock.style.left = x + 'px';
        hoverBlock.style.top = y + 'px';
    });

    e.addEventListener('mouseleave', () => {
        hoverBlock.classList.remove('visible');
    });
});