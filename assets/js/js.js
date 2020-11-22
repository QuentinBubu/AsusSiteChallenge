const headerHeight = document.querySelector('header').offsetHeight + "px";
const bodyHeight = window.innerHeight + "px";
const root = document.documentElement;

root.style.setProperty("--bodyHeight", bodyHeight);
root.style.setProperty("--headerHeight", headerHeight);