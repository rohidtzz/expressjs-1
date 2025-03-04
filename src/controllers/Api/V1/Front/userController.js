
import User from "../../../../models/user.js"

import bcrypt from "bcrypt"

export const getAllUser = async (req, res) => {
    try{
        const user = await User.findAll()
        res.json(user)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}

export const getUserById = async (req, res) => {
    try{

        const user = await User.findByPk(req.params.id)
        
        if(user == null){
            res.status(404).json({message: "kosong"})
        }

        res.json(user)

    }catch(error){
        res.status(500).json({message: error.message})
    }
}

export const createUser = async (req, res) => {
    
    try{

        const password = await bcrypt.hash(req.body.password, 12)

        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: password,
        });

        res.json({message: "berhasil membuat user"})

        
    } catch(error){
        res.status(500).json({message: error.message})
    }

}