class roof{
    constructor(x,y,width,height)
    {
        this.x=390;
        this.y=70;
        this.width=500;
        this.height=100;
        this.r=(this.x,this.y,this.width,this.height);
        World.add(world,this.r);
    }
    display(){
        var posRoof=this.r.position;
        push()
        rectMode(CENTER);
        fill("grey");
        stroke("grey");
        rect(this.x,this.y,this.width,this.height);
        pop()
    }
}