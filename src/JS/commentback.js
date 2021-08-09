function commentforward(){
    var container = document.getElementById('commentflex');

var x = container.scrollLeft;
  container.scrollTo({
    top: 0,
    left: x -= 940,
    behavior: 'smooth'
  });
}
export default commentforward;