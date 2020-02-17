function Opacity() {
    let ops = document.getElementById("opacity").value;
    localStorage.setItem("rangevalue", ops);


}
function Radius() {
    let rad = document.getElementById("radius").value;
    localStorage.setItem("textvalue", rad);

}
function Position(n){
    switch(n){
        case "left":
            let c = "start";
            localStorage.setItem("acar3", c);
        break;
        case "right":
            let d ="2"; 
            localStorage.setItem("acar3", d);
        break;
    }
}