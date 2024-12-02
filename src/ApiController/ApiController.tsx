import { AddCompanyType, AddFile, EditCompany } from "@/types/Company";
import { CreateUserType, EditUser, loginUser, updateUserType } from "@/types/User";
import axios from "axios";



// Define the base URL for the API
const branch = process.env.NEXT_PUBLIC_IS_DEVELOP
export const Domain = process.env.NEXT_PUBLIC_PRODUCTION == 'true' ? branch : "http://localhost:3000/";

//THIS FILE NEED A REFACTOR, TO USERCONTROLLER, COMPANYCONTROLLER ETC
const Route = `${Domain}api`;

const api = axios.create({
    baseURL: Route,

});
const getToken = () => {
    const token = localStorage.getItem("token");
    return token;
};
// Enviar el token en cada solicitud
api.interceptors.request.use(async (config: any) => {
    const token = await getToken(); // Obtener el token de alguna manera
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

// Create an object to hold API methods
const ApiController = {
    //User routes
    registerUserForm: (data: CreateUserType) => api.post('/signup', data),
    Login: (data: loginUser) => api.post('/getUser', data),
    getServer: () => api.get('/getServer'),
    updateUser: (data: updateUserType) => api.post('/updateUser', data),
    editUser: (data: EditUser) => api.post('/editUser', data),

    //Company routes
    getCompanys: (data: { id_user: string }) => api.post("/getCompanyByOwner", data),
    addCompany: (data: AddCompanyType) => api.post('/addCompany', data),
    editCompany: (data: EditCompany) => api.post('/editCompany', data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    }),
    // Files
    uploadFiles: (data: AddFile) => api.post('/UploadFile', data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    }),
    //Projects
    addNewProjects: (data: any) => api.post("/addProject", data),
    getProjects: (id: string) => api.post("/getProjects", { id })
};


export default ApiController;
