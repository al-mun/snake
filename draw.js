const canvas = document.querySelector(".canvas");           //Find the class canvas
const ctx = canvas.getContext("2d");                    //get canvas context
const scale = 20;                                       //rows and collumns are 10 pixels
const rows = canvas.height / scale;                     //row are the height divided by 10
const columns = canvas.width / scale;                   // collumns are the width divided by 10

var snake;                                      //initialize snake     

(function setup() {                             //initialize
    snake = new Snake();                        //snake 
    fruit = new Fruit();                        //fruit

    fruit.pickLocation();                       //makes the fruit pick random location!
    //console.log(fruit);

    window.setInterval(() => {



        ctx.clearRect (0, 0, canvas.width, canvas.height);      //refresh properly
        fruit.draw();                                           //draw the fruit
        snake.update();                                         //Update the snake's position, and tail
        snake.draw();                                           //draw the snake


        if (snake.eat(fruit)){  
                                                                //if statement, if snake eats parameter fruit 
            fruit.pickLocation();                                   // fruit picks a new location to appear.
        }

        snake.checkCollision();                                     //snake will check if there is collision.
        document.getElementsByClassName(".score").innerText = snake.total;   //change the "score" in HTML to snake.total.
    }, 150);                // times a second draw and update everything
}());



window.addEventListener('keydown', ((evt) => {          //add listener(when key is pressed(call it evt)) function 
    console.log(evt);
    const direction = evt.key.replace('Arrow', '');      //
    //console.log(direction);
    snake.changeDirection(direction);                    //make snake change direction, with direction being the key pressed by user

}))