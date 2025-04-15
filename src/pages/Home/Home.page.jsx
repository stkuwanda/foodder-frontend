import { useState } from 'react';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.component';
import Header from '../../components/Header/Header.component';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.component';
import AppDownload from '../../components/AppDownload/AppDownload.component';
import './Home.page.css';

function Home() {
  const [category, setCategory] = useState('All');

  return (
    <main>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
      <AppDownload />
    </main>
  )
}

export default Home;
