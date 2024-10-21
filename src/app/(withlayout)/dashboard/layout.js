import DashboardHeader from "../../../shared/dashboard/header/DashboardHeader";
import DashboardFooter from './../../../shared/dashboard/footer/DashboardFooter';

const layout = ({children}) => {
    return (
        <div>
            <DashboardHeader/>
            {children}
            <DashboardFooter/>
           
        </div>
    );
};

export default layout;