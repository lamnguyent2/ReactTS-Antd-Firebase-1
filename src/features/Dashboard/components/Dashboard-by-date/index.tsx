import React from 'react';
import { Area } from '@ant-design/plots';
import { data } from './data';

export interface IDashboardByDateProps { }

const DashboardByDateComponent: React.FC<IDashboardByDateProps> = () => {

    const config = {
        data,
        xField: 'Date',
        yField: 'scales',
        xAxis: {
            range: [0, 1],
            tickCount: 4,
        },
        areaStyle: () => {
            return {
                fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
            };
        },
    };

    return (
        <div className='center-layout'>
            <Area {...config} style={{maxWidth: "734px", maxHeight: "348px", minHeight: "347px"}} />
        </div>
    );
};

export default DashboardByDateComponent;