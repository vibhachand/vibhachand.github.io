function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

// add smooth scrolling
const anchors = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('click', function(event) {
        event.preventDefault()
        const sectionID = this.getAttribute('href').slice(1)
        const section = document.getElementById(sectionID)

        section.scrollIntoView ({
            behavior: "smooth",
            block: "start"
        })
    })
}

