function playerinfo(number, name) {
    this.name=name;
    this.number=number;
}
var currentPlayer;
const player1 = new playerinfo;
const player2 = new playerinfo;
document.getElementById("nameinput").onclick = function addnames(){
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
        document.getElementById("turn-counter").innerHTML= "Current turn: "+currentPlayer;
    }
    console.log("Hello"+player1.name+player1.ready);
    console.log("Hello"+player2.name+player2.ready);
};

