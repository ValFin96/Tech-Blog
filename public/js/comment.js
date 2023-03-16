const postId = document.querySelector('input[name="post-id"]').value;

const commentFormHandler = async (event) => {
    event.preventDefault();

    const description = document.querySelector('textarea[name="comment-body"]').value;

    if (description) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                postId,
                description
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    };
}

document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);