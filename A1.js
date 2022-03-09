function playerinfo(number, name) {
    this.name=name;
    this.number=number;
}
document.getElementById("nameinput").onclick = function(){addnames()};
function addnames(){
    var player1 = new playerinfo(1,document.getElementById("P1name").value);
    var player2 = new playerinfo(2,document.getElementById("P2name").value);
    console.log(player1.name);
}
