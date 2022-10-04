import express from 'express'
import { login, logout, register } from '../controllers/auth.js'

const router = express.Router()

router.post('/register', register, login, logout)


export default router