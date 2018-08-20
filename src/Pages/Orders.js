import React from 'react'

class Orders extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			info: [{
				"ID": 0,
				"Customer": "曾皙梵",
				"Product List": [{
					"name": "卡哇伊 T-shirt",
					"price": 300,
				},{
					"name": "司岱伊露 shirt",
					"price": 180,
				}],
				"Add to Cart": ["2018/7/17", "14:35"],
				"Check-out": ["2018/7/19", "8:30"],
				"Address": "地球村世界路31巷5號",
				"Phone": "0912345678",
				"Email": "abc@gmail.com",
				"Status": "Paid",
			},{
				"ID": 1,
				"Customer": "茨姬徘",
				"Product List": [{
					"name": "鞋子",
					"price": 500
				},{
					"name": "項鍊",
					"price": 200
				},{
					"name": "帽子",
					"price": 80
				}],
				"Add to Cart": ["2018/7/10", "13:35"],
				"Check-out": ["", ""],
				"Address": "在這世上的某一個角落",
				"Phone": "0987654321",
				"Email": "good@gmail.com",
				"Status": "Unpaid",
			},{
				"ID": 2,
				"Customer": "載儀謌",
				"Product List": [{
					"name": "吸塵器",
					"price": 1200
				}],
				"Add to Cart": ["2018/7/1", "18:35"],
				"Check-out": ["2018/7/5", "16:30"],
				"Address": "你找不到我的哇哈哈哈哈",
				"Phone": "09XXXXXXXX",
				"Email": ">O<@gmail.com",
				"Status": "Shipping",
			},
		],
		}
	}
	render() {
		return(
			<div>
				<table>
					<tr>
						<th>Order ID</th>
						<th>Customer</th>
						<th>Product List</th>
						<th>Total</th>
						<th>Add to Cart</th>
						<th>Check-out</th>
						<th>Address</th>
						<th>Phone</th>
						<th>Email</th>
						<th>Status</th>
					</tr>
				</table>
			</div>
		)
	}
}

export default Orders;