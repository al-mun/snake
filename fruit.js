function Fruit() {          //fruit function
    this.x;                 //initialize x and y
    this.y;

    this.pickLocation = function() {                                //function picklocation equals...
        this.x = (Math.floor(Math.random() * rows -1) +1) * scale;     //x location = random within the canvas parameters
        this.y = (Math.floor(Math.random() * columns -1)+ 1) * scale;   //x location = random within the canvas parameters
        //console.log(this.y);
        //console.log(this.x);
    }


    this.draw = function() {                            //draw function, make fruit white, 
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, scale, scale);     // size of rect is scale
    }
}