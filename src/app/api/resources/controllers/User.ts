import { CreateUserType } from '@/types/User';
import { connectDB } from '../database/MongoConnect';
import { User } from '../models/User';
import bcrypt from "bcryptjs";
import mongoose from 'mongoose';
interface getById {
    id: string
}
interface getByEmail {
    email: string
}
interface loginGoogle {
    email: string,
    googleId: string
}
interface loginCredentials {
    email: string,
    id: string
}
export const CreateUser = async (data: CreateUserType) => {
    try {
        await connectDB()

        const { email, password, avatar, google, name } = data
        const findUser = await User.findOne({ email: email })

        if (findUser) {
            return 'user already exist'
        }

        const hashedPassword = password ? await bcrypt.hash(password, 12) : ''
        const newUser = new User({
            firstTime: true,
            email,
            name,
            password: hashedPassword,
            avatar,
            googleId: google || ""
        })
        await newUser.save()
        //   console.log(newUser)
        return newUser

    } catch (e) {
        console.log(e)
        return e
    }
}
export const GetUserById = async (id: getById) => {
    try {
        const result = await User.findById(id)
        if (result) {
            return result
        } else {
            return "user not found"
        }
    } catch (e) {
        return e
    }

}
export const GetUserByEmail = async (email: getByEmail) => {
    try {
        const result = await User.findOne({ email: email })
        if (result) {
            return result
        } else {
            return "user not found"
        }
    } catch (e) {
        return e
    }

}
export const LoginGoogle = async ({ email, googleId }: loginGoogle) => {
    try {
        await connectDB()
        const resultUser = await User.findOne({ email: email });
        if (resultUser.password && !resultUser.googleId) {
            return 'update'
        }
        const resultUserWhitGoogleId = await User.findOne({ email, googleId });
        if (resultUserWhitGoogleId._id) {
            return resultUserWhitGoogleId;
        } else {
            return "Usuario no encontrado";
        }
    } catch (error) {
        return error;
    }
};
export const LoginCredentials = async ({ email, id }: loginCredentials) => {
    try {
        // Buscar el usuario por su correo electrónico en la base de datos
        const user = await User.findOne({ email });
        // Si el usuario no existe, retornar un mensaje de error
        if (!user) {
            return "Usuario no encontrado"
        }
        const objectId1 = new mongoose.Types.ObjectId(id);
        // Comparar la contraseña proporcionada con la contraseña almacenada en la base de datos
        const isPasswordMatch = objectId1.equals(user._id)
        // Si las contraseñas no coinciden, retornar un mensaje de error
        if (!isPasswordMatch) {
            return "Contraseña incorrecta";
        }
        // Si las contraseñas coinciden, el inicio de sesión es exitoso
        return user;
    } catch (error) {
        return error;
    }
}
export const UpdateGoogleId = async ({ email, googleId }: loginGoogle) => {
    await connectDB()
    const resultUser = await User.findOne({ email })
    if (resultUser.googleId) {
        return resultUser
    } else {
        resultUser.googleId = googleId
        await resultUser.save()
        return resultUser
    }
}
