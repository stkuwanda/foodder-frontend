import { useState } from 'react';
import { assets } from '../../assets/assets';
import './FoodItem.component.css';

function FoodItem({ id, name, price, description, image }) {
	const [itemCount, setItemCount] = useState(0);

	return (
		<div className='food-item'>
			<div className='food-item-img-container'>
				<img
					src={image}
					alt={`Image of ${name}.`}
					className='food-item-image'
				/>
				{!itemCount ? (
					<img
						className='add'
						onClick={() => setItemCount((prev) => ++prev)}
						src={assets.add_icon_white}
						alt='white colored add icon'
					/>
				) : (
					<div className='food-item-counter'>
						<img
							src={assets.remove_icon_red}
							onClick={() => setItemCount((prev) => --prev)}
							alt='Red remove icon image'
						/>
						<p>{itemCount}</p>
						<img
							src={assets.add_icon_green}
							onClick={() => setItemCount((prev) => ++prev)}
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
