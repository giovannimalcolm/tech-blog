const signupHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector('#username-input-signup');
    const passwordEl = document.querySelector('#password-input-signup');
  
    const res = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (res.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to sign up. Please try again.');
    }
  };
  
  document
    .querySelector('#signup-form')
    .addEventListener('submit', signupHandler);
  