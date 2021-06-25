var canvas=new fabric.Canvas("myCanvas");
var bimg_width=30;
var bimg_height=30;
player_x=70;
player_y=70;
player_img="";
block_img="";

function player(){
    fabric.Image.fromURL("https://i.postimg.cc/zDwfFdYY/player.png",function(Img){
        player_img=Img;
        player_img.scaleToWidth(150);
        player_img.scaleToHeight(140);
        player_img.set({
            top:player_y,
            left:player_x
        
        });
        canvas.add(player_img);

    });
}
function upload(get_img){
    fabric.Image.fromURL(get_img,function(Img){
        block_img=Img;
        block_img.scaleToWidth(bimg_width);
        block_img.scaleToHeight(bimg_height);
        block_img.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img);
    });
}
window.addEventListener("keydown",keydown);

function keydown(e){
var Shift=e.keyCode;
console.log(Shift);
if(e.shiftKey==true&&Shift=="80"){
    bimg_height=bimg_height+10;
    bimg_width=bimg_width+10;
    document.getElementById("span1").innerHTML=bimg_width;
    document.getElementById("span2").innerHTML=bimg_height;
}
if(e.shiftKey==true&&Shift=="77"){
    bimg_width=bimg_width-10;
    bimg_height=bimg_height-10;
    document.getElementById("span1").innerHTML=bimg_width;
    document.getElementById("span2").innerHTML=bimg_height;
}

if(Shift=="38"){
    up();
    console.log("up");
}
if(Shift=="40"){
    down();
    console.log("down");
}
if(Shift=="37"){
    left();
    console.log("left");
}
if(Shift=="39"){
right();
console.log("right");
}
if(Shift=="70"){
    upload("ironman_face(1).png");
    console.log("f")
}
if(Shift=="66"){
    upload("hulkd_body.png")
    console.log("b")
}
if(Shift=="76"){
    upload("spiderman_legs.png");
    console.log("l");
}
if(Shift=="82"){
    upload("thor_right_hand.png");
    console.log("r")
}
if(Shift=="72"){
    upload("captain_america_left_hand.png");
    console.log("h");
}
}

function up(){
    if(player_y>=0){
        player_y=player_y-bimg_width;
        console.log("block width ="+bimg_width);
        console.log("when up arow is pressed x="+player_x+"y="+player_y);
        canvas.remove(player_img);
        player();
    }
}
function down(){
    if(player_y<=460){
        player_y=player_y+bimg_height;
        console.log("block height="+bimg_height);
        console.log("when down arow is pressed x="+player_x+"y="+player_y);
        canvas.remove(player_img);
        player();
    }
}
function left(){
    if(player_x>=0){
        player_x=player_x-bimg_width;
        console.log("block width ="+bimg_width);
        console.log("when left arow is pressed x="+player_x+"y="+player_y);
        canvas.remove(player_img);
        player();
    }
}
function right(){
    if(player_x<=850){
        player_x=player_x+bimg_height;
        console.log("block width ="+bimg_height);
        console.log("when right arow id pressed x="+player_x+"y="+player_y);
        canvas.remove(player_img);
        player();
    }
}