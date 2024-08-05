

export type AddCompanyType = {
    nameCompany: string,
    bg?: string,
    email?: string,
    avatar?: string,
    id: string,
}
export interface CompanyType {
    bgColor?: string,
    _id?: string | undefined,
    nameCompany: string,
    bg: string | undefined,
    email: string | undefined,
    avatar: string | undefined,
    idOwner: string,
    name?: string,
    firstCompnayByOwner?: boolean | undefined

}
export const InitialCompany = {
    name: '',
    _id: '',
    nameCompany: '',
    bg: '',
    email: '',
    avatar: '',
    idOwner: '',
    firstCompnayByOwner: true
}
export interface EditCompany {
    id_user?: string,
    bgColor?: string,
    id_company: string,
    bg?: File,
    avatar?: File,
    name?: string,
    email?: string,
    workers?: string[],
} 