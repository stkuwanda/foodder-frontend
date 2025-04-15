import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.component';
import Header from '../../components/Header/Header.component';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.component';
import AppDownload from '../../components/AppDownload/AppDownload.component';
import './Home.page.css';


function Home() {
  const [category, setCategory] = useState('All');
  const location = useLocation();

  useEffect(() => {
    // Scroll to the element with the ID from the fragment identifier
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location.hash])

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
