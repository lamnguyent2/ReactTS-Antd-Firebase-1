import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import DashboardFeature from './features/Dashboard';
import DeviceFeature from './features/Device';
import HomeFeature from './features/Home';
import ManagementFeature from './features/Management';
import NumberLevelFeature from './features/Number-level';
import ReportFeature from './features/Report';
import ServiceFeature from './features/Service';
import UserFeature from './features/User';
import UserLogsFeature from './features/User-logs';

export interface IApplicationProps {}

const App: React.FC<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
            <DashboardFeature />
            <DeviceFeature />
            <HomeFeature />
            <ManagementFeature />
            <NumberLevelFeature />
            <ReportFeature />
            <ServiceFeature />
            <UserFeature />
            <UserLogsFeature />
        </BrowserRouter>
    );
};

export default App;