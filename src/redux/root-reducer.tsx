import { combineReducers } from "redux";
import dashboardReducer from "../features/Dashboard/Dashboards.slice";
import deviceReducer from "../features/Device/Devices.slice";
import managementReducer from "../features/Management/Managements.slice";
import numberlevelReducer from "../features/Number-level/NumberLevels.slice";
import reportReducer from "../features/Report/Reports.slice";
import serviceReducer from "../features/Service/Services.slice";
import userlogReducer from "../features/User-logs/UserLogs.slice";
import userReducer from "../features/User/Users.slice";

const rootReducer = combineReducers({
    dashboards: dashboardReducer,
    devices: deviceReducer,
    managements: managementReducer,
    numberlevels: numberlevelReducer,
    reports: reportReducer,
    services: serviceReducer,
    userlogs: userlogReducer,
    users: userReducer,
    
});

export default rootReducer;