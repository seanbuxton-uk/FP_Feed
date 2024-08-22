document.getElementById('post-btn').addEventListener('click', function() {
    const content = document.getElementById('post-content').value;

    if(content) {
        const postsContainer = document.getElementById('posts-container');
        
        const newPost = document.createElement('div');
        newPost.className = 'post';
        newPost.innerHTML = `
            <div class="header">
                <img src="profile-pic.jpg" alt="Profile Picture">
                <div class="username">Development Account</div>
            </div>
            <div class="content">
                ${content}
            </div>
            <div class="footer">
                <div class="likes">
                    <span class="heart">&hearts;</span> 0
                </div>
            </div>
        `;
        
        postsContainer.prepend(newPost);

        document.getElementById('post-content').value = '';

        // Add like functionality
        newPost.querySelector('.likes').addEventListener('click', function() {
            const heart = this.querySelector('.heart');
            if (this.classList.contains('red')) {
                this.classList.remove('red');
            } else {
                this.classList.add('red');
            }
        });
    }
});
