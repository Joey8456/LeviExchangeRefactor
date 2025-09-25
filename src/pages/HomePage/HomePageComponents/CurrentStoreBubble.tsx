import { LargeBubble } from "./LargeBubbleContainer"
import saveReset from "../Assets/saveResetButton.png"
import '../HomePageCss/CurrentStore.css'
function CurrentStoreBubble(){



return(
    <LargeBubble> 
        <div className="CurrentStoreHeader">
        Current Store
        </div>
        <div className="CurrentStoreCard">
            <div className="StoreTotal">
            $1,000.21<br />
            ¥10,203
            </div>
            <button className="saveResetButton" >
              <img src={saveReset} className="saveResetImg"/>
            </button>
        </div>
    </LargeBubble>
)
}

export default CurrentStoreBubble