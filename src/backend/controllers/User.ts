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
        if (await connectDB()) {
            const { email, password, avatar, google } = data
            console.log(data)
            const hashedPassword = password ? await bcrypt.hash(password, 12) : ''
            const newUser = new User({
                email,
                password: hashedPassword,
                avatar,
                googleId: google || ""
            })
            await newUser.save()
            //   console.log(newUser)
            return newUser
        } else {
            return 'err bd not conected'
        }
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
        const result = await User.findOne({ email: email, googleId: googleId });
        if (result) {
            return result;
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
