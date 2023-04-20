import {Component} from 'react'
import './index.css'

class LastItemDetails extends Component {
  render() {
    const {LastItem} = this.props
    const {displayName, typeOptions, quantity} = LastItem
    return (
      <div className="last-items-div">
        <div className="display-name-quantity">
          <p className="display-name-last">{displayName}</p>
          <p className="quantity">{quantity}</p>
        </div>
        <p className="options">{typeOptions}</p>
      </div>
    )
  }
}
export default LastItemDetails
