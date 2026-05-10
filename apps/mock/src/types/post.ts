export interface Post {
  id: number
  title: string
  content: string
  authorId: number
}

export interface CreatePostDto {
  title: string
  content: string
  authorId: number
}

export interface UpdatePostDto {
  title?: string
  content?: string
  authorId?: number
}
