

export type AddCompanyType = {
    nameCompany: string,
    bg?: string,
    email?: string,
    avatar?: string,
    id: string,
}
export interface CompanyType {
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