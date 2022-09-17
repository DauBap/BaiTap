function Fly(event){
    console.log(event.clientX,event.clientY);
    var ufo =document.getElementById('ufo');
    ufo.style.left = event.clientX+'px';
    ufo.style.top = event.clientY + 'px';
 
}