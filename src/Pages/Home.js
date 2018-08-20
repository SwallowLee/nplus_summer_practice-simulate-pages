import React from 'react'
import moment from 'moment'
import SelectBtn from '../Components/SelectBtn'
import Chart from '../Components/Chart'
import Transaction from '../Components/Transaction'
import LatestOrder from '../Components/LatestOrder'
import '../Css/Home.css'

const money = [
	{
		"date": "2018/07/24",
		"revenue": 52800,
		"cost": 34500,
		"income": 77555,
	},
	{
		"date": "2018/07/19",
		"revenue": 54000,
		"cost": 30000,
		"income": 77777,
	},
	{
		"date": "2018/07/18",
		"revenue": 54340,
		"cost": 30800,
		"income": 66666,
	},
	{
		"date": "2018/07/17",
		"revenue": 54870,
		"cost": 34000,
		"income": 55555,
	},
]

class Home extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			showstate: 'Weekly',
			fromdate: moment().add(-1, 'weeks').format('YYYY/MM/DD'),
			finaldate: moment().format('YYYY/MM/DD'),
		}
		this.handleChange = this.handleChange.bind(this)
		this.calculateDate = this.calculateDate.bind(this)
	}

	calRevenue = () => {
		console.log("here")
		let totalRev
		totalRev = 0
		money.forEach (
			x => moment(x.date).isAfter(this.state.finaldate)? console.log("after " + this.state.finaldate): 
							moment(x.date).isBefore(this.state.fromdate)? console.log("before " + this.state.fromdate):
									totalRev = totalRev + x.revenue
		)

		return(totalRev)
	}

	calCost = () => {
		let totalCost
		totalCost = 0
		money.forEach (
			x => moment(x.date).isAfter(this.state.finaldate)? console.log("after " + this.state.finaldate): 
							moment(x.date).isBefore(this.state.fromdate)? console.log("before " + this.state.fromdate):
									totalCost = totalCost + x.cost
		)

		return(totalCost)
	}

	calIncome = () => {
		let totalIncome
		totalIncome = 0
		money.forEach (
			x => moment(x.date).isAfter(this.state.finaldate)? console.log("after " + this.state.finaldate): 
							moment(x.date).isBefore(this.state.fromdate)? console.log("before " + this.state.fromdate):
									totalIncome = totalIncome + x.income
		)

		return(totalIncome)
	}

	handleChange(e) {
		this.setState({showstate: e})
	}

	calculateDate() {
		if( this.state.showstate === 'Daily')
		{
			let findate = moment().format('YYYY/MM/DD')
			let startdate = moment().add(-1, 'days').format('YYYY/MM/DD')

			this.setState({fromdate: startdate, finaldate: findate})
		}
		else if( this.state.showstate === 'Weekly')
		{
			let findate = moment().format('YYYY/MM/DD')
			let startdate = moment().add(-1, 'weeks').format('YYYY/MM/DD')

			this.setState({fromdate: startdate, finaldate: findate})
		}
		else if( this.state.showstate === 'Monthly')
		{
			let findate = moment().format('YYYY/MM/DD')
			let startdate = moment().add(-1, 'months').format('YYYY/MM/DD')

			this.setState({fromdate: startdate, finaldate: findate})
		}
		else if( this.state.showstate === 'Yearly')
		{
			let findate = moment().format('YYYY/MM/DD')
			let startdate = moment().add(-1, 'years').format('YYYY/MM/DD')

			this.setState({fromdate: startdate, finaldate: findate})
		}
	}

	render() {
		return (
			<div>
				<div className = "homeHeader">
					<div className = "overview">OVERVIEW</div>
					<div className = "totalDate">
						<input type = "date" className = "inputDate" format="yyyy/MM/dd" value = {this.state.fromdate}/>
						<div className = "triangle"></div> {/* triangle */}
						<input type = "date" className = "inputDate" format="yyyy/MM/dd" value = {this.state.finaldate}/>
					</div>
					<SelectBtn nowvalue = {this.state.showstate} change = {this.handleChange} dateRange = {this.calculateDate}/>
				</div>
				<div className = "totalBar">
					<div className = "totalBlock">
						<div className = "totalTitle">
							<i className="fas fa-hand-holding-usd"></i>
							<span>TOTAL REVENUE</span>
						</div>
						<div className = "revenue">
							{this.calRevenue()}
						</div>
					</div>
					<div className = "totalBlock">
						<div className = "totalTitle">
							<i className="fas fa-boxes"></i>
							<span>TOTAL COST</span>
						</div>
						<div className = "cost">
							{this.calCost()}
						</div>
					</div>
					<div className = "totalBlock">
						<div className = "totalTitle">
							<i className="fas fa-money-bill"></i>
							<span>NET INCOME</span>
						</div>
						<div className = "income">
							{this.calIncome()}
						</div>
					</div>
				</div>
				<Chart/>
				<Transaction/>
				<LatestOrder/>
			</div>
		)
	}
}

export default Home;