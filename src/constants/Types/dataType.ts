import { ReactNode } from 'react'

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export interface FormProps {
  setData: React.Dispatch<React.SetStateAction<Post[]>>
  handleClose: () => void
  userId: number
}

export interface PopupProps {
  open: boolean
  children: React.ReactElement
  handleClose: () => void
}
