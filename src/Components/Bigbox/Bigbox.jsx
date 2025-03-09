import './Bigbox.css'
import { Bigtext } from '../Bigtext/Bigtext'
import { Bigcards } from '../Bigcards/Bigcards'
import { Bigsearch } from '../Bigsearch/Bigsearch'
import { Bigbutton } from '../Bigbutton/Bigbutton'

export const Bigbox = () => {
  return (
    <div className="bigbox">
        <Bigtext/>
        <Bigcards/>
        <Bigsearch/>
        <Bigbutton/>
    </div>
  )
}
