function Snake(){                   //Need to say this because it's refering to this function, not global.
    this.x = 0;                 //x coordinate
    this.y = 0;                 //y coordinate
    this.xSpeed = scale * 1;        //initialize the x speed of the snake: move 10px or as fast as scale
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];  //

    this.draw = function() {            //
        ctx.fillStyle = "black";      //draw snake as black
        ctx.fillRect(this.x, this.y, scale, scale);      //position snake at 00 with width/height same size as rows/collumns        
        for (let i=0; i<this.tail.length; i++){                         //for loop - let i start at 0, while i is less than tail length, increment
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);     //draw the tail at (x,y,width,height)  
        }
    }
 
    this.update = function() {                                  //update function
        for(let i=0; i<this.tail.length - 1; i++){               //for loop, as long as i is less than the length of the tail -1, increase
            this.tail[i] = this.tail[i + 1];                //
        }
        
        this.tail[this.total - 1] = {x: this.x, y: this.y};     //tail[-1] = x: x, y: y
        //console.log(this.tail);
        this.x += this.xSpeed;              //make snake's x coordinate += scale * 1 
        this.y += this.ySpeed;              //make snake's y coordinate += 0

        if (this.x > canvas.width){             //if x position is greater than the width of canvas (400)
            this.x = 0;                                 //x coordinate is back at 0
        }
        if (this.y >= canvas.height){           //if y coordinate is >= the height of canvas (400)
            this.y = 0;                                 //y coordinate is 0
        }
        if (this.x < 0){                            //if x is less than 0 (0,0 is at top left corner)
            this.x = canvas.width;                      //x coordinate is canvas.width (400) make it go to the right side
        }
        if (this.y < 0){                            //if y is less than 0, (means it's going up)
            this.y = canvas.height;                             //y = canvas heigtht (400, all the way at the bottom)
        }
    }
    

    this.changeDirection = function (direction) {
        //now there are 2 switch statements, with an "if". One for the start of the game, the other for any tail longer than 0.
        ///////////////////////////////////
        if (this.tail.length == 0) { ///if it is only one block, at game start, allow movemet in all directions
          //console.log(this.tail.length);
          switch (direction) {
            case 'Left':
              //console.log(this.xSpeed);
              if (this.xSpeed >= 0) {
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
                //console.log(this.xSpeed);
              }
              break;
            case 'Up':
              if (this.ySpeed >= 0) { //if going anywhere but down, go up
                this.xSpeed = 0; //x-axis = 0
                this.ySpeed = -scale * 1; //y-axis = go up
              }
              break;
            case 'Right':
              if (this.xSpeed <= 0) {
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                //	console.log(this.xSpeed);
              }
              break;
            case 'Down': //need to be going up to cancel down
              if (this.ySpeed <= 0) { //if going anywhere but up, go down
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
              }
          } //end of switch
        } else { //the tail is not 0 anymore, it is longer....
      
          switch (direction) { ////the old, "regular" speed switch statement
            case 'Left':
              if (!this.xSpeed > 0) {
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
              }
              break;
            case 'Up':
              if (!this.ySpeed > 0) { //if going anywhere but down, go up
                this.xSpeed = 0; //x-axis = 0
                this.ySpeed = -scale * 1; //y-axis = go up
              }
              break;
            case 'Right':
              if (!this.xSpeed > 0) {
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
              }
              break;
            case 'Down': //need to be going up to cancel down
              if (!this.ySpeed > 0) { //if going anywhere but up, go down
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
              }
          }
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
        for (var i = 0; i <this.tail.length; i++){             //for (the length of the current snake)

            if (this.x === this.tail[i].x && this.y === this.tail[i].y){        //if the snake tail === snake 
                if (confirm("You Lose! Play again?")){            //user loses, play again?
                    Snake();                               //reset function
                    this.total = 0;                              //total now equals 0
                    this.tail = [];                              //tail values return to empty array  
                }
                else{
                    location.reload();
                }
}}}}}