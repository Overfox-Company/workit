import Icon from '@/components/UI/Icon'
import { Box } from '@mui/material'
import { NextPage } from 'next'

interface Props { }

const OptionsToNavBar: NextPage<Props> = ({ }) => {
    return <div style={{ display: 'flex', alignItems: 'center' }}>
        <Box display={'flex'} flexDirection={'row'} gap={1} >
            <Icon src='whiteboardIcon' size={22} />
            <Icon src='calendarIcon' size={22} />
            <Icon src='notificationIcon' size={22} />
        </Box>
    </div>
}

export default OptionsToNavBar