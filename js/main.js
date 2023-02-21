
// Al enviar el formulario, se guardar la información en el almacenamiento local del navegador:
document.querySelector('#button').addEventListener('click', function (event) {
    event.preventDefault();
    const formData = {
      checkIn: document.querySelector('#checkIn').value,
      checkOut: document.querySelector('#checkOut').value,
      adults: document.querySelector('select[aria-label="adults"]').value,
      children: document.querySelector('select[aria-label="children"]').value,
    };
    window.location.href = "./pages/booking.html";
    
    localStorage.setItem('formData', JSON.stringify(formData));
});
  
// De esta manera, la información seleccionada por el usuario estará disponible en la página de booking.html y podrá ser modificada si así lo desea.
window.addEventListener('load', function () {
    const formData = JSON.parse(localStorage.getItem('formData')) || {};
    const { checkIn, checkOut, adults, children } = formData;
    
    document.querySelector('#checkIn').value = checkIn || '';
    document.querySelector('#checkOut').value = checkOut || '';
    document.querySelector('select[aria-label="adults"]').value = adults || '';
    document.querySelector('select[aria-label="children"]').value = children || '';
  });

// Al enviar el formulario, se guardar la información en el almacenamiento local del navegador:

document.querySelector('#buttonTypeHotel').addEventListener('click', function (event) {
    event.preventDefault();
    const formData = {
      checkIn: document.querySelector('#checkIn').value,
      checkOut: document.querySelector('#checkOut').value,
      adults: document.querySelector('select[aria-label="adults"]').value,
      children: document.querySelector('select[aria-label="children"]').value,
      type: document.querySelector('#buttonTypeHotel').value
    };
    window.location.href = "../pages/contact.html";
    
    localStorage.setItem('formData', JSON.stringify(formData));
});

document.querySelector('#buttonTypeCabaña').addEventListener('click', function (event) {
    event.preventDefault();
    const formData = {
      checkIn: document.querySelector('#checkIn').value,
      checkOut: document.querySelector('#checkOut').value,
      adults: document.querySelector('select[aria-label="adults"]').value,
      children: document.querySelector('select[aria-label="children"]').value,
      type: document.querySelector('#buttonTypeCabaña').value
    };
    window.location.href = "../pages/contact.html";

    localStorage.setItem('formData', JSON.stringify(formData));
});

document.querySelector('#buttonTypeCamping').addEventListener('click', function (event) {
    event.preventDefault();
    const formData = {
      checkIn: document.querySelector('#checkIn').value,
      checkOut: document.querySelector('#checkOut').value,
      adults: document.querySelector('select[aria-label="adults"]').value,
      children: document.querySelector('select[aria-label="children"]').value,
      type: document.querySelector('#buttonTypeCamping').value
    };
    window.location.href = "../pages/contact.html";

    localStorage.setItem('formData', JSON.stringify(formData));
});

// De esta manera, la información seleccionada por el usuario estará disponible en la página de booking.html y podrá ser modificada si así lo desea.
window.addEventListener('load', function () {
    const formData = JSON.parse(localStorage.getItem('formData')) || {};
    const { checkIn, checkOut, adults, children, type } = formData;
    
    document.querySelector('#checkIn').value = checkIn || '';
    document.querySelector('#checkOut').value = checkOut || '';
    document.querySelector('select[aria-label="adults"]').value = adults || '';
    document.querySelector('select[aria-label="children"]').value = children || '';
    document.querySelector('input[name="type"][value="'+ type +'"]').checked = true;

  });


