import '../HomePageCss/CartButton.css';
import cartPicture from '../Assets/cart.png'
function CartIconButton(){
    return(
        <button className="CartButton">
            <img src={cartPicture} className="CartPicture"/>
            <div className="CartQuantityDisplay">
                3
            </div>
        </button>
    )
}

export default CartIconButton