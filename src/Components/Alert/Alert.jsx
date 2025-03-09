import './Alert.css'
import { CiCircleAlert } from "react-icons/ci";

export const Alert = () => {
  return (
    <div className="alert">
        <CiCircleAlert size={20}/>
        <p>The web version does not display local chats. To access all features, please</p>
        <button>install the app.</button>
    </div>
  )
}
