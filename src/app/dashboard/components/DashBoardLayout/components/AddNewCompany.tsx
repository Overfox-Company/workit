import Step4 from '@/app/firstTime/components/steps/step4'
import { NextPage } from 'next'
import { Dispatch, SetStateAction } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Step3 from '@/app/firstTime/components/steps/step3';
interface Props {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}

const AddNewCompany: NextPage<Props> = ({ open, setOpen }) => {
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <Step3 ds setOpen={setOpen} />
    </Dialog>

}

export default AddNewCompany