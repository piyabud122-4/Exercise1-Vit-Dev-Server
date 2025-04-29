document.addEventListener("DOMContentLoaded", () => {
    let dark = localStorage.getItem('dark-mode')
    const themeSwitch = document.getElementById('theme-switch')

    const enableDarkMode = () => {
        document.body.classList.add('dark-mode')
        localStorage.setItem('dark-mode', 'active')
    }

    const disableDarkMode = () => {
        document.body.classList.remove('dark-mode')
        localStorage.setItem('dark-mode', null)
    }

    if(dark === "active") enableDarkMode()

    themeSwitch.addEventListener("click", () => {
        dark = localStorage.getItem('dark-mode')
        dark !== "active" ? enableDarkMode() : disableDarkMode()
    })
})
