import React, { useState,useEffect} from "react";
import "./product.css"
const Productlist = ({ name, image }) => {
    const [count, setCount] = useState(0);
  const [backChange, setBackChange] = useState({color:"indigo",backgroundColor:"floralwhite"});

const onOUT=()=>
setBackChange({ backgroundColor: "floralwhite" });

  useEffect(() =>{
  onOUT() ;
  },[])


return (
  <div
    className="customdesign"
    style={backChange}
    onMouseEnter={(prevvalue) =>
      setBackChange({ ...prevvalue, backgroundColor: "lightgrey" })
    }
    onMouseLeave={onOUT}
  >
    <img
      src={image.image}
      className="img-fluid clearfix"
      alt="Product-img"
      style={{
        height: "8rem",
      }}
    />
    <p
      style={{
        height: "4em",
        fontSize: "0.9em",
        textOverflow: "ellipsis",
      }}
    >
      {name.title}{" "}
    </p>
    {name.rating.rate > 2 ? (
      <i className="fas fa-stars"></i>
    ) : (
      <i className="fas fa-stars"></i>
    )}
    <p className=" py-2" style={{ margin: "10px" }}>
      {" "}
      Price: Rs {Math.round(name.price) * 12}{" "}
    </p>{" "}
    <div className=" d-flex justify-content-center ">
      <button
        className="btn-inline btn-primary"
        onClick={() => {
          setCount((prevcount) => prevcount + 1);
        }}
      >
        +
      </button>{" "}
      <span className="p-2"> {count} </span>{" "}
      <button
        disabled={count ? 0 : 1}
        className="btn-inline btn-primary "
        onClick={() => {
          setCount((prevcount) => prevcount - 1);
        }}
      >
        -
      </button>{" "}
    </div>{" "}
  </div>
);
};

export default Productlist;