import {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Dropdown({el1, el2, el3, el4, el5}){
    const [active, setActive] = useState(false);
    
    const handleDrop = () =>{
        if(active == false){
            setActive(true);
        }
        else{
            setActive(false);
        }
    }
    return(
        <div className='flex justify-center'>
            <span className="absolute" onClick={() => handleDrop()}>{el5}</span>
            <ul className={`
                borber 
                top-10 
                relative 
                ${active == true ? "block" : "hidden"} `}
            >
                <li className='border'>
                    <Link to={`/${el1}`}>{el1}</Link>
                </li>
                <li className='border'>
                    <Link to={`/${el2}`}>{el2}</Link>
                </li>
                <li className='border'>
                    <Link to={`/${el3}`}>{el3}</Link>
                </li>
                <li className='border'>
                    <Link to={`/${el4}`}>{el4}</Link>
                </li>
            </ul>
        </div>
    )
}
