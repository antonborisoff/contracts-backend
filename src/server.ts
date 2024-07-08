import express, {
  Application, Request, RequestHandler, Response
} from 'express'
import cors from 'cors'
import {
  checkAuth
} from './middleware/auth.middleware'
import {
  delay
} from './middleware/delay.middleware'
import {
  authRouter
} from './route/auth'
import {
  contractRouter
} from './route/countracts'

const app: Application = express()

app.use(cors({
  origin: true
}))
app.use(express.json() as RequestHandler)

app.route('/status').get((req: Request, res: Response) => {
  res.status(200).json({
    server: 'running'
  })
})

app.use('/api/*', checkAuth)
app.use('/api/*', delay)

app.use('/api/auth', authRouter)
app.use('/api/contracts', contractRouter)

const port = 9000
app.listen(port, () => {
  console.log(`HTTP REST API Server running at http://localhost: ${port}`)
})
