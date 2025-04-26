document.getElementById('registration_form').addEventListener('submit', function(e) {
    e.preventDefault();

    let pan_number = document.getElementById('pan_number').value;
    let borrower_name = document.getElementById('borrower_name').value;
    let gender = document.getElementById('gender').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mobile').value;
    let dob = document.getElementById('dob').value;
    let password = document.getElementById('password').value;
    let terms_conditions = document.getElementById('terms_conditions').checked;

    if (validate_registration(pan_number, borrower_name, gender, email, mobile, dob, terms_conditions, password)) {
        alert('Registration successful! Visit your nearby Finfast office for further paperwork.');
    } else {
        document.getElementById('error_message').textContent = 'Please fill out all fields correctly.';
    }
});

function validate_registration(pan_number, borrower_name, gender, email, mobile, dob, terms_conditions, password) {
    // Simple validation logic (more advanced validation can be added)
    return pan_number && borrower_name && gender && email && mobile && dob && terms_conditions && password;
}