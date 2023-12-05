export interface PostId {
  userId: number
  id: number
  title: string
  body: string
}

export interface Post {
  userId: number
  title: string
  body: string
}

export const url = 'https://jsonplaceholder.typicode.com/posts'
