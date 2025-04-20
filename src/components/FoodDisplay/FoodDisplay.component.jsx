import { useStoreContext } from '../../context/StoreContext/StoreContext.tools';
import FoodItem from '../FoodItem/FoodItem.component';
import './FoodDisplay.component.css';

function FoodDisplay({ category }) {
  const { foodList } = useStoreContext();
  return (
    <section className='food-display' id='food-display'> 
      <h2>Choose from our delicious meals</h2>
      <div className="food-display-list">
        {foodList.map(item => {
          const { _id, category: itemCategory, ...rest } = item;

          if (category === 'All' || itemCategory === category) {
						return <FoodItem key={item._id} id={_id} {...rest} />;
					}
        })}
      </div>
    </section>
  )
}

export default FoodDisplay;
