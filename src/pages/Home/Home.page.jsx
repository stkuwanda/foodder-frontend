import { useState } from 'react';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.component';
import Header from '../../components/Header/Header.component';
import './Home.page.css';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.component';

function Home() {
  const [category, setCategory] = useState('All');

  return (
    <main>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
    </main>
  )
}

export default Home;
