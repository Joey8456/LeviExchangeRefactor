import { LargeBubble } from "./LargeBubbleContainer"
import '../HomePageCss/CurrentStore.css'
function CurrentStoreBubble(){



return(
    <LargeBubble> 
            <div className="CurrentStoreHeader">
                Current Store
            </div>
            <div className="StoreTotal">
            $1,000.21<br />
            ¥10,203
          </div>
    </LargeBubble>
)
}

export default CurrentStoreBubble