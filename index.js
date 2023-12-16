const mobileNav = document.querySelector('.mobileNav');
const dropdownMenu = document.getElementById('dropdownMenu');

mobileNav.addEventListener('click', () => {
    const children = [...dropdownMenu.children];
    children.forEach(child => {
        child.classList.toggle('show');
    });
    console.log(mobileNav.innerHTML);
});

