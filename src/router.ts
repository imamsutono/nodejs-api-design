import { Router } from 'express'
import { body } from 'express-validator'
import { createProduct, deleteProduct, getOneProduct, getProducts, updateProduct } from './handlers/product'
import { handleInputErrors } from './modules/middleware'

const router = Router()

/**
 * Product
 */
router.get('/product', getProducts)
router.get('/product/:id', getOneProduct)
router.put('/product/:id', body('name').isString(), handleInputErrors, updateProduct)
router.post('/product', body('name').isString(), handleInputErrors, createProduct)
router.delete('/product/:id', handleInputErrors, deleteProduct)

/**
 * Update
 */
router.get('/update', () => {})
router.get('/update/:id', () => {})
router.put('/update/:id',
  body('title').optional(),
  body('body').optional(),
  body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']),
  body('version').optional(),
  () => {}
)
router.post('/update',
  body('title').exists().isString(),
  body('body').exists().isString(),
  () => {}
)
router.delete('/update/:id', () => {})

/**
 * Update Point
 */
router.get('/updatepoint', () => {})
router.get('/updatepoint/:id', () => {})
router.put('/updatepoint/:id',
  body('name').isString(),
  body('description').isString(),
  body('updateId').exists().isString(),
  () => {}
)
router.post('/updatepoint', () => {})
router.delete('/updatepoint/:id', () => {})

export default router
