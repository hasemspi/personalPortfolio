import React from 'react';
import dashboardHeader from '../../../shared/dashboard/header/DashboardHeader';

const DashboardLayout = ({children}) => {
    return (
        <div>
            <dashboardHeader/>
            {children}
        </div>
    );
};

export default DashboardLayout;