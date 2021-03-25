document.querySelector('.button').addEventListener('click', function(event) {
  event.preventDefault();
  
  var real = document.querySelector('.real').value;
  document.querySelector('.dolar').textContent = '$' + Number(real * 5.0).toFixed(2);

  
});

