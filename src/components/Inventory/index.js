import {Component} from 'react'
import {RiArrowDropDownLine} from 'react-icons/ri'
import InventoryItem from '../InventoryItem'
import './index.css'

class Inventory extends Component {
  state = {isActiveInventory: false}

  showInventoryItems = () => {
    // eslint-disable-next-line no-unused-vars
    const {isActiveInventory} = this.state
    this.setState(prevState => ({
      isActiveInventory: !prevState.isActiveInventory,
    }))
  }

  render() {
    const {EachInventoryItem} = this.props
    // eslint-disable-next-line no-unused-vars
    const {displayName, order, category} = EachInventoryItem
    const {isActiveInventory} = this.state
    const countItems = category.map(eachItem => eachItem.items.length)
    const totalCountItems = countItems.reduce((acc, num) => acc + num, 0)
    const InventoryOutput = isActiveInventory ? (
      <>
        <div className="inventory-item-div">
          <p className="furniture-name">
            {displayName} <span className="span-order"> {totalCountItems}</span>
          </p>
          <RiArrowDropDownLine
            className="drop-down-icon"
            onClick={this.showInventoryItems}
          />
        </div>
        <ul className="all-items-details-main-div">
          {category.map(EachDetailedItem => (
            <InventoryItem EachDetailedItem={EachDetailedItem} />
          ))}
        </ul>
      </>
    ) : (
      <div className="inventory-item-div">
        <p className="furniture-name">
          {displayName} <span className="span-order"> {totalCountItems}</span>
        </p>
        <RiArrowDropDownLine
          className="drop-down-icon"
          onClick={this.showInventoryItems}
        />
      </div>
    )
    return <>{InventoryOutput}</>
  }
}
export default Inventory
