import express from "express"

import {getAllUser, getUserById, createUser} from "../../../../controllers/Api/V1/Front/userController.js"


const router = express.Router();

router.get('/', getAllUser);
router.get('/:id', getUserById)
router.post('/', createUser)

export default router