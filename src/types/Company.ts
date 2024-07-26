

export type AddCompanyType = {
    nameCompany: string,
    bg?: string,
    email?: string,
    avatar?: string,
    id: string,
}
export interface CompanyType {

    nameCompany: string,
    bg: string | undefined,
    email: string | undefined,
    avatar: string | undefined,
    idOwner: string,

}