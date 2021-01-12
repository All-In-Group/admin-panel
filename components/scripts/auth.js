const nav_item = document.querySelectorAll(".nav_item");
const log_in = document.querySelector("#submit_login");
const sign_up = document.querySelector("#submit_signup");
const pass_forgot = document.querySelector("#pass_forgot");
const reset_submit = document.querySelector("#submit_reset");
const back_btn = document.querySelector("#back_btn");

log_in.addEventListener("click", button => {
    button.preventDefault();
    if (validEmail(document.forms.form_log_in.email.value) && document.forms.form_log_in.pass.value) {
        let data = {
            email: document.forms.form_log_in.email.value,
            password: document.forms.form_log_in.pass.value
        }
        //մուտքի տվյալներ JSON.stringify(data)
        console.log(JSON.stringify(data));
    }
    else {
        if (!document.forms.form_log_in.email.value) {
            document.forms.form_log_in.email.classList.add("red");
        } else {
            document.forms.form_log_in.email.classList.remove("red");
        }
        if (!document.forms.form_log_in.pass.value) {
            document.forms.form_log_in.pass.classList.add("red");
        } else {
            document.forms.form_log_in.pass.classList.remove("red");
        }
        console.log("You are not authorized");
    }
});

sign_up.addEventListener("click", button => {
    button.preventDefault();
    if (validEmail(document.forms.form_sign_up.email.value) && document.forms.form_sign_up.name.value && document.forms.form_sign_up.pass && document.forms.form_sign_up.terms.checked) {

        let create_data = {
            name: document.forms.form_sign_up.name.value,
            email: document.forms.form_sign_up.email.value,
            password: document.forms.form_sign_up.pass.value
        }
        // ստեղծման տվյանլեր JSON.stringify(create_data)
        console.log(JSON.stringify(create_data));
    }
    else {
        if (!document.forms.form_sign_up.name.value) {
            document.forms.form_sign_up.name.classList.add("red");
        } else {
            document.forms.form_sign_up.name.classList.remove("red");
        }
        if (!document.forms.form_sign_up.email.value) {
            document.forms.form_sign_up.email.classList.add("red");
        } else {
            document.forms.form_sign_up.email.classList.remove("red");
        }
        if (!document.forms.form_sign_up.pass.value) {
            document.forms.form_sign_up.pass.classList.add("red");
        } else {
            document.forms.form_sign_up.pass.classList.remove("red");
        }
        console.log("no to comp");
    }
});

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
        <p>A email has been send to <span style="font-weight: bold;">${document.forms.form_reset.email_reset.value}</span>.
        Please check for an email from company and click on the included link to reset your password.</p>
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
let validEmail = function (email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}
