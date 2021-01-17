const leftMenuIcons = document.querySelectorAll('.left_menu_selector_item');
const menu_close_icon = document.querySelector("#menu_close_icon");
const menuOpen = document.querySelector('.menu_open');
let activeLeftMenu = document.querySelectorAll('.menu');
let leftMenuDrops = document.querySelectorAll('.drop_active');

// opening the menus

leftMenuIcons.forEach((element => {
    element.addEventListener('click', () => {
        if (!element.classList.contains("active")) {
            leftMenuIcons.forEach(e => e.classList.remove("active"));
            element.classList.add("active");
            menuOpen.classList.add('show');
        } else {
            element.classList.remove("active");
            menuOpen.classList.remove('show');
        }

        activeLeftMenu.forEach(e => e.classList.remove("show"));
        let activeElement = `${element.id}_menu`;
        document.querySelector(`#${activeElement}`).classList.add('show');

    });
}));

// menu close button

menu_close_icon.addEventListener("click", () => {
    if (!menuOpen.classList.contains("show")) {
        menuOpen.classList.add('show');
    } else {
        menuOpen.classList.remove('show');
    }
});

// Left Menu DropDowns

leftMenuDrops.forEach(dropElement => {
    dropElement.addEventListener('click', (e) => {
        let dropItem = dropElement.querySelector(".drop");
        let dropItemIcon = dropElement.querySelector(".fas");
        if (!dropItem.classList.contains("show")) {
            dropItem.classList.add('show');
            dropItemIcon.classList.replace("fa-caret-down", "fa-caret-up");

        } else {
            dropItem.classList.remove('show');
            dropItemIcon.classList.replace("fa-caret-up", "fa-caret-down");
        }
    });
});


//fullscreen

function toggleFullScreen() {
    if (window.innerHeight == screen.height) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
    if (!document.mozFullScreen && !document.webkitFullScreen) {
        if (document.body.mozRequestFullScreen) {
            document.body.mozRequestFullScreen();
        } else {
            document.body.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    }
}

document.querySelector("#fullscreen").addEventListener("click", e => {
    if (window.innerHeight == screen.height) {
        e.target.src = "Images/fs_open.svg";
    } else {
        e.target.src = "Images/fs_close.svg";
    }
    toggleFullScreen();
}, false);

// language

document.querySelector("#language").addEventListener("click", e => {
    document.querySelector("#language_list").classList.toggle("show");
    document.querySelector("#language_list").style.top = `${e.target.offsetTop + e.target.width}px`;
    document.querySelector("#language_list").style.left = `${e.target.offsetLeft - e.target.height}px`;
}, false);

document.querySelectorAll(".language_item").forEach(item => {
    item.addEventListener("click", e => {
        if (!(e.target.tagName == "LI")) {
            let language_src = e.target.parentElement.childNodes[0].src;
            let language_name = e.target.parentElement.childNodes[0].alt;
            e.target.parentElement.childNodes[0].src = document.querySelector("#language").src;
            e.target.parentElement.childNodes[0].alt = document.querySelector("#language").alt;
            document.querySelector("#language").src = language_src;
            e.target.parentElement.childNodes[2].textContent = document.querySelector("#language").alt;
            document.querySelector("#language").alt = language_name;
        }
    });
});

//user head

document.querySelector("#user_demo").addEventListener("click", () => {

    let user_demo = document.querySelector("#user_demo");
    let user_demo_list = document.querySelector("#user_demo_list");

    user_demo_list.classList.toggle("show");
    user_demo_list.style.top = `${user_demo.offsetTop + user_demo.offsetWidth / 2}px`;
    user_demo_list.style.left = `${user_demo.offsetLeft - user_demo.offsetHeight / 2}px`;
    if (user_demo_list.classList.contains("show")) {
        user_demo.querySelector(".fas").classList.replace("fa-caret-down", "fa-caret-up");
    } else {
        user_demo.querySelector(".fas").classList.replace("fa-caret-up", "fa-caret-down");
    }
}, false);

//user edit

document.querySelector("#edit_head").parentElement.addEventListener("click", () => {
    document.querySelector("#user_edit_form").style.display = "none";
    document.querySelector("#main_content").style.display = "flex";
    document.querySelector("#user_edit_box").style.display = "block";
    document.querySelector("#user_info_edit_btns").style.display = "flex";
    document.querySelector("#user_info_edit_btn").textContent = "Update";
    document.querySelector("#user_info_close_btn").textContent = "Close";
    document.querySelector(".grafics").style.display = "none";
});

document.querySelector("#user_info_close_btn").addEventListener("click", e => {
    if (e.target.textContent == "Close") {
        document.querySelector("#main_content").style.display = "none";
        document.querySelector("#user_edit_box").style.display = "none";
        document.querySelector("#user_info_edit_btns").style.display = "none";
    }
    else if (e.target.textContent == "Back") {
        document.querySelector("#user_edit_form").style.display = "none";
        document.querySelector("#user_edit_box").style.display = "block";
        document.querySelector("#user_info_close_btn").textContent = "Close";
        document.querySelector("#user_info_edit_btn").textContent = "Update";
    }
});

document.querySelector("#user_info_edit_btn").addEventListener("click", e => {
    if (e.target.textContent == "Update") {
        document.querySelector("#user_info_close_btn").textContent = "Back";
        document.querySelector("#user_info_edit_btn").textContent = "Save";
        document.querySelector("#user_edit_box").style.display = "none";
        document.querySelector("#user_edit_form").style.display = "flex";
    }
    else if (e.target.textContent == "Save") {
        let newName = document.forms.edit_info.name.value;
        let newSurname = document.forms.edit_info.surname.value;
        let newEmail = document.forms.edit_info.email.value;
        let newAddress = document.forms.edit_info.address.value;
        let newPhone = document.forms.edit_info.phone.value;

        document.querySelector("#user_edit_form").style.display = "none";
        document.querySelector("#user_edit_box").style.display = "block";

        document.querySelector("#user_info_close_btn").textContent = "Close";
        document.querySelector("#user_info_edit_btn").textContent = "Update";

        document.querySelector("#user_name").textContent = newName;
        document.querySelector("#user_surname").textContent = newSurname;
        document.querySelector("#user_email").textContent = newEmail;
        document.querySelector("#user_address").textContent = newAddress;
        document.querySelector("#user_phone").textContent = newPhone;
    }

});

// Dashboard 1 lib/grafic.js

document.querySelector("#dashboard_1").addEventListener("click", () => {
    document.querySelector("#user_edit_form").style.display = "none";
    document.querySelector("#user_edit_box").style.display = "none";
    document.querySelector("#user_info_edit_btns").style.display = "none";
    document.querySelector("#main_content").style.display = "flex";
    document.querySelector(".grafics").style.display = "flex";
});

createGraf("#grafic_1", grafic_2_data);
createGraf("#grafic_2", grafic_3_data);
createGraf("#grafic_3", grafic_4_data);
createGraf("#grafic_4", grafic_1_data);
createGraf("#grafic_5", grafic_5_data);
createGraf("#grafic_6", grafic_6_data);

// all 

window.onclick = function (event) {
    if (!event.target.matches("#language")) {
        document.querySelector("#language_list").classList.remove("show");
    }
    if (!(event.target.matches("#user_demo") || event.target.matches("#user_name_head") || event.target.matches("#user_image_head"))) {
        document.querySelector("#user_demo_list").classList.remove("show");
        document.querySelector("#user_demo").querySelector(".fas").classList.replace("fa-caret-up", "fa-caret-down");
    }
}
