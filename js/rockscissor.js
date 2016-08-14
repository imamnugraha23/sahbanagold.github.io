var playerScore = 0,
	computerScore = 0,
	roundCounts = 0,
	win = 0,
	winner = 0;
var playing = false;
var computerImganim = null;
var playerName = "Player Name";
var rules = [[0,1,-1],[-1,0,1],[1,-1,0]];

var nama = document.getElementById('input-nama');			
var messageDiv = document.getElementById('message-div');
var playerText = document.getElementById('player-text');
var computerText = document.getElementById('computer-text');
var computerChooseImg = document.getElementById('computer-choose'),
	playerChooseImg = document.getElementById('player-choose');

var playerImg = [].slice.call(document.querySelectorAll("img.playerRSP")),
	computerImg = [].slice.call(document.querySelectorAll("img.computerRSP"));

playerImg.forEach(function addEvent (playerRSP) {
	var playerChoose = playerRSP.getAttribute("data");
	playerRSP.addEventListener("mouseover",function () {
		playerRSP.style.background = "#5f5";
	});
	playerRSP.addEventListener("mouseleave",function () {
		playerRSP.style.background = "#fff";
	});
	playerRSP.addEventListener("click",function () {		
		if (playing){
			play(playerChoose);
		}
	});
});

function startShuffle () {
	computerImganim = setInterval(shuffle,100);
	

}

function stopShuffle (computerP) {
	clearInterval(computerImganim);
	setImgShow(computerP);

}

function shuffle () {
	var showImg = Math.floor(Math.random()*3);
	setImgShow(showImg);
}
	
function setImgChoosen(player,computer) {
	
	if (player==0) {
		playerChooseImg.setAttribute("src","../images/rock.png");
	}else if(player == 1){
		playerChooseImg.setAttribute("src","../images/scissor.png");
	} else if (player == 2) {
		playerChooseImg.setAttribute("src","../images/paper.png");
	};
	if (computer==0) {
		computerChooseImg.setAttribute("src","../images/rock.png");
	}else if(computer == 1){
		computerChooseImg.setAttribute("src","../images/scissor.png");
	} else if (computer == 2) {
		computerChooseImg.setAttribute("src","../images/paper.png");
	};
	computerChooseImg.style.visibility = "visible";
	playerChooseImg.style.visibility = "visible";
}

function rockscissor(player, computer){
	
	win = rules[player][computer];
	var result = [];	
	var arenaText = document.getElementById('arena-text');
	setImgChoosen(player,computer);

	
		if (player == 0) {};
		if (win == -1){
			result = [0,1];
			arenaText.innerHTML = " Computer Menang";
			computerText.innerHTML += " 1"; 
			playerText.innerHTML += " 0";
		}
		else if (win == 0) {
			result = [0,0];
			arenaText.innerHTML = "Permainan Seri";
			computerText.innerHTML += " 0"; 
			playerText.innerHTML += " 0";
		}
		else if (win == 1) {
			result = [1,0];
			arenaText.innerHTML = " Anda Menang";
			computerText.innerHTML += " 0"; 
			playerText.innerHTML += " 1";
			
		};
		arenaText.style.visibility = "visible";
		roundCounts++;
		if (roundCounts <=4 ) {
			setTimeout(function function_name (argument) {
				arenaText.style.visibility = "hidden";
				playerChooseImg.style.visibility = "hidden";
				computerChooseImg.style.visibility = "hidden";
				startShuffle();
				playing = true;
			}, 1500);
		} else {			
			gameOver();
			stopShuffle();
			messageDiv.style.display = "block";
			arenaText.style.visibility = "hidden";
			playerChooseImg.style.visibility = "hidden";
			computerChooseImg.style.visibility = "hidden";
			computerText.innerHTML = "Computer"; 
			playerText.innerHTML = "Player";
			nama.value = "";
			playing = false;


		}		
	return result;	
}

function checkwinner (result) {
	winner = result[0] - result[1];
	if (winner == -1) {
		playerScore += 0;
		computerScore += 1;
	} else if (winner == 0) {
		playerScore += 0;
		computerScore += 0;
	} else if (winner == 1){
		playerScore += 1;
		computerScore += 0;
	};	
}
function setImgShow (show) {
	if (show == 0) {
		computerImg[0].style.visibility = 'visible';
		computerImg[1].style.visibility = 'hidden';
		computerImg[2].style.visibility = 'hidden';
		
	}else if (show == 1) {
		computerImg[0].style.visibility = 'hidden';
		computerImg[1].style.visibility = 'visible';
		computerImg[2].style.visibility = 'hidden';
		
	} else if (show ==2) {
		computerImg[0].style.visibility = 'hidden';
		computerImg[1].style.visibility = 'hidden';
		computerImg[2].style.visibility = 'visible';
		
	};
	
}
function gameOver () {
	playerScore = 0;
	computerScore = 0;
	roundCounts = 0;
	alert("thank you for playing!!");
	return;
}

function play (playerP) {	
	playing = false;
	var computerP = Math.floor(Math.random()*3);	
	stopShuffle(computerP);
	var roundResult = 0;
	if (playerP >= 0 || playerP <=2) {
		roundResult = rockscissor(playerP,computerP);
	};	
	checkwinner(roundResult);
	
}
