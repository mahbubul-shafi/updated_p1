import './Alert.css'
import { CiCircleAlert } from "react-icons/ci";

export const Alert = () => {
  return (
    <div className="alert">
        <CiCircleAlert/>
        <p>The web version does not display local chats. To access all features, please</p>
        <span>install the app.</span>
    </div>
  )
}
