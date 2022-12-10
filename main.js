
const snakeboard = document.getElementById('snakeBoard')
const ctx = snakeboard.getContext('2d') 
const snakeBoardwidth = 200

let dot = [{x:100, y:100}]
ctx.fillStyle = "lightgreen"

ctx.fillRect(dot[0].x, dot[0].y , 10, 10)


document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener('keydown', function (event) {
 
        const {code} = event
        if (code === "KeyW") {
            if(dot[0].y == 0) {
                return;
            }
            ctx.clearRect(dot[0].x, dot[0].y, 10, 10)
      
            dot[0].y -= 10
            ctx.fillRect(dot[0].x, dot[0].y , 10, 10)
        } else if (code === "KeyS") {
            if(dot[0].y == 190) {
                return;
            }
            ctx.clearRect(dot[0].x, dot[0].y, 10, 10)
            
            dot[0].y += 10
            ctx.fillRect(dot[0].x, dot[0].y , 10, 10)
        }      

})

});