import './about.css';
import webimg from '../../assets/websiteimg.jpg'
export default function About(){
    return(
        <>
        <div className="about" id='aboutUs'>
            <div className="photo">
                <img src={webimg} alt="" />
            </div>
            <div className="abouttext">
                <h3>D Purushotham</h3>
                <p>(M.Com,Bed)</p>

            </div>
        </div>
        </>
    )
}