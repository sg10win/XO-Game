const board = document.getElementById("board");
const cells = document.getElementsByClassName("field");
const chackedCells = Array(9).fill('');
const winOptions = [[0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6]
                    ]
let turn = 0
const xArray = Array(0)
const oArray = Array(0)
board.addEventListener('click',function(event) {handleClick(event)});

console.log(winOptions.length)

function handleClick(e){
    if(isWin() == 'X - WON THE GAME !' || isWin() == 'O - WON THE GAME !'){
        return 
    }
    let currentCell = e.target
    let currentCellIndex = Number(currentCell.id)

    if (currentCell.textContent == ""){
        if (turn%2 == 0){
            currentCell.textContent = 'X'
            xArray.push(currentCellIndex)
        }else{
            currentCell.textContent='O'
            oArray.push(currentCellIndex)
        }
        
        turn+=1

        if (isWin()){
            alert(isWin())
        }
    }
    else{
        alert('Invalid move !')
    }
    
    // console.log(`event.target = ${e.target.id}`)
}  

// if the values of array 1 includes all array2


function isWin(){
    let xTempArray
    let oTempArray
    for(let i=0;i<winOptions.length;i++){
        xTempArray = Array(0)
        oTempArray = Array(0)
        for(let j=0;j<xArray.length;j++){
            if (winOptions[i].includes(xArray[j])){
                xTempArray.push(xArray[j])
            }
        }
        for(let k=0;k<oArray.length;k++){
            if (winOptions[i].includes(oArray[k])){
                oTempArray.push(oArray[k])
            }
        }
        if (xTempArray.length == 3){
            return 'X - WON THE GAME !'
        }
        if(oTempArray.length == 3){
            return 'O - WON THE GAME !' 
        }
        if (turn==9){
            return 'DRAW'
        }

    }
    
}




