import {
  Router
} from 'express'
import {
  authHandlers
} from '../controller/auth'

export const authRouter = Router()

authRouter.route('/login').post(authHandlers.login)
authRouter.route('/logout').post(authHandlers.logout)
