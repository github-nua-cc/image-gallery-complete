let heroImage = document.getElementById("hero-image");
let links = document.getElementsByClassName("menu-item");
let selectedIndex = 0;
heroImage.src = links[selectedIndex].dataset.image;
for (let i = 0; i < links.length; i++) {
  links[i].onclick = handleClick;
}
heroImage.ontransitionend = onTransitionEnd;
function handleClick(event) {
  console.log(this)
  // simple switch
  // heroImage.src= this.dataset.image;
  let newIndex = returnIndex(this);
  if (newIndex != selectedIndex) {
    selectedIndex = newIndex;
    heroImage.style.opacity = 0;
    heroImage.style.transition = "opacity 0.2s";
  }
}
function onTransitionEnd(event){
  heroImage.src = links[selectedIndex].dataset.image;
  heroImage.style.opacity = 1;
}
function returnIndex(htmlImage) {
  for (let i = 0; i < links.length; i++) {
    if (links[i] == htmlImage) {
      return i;
    }
  }
  console.warn("image index not found");
  return -1;
}
