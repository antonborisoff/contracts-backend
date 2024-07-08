import {
  Router
} from 'express'
import {
  contractHandlers
} from '../controller/contracts'

export const contractRouter = Router()

contractRouter.route('/').get(contractHandlers.getContracts)
contractRouter.route('/:contractId').get(contractHandlers.getContract)
contractRouter.route('/:contractId').delete(contractHandlers.deleteContract)
contractRouter.route('/').post(contractHandlers.createContract)
contractRouter.route('/:contractId').put(contractHandlers.updateContract)
