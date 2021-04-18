class bob{
    constructor(x,y,r){
        this.x=x;
        this.y=600;
        this.r=80;
        this.b=Bodies.circle(this.x,this.y,this.r);
        World.add(world,this.b);
    }
    display(){
        var posB=this.b.position;
        push()
        ellipseMode(CENTER)
        fill("blue");
        stroke("blue");
        circle(this.x,this.y,this.r);
        pop()
    }
}