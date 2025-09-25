import HomePageHeader from "./HomePageComponents/HomePageHeader"
import CurrentStoreBubble from "./HomePageComponents/CurrentStoreBubble"
import ConversionAndDateTime from "./HomePageComponents/ConversionAndDateTime"
import DailyTotal from "./HomePageComponents/DailyTotal"
import TripTotal from "./HomePageComponents/TripTotal"
import CartIconButton from "./HomePageComponents/CartIconButton"
import ItemInput from "./HomePageComponents/ItemInput"
import './HomePageCss/HomePage.css'
function HomePage(){
    return(
        <div className="HomePageDefault">
            <HomePageHeader/>
            <CurrentStoreBubble/>
            <ItemInput/>
            <ConversionAndDateTime/>
            <DailyTotal/>
            <TripTotal/>
            <CartIconButton/>
        </div>
    )
}

export default HomePage