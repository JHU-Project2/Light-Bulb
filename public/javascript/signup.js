async function signupFormHandler(event) {
    event.preventDefault();


    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();


    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        
        if (response.ok) {
            console.log('success');


            document.location.replace('/dashboard');

        } else {
            alert("Password needs to be 8 characters.");
        }
    }
}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);