const clockContainer = document.querySelector(".what_time");
const clockTitle = clockContainer.querySelector("h4");

function getTime(){
  const date = new Date();
  clockTitle.innerText = date;
}
function init(){
  getTime();
}

init();