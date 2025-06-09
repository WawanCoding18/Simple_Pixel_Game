
// let siklus = [1,1,1,1]
// let currentSiklus = 0
// let countFrame = 0
// let currentDirection = 0;
// let currentX = 100;
// let currentY = 100;
// const spd = 10;
// console.log(siklus.length)

// function animation(){

//     countFrame++;
//     if(countFrame < 5){
//        window.requestAnimationFrame(animation)
//        return
//     }
//     countFrame = 0

//     ctx.clearRect(0,0,canva.width,canva.height)
//     drawFrame(siklus[currentSiklus],currentDirection,currentX,currentY)
//     console.log(currentX)
//     currentSiklus++;
//     if(currentSiklus >= siklus.length){
//        currentSiklus = 0
//        console.log(siklus)
//        console.log(currentDirection)
//     } 

//       window.requestAnimationFrame(animation)  

// }

// addEventListener('keydown', function(e){
//   if(e.code === 'KeyD'){
//       currentDirection = 2
//       siklus =  [0,1,0,2]
//       currentX+=spd
//       console.log(currentX)
      
//   }
//   else if(e.code === 'KeyA'){
//        currentDirection = 1
//        siklus =  [0,1,0,2]
//        currentX+=-spd
//   }
//   else if(e.code === 'KeyW'){
//        currentDirection = 3
//        siklus =  [0,1,0,2]
//        currentY+=-spd

//   }
//   else if(e.code === 'KeyS'){
//        currentDirection = 0
//        siklus =  [0,1,0,2]
//        currentY+=spd
//   }

// })

// addEventListener('keyup', function(e){
//   if(e.code === 'KeyD'){
//       currentDirection = 2
//       siklus= [1,1,1,1]
//   }
//   else if(e.code === 'KeyA'){
//       currentDirection = 1
//       siklus= [1,1,1,1]
//   }
//   else if(e.code === 'KeyW'){
//       currentDirection = 3
//       siklus= [1,1,1,1]
//   }
//   else if(e.code === 'KeyS'){
//       currentDirection = 0
//       siklus= [1,1,1,1]
//   }

// })

// function restrict(){
//   const PageHeigth = innerHeight
//   const PageWidth = innerWidth
//   if(currentX > PageWidth){
//         currentX = PageWidth-62
//     }
    
//     if( currentX < 0){
//         currentX= 0
//     }
    
//     if(currentY > PageHeigth){
//        currentY = PageHeigth-70
//     }
    
//     if(currentY < 0){
//         currentY=0
//     }
    
//     animation()
//     requestAnimationFrame(restrict)
//     }
    
    
// function start(){
//   window.requestAnimationFrame(animation)
//   restrict()
// }