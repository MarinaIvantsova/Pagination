import { useState } from 'react'
import { Post } from '../../../constants/Types/dataType'
const { v4: uuidv4 } = require('uuid')

const useCreatePost = async (post: any) => {
  const [newPost, setNewPost] = useState<Post | undefined>(undefined)

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: post.title,
        body: post.body,
        userId: post.userId,
        id: uuidv4(),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    const data = await response.json()
    setNewPost(data)
  } catch (error) {
    console.error('Error creating post:', error)
  }

  return newPost
}

export default useCreatePost
