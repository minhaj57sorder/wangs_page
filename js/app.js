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

// parallax start
// window.addEventListener("scroll", function () {
//     let speedlimiter = 150;
//     if (window.screen.width <= 678) speedlimiter = 50;
//     let offset = this.window.pageYOffset;
//     gsap.to("#paralax", { backgroundPositionY: -1 * offset / speedlimiter })
// })

gsap.to("#paralax", {
    y: -2000,
    ease: "none",
    scrollTrigger: {
        trigger: "#paralax",
        start: "top bottom", // the default values
        end: "bottom top",
        scrub: true
    },
});

// parallax end

// wangs start
gsap.set("#bardial>*", { opacity: 0 })
gsap.set("#bubble", { transformOrigin: "center" })
let timeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".wangs-section",
        start: "start start",
        // end: "2000px 500px",
        scrub: true,
        pin: true,
        defaults: { ease: "none" }
    },
})

timeline.to("#shine", { x: 800 }, "shine")
    .to("#bardial>*", { opacity: 1, duration: 0.01, stagger: { each: 0.015, from: "end" } }, "shine")
    .to("#bubble", { scale: 2, duration: .8 }, "shine");
// wangs end

// testicles start
const testicles = document.getElementById("testicles");

testicles.onclick = () => {
    gsap.timeline()
        .to("#testicle1, #testicle2", { scaleY: 0 })
        .fromTo("#testicles_layer", { x: -10 }, { x: 10, duration: 0.1, repeat: 100, yoyo: true }, "testicle")
        .to("#testicles_layer", { y: 20, duration: 0.05, repeat: 200, yoyo: true }, "testicle")
        .to("#testicles_layer", { x: 0, y: 0 })
}
// testicles start