function addingEventListener() {
  const buttonclick = document.getElementById("button");

  function clickAlert() {
    alert("Button has been clicked!");
  }

  buttonclick.addEventListener("click", clickAlert);
}
