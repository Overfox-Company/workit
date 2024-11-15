'use client'
import { PRIMARYDARK } from '@/constants/Colors'
import { AuthContext } from '@/context/AuthContext'
import { Avatar } from '@mui/material'
import { NextPage } from 'next'
import Image from 'next/image'
import { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled';
interface Props { }
const Container = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const RoundedContainer = styled.div`
  cursor: pointer;
  border-radius: 200px;
  background-color: rgba(130, 140, 160, 0.3);
  padding: 4px;
  gap: 2px;
  display: flex;
  align-items: center;
`;

const RelativeWrapper = styled.div`
  position: relative;
`;

const StatusIndicator = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 10px;
  width: 10px;
  border-radius: 200px;
  padding: 1px;
  border: solid 1px ${PRIMARYDARK};
  background-color: #2fff51;
`;

const AvatarComponent: NextPage<Props> = () => {
    const [openProfileOption, setOpenProfileOptions] = useState(false);
    const { user } = useContext(AuthContext);

    const handleToggle = () => {
        setOpenProfileOptions(!openProfileOption);
    };

    return (
        <Container>
            <RoundedContainer onClick={handleToggle}>
                <RelativeWrapper>
                    <Avatar
                        src={user.avatar ? user.avatar : undefined}
                        alt="profile pic"
                        sx={{ width: 28, height: 28 }}
                    >
                        {user.avatar ? null : user.name?.split('')[0]}
                    </Avatar>
                    <StatusIndicator />
                </RelativeWrapper>
                <motion.div
                    animate={{
                        rotate: openProfileOption ? 180 : 0,
                    }}
                    transition={{
                        duration: 0.3,
                    }}
                >
                    <Image src={'/assets/arrowfilters.svg'} width={16} height={16} alt="" />
                </motion.div>
            </RoundedContainer>
        </Container>
    );
};
export default AvatarComponent