const themeSelector = document.getElementById('modeselect');
const body = document.body
const img = document.getElementById('logo')

themeSelector.value = "light";
themeSelector.addEventListener('change', function(event) {
    console.log('Selected:', event.target.value);
    if (event.target.value === "dark") {
        body.classList.add('dark')
        img.src = 'images/byui-logo_white.png'
    }
    else {
        body.classList.remove('dark')
    }
});