import profileImg from '@/../public/assets/profileImg.png';
import {
  MemberStatus,
  TaskFilter,
  Text,
  WorkSpaces,
} from '@/app/dashboard/components/Components';
import {
  PAPERGRAY,
  PRIMARYDARK,
  SECONDARYDARK,
  TEXTDARK,
} from '@/constants/Colors';
import { Box, InputAdornment, TextField } from '@mui/material';
import Image from 'next/image';
export const MembersInfo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 3,
        marginTop: 2,
      }}
    >
      <Image src={profileImg} alt='member img' width={40} height={40} />
      <Text color={TEXTDARK}>Example@gmail.com</Text>
      <MemberStatus status='Aceptada' />
      <Text>Member</Text>
      <Text color={TEXTDARK}>Hace 10min</Text>
    </Box>
  );
};
