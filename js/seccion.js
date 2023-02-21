const form = document.querySelector('#myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.querySelector('#exampleInputEmail1').value;
  const password = document.querySelector('#exampleInputPassword1').value;
  const checked = document.querySelector('#exampleCheck1').checked;

  const data = {
    email: email,
    password: password,
    checked: checked,
    name: name
  };

  localStorage.setItem('formData', JSON.stringify(data));
  
  // redireccionar a otra página
  window.location.href = '../index.html';
});