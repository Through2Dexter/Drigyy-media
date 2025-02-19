const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("display-none");
  }, 2000);
});

const handleOnMouseMove = e => {
  const {currentTarget: target} = e 
  const rect = target.getBoundingClientRect(),
  x=e.clientX - rect.left,
  y = e.clientY - rect.top;
  target.style.setProperty('--mouse-x', `${x}px`);
}


for(const card of document.querySelectorAll('.card')) {
  card.onmousemove = e => handleOnMouseMove(e)
}