const canva = document.getElementById('canvas')
const ctx = canva.getContext('2d')
let img = new Image()
img.src = 'img/pixel_character-removebg-preview.png'
img.onload = function(){
    start()
}

const height = 144
const width = 144
const scale = 2
const scaleWidth = width/scale
const scaleHeight = height/scale


function drawFrame(sx,sy,dx,dy){
     ctx.drawImage(img,sx*width,sy*height,width,height,dx,dy,scaleWidth,scaleHeight)
}   


let siklus = [1,1,1,1]
let currentSiklus = 0
let countFrame = 0
let currentDirection = 0;
let currentX = 100;
let currentY = 100;
const spd = 10;
let keypress = {}
console.log(siklus.length)

function animation(){
    ctx.clearRect(0,0,canva.width,canva.height)
    drawFrame(siklus[currentSiklus],currentDirection,currentX,currentY)
    currentSiklus++;
    if(currentSiklus >= siklus.length){
       currentSiklus = 0
    }
    window.requestAnimationFrame(animation)
  

    if(keypress.d){
       currentX+=spd
       currentDirection = 2
       siklus = [0,1,0,2]
       
    } else if(keypress.a){
       currentX-=spd
       currentDirection = 1
       siklus = [0,1,0,2]
    }

    if(keypress.w){
       currentY-=spd
       currentDirection = 3
       siklus = [0,1,0,2]

    } else if(keypress.s){
       currentY+=spd
       currentDirection = 0
       siklus = [0,1,0,2]
    }
}


addEventListener('keydown', keydownpress)
function keydownpress(e){
   keypress[e.key] = true
}
addEventListener('keyup', keyuppress)
function keyuppress(e){
   keypress[e.key] = false
   siklus = [1,1,1,1]
}

function restrict(){
  const pageWidth = window.innerWidth
  const pageHeigth = window.innerHeight
    if(currentX > pageWidth-70){
        currentX = pageWidth-80
    }

    if(currentX < 0){
      currentX = 0
    }

    if(currentY > pageHeigth - 70){
        currentY = pageHeigth - 80
    }

    if(currentY < 0){
        currentY = 0
    }
   window.requestAnimationFrame(restrict)
}

function start(){
  window.requestAnimationFrame(animation)
  restrict()
}



console.log('hello dunia')
    

// function animation(){
//     framex = currentFrame % muchFrame
//     framey = 1
//     start(framey,rigth)
//     currentFrame++;
// }


// const block = document.querySelector('img')
// let x = 70;
// let y = 70;
// let speedX = 0;
// let speedY = 0;
// const speed = 20;

// function blockmove(){
//     x+= speedX
//     y+= speedY
//     block.style.top = `${y}px`
//     block.style.left = `${x}px`
// }
// #block{
//     height: 70px;
//     width: 70px;
//     position: fixed;
//     background-color: blue;
//     top: 70px;
//     left: 70px;
// }


// blockmove()



   //  ctx.drawImage(img,0,0, width, height,0,0,scaleWidth,scaleHeight)//k1b1
    //  ctx.drawImage(img,width,0,width,height,width,0,scaleWidth,scaleHeight)//k2b1
    //  ctx.drawImage(img,width*2,0,width,height,width*2,0,scaleWidth,scaleHeight)//k3b1
     
    //  ctx.drawImage(img,0,height, width, height,0,height,scaleWidth,scaleHeight)//k1b2
    //  ctx.drawImage(img,width,height,width,height,width,height,scaleWidth,scaleHeight)//k2b2
    //  ctx.drawImage(img,width*2,0,width,height,width*2,height,scaleWidth,scaleHeight)//k3b2

    //  ctx.drawImage(img,0,height*2, width, height,0,height*2,scaleWidth,scaleHeight)//k1b3
    //  ctx.drawImage(img,width,height*2,width,height,width,height*2,scaleWidth,scaleHeight)//k2b3
    //  ctx.drawImage(img,width*2,height*2,width,height,width*2,height*2,scaleWidth,scaleHeight)//k3b3

    //  ctx.drawImage(img,0,height*3, width, height,0,height*3,scaleWidth,scaleHeight)//k1b4
    //  ctx.drawImage(img,width,height*3,width,height,width,height*3,scaleWidth,scaleHeight)//k2b4
    //  ctx.drawImage(img,width*2,height*3,width,height,width*2,height*3,scaleWidth,scaleHeight)//k3b4


    // function start(){
//     drawFrame(1,0,1,0)//k2b1
//     drawFrame(0,0,scaleWidth,0)//k3b1
//     drawFrame(1,0,scaleWidth*2,0)//k2b1
//     drawFrame(2,0,scaleWidth*3,0)//k1b1
// }

// if(currentDirection == 0){
//   currentDirection = 1
// } else if(currentDirection ==1){
//   currentDirection = 2
// } else if(currentDirection == 2){
//   currentDirection = 3
// } else if(currentDirection == 3){
//   currentDirection = 4
// } else if(currentDirection == 4){
//  currentDirection = 0
// } else{
//   console.log('eror')
// }


    //  if(currentDirection == 0){
      //         currentDirection = 1
      //    } else if(currentDirection ==1){
      //         currentDirection = 2
      //    } else if(currentDirection == 2){
      //         currentDirection = 3
      //    } else if(currentDirection == 3){
      //         currentDirection = 0
      //    }  else{
      //          console.log('eror')
      //    }