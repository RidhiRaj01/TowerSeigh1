
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
//top layer
var block1;
//2nd layer
var block2,block3,block4;
//3rd layer
var block5,block6,block7,block8,block9;
//4th layer
var block10,block11,block12,block13,block14,block15,block16;
var Ground;
var polygon;
}

function setup(){
    createCanvas(800, 700);

    engine = Engine.create();
    world = engine.world;

    groundSprite=createSprite(500, 600, 250,10);
    groundSprite.shapeColor=color("white")
    
    //top layer
    fill("white");
    block1 = new Block(505,455,30,40,);
    
    //2nd layer
    fill("blue");
    block2 = new Block(475,495,30,40);
    block3 = new Block(505,495,30,40);
    block4 = new Block(535,495,30,40);
    
    //3rd layer
    block5 = new Block(445,535,30,40);
    block6 = new Block(475,535,30,40);
    block7 = new Block(505,535,30,40);
    block8 = new Block(535,535,30,40);
    block9 = new Block(565,535,30,40);
    //4th layer
    block10 = new Block(415,575,30,40);
    block11 = new Block(445,575,30,40);
    block12 = new Block(475,575,30,40);
    block13 = new Block(505,575,30,40);
    block14 = new Block(535,575,30,40);
    block15 = new Block(565,575,30,40);
    block16 = new Block(595,575,30,40);

    polygon = new Polygon(50,200,20);

    Engine.run(engine);

}


function draw(){
    background("brown");

    drawSprites();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

}