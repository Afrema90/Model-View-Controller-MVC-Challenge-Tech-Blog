const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const description = document.querySelector('#description').value.trim();

  if (name && description) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
     document.location.replace('/');
    } else {
     alert('Failed to create tech');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/techs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete tech');
    }
  }
};

document
  .querySelector('.new-tech-form')
  .addEventListener('submit', newFormHandler);

  if (document.querySelector('.tech-list')){
    document
    .querySelector('.tech-list')
    .addEventListener('click', delButtonHandler);
   
  }
