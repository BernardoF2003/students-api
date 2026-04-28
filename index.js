import database from './sqliteDAO.js'
import express from 'express' 
import cors from 'cors'

const app = express()
const port = 3009

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

/*
  API endpoint to get students
  URL: http://localhost:3009/students
  Method: GET
  Response: JSON array of students
*/

app.get('/students', (req, res) =>{
  let students = database.prepare('SELECT * FROM students').all()
  res.json(students)
})

app.post('/students', (req, res) => {
  const { name, course } = req.body
  database.prepare('INSERT INTO students (name, course) VALUES (?, ?)').run(name, course)
  res.status(201).json({ message: 'Student created' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
