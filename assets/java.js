//deklarasi variabel
let x = 0;
//fungsi matematik
function buton(obj){
    x += 1;
    document.getElementById("nmr").innerHTML=x;
    //keadaan bouncing
    if (x%5===0) {
        document.querySelector(".bounce").style.animationName ="bounce-2";
    }
    else {
        document.querySelector(".bounce").style.animationName ="none";
    }
}
