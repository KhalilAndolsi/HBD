const birthDate = new Date("Jun 06 2023 00:00:00").getTime();

let countDown = setInterval(() => {
  let nowDate = new Date().getTime();
  let dateDiff = birthDate - nowDate;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days < 10 ? `0${days}` : days;
  document.getElementById("hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.getElementById("minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.getElementById("seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(countDown);
    document.querySelector(".box").style.display = "none";
    document.querySelector(".title").style.display = "none";
    let msg = document.createElement("p");
    let msgText = document.createTextNode(`
    kol 3am w enta 7ay b1000 5ir 
    ou wasil feli ta3mil fih raw mafama 
    had kifik 5ali 3andik fi ro7ik  thi9a 
    kbira w ena nemin barcha li enta bech 
    yji nhar w tousil leli t7eb 3lih ♥
  `);
    msg.appendChild(msgText)
    msg.setAttribute("class", "msg")
    document.body.appendChild(msg)
  }
}, 1000);
