function f1(image) {
    document.getElementById("insert").src=image;
    document.getElementById("titre").innerHTML="pic 1";
}
function f2(image) {
    document.getElementById("insert").src=image;
    document.getElementById("titre").innerHTML="pic 2";
    
}
function f3(image) {
    document.getElementById("insert").src=image;
    document.getElementById("titre").innerHTML="pic 3";
    
}
    
function précédent(images) {
    var T = new Array(3);
    T[0] =document.getElementById('image1').src;
    T[1] =document.getElementById('image2').src;
    T[2] =document.getElementById('image3').src;
    
    if (images===T[0]){
    document.getElementById("insert").src=T[2] ;
    document.getElementById("titre").innerHTML="pic 1";
    
    }
    else if (images===T[2]){
    document.getElementById("insert").src=T[1] ;
    document.getElementById("titre").innerHTML="pic 2";
    
    }
    else{
    document.getElementById("insert").src=T[0] ;
    document.getElementById("titre").innerHTML="pic 3";
    
    }
}
    
function suivante(images) {
    var T = new Array(3)
    T[0] =document.getElementById('image1').src;
    T[1] =document.getElementById('image2').src;
    T[2] =document.getElementById('image3').src;
    
    if (images==T[0]){
    document.getElementById("insert").src=T[1] ;
    document.getElementById("titre").innerHTML="pic 1";
    
    }
    else if (images==T[1]){
    document.getElementById("insert").src=T[2] ;
    document.getElementById("titre").innerHTML="pic 2";
    }
    else{
    document.getElementById("insert").src=T[0] ;
    document.getElementById("titre").innerHTML="pic 3";
    }
}