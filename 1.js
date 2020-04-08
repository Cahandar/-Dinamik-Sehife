function Opacity() {
    let ops = document.getElementById("opacity").value;
    localStorage.setItem("rangevalue", ops);


}

document.getElementById("natura").style.opacity = localStorage.getItem("rangevalue");

function Radius() {
    let rad = document.getElementById("radius").value;
    localStorage.setItem("textvalue", rad);

}
/*
document.getElementById("bir").style.borderRadius= localStorage.getItem("textvalue")+"%";
document.getElementById("iki").style.borderRadius= localStorage.getItem("textvalue")+"%";
document.getElementById("uc").style.borderRadius= localStorage.getItem("textvalue")+"%";z
document.getElementById("dord").style.borderRadius= localStorage.getItem("textvalue")+"%";*/

for (let i = 0; i <= 3; i++) {

    document.getElementsByClassName("bir")[i].style.borderRadius = localStorage.getItem("textvalue") + "%";
}

function Position(n) {
    switch (n) {
        case "left":
            let c = "start";
            localStorage.setItem("acar3", c);
            break;
        case "right":
            let d = "2";
            localStorage.setItem("acar3", d);
            break;
    }
}

document.getElementById("nav").style.order = localStorage.getItem("acar3");