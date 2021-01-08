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
        <img src="data:image/png;base64,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" id="done_img">
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