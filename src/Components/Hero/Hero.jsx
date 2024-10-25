import './Hero.css'
import arrow from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'



export default function Hero({ heroData, setherocount, herocount, setplaystatus, playstatus }) {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrow} alt='arrow' />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={() => { setherocount(0) }} className={herocount === 0 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => { setherocount(1) }} className={herocount === 1 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => { setherocount(2) }} className={herocount === 2 ? "hero-dot orange" : "hero-dot"}></li>
        </ul>
        <div className="hero-play">
          <img onClick={()=>setplaystatus(!playstatus)} src={playstatus ? pause_icon : play_icon}  alt="" />
          <p>See the video</p>
        </div>
      </div>
    </div>
  )
}
