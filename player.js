/*const bernardo = {
x: 0, // x and y starting posittion on canvas
y: 680
height: 40
width: 30,
speed: 5
jumping: false,
yVelocity: 0, //bernard jump speed
jHeight: 90, // jump height
};
*/

class bernardo{
    constructor() {
        this.x = 0; // x and y starting position on canvas
        this.y = 680;
        this.height = 40;
        this.width = 50;
        this.speed = 5;
        this.jumping = false;
        this.yVelocity = 0; //bernard jump speed
        this.jHeight = 90; // jump height
        this.bernardo= new Image();
        this.bernardo.src = 'bernardo.png'; // replace with the actual image path
    }
    draw(){
        ctx.drawImage(
            this.bernardo, 
            this.x, 
            this.y, 
            this.width, 
            this.height
        );
    }
}

const bernardo = new bernardo();
class Win {
    constructor() {
        this.x = 1330;
        this.y = 40;
        this.width = 100;
        this.height = 100;
        this.bubblePip = new Image();
        this.bubblePip.src = 'bubblePip.png'; // replace with the actual image path
    }
    draw(){
        ctx.drawImage(
            this.bubblePip, 
            this.x, 
            this.y, 
            this.width, 
            this.height
        );
    }
}
const win = new Win();