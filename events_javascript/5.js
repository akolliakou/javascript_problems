document.addEventListener('DOMContentLoaded', function() {
  let main = document.querySelector('main');
  let sub = document.getElementById('sub');

  main.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('main')
  })

  sub.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    e.stopPropagation();
    alert('sub');
  })
});