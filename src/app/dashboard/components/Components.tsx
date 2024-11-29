'use client';
import Icon from '@/components/UI/Icon';
import { GRAYINPUT, PAPERGRAY, PRIMARYDARK, SECONDARYDARK, TEXTDARK } from '@/constants/Colors';
import { ProjectsCard, TasksCard, TypographyProps } from '@/types/Layout';
import styled from '@emotion/styled';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Box, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { FC } from 'react';
import Skeleton from '@mui/material/Skeleton';
import ActivityIndicator from '@/components/UI/ActivityIndicator';
// //make the sidebar receive a prop who will change the width of the sidebar
export const SideBar = styled(motion.div)<{ variant: boolean }>((props) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 25,
  padding: "40px 20px",
  paddingTop: 0,
  width: props.variant ? 320 : 78,
  height: 'calc(100vh - 64px)',
  maxWidth: 240,
  backgroundColor: '#FAFAFC',
  transition: 'all 0.2s ease-in-out',
  overflow: 'hidden',
}));
export const Header = styled.div<{ variant: boolean }>((props) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 64,
  width: "100%",
  position: 'fixed',
  backgroundColor: '#FCFCFC',
  paddingRight: 40,
  paddingLeft: 12
}));

// export const SideBar = styled(Box)({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: 25,
//   padding: 40,
//   width: 387,
//   height: '100vh',
//   backgroundColor: '#FAFAFC',
// });

export const MobileSidebar = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 25,
  padding: 40,
  width: 387,
  height: '100vh',
  backgroundColor: '#FAFAFC',
  paddingTop: 10,
  paddingBottom: 10,
});

export const Title = styled(Typography)({
  fontWeight: 700,
  color: PRIMARYDARK,
  fontFamily: 'Roboto',
  fontSize: 16,
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
});

export const ListItem = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: 15,
  alignItems: 'center',
  fontWeight: 700,
  fontSize: 16,
  paddingLeft: 12,
  paddinY: 12,
  height: 46,
  borderRadius: 12,
  transition: 'all 0.1s ease-in-out',
  '&:hover': {
    cursor: 'pointer',
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

export const ProfilePic = styled.img({
  width: 'auto',
  height: 'auto',
  borderRadius: '100%',
});

export const WorkSpaces = styled(motion.div)({
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
  height: '100%',
  width: '100%',
  overflow: 'auto',

});

export const AddButton = styled.button({
  display: 'flex',
  flexDirection: 'row',
  gap: 12,
  alignItems: 'center',
  justifyContent: 'center',
  padding: '6px 12px',
  color: '#0B161F',
  borderRadius: 12,
  border: '1.5px solid #0B161F',
  cursor: 'pointer',
  fontSize: 14,
  fontWeight: 500,
  fontFamily: 'Roboto',
});

export interface TasksCardProps {
  data: TasksCard;
}

export const TasksCards: FC<TasksCardProps> = ({
  data
}) => {
  const { date,
    cardStatus,
    tasks,
    colors,
    setTaskInfo,
    taskInfo,
    projectImg, id } = data
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
  return (<Box
    sx={{

      borderRadius: "16px",
      display: 'flex',
      overflow: 'hidden',
      flexDirection: 'column',
      height: { md: '35vh', lg: '35vh', xl: '30vh' },
      width: { md: '17vw', lg: '17vw', xl: '16vw' },
      //  padding: '12px',
      boxShadow: '0 4px 24px 0 rgb(100,100,140,0.2)',
      paddingRight: 0,
    }}
  >
    <Box
      sx={{
        borderRadius: "16px 16px 0px 0",
        padding: 2,
        backgroundColor: PRIMARYDARK,
        paddingRight: '12px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Text sx={{ color: "white", fontSize: { md: 16, xl: 18 } }}>{id === 0 ? "Recientes" : id === 1 ? "Por vencer" : "Sin empezar"}</Text>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 1,
          cursor: 'pointer',
        }}
      >
        <Icon src='AddIcon' size={32} />
        <Text size={14} color='white' fontWeight={500}>
          {cardStatus}

          {tasks.filter((task) => task.status).length.toString() +
            '/' +
            tasks.length.toString()}
        </Text>
      </Box>
    </Box>
    <Box
      sx={{
        overflow: 'auto',
      }}
    >
      {tasks.map((task, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            padding: { md: '6px', xl: '12px' },

            gap: 1,
            borderBottom: 'solid 1px rgb(220,220,220)',
            alignItems: 'center',
            bgcolor: 'white',
          }}
        >


          <Image
            src={projectImg}
            alt='project Img'
            style={{
              borderRadius: 4,

              width: 32,
              height: 32,
            }}
          />
          {/* <Checkbox
              style={{ padding: 0 }}
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<TaskAltIcon style={{ fill: '#65954A' }} />}
              // if status is true show checked with defaultChecked
              defaultChecked={task.status}
              // when check change set the task status
              onChange={(e) => HandleCheck(index, e.target.checked)}
            />*/}
          <Text
            size={14}
            fontWeight={500}
            color={SECONDARYDARK}
            sx={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              width: '150px',
              fontSize: { md: 12, xl: 14 },
              textDecoration: 'none',
            }}
          >
            {task.description}
          </Text>
          {
            task.type && task.label ? <ActivityIndicator text={task.label} type={task.type} /> : null
          }

        </Box>
      ))}
    </Box>
  </Box>
  );
};
export interface ProjectsCardProps {
  data: ProjectsCard;
}

export const ProjectsCards: FC<ProjectsCardProps> = (
  { data }
) => {
  const { bannerImg,
    membersImg,
    projectName,
    projectDescription,
    projectImg
  } = data
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 4,
        height: 200,
        width: 250,
        backgroundColor: '#FFFFFF',
        position: 'relative',
        boxShadow: '0 4px 8px 7px #021C030E, 0 6px 20px 7px #021C0312',
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
            height: { md: 100, xl: 130 },
            width: 241,
          }}
        >
          <Image
            src={bannerImg}
            alt='project banner'
            fill
            objectFit='cover'
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
      <Box sx={{ paddingLeft: 2, paddingTop: 3, position: 'relative' }}>
        <Image
          src={projectImg}
          alt='project Img'
          style={{ position: 'absolute', top: '-30%', left: 15 }}
        />
        <Text size={16}>{projectName}</Text>
        <Text size={12} color='#646464' fontWeight={400}>
          {projectDescription}
        </Text>
      </Box>
    </Box>
  );
};
export const ProjectsCardsSkeleton = (

) => {

  return (
    <Skeleton
      sx={{ bgcolor: 'grey.700', borderRadius: 4 }}
      variant="rectangular"
      width={250}
      height={200}
    />
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
  paddingLeft: 0,
  fontSize: 16,
  fontWeight: 600,
});
