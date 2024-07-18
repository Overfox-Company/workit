'use client';
import { PAPERGRAY, PRIMARYDARK, SECONDARYDARK } from '@/constants/Colors';
import { ProjectsCard, TasksCard, TypographyProps } from '@/types/Layout';
import styled from '@emotion/styled';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Box, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Image from 'next/image';
import React, { FC } from 'react';

export const SideBar = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 25,
  padding: 40,
  width: 387,
  height: '100vh',
  backgroundColor: '#FCF6F1',
});

export const Title = styled(Typography)({
  fontWeight: 700,
  color: PRIMARYDARK,
  fontFamily: 'Roboto',
  fontSize: 40,
});

export const Text: FC<TypographyProps> = ({
  children,
  sx,
  size,
  fontWeight,
  color,
}) => {
  return (
    <Typography
      sx={{ sx }}
      fontSize={size}
      fontWeight={fontWeight ? fontWeight : 600}
      fontFamily={'Roboto'}
      // choose the color of the text from the imported ones
      color={color}
    >
      {children}
    </Typography>
  );
};
export const List = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  width: 318,
});

export const ListItem = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: 15,
  alignItems: 'center',
  fontWeight: 600,
  fontSize: 16,
  paddingLeft: 12,
  paddinY: 12,
  height: 46,

  '&:hover': {
    cursor: 'pointer',
  },

  '&.active': {
    backgroundColor: '#0B161F',
    borderRadius: 12,
    color: '#FFFFFF',
  },
});

export const Select = styled.select({
  width: 318,
  padding: '8px 12px',
  borderRadius: 24,
  border: 'none',
  backgroundColor: '#FFFFFF',
  color: '#000000',
  fontSize: 18,
  fontWeight: 600,
  fontFamily: 'Roboto',
  cursor: 'pointer',
});

export const TextBox = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: 130,
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
  backgroundColor: '#FFFFFF',
  borderRadius: 24,
  padding: '8px',
  fontSize: 16,
  fontWeight: 600,
});

//should have the user name, search icon and notification icon
export const Header = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#FCF6F1',
  height: 120,
  width: '100%',
  paddingRight: 40,
});

export const ProfilePic = styled.img({
  width: 'auto',
  height: 'auto',
  borderRadius: '100%',
});

export const WorkSpaces = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '40px',
  backgroundColor: '#FEF0E4',
  borderRadius: 24,
  width: 'fit',
  height: '84%',
  maxHeight: 912,
  maxWidth: 'fit',
});

export const AddButton = styled.button({
  display: 'flex',
  flexDirection: 'row',
  gap: 12,
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px 16px',
  color: '#0B161F',
  borderRadius: 12,
  border: '1.5px solid #0B161F',
  cursor: 'pointer',
  fontSize: 18,
  fontWeight: 500,
  fontFamily: 'Roboto',
});

export const TasksCards: FC<TasksCard> = ({
  date,
  cardStatus,
  tasks,
  color,
  setTaskInfo,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: '#C7EBB3',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        minHeight: 264,
        minWidth: 308,
        padding: '16px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text size={24}>{date}</Text>
        <Text size={14} color='#6F6F70' fontWeight={500}>
          {cardStatus}
        </Text>
      </Box>
      {tasks.map((task, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            padding: '2px',
            borderRadius: 8,
            marginTop: 1,
            alignItems: 'center',
            bgcolor: task.status ? '#C7EBB3' : '#FEF0E4',
          }}
        >
          <Checkbox
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<TaskAltIcon />}
            // if status is true show checked with defaultChecked
            defaultChecked={task.status}
            // when check change set the task status
            onChange={(e) => {
              try {
                //first copy the tasks array
                const newTasks = [...tasks];
                //change the status of the task
                newTasks[index].status = e.target.checked;
                //set the new tasks array
                setTaskInfo(newTasks);
                console.log('Task status changed', newTasks);
              } catch (error) {
                console.log('Error', error);
              }
            }}
          />
          <Text size={14} fontWeight={500} color='#0B161F'>
            {task.description}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export const ProjectsCards: FC<ProjectsCard> = ({
  bannerImg,
  membersImg,
  projectName,
  projectDescription,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 8,
        minHeight: 220,
        minWidth: 241,
        backgroundColor: '#FFFFFF',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Box sx={{ borderRadius: 8, overflow: 'hidden', paddingBottom: 3 }}>
          <Image
            src={bannerImg}
            alt='project banner'
            width={241}
            height={110}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 0,
            alignItems: 'center',
            position: 'absolute',
            top: 12,
            left: 5,
          }}
        >
          {membersImg.map((member, index) => (
            <Image
              key={index}
              src={member}
              alt='members'
              width={32}
              height={32}
            />
          ))}
        </Box>
      </Box>
      <Box>
        <Text size={24}>{projectName}</Text>
        <Text size={16} color='#6F6F70'>
          {projectDescription}
        </Text>
      </Box>
    </Box>
  );
};
