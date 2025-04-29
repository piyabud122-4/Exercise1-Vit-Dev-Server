document.addEventListener("DOMContentLoaded", () => {
    let dark = localStorage.getItem('dark-mode')
    const themeSwitch = document.getElementById('theme-switch')

    const enableDarkmode = () => {
        document.body.classList.add('dark-mode')
        localStorage.setItem('dark-mode', 'active')
    }

    const disableDarkmode = () => {
        document.body.classList.remove('dark-mode')
        localStorage.setItem('dark-mode', null)
    }

    if(dark === "active") enableDarkmode()

    themeSwitch.addEventListener("click", () => {
        dark = localStorage.getItem('dark-mode')
        dark !== "active" ? enableDarkmode() : disableDarkmode()
    })
})
