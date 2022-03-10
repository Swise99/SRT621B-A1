function playerinfo(number, name) {
    this.name=name;
    this.number=number;
}
document.getElementById("nameinput").onclick = function(){addnames()};
function addnames(){
    var player1 = new playerinfo(1,document.getElementById("P1name").value);
    var player2 = new playerinfo(2,document.getElementById("P2name").value);
    if (player1.name==''){
        document.getElementById("errorspace").innerHTML="Please enter Player 1 name"
    } else if (player2.name==''){
        document.getElementById("error space").innerHTML="Please enter Player 2 name"
    } else {
        player1.ready=true
        player2.ready=true
    }
    console.log("Hello"+player1.name+player1.ready);
    console.log("Hello"+player2.name+player2.ready);
}

