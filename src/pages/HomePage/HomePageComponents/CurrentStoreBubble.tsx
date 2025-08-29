import { LargeBubble } from "./LargeBubbleContainer"
import '../HomePageCss/CurrentStore.css'
function CurrentStoreBubble(){



return(
    <LargeBubble> 
            <div className="CurrentStoreHeader">
                Current Store
            </div>
            <div className="StoreTotal">
            $USD place<br />
            ¥YEN Place
          </div>
    </LargeBubble>
)
}

export default CurrentStoreBubble