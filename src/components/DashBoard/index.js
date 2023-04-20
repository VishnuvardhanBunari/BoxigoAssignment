import {Component} from 'react'
import {FaTruckMoving} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {RiLogoutCircleRLine, RiDatabaseFill} from 'react-icons/ri'
import './index.css'

class DashBoard extends Component {
  render() {
    return (
      <div className="dashboard-main-div">
        <div className="icon-main-div">
          <FaTruckMoving className="border-icon" />
          <p className="icon-name">MY MOVES</p>
        </div>
        <div className="icon-main-div">
          <CgProfile className="dashboard-icons" />
          <p className="icon-name">MY PROFILE</p>
        </div>
        <div className="icon-main-div">
          <RiDatabaseFill className="dashboard-icons" />
          <p className="icon-name">GET QUOTE</p>
        </div>
        <div className="icon-main-div">
          <RiLogoutCircleRLine className="dashboard-icons" />
          <p className="icon-name">LOGOUT</p>
        </div>
      </div>
    )
  }
}
export default DashBoard
