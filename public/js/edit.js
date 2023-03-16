const postId = document.querySelector('input[name="post-id"]').value;

const editFormHandler = async function (event) {
    event.preventDefault();

    const title = dosument.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="post-body"]').value;

    await fetch(`/api/edit/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            content,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        console.log(title);
        console.log(content);
        document.location.replace('/dashboard')
    } else {
        alert('Failed to update.');
    }

    document.location.replace('/dashboard');
};

const deleteClickHandler = async function () {
    await fetch(`/api/post/${postId}`, {
        method: 'DELETE'
    });
    document.location.replace('/dashboard');
};

document.querySelector('#edit-post-form').addEventListener('submit', editFormHandler);
document.querySelector('#delete-btn').addEventListener('click', deleteClickHandler);

