let tog = 1
let rollingSound = new Audio('Dice Roll.mp3')
let winSound = new Audio('Win Voice.mp3')



let Player1_sum = 0
let Player2_sum = 0


function play(player, psum, correction, num) {
    let sum
    if (psum == 'Player1_sum') {

        Player1_sum = Player1_sum + num

        if (Player1_sum > 100) {
            Player1_sum = Player1_sum - num
        }

        if (Player1_sum == 1) {
            Player1_sum = 38
        }
        if (Player1_sum == 4) {
            Player1_sum = 14
        }
        if (Player1_sum == 8) {
            Player1_sum = 30
        }
        if (Player1_sum == 21) {
            Player1_sum = 42
        }
        if (Player1_sum == 28) {
            Player1_sum = 76
        }
        if (Player1_sum == 32) {
            Player1_sum = 10
        }
        if (Player1_sum == 36) {
            Player1_sum = 6
        }
        if (Player1_sum == 48) {
            Player1_sum = 26
        }
        if (Player1_sum == 50) {
            Player1_sum = 67
        }
        if (Player1_sum == 62) {
            Player1_sum = 18
        }
        if (Player1_sum == 71) {
            Player1_sum = 92
        }
        if (Player1_sum == 80) {
            Player1_sum = 99
        }
        if (Player1_sum == 88) {
            Player1_sum = 24
        }
        if (Player1_sum == 95) {
            Player1_sum = 56
        }
        if (Player1_sum == 97) {
            Player1_sum = 78
        }
        sum = Player1_sum
    }
    if (psum == 'Player2_sum') {
        Player2_sum = Player2_sum + num
        if (Player2_sum > 100) {
            Player2_sum = Player2_sum - num
        }
        if (Player2_sum == 1) {
            Player2_sum = 38
        }
        if (Player2_sum == 4) {
            Player2_sum = 14
        }
        if (Player2_sum == 8) {
            Player2_sum = 30
        }
        if (Player2_sum == 21) {
            Player2_sum = 42
        }
        if (Player2_sum == 28) {
            Player2_sum = 76
        }
        if (Player2_sum == 32) {
            Player2_sum = 10
        }
        if (Player2_sum == 36) {
            Player2_sum = 6
        }
        if (Player2_sum == 48) {
            Player2_sum = 26
        }
        if (Player2_sum == 50) {
            Player2_sum = 67
        }
        if (Player2_sum == 62) {
            Player2_sum = 18
        }
        if (Player2_sum == 71) {
            Player2_sum = 92
        }
        if (Player2_sum == 80) {
            Player2_sum = 99
        }
        if (Player2_sum == 88) {
            Player2_sum = 24
        }
        if (Player2_sum == 95) {
            Player2_sum = 56
        }
        if (Player2_sum == 97) {
            Player2_sum = 78
        }
        sum = Player2_sum
    }
    document.getElementById(`${player}`).style.transition = `linear all .5s`
    if (sum < 10) {
        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`
    }
    else if (sum == 100) {
        winSound.play()
        if (player == 'p1') {
            alert("Red Won !!")
        }
        else if (player == 'p2') {
            alert("Yellow Won !!")
        }
        location.reload()
    }
    else {
        numarr = Array.from(String(sum))
        n1 = eval(numarr.shift())
        n2 = eval(numarr.pop())
        if (n1 % 2 != 0) {
            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }
        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }
        }
    }
}
document.getElementById("diceBtn").addEventListener("click", function () {
    rollingSound.play()
    num = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    document.getElementById("dice").innerText = num
    if (tog % 2 != 0) {
        document.getElementById('tog').innerText = "Yellow's Turn : "
        play('p1', 'Player1_sum', 0, num)
    }
    else if (tog % 2 == 0) {
        document.getElementById('tog').innerText = "Red's Turn : "
        play('p2', 'Player2_sum', 55, num)
    }
    tog = tog + 1
})