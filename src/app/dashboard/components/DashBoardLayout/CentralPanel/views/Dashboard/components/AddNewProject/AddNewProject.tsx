import { NextPage } from 'next'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Dispatch, SetStateAction } from 'react';
import { CardWhite } from '@/components/layout/Container';
import HeaderForms from '@/components/UI/HeaderForms';
import FormAddProjects from './components/Form';
import Scale from '@/components/animation/Scale';

interface Props { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }

const AddNewProject: NextPage<Props> = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    };
    return <Dialog
        style={{ borderRadius: 14, padding: 0 }}
        fullWidth={true}
        maxWidth={"sm"}
        open={open}
        onClose={handleClose}
    >
        <DialogContent style={{ padding: 0 }}>
            <CardWhite>
                <HeaderForms onClick={handleClose}>
                    Crear nuevo proyecto
                </HeaderForms>
                <FormAddProjects setOpen={setOpen} />
            </CardWhite>
        </DialogContent>


    </Dialog>


}

export default AddNewProject