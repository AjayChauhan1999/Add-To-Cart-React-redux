import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../App.css";
import Menu from "@mui/material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import {DELETE} from '../redux/actions/action'

function Header() {

  const [price, setPrice] = useState(0);

  const getdata = useSelector((state) => state.cartReducer.carts);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const DEL = (id) => {
    dispatch(DELETE(id));
  }
  
  const total = () => {
    let price = 0;
    getdata.map((ele,k) => {
      price = ele.price * ele.qnty + price
    })
    setPrice(price);
  }

useEffect(()=>{
  total();
},[total])

  return (
    <div className="bg-light">
      <div className="container">
        <nav className="p-3 navbar-light bg-light">
          <div className=" d-flex gap-4">
          <Link to="/" className="navbar-brand fs-4">
              Home
            </Link>
            <Link to="/CardsDetail" className="navbar-brand fs-4">
              Cart Page
            </Link>
          </div>
          <div>
            <FaShoppingCart
              fontSize={"35px"}
              color="black"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />
            <span className="position-absolute m-1 top-20 start-15 translate-middle badge rounded-pill bg-danger">
              {getdata.length}
            </span>
            <Menu
              id="basic-menu"
              className="MenuContainer"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {getdata.length ? (
                <div className="card_detail" style={{ width: "24rem" }}>
                  <Table>
                    <thead>
                      <tr>
                        <th>Photo</th>
                        <th>Restaurant Name </th>
                      </tr>
                    </thead>
                    <tbody>
                      {getdata.map((e) => {
                        return (
                          <>
                            <tr>
                              <td>
                                <Link to={`/CardsDetail/${e.id}`}onClick={handleClose}>
                                <img
                                  src={e.imgdata}
                                  style={{ width: "5rem", height: "5rem" }}
                                  alt=""
                                />
                                </Link>
                              </td>
                              <td className="cart-data">
                                <p>{e.rname}</p>
                                <p>Price : ₹ {e.price}</p>
                                <p>Quantity: {e.qnty}</p>
                                <p className="MDdelete-col" onClick={()=>DEL(e.id)}>
                                  <MdDelete color="red" fontSize={25} />
                                </p>
                              </td>
                              <td>
                                <p className="flex" onClick={()=>DEL(e.id)} style={{cursor:'pointer'}}>
                                  <MdDelete color="red" fontSize={25} />
                                </p>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                      <p style={{ display: "flex", justifyContent: "center" }}>
                        Total : ₹ {price}
                      </p>
                    </tbody>
                  </Table>
                </div>
              ) : (
                <div className="EmptyCartContainer">
                  <h5>Your Cart is Empty</h5>
                  <img className="EmptyCartImg" src="../EmptyCart.gif" alt="" />
                </div>
              )}
            </Menu>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
