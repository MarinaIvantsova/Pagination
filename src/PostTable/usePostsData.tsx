import { useEffect, useState } from 'react'

function usePostsData() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(data => setPosts(data))
          .catch(error => console.error('Error fetching posts:', error));
      }, []);

  return posts;
}

export default usePostsData
