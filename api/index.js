import express from 'express'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'
import { db } from './db.js';



const app = express();

app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)

app.get('/api/auth', (req, res) => {
    const sql = 'SELECT * FROM users'

    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result)
    })
})

app.get('/api/posts', (req, res) => {
    const sql = 'SELECT * FROM posts'

    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result)
    })
})

app.listen(3001, () => {
    console.log('Connected to server')
})
