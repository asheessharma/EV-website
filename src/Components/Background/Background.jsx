import './Background.css' 
import video1 from "../../assets/video1.mp4"
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'





export default function Background({playstatus,herocount}) {
  if(playstatus){
    return (
      <video className='background' autoPlay loop muted>
        <source src={video1} type='video/mp4'/>
      </video>
    )
  }else if(herocount == 0){
    return <img src={image1} className='background  fade-in' alt="" />
  }
  else if(herocount == 1){
    return <img src={image2} className='background fade-in' alt="" />
  }
  else if(herocount == 2){
    return <img src={image3} className='background fade-in' alt="" />
  }
}
