import React from "react"
import SideMenu from "../../components/admin/SideMenu";
import { makeStyles, CssBaseline, ThemeProvider } from '@material-ui/core';
import Header from "../../components/admin/Header";
import PageHeader from '../admin/PageHeader';
import Employees from "../../pages/Employees/Employees"

const useStyles = makeStyles({
    appMain: {
        width: '100%',
        backgroundColor: "rgb(200,200,201)"
    }
})

const AdminUI = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.appMain}>
                {/* <Header /> */}
                <Employees />
            </div>
            <CssBaseline />
        </>
    )
}

export default AdminUI