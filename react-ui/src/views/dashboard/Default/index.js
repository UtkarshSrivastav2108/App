import React, { useEffect, useState } from 'react';
// material-ui
import { Typography } from '@material-ui/core';

// project imports
import MainCard from '../../../ui-component/cards/MainCard';
import Spreadsheet from '../../../ui-component/Main/Spreadsheet';



//-----------------------|| DEFAULT DASHBOARD ||-----------------------//

const Dashboard = () => {


    return (
        <>
            <br /> <br /><br /> <br /><br />
            <Spreadsheet style={{ marginTop: '100px' }} />
        </>
    );
};

export default Dashboard;
