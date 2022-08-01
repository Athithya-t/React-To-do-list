function Date(props){
    //const month = props.newdate.toLocaleString('en-US',{month:'long'})
    const month=props.newdate.toLocaleString('en-US',{month:'long'});
    const day=props.newdate.toLocaleString('en-US',{day:'2-digit'});
    const year = props.newdate.toString().slice(11,15);
    //const year=props.newdate.getFullYear();
    let datecolor = props.changedatecolor
    if(datecolor%2===0){
        datecolor = 'rgb(147 197 253)';
    }
    else if(datecolor%2!==0){
        datecolor = 'rgb(39 39 42)';
    }
    return(
        <div className="absolute bg-blue-100 w-24 h-24 ml-[62%] mt-[2%] rounded-lg float-right sm:ml-[50%] sm:mt-[0.5%]" style={{backgroundColor:datecolor}}>
            <div className="text-3xl font-bold ml-[35%]">{day}</div>
            <div className="text-2xl font-semibold ml-[30%]">{month.slice(0,3)}</div>
            <div className="text-xl font-medium ml-[27%]">{year}</div>
        </div>
    )
}

export default Date;