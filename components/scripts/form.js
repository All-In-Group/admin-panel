const btns = document.querySelectorAll(".btns");
const forms = document.querySelectorAll(".forms");
const prog = document.querySelector(".progress-bar");
btns.forEach(btn => {
    btn.addEventListener("click", e => {
        btns.forEach(e => e.style.backgroundColor = "#dad3d3");
        forms.forEach(e => e.style.display = "none");
        btn.style.backgroundColor = "#337ab7";
        if (btn.textContent == "Account") {
            forms[0].style.display = "block";
            prog.style.width = "33%";
        }
        else if (btn.textContent == "Profile") {
            forms[1].style.display = "block";
            prog.style.width = "66%";
        }
        else if (btn.textContent == "Finish") {
            forms[2].style.display = "block";
            prog.style.width = "100%";
        }
    });
});
document.querySelectorAll(".btn_pn").forEach(btn => {
    btn.addEventListener("click", () => {
        for (let i = 0; i < btns.length; i++) {
            if (window.getComputedStyle(btns[i], null).getPropertyValue("background-color") == "rgb(51, 122, 183)") {
                if (btn.textContent == "Next") {
                    if (btns[i].nextSibling.nextSibling) {
                        btns[i].nextSibling.nextSibling.click();
                        break;
                    }
                }
                else {
                    if (btns[i].previousSibling.previousSibling) {
                        btns[i].previousSibling.previousSibling.click();
                        break;
                    }
                }
            }
        }
    });
});