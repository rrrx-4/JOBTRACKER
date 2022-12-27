import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from 'recharts'

const BarChartComponent = ({data}) => {
  return (
    <ResponsiveContainer width='100%' height={300}>
        <BarChart data={data} margin={{top:50}}>
            <CartesianGrid strokeDasharray='10 10'></CartesianGrid>
            <XAxis dataKey='date'></XAxis>
            <YAxis allowDecimals={false}></YAxis>
            <Tooltip></Tooltip>
            <Bar dataKey='count' fill='#3b82f6' barSize={75} ></Bar>
        </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartComponent