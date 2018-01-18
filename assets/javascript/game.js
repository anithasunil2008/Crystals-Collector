$(document).ready(function() {

    var guesses = $('#guesses');
    var finalTotal = $('#userTotal');
    var winScore = $('#wins');
    var lossesScore = $('#losses');
    var restart = $('#restart');
    var wins = 0;
    var losses = 0;

    var resetRandom = function() {

        resetUserTotal();
        random = Math.floor((Math.random() * 100) + 19);
        randomHexa = Math.floor((Math.random() * 12) + 1);
        randomDiamond = Math.floor((Math.random() * 12) + 1);
        randomOcta = Math.floor((Math.random() * 12) + 1);
        randomSquare = Math.floor((Math.random() * 12) + 1);

        guesses.text(random);
        console.log(random);

    }

    var resetUserTotal = function() {
        finalTotal.text(0);
        userTotal = 0;

    }

    //winner function
    var win = function() {
        wins++;
        winScore.text(wins);
        resetRandom();
    }

    //loser function
    var loser = function() {
        losses++;
        lossesScore.text(losses);
        resetRandom();
    }

    //hexa button onclick function
    $("#hexa").on("click", function() {

        userTotal = userTotal + randomHexa;
        finalTotal.text(userTotal);
        console.log(randomHexa);
        if (random == userTotal) {
            win();
        } else if (random < userTotal) {
            loser();
        }
    });

    //diamond button onclick function
    $("#diamond").on("click", function() {

        userTotal = userTotal + randomDiamond;
        finalTotal.text(userTotal);
        console.log(randomDiamond);
        if (random == userTotal) {
            win();
        } else
        if (random < userTotal) {
            loser();
        }
    });

    //octa button onclick function
    $("#octa").on("click", function() {

        userTotal = userTotal + randomOcta;
        finalTotal.text(userTotal);
        console.log(randomOcta);
        if (random == userTotal) {
            win();
        } else
        if (random < userTotal) {
            loser();
        }
    });

    //square button onclick function
    $("#square").on("click", function() {

        userTotal = userTotal + randomSquare;
        finalTotal.text(userTotal);
        console.log(randomSquare);
        if (random == userTotal) {
            win();
        } else
        if (random < userTotal) {
            loser();
        }
    });

    resetRandom();
    restart.on("click", function() {
        alert("Your total No. of Wins: " + wins + " & No. of losses: " + losses);
        location.reload();
    });
});