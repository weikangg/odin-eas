const container = document.querySelector(".container");

// Making the cells.

function makeCell(numCol){
    for(let j =0;j<numCol;j++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
    }
}

// Making the grid itself.

function makeGrid(numRow,numCol){
    container.style.setProperty("--numRows", numRow);
    container.style.setProperty("--numCols", numCol);
    for(let i=0;i<numRow;i++){
        makeCell(numCol);
    }
}

function changeColour(target){
    // Random number between 0 - 255
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    target.style.backgroundColor = `rgb(${red},${green},${blue})`;   
}

function promptGrid(){
    let user_str = prompt("Please enter a number between 5 to 64");
    if ((isNaN(user_str) === true) || (user_str === null || (user_str.length === 0))){
        do{
            user_str = prompt("Error! Please only enter a number between 5 to 64");
        } while(user_str < 5 || user_str > 64);   
    }
    let user_input = parseInt(user_str);
    if (user_input < 5 || user_input > 64){
        do{
            user_input = parseInt(prompt("Error! Please only enter a number between 5 to 64"));
        } while(user_input < 5 || user_input > 64);
    }

    makeGrid(user_input,user_input);
}

// function darken(rgbArray,passes){
//     if (passes !== 10){
//         rgbArray[0] *= 0.9;
//         rgbArray[1] *= 0.9;
//         rgbArray[2] *= 0.9;
//     }
//     else{
//         rgbArray[0] = 0;
//         rgbArray[1] = 0;
//         rgbArray[2] = 0;
//     }
//     return passes;
// }

promptGrid();

container.addEventListener("mouseover", function(e){
    target = e.target;
    if (target.matches(".cell")){
        changeColour(target);
    }
    // let rgbArray = target.style.backgroundColor.slice(3).split(",");
    // let passes = 1;
    // while (true){
    //     if (rgbArray[0] === 0 && rgbArray[1] === 0 && rgbArray[2] === 0){
    //         break;            
    //     }
    //     else{
    //         passes = darken(rgbArray,passes);
    //         if (passes === 10){
    //             break;
    //         }
    //     }
    // }
});

const btn = document.querySelector("button");
btn.addEventListener("click", () => window.location.reload());

// for (let i = 0;i<16;i++){
//     for(let j = 0;j<16;j++){
//         const content = document.createElement("div");
//         content.classList.add("content");
//         container.appendChild(content);
//     }
// }