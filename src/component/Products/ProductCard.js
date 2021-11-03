import { useEffect, useState } from "react";
import Productlist from "./Productlist";

const ProductCard = ({section}) => {
   
    const [state, setState] = useState([]);
     

    const getdata = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/category/${section}`);
        setState(await response.json())
    }
     
  
    useEffect(() => {
    
     
      getdata();
     
          
    },[])

    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <h3>{section}</h3>
            {state.map((currEle) => (
              <Productlist name={currEle} image={currEle} key={currEle.id }/>
            ))}
         
          </div>
        </div>
      </>
    );
}

export default ProductCard;