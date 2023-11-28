import { useEffect, useState } from 'react'
import { Post } from '../../../constants/Types/dataType'

function usePostsData() {
  const [posts, setPosts] = useState<Post[]>([])

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  }
  const initData = async () => {
    try {
      const data = await fetchPosts()
      setPosts(data)
    } catch (error) {
      console.error('Error initializing data:', error)
    }
  }

  useEffect(() => {
    initData()
  }, [])

  return { posts, fetchPosts }
}

export default usePostsData
