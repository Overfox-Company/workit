import { NextPage } from 'next'
import { ReactNode } from 'react'

interface Props { children: ReactNode }

const NoProjectCreated: NextPage<Props> = ({ children }) => {
    return <p style={{
        fontSize: 18,
        marginLeft: "1vw",
        fontWeight: 500,
        color: "#646464"
    }}>
        {children}
    </p>
}

export default NoProjectCreated