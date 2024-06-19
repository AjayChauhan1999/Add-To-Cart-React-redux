import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DELETE, ADD , REMOVE} from "../redux/actions/action";

function CardsDetail() {
  const [data,setData] = useState([]);
  // console.log(data);

  const {id} = useParams();
  // console.log(id);

  const history = useNavigate();

  const getdata = useSelector((state)=> state.cartReducer.carts);
  // console.log(getdata);

  const dispatch = useDispatch();

  const compare = ()=>{
    let comparedata = getdata.filter((e)=>{
      return e.id == id
    });
    setData(comparedata);
  }

  const send = (e) => {
    dispatch(ADD(e));
  }

  useEffect(()=>{
    compare();
  },[id])

  const DEL = (id) => {
    dispatch(DELETE(id));
    history('/');
  }

  const remove = (items) => {
    dispatch(REMOVE(items));
  }

  return (
    <div className="container mt-2">
      <h2 className="text-center">Iteams Details Page</h2>
      <section className="container shadow mt-3 p-4">
        <div className="iteamsdetails">
          {data.map((ele) => {
            return (
              <>
                <div className="items_div">
                  <img
                    src={ele.imgdata}
                    alt=""
                  />
                </div>
                <div className="details">
                  <table cellPadding={10}>
                    <tr>
                      <td>
                        <p>
                          <strong>Restaurant</strong> : {ele.rname}
                        </p>
                        <p>
                          <strong>Price</strong> : ₹ {ele.price}
                        </p>
                        <p>
                          <strong>Dishes</strong> : {ele.address}
                        </p>
                        <p>
                          <strong>Total</strong> : ₹ {ele.price * ele.qnty}
                        </p>
                        <div className="inc-dec-container">
                          <span onClick={ele.qnty <=1 ? ()=>DEL(ele.id):()=>remove(ele)}>-</span>
                          <span>{ele.qnty}</span>
                          <span onClick={()=>send(ele)}>+</span>
                        </div>
                      </td>
                      <td>
                        <p>
                          <strong>Rating : </strong>
                          <span
                            style={{
                              background: "green",
                              color: "#fff",
                              padding: "2px 5px",
                              borderRadius: "5px",
                            }}
                          >
                            {ele.rating} ★
                          </span>
                        </p>
                        <p>
                          <strong>Order Review :</strong>
                          <span>{ele.somedata}</span>
                        </p>
                        <button
                          className="btn btn-danger"
                          style={{ width: "unset" }}
                          onClick={()=>DEL(ele.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </table>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default CardsDetail;
