import {Component} from 'react'
import './index.css'

class ExistingHouse extends Component {
  render() {
    const {EachMove} = this.props
    const {oldFloorNo, oldElevatorAvailability, oldParkingDistance} = EachMove
    const numericValue = parseInt(oldParkingDistance) * 0.3048
    const RoundParkingDistance = Math.round(numericValue)
    return (
      <div className="existing-house-div">
        <div className="old-floor-div">
          <p className="old-floor-no">Floor No.</p>
          <p className="old-floor-no-para">{oldFloorNo}</p>
        </div>
        <div className="old-elevator">
          <p className="old-floor-no">Elevator Available.</p>
          <p className="old-floor-no-para">{oldElevatorAvailability}</p>
        </div>
        <div className="old-distance-elevator">
          <p className="old-floor-no">
            Distance from Elevator / Staircase to truck
          </p>
          <p className="old-floor-no-para">{RoundParkingDistance} Meters</p>
        </div>
      </div>
    )
  }
}
export default ExistingHouse
