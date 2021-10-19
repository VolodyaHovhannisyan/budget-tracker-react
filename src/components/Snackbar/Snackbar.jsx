import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from 'react'
import useStyles from './styles'

const CustomizedSnackbar = ({ open, setOpen }) => {
    const classes = useStyles()

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return

        setOpen(false)
    }

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
        >
            <Alert onClose={handleClose} severity='success' elevation={6} variant="filled">
                Transaction successfully created.
            </Alert>
        </Snackbar>
    )
}

export default CustomizedSnackbar

