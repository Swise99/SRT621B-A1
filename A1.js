function playerinfo(number, name) {
    this.name=name;
    this.number=number;
}
const statusDisplay = document.getElementById('turn-counter');
var currentPlayer='';
let gameState = true;
const player1 = new playerinfo;
const player2 = new playerinfo;
player1.piece='X'
player2.piece='O'
let cellValues = ["", "", "", "", "", "", "", "", ""];
const winText = () => `Player ${currentPlayer} has won!`;
const drawText = () => `Game ended in a draw!`;
const currentPlayerText = () => `It's ${currentPlayer}'s turn`;
document.getElementById("nameinput").onclick = function performAddnames(){
    player1.name =document.getElementById("P1name").value;
    player2.name =document.getElementById("P2name").value;
    if (player1.name==''){
        document.getElementById("error-space").innerHTML="Please enter Player 1 name"
    } else if (player2.name==''){
        document.getElementById("error-space").innerHTML="Please enter Player 2 name"
    } else {
        player1.ready=true;
        player2.ready=true;
        currentPlayer=player1.name;
        currentPiece=player1.piece;
        var x = document.getElementById("container");
        var y =document.getElementById("commentary");
        x.style.display = "grid";
        y.style.display = "inline";
        statusDisplay.innerHTML = currentPlayerText();
    }
    console.log("Hello World "+player1.name+player1.ready);
    console.log("Hello World "+player2.name+player2.ready);
};

function performCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    console.log("Clicked box "+clickedCell.getAttribute('index'))
    var clickedIndex=clickedCell.getAttribute('index')
    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('index')
    );
    if (cellValues[clickedCellIndex] !== "") {
        return;
    }
    handleCellPlayed(clickedCell, clickedCellIndex);
    performAddCommentary(clickedIndex);
    handlePlayerChange(clickedCellIndex);

    // handleResultValidation();
}
function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPiece;
    clickedCell.innerHTML = currentPiece;
}
function performAddCommentary(clickedIndex){
    var ul = document.getElementById("commentary-list");
    var li = document.createElement("li");
    var currentdate = new Date(); 
    var comment='at '+currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds()+' '+currentPlayer+' played '+currentPiece+' at '+clickedIndex
    li.appendChild(document.createTextNode(comment));
    ul.appendChild(li);
}
function handlePlayerChange() {
    if (currentPiece=='X'){
        currentPlayer=player2.name;
        currentPiece=player2.piece;
    } else {
        currentPlayer=player1.name;
        currentPiece=player1.piece;
    }
    statusDisplay.innerHTML = currentPlayerText();
}
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', performCellClick))