class Polygon{
    constructor(x,y){
        var options = {
            "restitution":0.5,
            "friction":1.0,
            "density":1.5,
        }
        this.body = Bodies.circle(50,200,20);
       World.add(world,this.body);
       this.image = loadImage("polygon.png");
 
    } 
    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(polygon_img, polygon.position.x, polygon.position.y,40,40);
        pop();
    }
 }