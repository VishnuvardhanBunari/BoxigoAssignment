import {Component} from 'react'
import ExistingHouse from '../ExistingHouse'
import NewHouse from '../NewHouse'
import Inventory from '../Inventory'
import './index.css'

class DetailedView extends Component {
  render() {
    const {isActive, EachMove} = this.props
    const {inventory} = EachMove
    const DetailedViewDiv = (
      <>
        <div className="additional-div">
          <p className="additional-heading">Additional Information</p>
          <button type="button" className="additional-button">
            Edit Additional Info
          </button>
        </div>
        <p className="text">Text</p>
        <div className="house-details-div">
          <p className="additional-heading">House Details</p>
          <button type="button" className="additional-button">
            Edit House Details
          </button>
        </div>
        <p className="existing-heading">Existing House Details</p>
        <ExistingHouse EachMove={EachMove} />
        <p className="existing-heading">New House Details</p>
        <NewHouse EachMove={EachMove} />
        <div className="house-details-div">
          <p className="additional-heading">Inventory Details</p>
          <button type="button" className="additional-button">
            Edit inventory
          </button>
        </div>
        <ul className="first-ul">
          {inventory.map(EachInventoryItem => (
            <Inventory EachInventoryItem={EachInventoryItem} />
          ))}
        </ul>
      </>
    )
    const Output = isActive ? DetailedViewDiv : null
    return <div>{Output}</div>
  }
}
export default DetailedView
