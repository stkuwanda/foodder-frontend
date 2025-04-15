import {assets} from '../../assets/assets';
import './AppDownload.component.css';

function AppDownload() {
  return (
    <section id='app-download' className='app-download'>
      <p>For better experience download <br /> Foodder App</p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="Google Playstore brand icon image" />
        <img src={assets.app_store} alt="Apple App Store brand image icon" />
      </div>
    </section>
  )
}

export default AppDownload;
