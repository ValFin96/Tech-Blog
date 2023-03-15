const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    console.log(`${username}, ${password}`)

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        console.log(response);
        if (response.ok) {
            console.log('logged in');
            document.location.replace('/dashboard');
        } else {
            alert('Invalid Login Details');
        }
    }
};
document
    .querySelector('#loginBtn')
    .addEventListener('click', loginFormHandler);