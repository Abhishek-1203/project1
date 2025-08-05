import './headtext.css'
export default function Headtext({heading,para}){
    return(
        <>
        <div className="text">
            <h3>{heading}</h3>
            <p>{para}</p>
        </div>
        </>
    )
}