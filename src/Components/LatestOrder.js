import React from 'react'
import '../Css/LatestOrder.css'

const data = [
	{
		"name": "T-shirt",
		"date": "2018/8/1",
		"time": "15:30",
		"customer": "Bill Li",
		"cost": "25,000",
		"image": "http://www.caco4.url.tw/caco/CACO1/PD/ONA011_1200_8.jpg"
	},
	{
		"name": "Pants",
		"date": "2018/7/15",
		"time": "3:30",
		"customer": "Qute Girl",
		"cost": "45,500",
		"image": "http://www.caco4.url.tw/caco/CACO1/PD/ONC015_1200_11.jpg"
	},
	{
		"name": "Jacket",
		"date": "2018/7/5",
		"time": "20:00",
		"customer": "Cool Boy",
		"cost": "36,800",
		"image": "http://www.caco.url.tw/caco/PD/MNA008_1200_11.jpg"
	},
]

class LatestOrder extends React.Component{
	render(){
		return(
			<div className = "LatestOrder">
				<div className = "LatestTitle">
					Latest Orders
				</div>
				{
					data.map((x, index) => 
						<div className = "LatestBlock">
							<img src = {x.image} width = "100" height = "100"/>
							<div className = "productName">
								{x.name}
							</div>
							<div className = "buyclock">
								<i class="fas fa-clock"></i>
								<span className = "date">
									{x.date}
								</span>
								<span className = "date">
									{x.time}
								</span>
							</div>
							<div className = "customer">
								<i class="fas fa-male"></i>
								<span>
									{x.customer}
								</span>
							</div>
							<div className = "price">
								<div className = "total">
									Total
								</div>
								<div className = "ordercost">
									{x.cost}
								</div>
							</div>
							{
								index === data.length - 1? null: <hr className = "orderhr"/>
							}
						</div>
					)
				}
			</div>
		)
	}
}

export default LatestOrder;