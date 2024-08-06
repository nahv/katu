document.addEventListener('DOMContentLoaded', function () {
    // Delay other animations
    setTimeout(() => {
        document.getElementById('logo').style.opacity = 1;
    }, 3000);

    setTimeout(() => {
    document.getElementById('presentation').style.opacity = 1;
    }, 4000);

    setTimeout(() => {
        document.getElementById('paragraph1').style.opacity = 1;
    }, 4200);

    setTimeout(() => {
        document.getElementById('paragraph2').style.opacity = 1;
    }, 7000);

    setTimeout(() => {
        document.getElementById('catalog').style.opacity = 1;
    }, 8500);

    setTimeout(() => {
        document.querySelectorAll('.small-icon').forEach(icon => {
            icon.classList.add('scale-up-rotate');
        });
    }, 10000);
    
    setTimeout(() => {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.add('animated');
        });
    }, 12700);

    setTimeout(() => {
        document.querySelector('.top-divider').classList.add('moveStripes');
        document.querySelector('.bottom-divider').classList.add('moveStripes');
    }, 12700);

    // Expand/Collapse packs
    document.querySelectorAll('.pack').forEach(pack => {
        pack.addEventListener('click', () => {
            pack.classList.toggle('show');
        });
    });
});
