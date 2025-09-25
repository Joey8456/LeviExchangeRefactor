import { LargeBubble } from "./LargeBubbleContainer"
import ManuelInput from "../Assets/writeIntrans.png"
import ScanInput from "../Assets/scanInTrans.png"
import '../HomePageCss/ItemInput.css' 
function ItemInput(){
    return(
        <LargeBubble>
            <div className="ItemInputCard">
            <button className="InputButton"> 
                <>Manual Input</>
                <img src={ManuelInput} className="ManuelInput"/>
            </button>
            <button className="InputButton">
                <>Scan Item</>
                <img src={ScanInput} className="ScanInput"/>
            </button>
            </div>
        </LargeBubble>
    )
}

export default ItemInput;