const logout = async function() {
    const res = await fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (res.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out. Please try again.');
    }
  };
  
  document
  .querySelector('#logout-link')
  .addEventListener('click', logout);