document.getElementById('sign_in_form').addEventListener('submit', function(e) {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (validate_sign_in(email, password)) {
        alert('Sign in successful');
    } else  {
        document.getElementById('error_message').textContent = 'Invalid email or password.';
        document.getElementById('error_message').style.opacity = '1';
    }
});

function validate_sign_in(email, password) {
    return email === 'user@example.com' && password === 'password123';
}