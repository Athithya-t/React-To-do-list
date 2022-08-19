import {useState} from 'react';
import {toast,ToastContainer} from 'react-toastify';
function Additem(props){
    const [name,setname] = useState('');
    const [numdate,setnumdate] = useState('');
    function NewData(e){
            e.preventDefault();
            setnumdate('');
            setname('');
            let date = new Date(numdate)
            let id=Math.random()
            props.onAddingData({name,date,id});
    }
    return(
        <div>
        <div className="mt-[20%] ml-[5%] h-48 bg-blue-100 rounded-md w-[90%] sm:mt-[10%] sm:w-[60%] sm:ml-[18%]">
        <form className="flex flex-col gap-5">
            <input type='text' className="ml-[4%] mt-5 flex-1 w-80 h-32 drop-shadow-xl rounded-md text-2xl sm:w-[75%] sm:ml-[10%]" placeholder="Name" value={name} onChange={(e)=>{setname(e.target.value)}}/>
            <input type='date' className="ml-[4%] flex-1 w-80 drop-shadow-xl rounded-md text-2xl sm:w-[75%] sm:ml-[10%]" value={numdate} onChange={(e)=>{setnumdate(e.target.value)}}/>
            <button className="w-14 h-12 bg-blue-500 ml-[80%] rounded-md drop-shadow-xl font-bold hover:bg-blue-700 sm:ml-[90%]" type='button' onClick={NewData}>Add</button>        
            </form>
        </div>
        </div>
    )
}

export default Additem;