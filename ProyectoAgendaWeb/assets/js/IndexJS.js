const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

 
    if (username === 'hrodriguez' && password === '123') {
     
        window.location.href = './assets/pages/Contactos.html';
    } else {
    
        alert('Usuario o contraseña incorrectos. Por favor, intenta de nuevo.');
    }
});
