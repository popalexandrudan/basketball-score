let homeCurrentScore = 0;
let homeScore = document.getElementById("homePoints");

let guestCurrentScore = 0;
let guestScore = document.getElementById("guestPoints");

let leadingTeamH = document.getElementById("leadingTeam");

const addOneH = () => {
  homeCurrentScore += 1;
  homeScore.innerText = homeCurrentScore;
};

const addTwoH = () => {
  homeCurrentScore += 2;
  homeScore.innerText = homeCurrentScore;
};

const addThreeH = () => {
  homeCurrentScore += 3;
  homeScore.innerText = homeCurrentScore;
};

const addOneG = () => {
  guestCurrentScore += 1;
  guestScore.innerText = guestCurrentScore;
};

const addTwoG = () => {
  guestCurrentScore += 2;
  guestScore.innerText = guestCurrentScore;
};

const addThreeG = () => {
  guestCurrentScore += 3;
  guestScore.innerText = guestCurrentScore;
};

const resetScore = () => {
  homeCurrentScore = 0;
  homeScore.innerText = homeCurrentScore;
  guestCurrentScore = 0;
  guestScore.innerText = guestCurrentScore;
  leadingTeamH.innerHTML = "Waiting for match to start";
};

let leadingTeam = () => {
  if (homeCurrentScore === guestCurrentScore) {
    leadingTeamH.innerText = "The score is draw";
  } else if (homeCurrentScore > guestCurrentScore) {
    leadingTeamH.innerText = "The leading team is HOME TEAM";
  } else {
    leadingTeamH.innerText = "The leading team is GUEST TEAM";
  }
};
