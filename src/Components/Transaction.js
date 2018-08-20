import React from 'react'
import '../Css/Transaction.css'

const data = [
	{
		"website": "Facebook.com",
		"view": "4920",
		"grow": 0.2,
		"last": "3936",
	},
	{
		"website": "Google.com",
		"view": "3500",
		"grow": 0.15,
		"last": "2975",
	},
	{
		"website": "Shopify.com",
		"view": "35,200",
		"grow": -0.12,
		"last": "39,424",
	},
	{
		"website": "Wordpress.com",
		"view": "430",
		"grow": -0.80,
		"last": "774"
	},
]

class Transaction extends React.Component {
	render(){
		return(
			<div className = "Transaction">
				<span className = "transactionTitle">
					Transaction Website
				</span>
				<table className = "websiteTable">
				<tr className = "transaction-item transaction-hr">
					<td>
						<i className="website_logo fab fa-facebook-square"></i>
					</td>
					<td className = "websiteTitle">
						Facebook.com
					</td>
					<td className = "websiteView">
						{data[0].view}
					</td>
					{
						data[0].grow>0?
						<td className = "grow up">	
							
							<i className="arrow fas fa-arrow-up"></i>
							<span>{data[0].grow*100}%</span>
						</td>
						:
						<td className = "grow down">
							<i className="arrow fas fa-arrow-down"></i>
							<span>{-data[0].grow*100}%</span>
						</td>
					}
				</tr>
				<tr className = "transaction-item transaction-hr">
					<td>
						<i className="website_logo fab fa-google"></i>
					</td>
					<td className = "websiteTitle">
						Google.com
					</td>
					<td className = "websiteView">
						{data[1].view}
					</td>
					{
						data[1].grow>0?
						<td className = "grow up">
							<i className="arrow fas fa-arrow-up"></i>
							<span>{data[1].grow*100}%</span>
						</td>
						:
						<td className = "grow down">
							<i className="arrow fas fa-arrow-down"></i>
							<span>{-data[1].grow*100}%</span>
						</td>
					}
				</tr>
				<tr className = "transaction-item transaction-hr">
					<td>
						<i className="website_logo fas fa-shopping-bag"></i>
					</td>
					<td className = "websiteTitle">
						Shopify.com
					</td>
					<td className = "websiteView">
						{data[2].view}
					</td>
					{
						data[2].grow>0?
						<td className = "grow up">
							<i className="arrow fas fa-arrow-up"></i>
							<span>{data[2].grow*100}%</span>
						</td>
						:
						<td className = "grow down">
							<i className="arrow fas fa-arrow-down"></i>
							<span>{-data[2].grow*100}%</span>
						</td>
					}
				</tr>
				<tr className = "transaction-item">
					<td>
						<i className="website_logo fab fa-wordpress"></i>
					</td>
					<td className = "websiteTitle">
						Wordpress.com
					</td>
					<td className = "websiteView">
						{data[3].view}
					</td>
					{
						data[3].grow>0?
						<td className = "grow up">
							<i className="arrow fas fa-arrow-up"></i>
							<span>{data[3].grow*100}%</span>
						</td>
						:
						<td className = "grow down">
							<i className="arrow fas fa-arrow-down"></i>
							<span>{-data[3].grow*100}%</span>
						</td>
					}
				</tr>
				</table>

			</div>
		)
	}
}

export default Transaction;