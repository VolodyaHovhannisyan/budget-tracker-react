import { Card, CardContent, CardHeader, Divider, Grid, Typography } from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles'
import React, { useContext } from 'react'
import Form from '../Form/Form'
import useStyles from './styles'
import  Lista  from '../List/Lista'
import { ExpenseTrackerContext } from '../../context/context'
import InfoCard from '../InfoCard'
const Main = () => {
    const classes = useStyles()
   
    const { balance } = useContext(ExpenseTrackerContext)

    return (
        <Card className={classes.root}>
            <CardHeader title='Expense Tracker' subheader='Powered By Speechly' />
            <CardContent>
                <Typography align='center' variant='h5' >Total Balance ${balance}</Typography>
                <Typography variant='subtitle1' style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    <InfoCard />
                </Typography>
                <Divider className={classes.divider} />
                <Form />
            </CardContent>
            <CardContent className={classes.CardContent}>
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <Lista />
                    </Grid>
                </Grid> 
            </CardContent>
        </Card>
    )
}

export default Main

