var playerScore = 0;
var computerScore = 0;
var roundCounts = 0;
var computerImganim = null;
var playerName = "Player Name";

var playerImg = [].slice.call(document.querySelectorAll("img.playerRSP"));
var computerImg = [].slice.call(document.querySelectorAll("img.computerRSP"));
playerImg.forEach(function addEvent (playerRSP) {
	var playerChoose = playerRSP.getAttribute("data");
	playerRSP.addEventListener("mouseover",function () {
		playerRSP.style.background = "#5f5";
	});
	playerRSP.addEventListener("mouseleave",function () {
		playerRSP.style.background = "#fff";
	});
	playerRSP.addEventListener("click",function () {		
		
		play(playerChoose);
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
	var computerChooseImg = document.getElementById('computer-choose');
	var playerChooseImg = document.getElementById('player-choose');
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
	var rules = [[0,1,-1],[-1,0,1],[1,-1,0]];
	var win = rules[player][computer];
	var result = [];	
	var arenaText = document.getElementById('arena-text');
	setImgChoosen(player,computer);
	
		if (player == 0) {};
		if (win == -1){
			result = [0,1];
			arenaText.innerHTML = " Computer Menang";
		}
		else if (win == 0) {
			result = [0,0];
			arenaText.innerHTML = "Permainan Seri";
		}
		else if (win == 1) {
			result = [1,0];
			arenaText.innerHTML = " Anda Menang";
			
		};
		arenaText.style.visibility = "visible";		
	return result;	
}

function checkwinner (result) {
	var winner = result[0] - result[1];
	if (winner == -1) {
		playerScore += 0;
		computerScore += 0;
	} else if (winner == 0) {
		playerScore += 0;
		computerScore += 0;
	} else if (winner == 1){
		playerScore += 0;
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
function overGame () {
	playerScore = 0;
	computerScore = 0;
	roundCounts = 0;
	alert("thank you for playing!!");
	return;
}

function play (playerP) {
	if (roundCounts >=5) {
		overGame();
	};	
	var computerP = Math.floor(Math.random()*3);	
	stopShuffle(computerP);
	var roundResult = 0;
	if (playerP >= 0 || playerP <=2) {
		roundResult = rockscissor(playerP,computerP);
	};	
	checkwinner(roundResult);
	roundCounts++;
}
startShuffle();