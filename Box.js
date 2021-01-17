class Box {
   //PROPERTIES
   constructor(x,y,width,height){

    var boptions= {
        restitution: 0.5,
        friction:0.8
        }

    this.body = Bodies.rectangle(x,y,width,height,boptions);//up
    this.width= width;
    this.height= height;
    World.add(world,this.body);
   }
   
//function/method
display(){
push();
translate(this.body.position.x, this.body.position.y);
rotate(this.body.angle);
fill("red")
rect(0,0,this.width, this.height);
pop();
}
}