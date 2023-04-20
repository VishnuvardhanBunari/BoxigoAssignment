import {Component} from 'react'
import './index.css'

class NewHouse extends Component {
  render() {
    const {EachMove} = this.props
    const {newFloorNo, newElevatorAvailability, newParkingDistance} = EachMove
    const numericValue = parseInt(newParkingDistance) * 0.3048
    const RoundParkingDistance = Math.round(numericValue)
    return (
      <div className="existing-house-div">
        <div className="old-floor-div">
          <p className="old-floor-no">Floor No.</p>
          <p className="old-floor-no-para">{newFloorNo}</p>
        </div>
        <div className="old-elevator">
          <p className="old-floor-no">Elevator Available.</p>
          <p className="old-floor-no-para">{newElevatorAvailability}</p>
        </div>
        <div className="old-distance-elevator">
          <p className="old-floor-no">
            Distance from Elevator / Staircase to truck
          </p>
          <p className="old-floor-no-para">{RoundParkingDistance} meters</p>
        </div>
      </div>
    )
  }
}
export default NewHouse
