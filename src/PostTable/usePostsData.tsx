import { useEffect, useState } from 'react'
import { Post } from '../Types/dataType'

function usePostsData() {
  const [posts, setPosts] = useState<Post[]>([])
  const fetchPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error))
  }
  useEffect(() => {
    fetchPosts()
  }, [])

  return { posts, fetchPosts }
}

export default usePostsData
