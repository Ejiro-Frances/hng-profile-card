function updateTime() {
  const utcTimeElement = document.getElementById("utcTime");
  const now = new Date();
  utcTimeElement.textContent = `UTC Time: ${
    now.toISOString().split("T")[1].split(".")[0]
  } UTC`;
}
setInterval(updateTime, 1000);
updateTime();

function toggleText() {
  const moreText = document.getElementById("more-text");
  // const shortText = document.getElementById("short-text");
  const textLoad = document.getElementById("text-loading");

  const btnText = document.getElementById("toggle-btn");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "inline";
    textLoad.style.display = "none";
    // shortText.style.display = "none";
    btnText.innerText = "Less";
  } else {
    moreText.style.display = "none";
    textLoad.style.display = "inline";
    // shortText.style.display = "inline";
    btnText.innerText = "More";
  }
}
