'use client';
import Icon from '@/components/UI/Icon';
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
      sx={{ ...sx }}
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
  gap: 36,
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
  colors,
  setTaskInfo,
  taskInfo,
  projectImg,
}) => {
  const HandleCheck = (index: number, checked: boolean) => {
    try {
      const newTasks = [
        {
          date,
          tasks: tasks.map((task, i) =>
            i === index ? { ...task, status: checked } : task
          ),
        },
      ];
      //find the task that was checked in taskInfo and change the status, with setTaskInfo update the taskInfo without changing the other tasks
      taskInfo.map((task) => {
        if (task.date === date) {
          task.tasks = newTasks[0].tasks;
        }
      });
      setTaskInfo([...taskInfo]);
    } catch (error) {
      console.log('Error', error);
    }
  };
  return (
    <Box
      sx={{
        backgroundColor: colors,
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 1,
            cursor: 'pointer',
          }}
        >
          <Icon src='AddIcon' size={24} />
          <Text size={14} color='#6F6F70' fontWeight={500}>
            {cardStatus}
          </Text>
        </Box>
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
            bgcolor: task.status ? null : '#FEF0E4',
          }}
        >
          <Checkbox
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<TaskAltIcon style={{ fill: '#65954A' }} />}
            // if status is true show checked with defaultChecked
            defaultChecked={task.status}
            // when check change set the task status
            onChange={(e) => HandleCheck(index, e.target.checked)}
          />
          <Text
            size={14}
            fontWeight={500}
            color={task.status ? '#65954A' : '#0B161F'}
            sx={{
              textDecoration: task.status ? 'line-through' : 'none',
              textDecorationThickness: '0.5px',
            }}
          >
            {task.description}
          </Text>
          <Image
            src={projectImg}
            alt='project Img'
            style={{
              borderRadius: '100%',
              marginLeft: 'auto',
              marginRight: 4,
              width: 24,
              height: 24,
            }}
          />
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
  projectImg,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 4,
        minHeight: 220,
        minWidth: 241,
        backgroundColor: '#FFFFFF',
        position: 'relative',
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
        <Box
          sx={{
            borderRadius: 4,
            overflow: 'hidden',
            height: 130,
            width: 241,
          }}
        >
          <Image
            src={bannerImg}
            alt='project banner'
            fill={true}
            style={{ borderTopRightRadius: 16, borderTopLeftRadius: 16 }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            gap: 0,
            top: 12,
            left: 15,
            backgroundColor: '#0B161F80',
            borderRadius: 100,
            padding: 0.5,
          }}
        >
          {membersImg.slice(0, 3).map((member, index) => (
            <Image
              key={index}
              src={member}
              alt='member img'
              width={24}
              height={24}
              style={{
                borderRadius: '100%',
                position: 'relative',
                zIndex: membersImg.length - index,
                left: index * -8,
              }}
            />
          ))}
        </Box>
      </Box>
      <Box sx={{ paddingLeft: 2, paddingTop: 3 }}>
        <Text size={16}>{projectName}</Text>
        <Text size={12} color='#646464' fontWeight={400}>
          {projectDescription}
        </Text>
      </Box>

      <Image
        src={projectImg}
        alt='project Img'
        style={{ position: 'absolute', top: 110, left: 15 }}
      />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 24,
          height: 24,
          borderRadius: '100%',
          backgroundColor: '#C7EBB34D',
          position: 'absolute',
          zIndex: 0,
          left: 67,
          top: 16,
        }}
      >
        <Text
          size={8}
          color='#FFFFFF'
          fontWeight={500}
          sx={{
            borderRadius: '100%',
            padding: '4px',
            position: 'relative',
            zIndex: 0,
          }}
        >
          {membersImg.length > 3 ? `+${membersImg.length - 3}` : ''}
        </Text>
      </Box>
    </Box>
  );
};

export const TaskFilter = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: 12,
  alignItems: 'center',
  cursor: 'pointer',
  borderRadius: 24,
  padding: '8px',
  fontSize: 16,
  fontWeight: 600,
});
