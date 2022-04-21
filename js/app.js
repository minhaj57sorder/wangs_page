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