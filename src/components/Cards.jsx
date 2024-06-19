import React, { useState } from "react";
import Cardsdata from "./CardsData";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";
import Footer from "./Footer";

function Cards() {
  const [data, setData] = useState(Cardsdata);
  // console.log(data);

    const dispatch = useDispatch()

    const send = (e) => {
        dispatch(ADD(e));
    }

  return (
    <div>
    <div className="container mt-4 ">
      <div className="row CardDetails">
        {data.map((element) => {
          return (
            <div className="card" style={{ width: "22rem", border:"none"  }}>
              <img
                className="card-img-top"
                src={element.imgdata}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{element.rname}</h5>
                <p className="card-text">
                 Price : ₹ {element.price}
                </p>
                <button type="button" onClick={()=>send(element)} className="btn btn-info">
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Cards;
