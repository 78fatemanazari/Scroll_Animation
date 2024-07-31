const boxes = document.querySelectorAll(".box");

window.addEventListener('scroll', showBox);

function showBox(){
  const trigerBottom = window.innerHeight / 1.24;
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    if(boxTop < trigerBottom){
      box.classList.add('show')
    } else{
      box.classList.remove('show');
    }
  });
}