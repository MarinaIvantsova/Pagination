import { useState } from 'react'
import { Post } from '../../../constants/Types/dataType'
const { v4: uuidv4 } = require('uuid')

const useCreatePost = () => {
  const [error, setError] = useState<boolean | null>(null)

  const createPost = (post: Post, url: string) => {
    fetch(url, {
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
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not create a post')
        }
        setError(false)
        return res.json()
      })
      .catch((err) => {
        setError(err.message)
      })
  }

  return { error, createPost }
}

export default useCreatePost
