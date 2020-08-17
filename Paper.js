class Paper
{
    constructor(x,y)
    {
        var options =
        {
            isStatic: false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,50,options)
        this.width =50;
        this.height = 50;

        World.add(world,this.body);
    }

    display()
    {
        var pos =this.body.position;
         
        push(); 
       ellipseMode(CENTER);
       fill("pink")
       ellipse(0,0,this.width,this.height);
       pop();
       

    }
}
