import React from 'react'
import { withRouter,Link } from 'react-router-dom'
import '../Css/NavBar.css'

const NavItem = withRouter((props) => (
	<Link to={props.archor}>
		<div className={`navItem ${props.location.pathname===props.archor? 'active': 'nonactive'}`}>
			{props.name}
		</div>
	</Link>
))

class NavBar extends React.Component {
	render() {
		return (
			<div className='nav navstyle'>
  			<span className='head'>Shoptime</span>
  			<NavItem name='HOME' archor='/'/>
  			<NavItem name='ORDERS' archor='/orders'/>
  			<NavItem name='PRODUCTS' archor='/product'/>
  			<span className='admin'>ADMIN</span>
			</div>
		)
	}
}

export default NavBar;