function scrollback(){
    var container = document.getElementById('container');

var x = container.scrollLeft;
  container.scrollTo({
    top: 0,
    left: x -= 940,
    behavior: 'smooth'
  });
}


export default scrollback;