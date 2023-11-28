export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export interface FormProps {
  handleClose: () => void
  userId: number
  submitHandler: (newPost: Post) => void
}
