function Snake(){                   //Need to say this because it's refering to this function, not global.
    this.x = 0;                 //x coordinate
    this.y = 0;                 //y coordinate
    this.xSpeed = scale * 1;        //initialize the x speed of the snake: move 10px or as fast as scale
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];  //store coordinates

    this.draw = function() {            //
        ctx.fillStyle = "black";      //make snake white

        for (let i=0; i<this.tail.length; i++){                         //for loop - let i start at 0, while i is less than tail length, increment
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);     //make the tail at coordinates located behind the rect.

        }
        ctx.fillRect(this.x, this.y, scale, scale);         //Return snake to start
    }
 
    this.update = function() {                                  //update function
        for(let i=0; i<this.tail.length -1; i++){               //for loop, 
            this.tail[i] = this.tail[i +1];
        }

        this.tail[this.total - 1] = {x: this.x, y: this.y};

        this.x += this.xSpeed;              
        this.y += this.ySpeed;

        if (this.x > canvas.width){
            this.x = 0;
        }
        if (this.y > canvas.height){
            this.y = 0;
        }
        if (this.x < 0){
            this.x = canvas.width;
        }
        if (this.y < 0){
            this.y = canvas.height;
        }
    }

this.changeDirection = function(direction){
    switch (direction){
        case 'Up':
            this.xSpeed = 0;
            this.ySpeed = -scale * 1;
            break;
        case 'Down':
            this.xSpeed = 0;
            this.ySpeed = scale * 1;
            break;
        case 'Left':
            this.xSpeed = -scale * 1
            this.ySpeed = 0;
            break;
        case 'Right':
            this.xSpeed = scale * 1;
            this.ySpeed = 0
            break;
    }
    //if player last move === player current move{ block move }
    
}

this.eat = function(fruit){                         //eat function(parameter: fruit)
    //console.log(fruit);
    if (this.x === fruit.x && this.y === fruit.y){      // if snake x equals fruit x and snake y equals fruit y 
        this.total++;                                   //total = total +1
        return true;                                    //true
    }
    return false;                                       //otherwise, false
        }
  
        this.checkCollision = function() {                          //checking collision = functions 
            for  (var i = 0; i <this.tail.length; i++){             //for (while i is less than tail length, increment)
                if (this.x === this.tail[i].x &&                    //if snake x equals tail location x and snake y equals tail y 
                    this.y === this.tail[i].y){

                        //function restart {
                            //pause the game
                            //ask user if play again?
                            //if yes{
                                this.total = 0;
                                this.tail = [];
                            //}
                            //else{
                                //print the user's final score
                                //print play again buton
                            //}
                        //}
                        this.total = 0;                              //total now equals 0
                        this.tail = [];                              //tail values return to empty array
    }
}}}