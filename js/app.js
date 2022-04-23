const faq_heading = document.querySelectorAll(".faq-heading");


faq_heading.forEach(e => {

    e.onclick = () => {
        e.parentNode.classList.toggle("collapsed")
        var content = e.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.marginTop = "0px";
        } else {
            content.style.marginTop = "24px";
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
})

const menu_expand = document.getElementById("menu-expand");
const header_links = document.getElementById("header-links");
const collaps_menu = document.getElementById("collaps-menu");

menu_expand.onclick = () => {
    header_links.classList.remove("header-collapsed-mobile")
}
collaps_menu.onclick = () => {
    header_links.classList.add("header-collapsed-mobile")
}

gsap.to("#shine", { x: 800, repeat: -1, repeatDelay: 3 })

gsap.set("#bardial>*", { opacity: 0 })
gsap.to("#bardial>*", { opacity: 1, duration: 0.05, repeat: -1, yoyo: true, stagger: { each: 0.02, from: "end" } })

gsap.timeline({ repeat: -1, repeatDelay: 2 })
    .to("#testicle1", { x: 20, duration: 0.1, repeat: 10, yoyo: true }, "testicle")
    .to("#testicle1", { y: 20, duration: 0.05, repeat: 20, yoyo: true }, "testicle")
    .to("#testicle2", { x: -20, duration: 0.1, repeat: 10, yoyo: true }, "testicle")
    .to("#testicle2", { y: 20, duration: 0.05, repeat: 20, yoyo: true }, "testicle")

const bubble = document.querySelector("#bubble")
gsap.set(bubble, { transformOrigin: "center" })

bubble.onmouseover = () => {
    gsap.to(bubble, { scale: 2, duration: 4 })
}
bubble.onmouseleave = () => {
    gsap.to(bubble, { scale: 1, duration: 4 })
}


const parallax = document.getElementById("paralax");

window.addEventListener("scroll", function () {
    let speedlimiter = 100;
    if (window.screen.width <= 678) speedlimiter = 20;
    let offset = this.window.pageYOffset;
    gsap.to(parallax, { duration: 0.3, backgroundPositionY: offset / speedlimiter })
})
console.log()