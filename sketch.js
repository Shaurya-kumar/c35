var ball;
var database;
var pos;

function setup(){
    database = firebase.database();

    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var ballpos = database.ref("Ball")
    ballpos.on("value",readposition)
}

function draw(){
    background("white");

    if(pos !== undefined){

    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
}
function changePosition(x,y){

 database.ref("Ball").set({

 "x": pos.x + x,
 "y":pos.y + y

 })

}
function readposition(data){

pos = data.val()
ball.x = pos.x 
ball.y = pos.y 

}