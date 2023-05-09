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

  // ----------------------------------------------

  // Get the button and popup
var newPostBtn = document.getElementById("new-post-btn");
var popup = document.querySelector(".popup");

// When the user clicks the button, show the popup
newPostBtn.onclick = function() {
  popup.style.display = "block";
}

// When the user clicks the close button, hide the popup
var closeBtn = document.querySelector(".close");
closeBtn.onclick = function() {
  popup.style.display = "none";
}

// When the user clicks anywhere outside of the popup, hide it
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}

// ----------------------------------------------
// Need to work on the functionality to add new blog post in the popup

// When the user submits the form, create a new post and add it to the page
var submitBtn = document.getElementById("submit-post-btn");
submitBtn.onclick = function(event) {
  event.preventDefault();
  var title = document.getElementById("title").value;
  var category = document.getElementById("category").value;
  var content = document.getElementById("content").value;
  var date = new Date().toLocaleDateString();
  var newPost = { "title": title, "category": category, "content": content, "date": date };
  // Add code here to post the new data to the JSON file
  // Then, add code to append the new post to the p
  popup.style.display = "none";
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}
 