import { useState } from "react";
import Date from "../Date";
//<Date newdate={props.items.date}/>
//sm:(bg-blue-100 w-96 h-24 ml-10 rounded-lg drop-shadow-2xl)
function Card(props){
    const [color,setcolor]=useState('rgb(219 234 254)');
    const [count,setcount]=useState(0);
    const [margin,setmargin] = useState('');
    function changecolor(){
        setcount(count+1)
        if(count%2!==0){
            setcolor('rgb(219 234 254)')//new color
        }
        else if(count%2===0){
            setcolor('rgb(113 113 122)');//original color
        }
        let list = [props.items];
        props.onClickcheckbox(list.shift());
    }
    function margintop(props){
        if(props.items.name.length<20){
            console.log(props.items.name.length)
        }
    }
    return(
        <div>
        <div className="bg-blue-100 h-28 w-[90%] ml-[5%] mt-10 rounded-lg sm:ml-[18%] sm:w-[60%]" style={{backgroundColor:color}}>
            <input type="checkbox" className="mt-[12%] ml-[10%] w-4 h-4 absolute sm:mt-[3.5%]" onClick={changecolor}/>
            <div className="absolute sm:(font-bold) ml-[19%] text-xl font-bold mt-[10%] sm:mt-[3%]">
                <p className="w-40">{props.items.name}</p>
            </div>
            <Date newdate={props.items.date} changedatecolor={count}/>
        </div>
        </div>
    )
}

export default Card;