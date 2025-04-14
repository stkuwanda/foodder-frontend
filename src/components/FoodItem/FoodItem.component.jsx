import { useStoreContext } from '../../context/StoreContext/StoreContext.tools';
import { assets } from '../../assets/assets';
import './FoodItem.component.css';


function FoodItem({ id, name, price, description, image }) {
	const { cartItems, addToCart, removeFromCart } = useStoreContext();

	return (
		<div className='food-item'>
			<div className='food-item-img-container'>
				<img
					src={image}
					alt={`Image of ${name}.`}
					className='food-item-image'
				/>
				{!cartItems[id] ? (
					<img
						className='add'
						onClick={() => addToCart(id)}
						src={assets.add_icon_white}
						alt='white colored add icon'
					/>
				) : (
					<div className='food-item-counter'>
						<img
							src={assets.remove_icon_red}
							onClick={() => removeFromCart(id)}
							alt='Red remove icon image'
						/>
						<p>{cartItems[id]}</p>
						<img
							src={assets.add_icon_green}
							onClick={() => addToCart(id)}
							alt='Green add icon image'
						/>
					</div>
				)}
			</div>
			<div className='food-item-info'>
				<div className='food-item-name-rating'>
					<p>{name}</p>
					<img src={assets.rating_stars} alt='Image of rating stars' />
				</div>
				<p className='food-item-description'>{description}</p>
				<p className='food-item-price'>{price}</p>
			</div>
		</div>
	);
}

export default FoodItem;
