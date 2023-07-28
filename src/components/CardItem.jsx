import '../styles/CardItem.css'
import {IoCheckmarkSharp} from 'react-icons/io5'
export  const CardItem =(props) => {
    const {price, title} = props

    return(
        <>
            <div className={'card-wrapper'}>
                <h1 className={'card-title'}>Title</h1>
                <span className={'card-description'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, ut.</span>

                <p className={'card-price'}>
                    <span>usd <span className={'billig'}>$24 </span> /month</span>
                </p>

                <div className={'abilities'}>
                   <li>  <IoCheckmarkSharp /> Lorem ipsum dolor.</li>
                    <li><IoCheckmarkSharp /> Lorem ipsum dolor.</li>
                    <li><IoCheckmarkSharp /> Lorem ipsum dolor.</li>
                    <li><IoCheckmarkSharp /> Lorem ipsum dolor.</li>
                </div>
                <div className={'card-btn'}>
                    <button className={'btn'}>Start your trail</button>
                </div>
            </div>
        </>
    )
}