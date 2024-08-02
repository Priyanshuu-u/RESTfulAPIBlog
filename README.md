<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>

<body>
    <h1>Blogger Project</h1>

   <h2>Overview</h2>
    <p>Welcome to my Blogger project! This application is built using Express and REST API, allowing users to create,
        read, update, and delete blog posts. This project marks my first foray into creating a REST API, and I’ve learned
        a tremendous amount throughout this journey.</p>

  <h2>Features</h2>
    <ul>
        <li><strong>Create Post</strong>: Add new blog posts with a title, content, and an optional image.</li>
        <li><strong>Read Posts</strong>: View a list of all blog posts and see the details of each individual post.</li>
        <li><strong>Edit Post</strong>: Update the content and image of existing blog posts.</li>
        <li><strong>Delete Post</strong>: Remove blog posts that are no longer needed.</li>
    </ul>

   <h2>Technologies Used</h2>
    <ul>
        <li><strong>Express</strong>: Web framework for Node.js.</li>
        <li><strong>EJS</strong>: Embedded JavaScript templating for rendering dynamic web pages.</li>
        <li><strong>UUID</strong>: For generating unique identifiers for each post.</li>
        <li><strong>Method-Override</strong>: To use HTTP verbs such as PUT and DELETE in places where the client only
            supports POST.</li>
    </ul>

  <h2>Installation</h2>
    <ol>
        <li>Clone the repository:
            <pre><code>git clone https://github.com/your-username/blogger-project.git</code></pre>
        </li>
        <li>Navigate to the project directory:
            <pre><code>cd blogger-project</code></pre>
        </li>
        <li>Install dependencies:
            <pre><code>npm install</code></pre>
        </li>
        <li>Start the server:
            <pre><code>npm start</code></pre>
        </li>
        <li>Open your browser and go to <code>http://localhost:8080</code> to see the application in action.</li>
    </ol>

   <h2>Usage</h2>
    <ul>
        <li>Navigate to <code>/posts</code> to view all posts.</li>
        <li>Use <code>/posts/new</code> to create a new post.</li>
        <li>Click on any post to view its details.</li>
        <li>Edit or delete posts using the respective buttons.</li>
    </ul>

  <h2>Contributing</h2>
    <p>Feel free to fork this project, submit issues, and send pull requests. Any feedback and contributions are highly
        appreciated!</p>


  <p>Thank you for checking out my Blogger project! I look forward to hearing your thoughts and suggestions. Happy
        coding! 🌟</p>
</body>

</html>
