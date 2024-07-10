document.getElementById('updateForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const userId = document.getElementById('userId').value;
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
  
    const data = {
      name: userName,
      email: userEmail
    };
  
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('User updated successfully');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Error updating user');
    });
  });
  