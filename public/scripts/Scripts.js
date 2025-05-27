// Alternar entre formularios
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showLoginBtn = document.getElementById('show-login');
const showRegisterBtn = document.getElementById('show-register');

showLoginBtn.addEventListener('click', () => {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    showLoginBtn.classList.add('active');
    showRegisterBtn.classList.remove('active');
});

showRegisterBtn.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    showLoginBtn.classList.remove('active');
    showRegisterBtn.classList.add('active');
});

// Manejar el formulario de inicio de sesión
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;
    const mensaje = document.getElementById('mensaje-login');

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `usuario=${encodeURIComponent(usuario)}&contrasena=${encodeURIComponent(contrasena)}`
        });
        const result = await response.text();
        mensaje.textContent = result;
        mensaje.style.color = result.includes('exitoso') ? 'green' : 'red';
    } catch (error) {
        mensaje.textContent = 'Error al conectar con el servidor';
        mensaje.style.color = 'red';
    }
});

// Manejar el formulario de registro
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nuevoUsuario = document.getElementById('nuevo-usuario').value;
    const nuevaContrasena = document.getElementById('nueva-contrasena').value;
    const mensaje = document.getElementById('mensaje-register');

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `nuevo-usuario=${encodeURIComponent(nuevoUsuario)}&nueva-contrasena=${encodeURIComponent(nuevaContrasena)}`
        });
        const result = await response.text();
        mensaje.textContent = result;
        mensaje.style.color = result.includes('exitoso') ? 'green' : 'red';
    } catch (error) {
        mensaje.textContent = 'Error al conectar con el servidor';
        mensaje.style.color = 'red';
    }
});