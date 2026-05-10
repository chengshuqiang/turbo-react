import type { Request, Response } from 'express'
import { readFileSync, writeFileSync } from 'fs'
import type { CreatePostDto } from '../types/index.ts'
import { DATA_FILE } from '../config.ts'
import type { Router } from 'express'

interface Post {
  id: number
  title: string
  content: string
  authorId: number
}

function readPosts(): Post[] {
  const data = readFileSync(DATA_FILE, 'utf-8')
  return JSON.parse(data).posts
}

function writePosts(posts: Post[]): void {
  const fileData = readFileSync(DATA_FILE, 'utf-8')
  const data = JSON.parse(fileData)
  data.posts = posts
  writeFileSync(DATA_FILE, JSON.stringify(data, null, 2))
}

export function createPostRouter(Router: () => Router) {
  const router = Router()

  router.get('/', (_req: Request, res: Response) => {
    const posts = readPosts()
    res.json(posts)
  })

  router.get('/:id', (req: Request, res: Response) => {
    const posts = readPosts()
    const id = req.params.id!
    const post = posts.find((p: Post) => p.id === parseInt(id))
    if (post) {
      res.json(post)
    } else {
      res.status(404).json({ message: '文章不存在' })
    }
  })

  router.post('/', (req: Request, res: Response) => {
    const posts = readPosts()
    const newPost: Post = {
      id: posts.length > 0 ? Math.max(...posts.map((p: Post) => p.id)) + 1 : 1,
      ...(req.body as CreatePostDto)
    }
    posts.push(newPost)
    writePosts(posts)
    res.status(201).json(newPost)
  })

  router.put('/:id', (req: Request, res: Response) => {
    const posts = readPosts()
    const id = req.params.id!
    const index = posts.findIndex((p: Post) => p.id === parseInt(id))
    if (index !== -1) {
      const updateData = req.body as Record<string, unknown>
      posts[index] = { ...posts[index], ...updateData } as Post
      writePosts(posts)
      res.json(posts[index])
    } else {
      res.status(404).json({ message: '文章不存在' })
    }
  })

  router.delete('/:id', (req: Request, res: Response) => {
    const posts = readPosts()
    const id = req.params.id!
    const index = posts.findIndex((p: Post) => p.id === parseInt(id))
    if (index !== -1) {
      const deleted = posts.splice(index, 1)
      writePosts(posts)
      res.json(deleted[0])
    } else {
      res.status(404).json({ message: '文章不存在' })
    }
  })

  return router
}
