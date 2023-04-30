// Add JS File
var loadJS = [
"script1.js",
"script2.js"
];for(var i=0;i<loadJS.length;i++){var loadFastJS=document.createElement("script");loadFastJS.src=loadJS[i];loadFastJS.async=true;document.body.appendChild(loadFastJS);};

// data-darkmode-target="SelectorName"
const DataDarkBtns = document.querySelectorAll('[data-darkmode-target]');DataDarkBtns.forEach(DataDarkBtn => {DataDarkBtn.innerHTML = "<i class='fa-solid fa-moon'/>";DataDarkBtn.addEventListener('click',()=>{const DataDarkTarget=document.querySelector(DataDarkBtn.dataset.darkmodeTarget);DataDarkTarget.classList.toggle('dark');DataDarkBtn.classList.toggle('active');if(DataDarkTarget.classList.contains('dark')){DataDarkBtn.innerHTML = "<i class='fa-solid fa-sun'/>";}else{DataDarkBtn.innerHTML="<i class='fa-solid fa-moon'/>";};const DataDarkcurrentState=DataDarkTarget.classList.contains('dark')?'dark' :'light';localStorage.setItem(DataDarkBtn.dataset.darkmodeTarget, DataDarkcurrentState);});const DataDarkTarget=document.querySelector(DataDarkBtn.dataset.darkmodeTarget);const DataDarksavedState=localStorage.getItem(DataDarkBtn.dataset.darkmodeTarget);if(DataDarksavedState==='dark'){DataDarkTarget.classList.add('dark');DataDarkBtn.classList.add('active');DataDarkBtn.innerHTML = "<i class='fa-solid fa-sun'/>";};});
// data-navbar-target="SelectorName"
const DataMenuBtn = document.querySelector('[data-navbar-target]');DataMenuBtn.innerHTML = "<i class='fa-solid fa-bars'/>";DataMenuBtn.addEventListener('click', function() {const DataMenuTarget = DataMenuBtn.dataset.navbarTarget;const DataNavbarTarget = document.querySelector(DataMenuTarget);const DataNavbarTargetParent = DataNavbarTarget.parentElement;DataNavbarTargetParent.classList.toggle('active');DataMenuBtn.classList.toggle('active');if(DataNavbarTargetParent.classList.contains('active')){DataNavbarTarget.style.maxHeight = DataNavbarTarget.scrollHeight + 'px';DataMenuBtn.innerHTML = "<i class='fa-solid fa-xmark'/>";}else{DataNavbarTarget.style.maxHeight = null;DataMenuBtn.innerHTML = "<i class='fa-solid fa-bars'/>";}; window.onscroll=()=>{DataMenuBtn.classList.remove('active');DataNavbarTarget.style.maxHeight = null;DataNavbarTargetParent.classList.remove('active');DataMenuBtn.innerHTML = "<i class='fa-solid fa-bars'/>";};});
// data-according-target="#IDName"
const accordionButtons = document.querySelectorAll("[data-according-target]");let activeButton = null;function toggleAccordion(accordingParents) {const accordionTarget = document.querySelector(accordingParents.dataset.accordingTarget);if (activeButton && activeButton !== accordingParents) {const activeTarget = document.querySelector(activeButton.dataset.accordingTarget);activeTarget.style.maxHeight = null;activeButton.parentElement.classList.remove("active");}accordingParents.parentElement.classList.toggle("active");activeButton = accordingParents;if (accordionTarget.style.maxHeight) {accordionTarget.style.maxHeight = null;} else {accordionTarget.style.maxHeight = `${accordionTarget.scrollHeight}px`;}}accordionButtons.forEach(accButton => {accButton.addEventListener("click", () => {if (accButton.classList.contains("active")) {accButton.classList.remove("active");document.querySelector(accButton.dataset.accordingTarget).style.maxHeight = null;} else {toggleAccordion(accButton);}});});
// ShcreenShot Slider
const slide = document.querySelector('.screenshots');const slideItem = document.querySelector('.screenshots div');let isDown = false;let startX;let scrollLeft;slide.addEventListener('mousedown', (e) => {isDown = true;startX = e.pageX - slide.offsetLeft;scrollLeft = slide.scrollLeft;});slide.addEventListener('mouseleave', () => {isDown = false;});slide.addEventListener('mouseup', () => {isDown = false;});slide.addEventListener('mousemove', (e) => {if (!isDown) return;e.preventDefault();const x = e.pageX - slide.offsetLeft;const walk = (x - startX) * 3;slide.scrollLeft = scrollLeft - walk;});function nextSlide() {slide.scrollLeft += slideItem.offsetWidth;}function prevSlide() {slide.scrollLeft -= slideItem.offsetWidth;};







