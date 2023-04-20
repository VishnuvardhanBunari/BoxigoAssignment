import {AiOutlineWarning} from 'react-icons/ai'
import './index.css'

const Disclaimer = () => (
  <div className="disclaimer-div">
    <AiOutlineWarning className="warning-icon" />
    <p className="warning-heading">Disclaimer:</p>
    <p className="warning-description">
      Please update your date before two days of shifting
    </p>
  </div>
)
export default Disclaimer
