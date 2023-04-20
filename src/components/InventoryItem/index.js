import {Component} from 'react'
import LastItemDetails from '../LastItemDetails'
import './index.css'

class InventoryItem extends Component {
  render() {
    const {EachDetailedItem} = this.props
    const {displayName} = EachDetailedItem
    const {items} = EachDetailedItem
    return (
      <div className="last-item-main-div">
        <p className="item-main-name">{displayName}</p>
        <ul className="second-ul">
          {items.map(LastItem => (
            <LastItemDetails LastItem={LastItem} displayName={displayName} />
          ))}
        </ul>
      </div>
    )
  }
}
export default InventoryItem
