const nav_item = document.querySelectorAll(".nav_item");
const log_in = document.querySelector("#submit_login");
const sign_up = document.querySelector("#submit_signup");
const pass_forgot = document.querySelector("#pass_forgot");
const reset_submit = document.querySelector("#submit_reset");
const back_btn = document.querySelector("#back_btn");

nav_item.forEach(btn => {
    btn.addEventListener("click", e => {
        nav_item.forEach(e => e.style.borderBottom = "none");
        btn.style.borderBottom = "3px solid rgb(168, 168, 242)";
        content(btn.textContent);
    });
});

let content = function (text) {
    if (text == "Log In") {
        document.querySelector("#form_block_signup").style.display = "none";
        document.querySelector("#form_block_login").style.display = "block";
    }
    else if (text == "Sign Up") {
        document.querySelector("#form_block_login").style.display = "none";
        document.querySelector("#form_block_signup").style.display = "block";
    }
};

pass_forgot.addEventListener("click", () => {
    document.querySelector("#auth_form_cont").style.display = "none";
    document.querySelector("#auth_form").classList.add("pass_flex");
    document.querySelector("#pass_cont").style.display = "inline-block";
    document.querySelector("#back_btn_box").style.display = "inline-block";

});

log_in.addEventListener("click", button => {
    button.preventDefault();
});

sign_up.addEventListener("click", button => {
    button.preventDefault();
});

reset_submit.addEventListener("click", button => {
    button.preventDefault();
    if (document.forms.form_reset.email_reset.value) {
        document.querySelector("#pass_cont").style.display = "none";
        document.querySelector("#back_btn_box").style.display = "none";
        document.querySelector("#pass_success").style.display = "block";
        document.querySelector("#pass_success").innerHTML = `
        <div style="text-align:center;">
        <img src="../images/icon.png" id="done_img">
        <h2 style="text-align:center;">Success !</h2>
        <p>A email has been send to <span style="font-weight: bold;">${document.forms.form_reset.email_reset.value}</span>. Please check for an email from company and click on the included link to reset your password.</p>
        <button id="back_home_btn" class="submit">Back to Home</button>
        <div>
        `;
        document.querySelector("#pass_rec_footer").style.display = "block";
        document.querySelector("#back_home_btn").addEventListener("click", () => {
            document.querySelector("#pass_rec_footer").style.display = "none";
            document.querySelector("#pass_cont").style.display = "none";
            document.querySelector("#back_btn_box").style.display = "none";
            document.querySelector("#pass_success").style.display = "none";
            document.querySelector("#auth_form_cont").style.display = "block";
            document.querySelector("#auth_form").classList.remove("pass_flex");
        });
    }
});

back_btn.addEventListener("click", () => {
    document.querySelector("#pass_cont").style.display = "none";
    document.querySelector("#back_btn_box").style.display = "none";
    document.querySelector("#pass_success").style.display = "none";
    document.querySelector("#auth_form_cont").style.display = "block";
    document.querySelector("#auth_form").classList.remove("pass_flex");
});

/*
-----------------------------------------------------
Մեյլը ստուգելու համար
-----------------------------------------------------
function validateEmail(email)
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
*/
