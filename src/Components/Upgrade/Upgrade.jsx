import './Upgrade.css'
import { FaAirbnb } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import pic from '../../assets/images/jessica.png'

export const Upgrade = () => {
  return (
    <div className="upgrade">
        <div className="upgrade-box-1">
            <h2>Upgrade to premium</h2>
            <p>Make the most of all features!</p>
            <button>Upgrade plan</button>
        </div>
        <div className="upgrade-box-2">
            <FaAirbnb/>
            <span>Flow AI Templates</span>
        </div>
        <div className="upgrade-box-3">
        <div className="upgrade-box-3-left">
            <img src={pic} alt="" />
            <span>Jessica Mills</span>
        </div>
        <div className="upgrade-box-3-right">
            <FiSettings/>
        </div>
        </div>
    </div>
  )
}
