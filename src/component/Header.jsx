import React, { useContext, useState ,useEffect} from "react";
import MyContext from "./CreateContext";

export default function Header({item}) {
   const { data } = useContext(MyContext);
  
   
    return (
        <>
        {data.map((item,index)=>(
            <Handling data={item} index={index} />
        ))}
        
        </>
    )
    }
function Handling({data,index}){
    const { setdata,data:data1 } = useContext(MyContext);
    const [total,settotal]=useState(0)
    // useEffect(() => {
    //     if (data) {
    //       setItems([data]); // Ensuring items is set as an array containing the data object
    //     }
    //   }, [data]);
    


    if (!data) {
        return (
            <div style={{ fontSize: "18px", color: "red" }}>Loading...</div>
        );
    }
    

   
    const handleclick=(e)=>{
        settotal(e.target.value*data.price)
        
    }
    
   const handleDelete=()=>{
    console.log(index)
    const newItems=data1.filter((pd,i)=>i !==index )
    setdata(newItems)
    console.log("deleted")
   }

    return(
        <div className="container" key={index}>
            <div className="header">
                <div className="product-thumbnail">
                    <img className="image" src={data.thumbnail} alt={data.title} style={{marginTop:"5px",height:"10rem",width:"15rem",objectFit:"contain"}}/>
                </div>
                <div className="product-content" style={{marginLeft:"3rem"}}>
                    <h1>{data.title}</h1>
                    <h2>{data.brand}</h2>
                    <p>{data.description}</p>
                    <h4>{data.category}</h4>
                </div>

                <div className="product-info" style={{marginLeft:"3rem"}}>
                    <div className="item-selection" >
                        <select onChange={handleclick}>
                            {[0,1,2,3,4,5].map((item,index)=>(
                                <option key={index}>{item}</option>
                            ))}
                        </select>
                       
                       <span className="span"><b>${total}</b></span>
                       
                    </div>
                    
                    <div className="remove" >
                        <button onClick={handleDelete} className="button" style={{Color:"red",borderRadius:"30px"}}>Remove</button>
                    </div>
                </div>
            </div>
            <hr/>

            <div className="center">
                <div>
                <h3>subtotal :</h3>
                <h3>shopping :</h3>
                </div>
                <div>
                    <h4>${total}</h4>
                    <h4>Free</h4>
                </div>
            </div>
            <hr/>

            <div className="footer">
                   <h3>Total</h3>    
                   <h4>${total}</h4>         
            </div>
    
        </div>
    )
}