const loginForm = document.getElementById('loginForm');
const messageDiv = document.getElementById('message');
const loginButton = document.getElementById('loginButton');
const spinner = loginButton.querySelector('.spinner-border');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    loginButton.firstChild.nodeValue = '';
    spinner.style.display = 'inline-block';
    loginButton.disabled = true;

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    setTimeout(() => {
        if (username === 'user' && password === 'pass') {
            messageDiv.textContent = 'Login successful!';
            messageDiv.classList.remove('text-danger');
            messageDiv.classList.add('text-success');
            messageDiv.style.display = 'block';

            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1000);
        } else {
            messageDiv.textContent = 'Invalid username or password!';
            messageDiv.classList.remove('text-success');
            messageDiv.classList.add('text-danger');
            messageDiv.style.display = 'block';
        }

        loginButton.firstChild.nodeValue = 'Login';
        spinner.style.display = 'none';
        loginButton.disabled = false;

        loginForm.reset();
    }, 1500);
});
