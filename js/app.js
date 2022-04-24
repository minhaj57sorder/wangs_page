// faq expand collapse start
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
// faq expand collapse end
// menu expand collapse start

const menu_expand = document.getElementById("menu-expand");
const header_links = document.getElementById("header-links");
const collaps_menu = document.getElementById("collaps-menu");

menu_expand.onclick = () => {
    header_links.classList.remove("header-collapsed-mobile")
}
collaps_menu.onclick = () => {
    header_links.classList.add("header-collapsed-mobile")
}
// menu expand collapse end

// wangs start
gsap.to("#shine", { x: 800, duration: 2, repeat: -1, repeatDelay: 3 })

gsap.set("#bardial>*", { opacity: 0 })
<<<<<<< HEAD
gsap.to("#bardial>*", { opacity: 1, duration: 0.01, repeat: -1, repeatDelay: 0.5, stagger: { each: 0.05, from: "end" } })
=======
gsap.to("#bardial>*", { opacity: 1, duration: 0.01, repeat: 1, repeatDelay: 0.5, yoyo: true, stagger: { each: 0.05, from: "end" } })
>>>>>>> 345f1a81c0dcc01a5cfe839158b28b6822ccd5fc

const bubble = document.querySelector("#bubble")
gsap.set(bubble, { transformOrigin: "center" })

bubble.onmouseover = () => {
    gsap.to(bubble, { scale: 2, duration: 4 })
}
bubble.onmouseleave = () => {
    gsap.to(bubble, { scale: 1, duration: 4 })
}

// wangs end

// testicles start
const testicles = document.getElementById("testicles");

testicles.onclick = () => {
    gsap.timeline()
        .to("#testicle1, #testicle2", { scaleY: 0 })
        .fromTo("#testicles_layer", { x: -10 }, { x: 10, duration: 0.2, repeat: 50, yoyo: true }, "testicle")
        .to("#testicles_layer", { y: -20, duration: 0.1, repeat: 100, yoyo: true }, "testicle")
        .to("#testicles_layer", { x: 0, y: 0 })
}
// testicles start
