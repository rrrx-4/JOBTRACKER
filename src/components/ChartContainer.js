import AreaChart from "./AreaChart";
import BarChart from "./BarChart";
import Wrapper from "../assets/wrappers/ChartsContainer";
import { useState } from "react";
import { useSelector } from "react-redux";

const ChartContainer = () => {

    const [barChart, setBarChart] = useState(true);
    const {monthlyApplications: data} = useSelector((store)=>store.allJobs)

return (
    <Wrapper>
        <h4>Monthly Applications</h4>
        <button type='button' onClick={()=>setBarChart(!barChart)} >{barChart?'Area Chart':'Bar Chart'}</button>
        {barChart? <BarChart data={data} ></BarChart>: <AreaChart data={data} ></AreaChart>}
    </Wrapper>
)
}

export default ChartContainer