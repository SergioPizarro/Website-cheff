const panels = document.querySelectorAll('.panel');
const panel1 = document.querySelector('.panel1');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {

  this.classList.toggle('open-active');

}

function probando() {

  this.classList.toggle('panel-foto1');
}
//panel1.addEventListener('click', probando)
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
//panels.forEach(panel => panel.addEventListener('mouseout', toggleOpen));

panels.forEach(panel => panel.addEventListener('click', toggleActive));
//panels.forEach(panel => panel.addEventListener('click', toggleActive));

console.log("HOLAAA")
