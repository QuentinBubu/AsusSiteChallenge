const body = document.querySelector('body');
const video = document.querySelector('#video>video');

window.addEventListener('load', () => {
    body.style.overflow = 'hidden';
});

video.addEventListener('ended', function () {
    setTimeout(() => { 
        body.style.overflow = 'auto';
        document.querySelector('#video').style.display = 'none';
     }, 1000);
}, false);