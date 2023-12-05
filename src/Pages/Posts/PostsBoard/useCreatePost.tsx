import { useEffect, useState } from 'react'
import { Post } from '../../../constants/Types/dataType'
const { v4: uuidv4 } = require('uuid')

const useCreatePost = (post: Post, url: string) => {
  const [data, setData] = useState<Post | undefined>(undefined)
  const [error, setError] = useState(null)

  useEffect(() => {
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
        return res.json()
      })
      .then((res) => {
        setData(res)
      })
      .catch((err) => {
        setError(err.message)
      })
  }, [post, url])

  return { data, error }
}

export default useCreatePost
