import express, {
  Application, Request, RequestHandler, Response
} from 'express'
import cors from 'cors'
import {
  authRoutes
} from './auth.route'
import {
  checkAuth
} from './auth.middleware'
import {
  contractRoutes
} from './contracts.route'
import {
  delay
} from './delay.middleware'

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

app.route('/api/auth/login').post(authRoutes.login)
app.route('/api/auth/logout').post(authRoutes.logout)

app.route('/api/contracts').get(contractRoutes.getContracts)
app.route('/api/contracts/:contractId').get(contractRoutes.getContract)
app.route('/api/contracts/:contractId').delete(contractRoutes.deleteContract)
app.route('/api/contracts').post(contractRoutes.createContract)
app.route('/api/contracts/:contractId').put(contractRoutes.updateContract)

const port = 9000
app.listen(port, () => {
  console.log(`HTTP REST API Server running at http://localhost: ${port}`)
})
