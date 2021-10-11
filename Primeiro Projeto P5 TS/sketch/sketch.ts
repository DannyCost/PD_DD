class Entity {
    x: number; //atributos
    y: number;
    step: number;
    image: p5.Image;
                //parametros
    constructor(x: number, y: number, step: number, image: p5.Image){
        this.x = x; //O atributo x recebe o parametro x da função
        this.y = y;
        this.step = step;
        this.image = image;
    }
    //metodos
    draw(): void{
        image(this.image, this.x * this.step, this.y * this.step, this.step, this.step);
    }
}

class Board{
    nl: number; //atributos
    nc: number;
    step: number;
    background: p5.Image;

    constructor(nc: number, nl: number, step: number, background: p5.Image){
        this.nl = nl
        this.nc = nc
        this.step = step
        this.background = background;
    }
    draw(): void{
        image(this.background, 0, 0, this.nc * this.step, this.nl * this.step);
        for(let x = 0; x < this.nc; x++){
            for(let y = 0; y < this.nl; y++){
                noFill();
                stroke(0);
                strokeWeight(2);
                rect(x * this.step, y * this.step, this.step, this.step);
            }
        }
    }
}

let wolf_img: p5.Image;
let rabbit_img: p5.Image;
let board_img: p5.Image;
let wolf2_img: p5.Image;

let BlackHole_img: p5.Image;

let AstroDown_img: p5.Image;
let AstroUp_img: p5.Image;
let AstroLeft_img: p5.Image;
let AstroRight_img: p5.Image;

let cometaDown_img: p5.Image; 
let cometaUp_img: p5.Image;
let cometaLeft_img: p5.Image;
let cometaRight_img: p5.Image; 

let astro: Entity;
let cometa: Entity;
let BlackHole: Entity;

let com_x = 1;
let com_y = 1;
let ast_x = 2;
let ast_y = 2;
let bla_x = 8;
let bla_y = 6;

// let wolf2: Entity;
// let wolf: Entity;
// let rabbit: Entity;
 let board: Board;

function loadImg(path: string): p5.Image{
    return loadImage(
        path,
        () => console.log("Loading " + path + " ok"),
        () => console.log("Loading " + path + " error")
    );
}

function preload(){
    AstroDown_img = loadImg('../sketch/Astrodown.png'); 
    AstroUp_img = loadImg('../sketch/Astroup.png');
    AstroLeft_img = loadImg('../sketch/Astroleft.png');
    AstroRight_img = loadImg('../sketch/Astroright1.png'); 

    BlackHole_img = loadImg('../sketch/Buraco.png');

    cometaDown_img = loadImg('../sketch/cometadowm.png'); 
    cometaUp_img = loadImg('../sketch/cometaup.png'); 
    cometaLeft_img = loadImg('../sketch/cometaleft.png'); 
    cometaRight_img = loadImg('../sketch/cometaright.png'); 
    
    //rabbit_img = loadImg('../sketch/coelho.png'); 
    board_img = loadImg('../sketch/Espaco.jpg');
}

function keyPressed() {
    if(keyCode === LEFT_ARROW){
        cometa.x--;
        cometa.image = cometaLeft_img;
    }
    else if(keyCode === RIGHT_ARROW){
        cometa.x++;
        cometa.image = cometaRight_img;
    }
    else if(keyCode === UP_ARROW){
        cometa.y--;
        cometa.image = cometaUp_img;
    }
    else if(keyCode === DOWN_ARROW){
        cometa.y++;
        cometa.image = cometaDown_img;
    }

    if(keyCode === "A".charCodeAt(0)){
        astro.x--;
        astro.image = AstroLeft_img;
    }
    else if(keyCode === "D".charCodeAt(0)){
        astro.x++;
        astro.image = AstroRight_img;
    }
    else if(keyCode === "W".charCodeAt(0)){
        astro.y--;
        astro.image = AstroUp_img;
    }
    else if(keyCode === "S".charCodeAt(0)){
        astro.y++;
        astro.image = AstroDown_img;
    }
    Entrou();
    NaoSaia();
    Bateu();
}



function setup(){
    let size = 100;
    astro = new Entity(ast_x, ast_y, size, AstroUp_img);
    cometa = new Entity(com_x, com_y, size, cometaRight_img);
    BlackHole = new Entity(7, 5, size, BlackHole_img);
    board = new Board(bla_x, bla_y, size, board_img);
    createCanvas(board.nc * size, board.nl * size);
}

function Bateu(){
    if(cometa.x === astro.x && cometa.y === astro.y){
        cometa.x = com_x;
        cometa.y = com_y;
        astro.x = ast_x;
        astro.y = ast_y;
        astro.image = AstroUp_img;
        cometa.image = cometaRight_img;
    }
}

function NaoSaia(){
    if(astro.x >= 7){
        astro.x = board.nc - 1;
    }
    if(astro.x <= 0){
        astro.x = 0;
    }
    if(astro.y >= 5){
        astro.y = board.nl - 1;
    }
    if(astro.y <= 0){
        astro.y = 0;
    }

    if(cometa.x >= 7){
        cometa.x = board.nc - 1;
    }
    if(cometa.x <= 0){
        cometa.x = 0;
    }
    if(cometa.y >= 5){
        cometa.y = board.nl - 1;
    }
    if(cometa.y <= 0){
        cometa.y = 0;
    }

}

function Entrou(){
    if(astro.x === (bla_x - 1) && astro.y === (bla_y - 1)){
        astro.x = ast_x;
        astro.y = ast_y;
        astro.image = AstroUp_img;
        cometa.x = com_x;
        cometa.y = com_y;
        cometa.image = cometaRight_img;
    }
}

function draw(){
    background(0);
    // if(wolf.x ===6)
    //     wolf.x = 5
    // if(wolf.x ===-1)
    //     wolf.x = 0

    board.draw();
    cometa.draw();
    astro.draw();
    BlackHole.draw();
}