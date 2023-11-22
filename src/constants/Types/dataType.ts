export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export interface FormProps {
  posts: Post[]
  setMyData: React.Dispatch<React.SetStateAction<Post[]>>
  open: boolean
  handleClose: () => void
}
