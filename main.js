canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");




function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{ 
	keyPressed = e.keyCode;
   

    if((keyPressed >=97 && kyPressed <=122 )|| (keyPressed >=65 && keyPressed<=90 )){



        alphabetkey();
        document.getElementById("d1").innerHTML ="You Pressed Alphabet Key";
        console.log("alphabet key");




    }

   
} 
function alphabetkey()
{
    img_image="alphabetkey.png"
    add();
}

function keydown(){
    
    if((keyPressed >=97 && kyPressed <=122 )|| (keyPressed >=65 && keyPressed<=90 )){



        alphabetkey();
        document.getElementById("d2").innerHTML ="You Pressed a Number Key";
        console.log("Number key");

}