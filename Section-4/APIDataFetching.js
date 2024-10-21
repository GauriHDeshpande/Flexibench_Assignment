/**
 * Section 4: APIs and Web Scraping
Task 10: API Data Fetching
Use Python’s requests library to fetch data from a public API (e.g., https://jsonplaceholder.typicode.com/posts) and print the first 5 titles from the fetched JSON data.

 Example Output:
 Post 1 title: ...
 Post 2 title: ...
 */

 // Using Fetch API to get data from the public API
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
  // Loop through the first 5 posts and print the titles
  data.slice(0, 5).forEach((post, index) => {
    console.log(`Post ${index + 1} title: ${post.title}`);
  });
})
.catch(error => console.error('Error fetching data:', error));
