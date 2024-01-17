
let press = document.getElementsByClassName("botton");
let btn1 = document.getElementsByClassName("btn1");
let btn2 = document.getElementsByClassName("btn2");
let question = document.getElementsByClassName("question");
let p = document.getElementsByTagName("p");

for (let i = 0; i <= press.length; i++) {
    btn2[i].style.display = "none";
    p[i].style.display = "none";

    press[i].addEventListener("click", function () {
        if (btn1[i].style.display === "none") {
            btn1[i].style.display = "block";
            btn2[i].style.display = "none";
            p[i].style.display = "none";
        } else {
            btn1[i].style.display = "none";
            btn2[i].style.display = "block";
            p[i].style.display = "block";
        };
    });

    question[i].addEventListener("click", function () {
        if (p[i].style.display === "none") {
            p[i].style.display = "block";
            btn1[i].style.display = "none";
            btn2[i].style.display = "block";

        } else {
            p[i].style.display = "none";
            btn2[i].style.display = "none";
            btn1[i].style.display = "block";
        };
    });
};
