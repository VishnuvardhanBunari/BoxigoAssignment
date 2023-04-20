import {Component} from 'react'
import DashBoard from '../DashBoard'
import MYMovesList from '../MyMovesList'
import './index.css'

class Home extends Component {
  state = {FormattedDataList: []}

  componentDidMount() {
    this.getAllProjectDetails()
  }

  getAllProjectDetails = async () => {
    // eslint-disable-next-line no-unused-vars
    const {FormattedDataList} = this.state
    const url = 'http://test.api.boxigo.in/sample-data/'
    const options = {
      METHOD: 'get',
    }
    const fetching = await fetch(url, options)
    const data = await fetching.json()
    const formattedData = data.Customer_Estimate_Flow.map(eachItem => ({
      callBack: eachItem.call_back,
      customStatus: eachItem.custom_status,
      dateCreated: eachItem.date_created,
      distance: eachItem.distance,
      estimateId: eachItem.estimate_id,
      estimateStatus: eachItem.estimate_status,
      moveDateFlexible: eachItem.move_date_flexible,
      movingFrom: eachItem.moving_from,
      movingOn: eachItem.moving_on,
      movingTo: eachItem.moving_to,
      newElevatorAvailability: eachItem.new_elevator_availability,
      newFloorNo: eachItem.new_floor_no,
      newParkingDistance: eachItem.new_parking_distance,
      oldElevatorAvailability: eachItem.old_elevator_availability,
      oldFloorNo: eachItem.old_floor_no,
      oldHouseAdditionalInfo: eachItem.old_house_additional_info,
      oldParkingDistance: eachItem.old_parking_distance,
      orderDate: eachItem.order_date,
      orderReviewed: eachItem.order_reviewed,
      packingService: eachItem.packing_service,
      propertySize: eachItem.property_size,
      serviceType: eachItem.service_type,
      status: eachItem.status,
      storageItems: eachItem.storage_items,
      totalItems: eachItem.total_items,
      unpackingService: eachItem.unpacking_service,
      userId: eachItem.user_id,
      items: eachItem.items,
      fromAddress: eachItem.from_address,
      toAddress: eachItem.to_address,
      inventory: eachItem.items.inventory,
    }))

    this.setState({FormattedDataList: formattedData})
  }

  render() {
    const {FormattedDataList} = this.state
    return (
      <div className="home-bg">
        <div className="first-bg">
          <DashBoard />
        </div>
        <div className="second-bg">
          <p className="my-moves-heading">My Moves</p>
          <ul>
            {FormattedDataList.map(EachMove => (
              <MYMovesList EachMove={EachMove} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Home
