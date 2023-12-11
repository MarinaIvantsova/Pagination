import { useEffect, useState } from 'react'
import { Post } from '../../../constants/Types/dataType'

function useFetchData(url: string) {
  const [data, setData] = useState<Post[]>([])
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not create a post')
        }
        return res.json()
      })
      .then((res) => {
        setData(res)
        setIsPending(false)
      })
      .catch((err) => {
        setError(err.message)
        setIsPending(false)
      })
  }, [url])

  return { data, isPending, error }
}

export default useFetchData
