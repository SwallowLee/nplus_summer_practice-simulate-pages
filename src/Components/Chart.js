import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import '../Css/Chart.css'

const data = [
      {month: '25 July', revenue: 4000, cost: 2400, income: 2400},
      {month: '26 July', revenue: 3000, cost: 1398, income: 2210},
      {month: '27 July', revenue: 2000, cost: 9800, income: 2290},
      {month: '28 July', revenue: 2780, cost: 3908, income: 2000},
      {month: '29 July', revenue: 1890, cost: 4800, income: 2181},
      {month: '30 July', revenue: 2390, cost: 3800, income: 2500},
      {month: '31 July', revenue: 3490, cost: 4300, income: 2100},
];
class Chart extends React.Component {
	render () {
  	return (
  		<div className = "TotalChart" >
  			<div className = "chartTitle">
  				Activity
  			</div>
	    	<LineChart className = "LineChart" width={1130} height={406} data={data}
	            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
	       <XAxis dataKey="month"/>
	       <YAxis/>
	       <CartesianGrid strokeDasharray="3 3"/>
	       <Tooltip/>
	       <Line type="monotone" dataKey="cost" stroke="#D0021B"/>
	       <Line type="monotone" dataKey="revenue" stroke="#7ED321" />
	       <Line type="monotone" dataKey="income" stroke="#4A90E2" />
	      </LineChart>
      </div>
    );
  }
}

export default Chart;