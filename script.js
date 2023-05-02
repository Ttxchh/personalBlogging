// Get the blog posts from the JSON file
fetch('mock-blog-data.json')
  .then(response => response.json())
  .then(data => {
    // Get the blog post container
    const blogPostsContainer = document.querySelector('.blog-posts-container');
    
    // Loop through the blog posts and generate HTML for the blog post cards
    data.forEach(blogPost => {
      // Create the blog post card
      const blogPostCard = document.createElement('div');
      blogPostCard.classList.add('blog-post-card');
      
      // Create the blog post card header
      const blogPostCardHeader = document.createElement('div');
      blogPostCardHeader.classList.add('blog-post-card-header');
      
      // Create the blog post card title
      const blogPostCardTitle = document.createElement('h2');
      blogPostCardTitle.classList.add('blog-post-card-title');
      blogPostCardTitle.textContent = blogPost.title;
      
      // Create the blog post card category
      const blogPostCardCategory = document.createElement('div');
      blogPostCardCategory.classList.add('blog-post-card-category');
      blogPostCardCategory.textContent = blogPost.category;
      
      // Append the title and category to the header
      blogPostCardHeader.appendChild(blogPostCardTitle);
      blogPostCardHeader.appendChild(blogPostCardCategory);
      
      // Create the blog post card content
      const blogPostCardContent = document.createElement('div');
      blogPostCardContent.classList.add('blog-post-card-content');
      blogPostCardContent.textContent = blogPost.content;
      
      // Create the blog post card footer
      const blogPostCardFooter = document.createElement('div');
      blogPostCardFooter.classList.add('blog-post-card-footer');
      blogPostCardFooter.textContent = `Posted on ${blogPost.date} by ${blogPost.author}`;
      
      // Append the header, content, and footer to the blog post card
      blogPostCard.appendChild(blogPostCardHeader);
      blogPostCard.appendChild(blogPostCardContent);
      blogPostCard.appendChild(blogPostCardFooter);
      
      // Append the blog post card to the blog posts container
      blogPostsContainer.appendChild(blogPostCard);
    });
  })
  .catch(error => console.error(error));

  // Get the "New Post" button
const newPostButton = document.querySelector('.new-post-button');

// Get the blog posts container
const blogPostsContainer = document.querySelector('.blog-posts-container');

// Add a click event listener to the "New Post" button
newPostButton.addEventListener('click', () => {
  // Prompt the user to enter the new blog post details
  const title = prompt('Enter the blog post title:');
  const category = prompt('Enter the blog post category:');
  const content = prompt('Enter the blog post content:');
  const author = prompt('Enter the blog post author:');
  const date = new Date().toLocaleDateString(); // Use the current date
  
  // Create the new blog post object
  const newBlogPost = { title, category, content, author, date };
  
  // Create the new blog post card
  const newBlogPostCard = document.createElement('div');
  newBlogPostCard.classList.add('blog-post-card');
  
  // Create the new blog post card header
  const newBlogPostCardHeader = document.createElement('div');
  newBlogPostCardHeader.classList.add('blog-post-card-header');
  
  // Create the new blog post card title
  const newBlogPostCardTitle = document.createElement('h2');
  newBlogPostCardTitle.classList.add('blog-post-card-title');
  newBlogPostCardTitle.textContent = newBlogPost.title;
  
  // Create the new blog post card category
  const newBlogPostCardCategory = document.createElement('div');
  newBlogPostCardCategory.classList.add('blog-post-card-category');
  newBlogPostCardCategory.textContent = newBlogPost.category;
  
  // Append the title and category to the header
  newBlogPostCardHeader.appendChild(newBlogPostCardTitle);
  newBlogPostCardHeader.appendChild(newBlogPostCardCategory);
  
  // Create the new blog post card content
  const newBlogPostCardContent = document.createElement('div');
  newBlogPostCardContent.classList.add('blog-post-card-content');
  newBlogPostCardContent.textContent = newBlogPost.content;
  
  // Create the new blog post card footer
  const newBlogPostCardFooter = document.createElement('div');
  newBlogPostCardFooter.classList.add('blog-post-card-footer');
  newBlogPostCardFooter.textContent = `Posted on ${newBlogPost.date} by ${newBlogPost.author}`;
  
  // Append the header, content, and footer to the new blog post card
  newBlogPostCard.appendChild(newBlogPostCardHeader);
  newBlogPostCard.appendChild(newBlogPostCardContent);
  newBlogPostCard.appendChild(newBlogPostCardFooter);
  
  // Prepend the new blog post card to the blog posts container
  blogPostsContainer.insertBefore(newBlogPostCard, blogPostsContainer.firstChild);
});
