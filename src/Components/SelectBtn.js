import React from 'react'
import '../Css/SelectBtn.css'

class SelectBtn extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			showMenu : false,
		}

		this.handleClick = this.handleClick.bind(this);
		this.handleClick0 = this.handleClick0.bind(this);
		this.handleClick1 = this.handleClick1.bind(this);
		this.handleClick2 = this.handleClick2.bind(this);
		this.handleClick3 = this.handleClick3.bind(this);
		this.handleClick4 = this.handleClick4.bind(this);
	}

	handleClick(){
		this.setState({showMenu : true})
	}

	handleClick0(){
		this.props.change("Daily")
		this.props.dateRange
		this.setState({showMenu : false})
	}

	handleClick1(){
		this.props.change("Weekly")
		this.props.dateRange
		this.setState({showMenu : false})
	}

	handleClick2(){
		this.props.change("Monthly")
		this.props.dateRange()
		this.setState({showMenu : false})
	}

	handleClick3(){
		this.props.change("Yearly")
		this.props.dateRange()
		this.setState({showMenu : false})
	}

	handleClick4(){
		this.props.change("Constum")
		this.props.dateRange()
		this.setState({showMenu : false})
	}
	
	render(){
		return(
			<div className = "selectBtn">
				<div  className = "choosebtn">
					{this.props.nowvalue}
					<button className = "btn dropdown-toggle toggle" onClick = {this.handleClick}></button>
				</div>
				{
					this.state.showMenu?
					(
						<div className = "dropdownList">
							<button className = "listBtn" onClick = {this.handleClick0} >Daily</button>
							<button className = "listBtn" onClick = {this.handleClick1} >Weekly</button>
							<button className = "listBtn" onClick = {this.handleClick2} >Monthly</button>
							<button className = "listBtn" onClick = {this.handleClick3} >Yearly</button>
							<button className = "listBtn" onClick = {this.handleClick4} >Custom</button>
						</div>
					):
					(
						null
					)
				}
			</div>
		)
	}
}

export default SelectBtn;