import express from 'express'
import { isAuth } from '../../utils/auth.js'
import {
  getDiaries,
  updateDiary,
  deleteDiary,
  createDiary,
  getDiary,
} from '../controllers/diaries.js'

const router = express.Router()

router.route('/api/diaries').get(isAuth, getDiaries).post(isAuth, createDiary)
router
  .route('/api/diaries/:id')
  .put(isAuth, updateDiary)
  .delete(isAuth, deleteDiary)
  .get(isAuth, getDiary)

export default router
