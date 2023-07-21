score = 0;
cross = true;
music = new Audio('music.mp3');
musicover = new Audio('gameover.mp3');

setInterval(() => {
    // music.play();
}, 1000);

document.onkeydown = function (e) {
    console.log("Key code is :", e.keyCode);
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 210 + "px"
    }

    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 210) + "px"
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    obstacle = document.querySelector('.obstacle');
    gameOver = document.querySelector('.gameOver');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offSetX = Math.abs(dx - ox);
    offSetY = Math.abs(dy - oy);
    if (offSetX < 110 && offSetY < 40) {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
        musicover.play();
        
        setTimeout(() => {
            musicover.pause();
            music.pause();
        }, 1000);
    }
    else if (offSetX < 145 && cross) {
        score += 1;
        updateScrore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
        }, 500);
    }

}, 100);

function updateScrore(score) {
    scor.innerHTML = "Your_Score:" + score;
}