let darkmode = localStorage.getItem('darkmode')
const themeSwitch = doccument.getElementById('dm-function')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', 'null')
}

themeSwitch.addEventListener("click", () => {
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

