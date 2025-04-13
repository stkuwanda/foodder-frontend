import './ExploreMenu.component.css';
import { menu_list } from '../../assets/assets';

function ExploreMenu({ category, setCategory }) {
	return (
		<section id='explore-menu' className='explore-menu'>
			<h2>Explore our menu</h2>
			<p className='explore-menu-text'>
				Choose from a diverse menu featuring a delectable array of dishes. Our
				mission is to satisfy your cravings and elevate your dining experience,
				one delicious meal at a time.
			</p>
			<ul className='explore-menu-list'>
				{menu_list.map((item) => {
					return (
						<li key={item.id} className='explore-menu-list-item' onClick={() => setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)}>
							<img className={category === item.menu_name ? 'active' : undefined} src={item.menu_image} alt={`${item.menu_name} image`} />
							<p>{item.menu_name}</p>
						</li>
					);
				})}
			</ul>
			<hr />
		</section>
	);
}

export default ExploreMenu;
