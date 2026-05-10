import type { Request, Response } from 'express'
import { readFileSync, writeFileSync } from 'fs'
import type { CreateUserDto } from '../types/index.ts'
import { DATA_FILE } from '../config.ts'
import type { Router } from 'express'

interface User {
  id: number
  name: string
  email: string
  role: string
}

function readUsers(): User[] {
  const data = readFileSync(DATA_FILE, 'utf-8')
  return JSON.parse(data).users
}

function writeUsers(users: User[]): void {
  const fileData = readFileSync(DATA_FILE, 'utf-8')
  const data = JSON.parse(fileData)
  data.users = users
  writeFileSync(DATA_FILE, JSON.stringify(data, null, 2))
}

export function createUserRouter(Router: () => Router) {
  const router = Router()

  router.get('/', (_req: Request, res: Response) => {
    const users = readUsers()
    res.json(users)
  })

  router.get('/:id', (req: Request, res: Response) => {
    const users = readUsers()
    const id = req.params.id!
    const user = users.find((u: User) => u.id === parseInt(id))
    if (user) {
      res.json(user)
    } else {
      res.status(404).json({ message: '用户不存在' })
    }
  })

  router.post('/', (req: Request, res: Response) => {
    const users = readUsers()
    const newUser: User = {
      id: users.length > 0 ? Math.max(...users.map((u: User) => u.id)) + 1 : 1,
      ...(req.body as CreateUserDto)
    }
    users.push(newUser)
    writeUsers(users)
    res.status(201).json(newUser)
  })

  router.put('/:id', (req: Request, res: Response) => {
    const users = readUsers()
    const id = req.params.id!
    const index = users.findIndex((u: User) => u.id === parseInt(id))
    if (index !== -1) {
      const updateData = req.body as Record<string, unknown>
      users[index] = { ...users[index], ...updateData } as User
      writeUsers(users)
      res.json(users[index])
    } else {
      res.status(404).json({ message: '用户不存在' })
    }
  })

  router.delete('/:id', (req: Request, res: Response) => {
    const users = readUsers()
    const id = req.params.id!
    const index = users.findIndex((u: User) => u.id === parseInt(id))
    if (index !== -1) {
      const deleted = users.splice(index, 1)
      writeUsers(users)
      res.json(deleted[0])
    } else {
      res.status(404).json({ message: '用户不存在' })
    }
  })

  return router
}
