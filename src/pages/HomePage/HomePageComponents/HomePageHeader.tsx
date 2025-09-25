import '../HomePageCss/Header.css'
import tempHeader from '../Assets/BannerPlaceHolder.png'
import tempHeader2 from '../Assets/BannerPlaceHolder2.jpeg'
import tempHeader3 from '../Assets/BannerPlaceHolder3.jpg'
function HomePageHeader(){
    return(
      <>
      <div className="Header">
        <img src={tempHeader3} className="HeaderPicture"/>
      </div> 
      </>
    )
}

export default HomePageHeader