var playersOptions = [r, p, s];
var win;
var lose;
var tie;
function playRPS (){

        var playersChoice = prompt("Please type r, p, or s.");
        if (!playersChoice){
            return;
        }
        var player = {

            wins: 0,
            losses: 0,
            ties: 0,
            decision: function(){
                var index = playersOptions.indexOf(playersChoice.toLowerCase);
                return playersOptions[index];
            }
        }
        var computer = {
            choice: function () {
                var index = Math.random();
                return playersOptions[index];
            }
        }
        if (player.decision === computer.choice) {
            tie = true;
            player.ties ++;
        } else if (playersChoice)

        if(win){
            alert("GG EZ");  
        } else if (lose) {
            alert("Lets go again");
        } else {
            alert("Well played");
        }

        alert("Stats:\nWins: " + player.wins + "\nLosses: " + player.losses + "\nTies: " + player.ties
        )
        var play = confirm("Play Again?");
        if(play){
            playRPS();
        }
    
}
playRPS();