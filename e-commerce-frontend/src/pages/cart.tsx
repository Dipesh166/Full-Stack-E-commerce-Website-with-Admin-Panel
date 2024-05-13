


import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";

const cartItems=[

  {

    productId:"asdasdsd",
    photo:"https://m.media-amazon.com/images/I/61RJn0ofUsL._AC_UY218_.jpg",
    name:"Macbook",
    price:3000,
    quantity:4,
    stack:10,
  }
];
const subtotal=400;
const tax=Math.round(subtotal *0.18);
const shippingCharges =200;
const discount=400;
const total = subtotal + tax +shippingCharges;


const Cart = () => {

  const[couponCode, setcouponCode]=useState<string>("");
  const[IsValidcouponCode, setIsValidcouponCode]=useState<boolean>(false);


  useEffect(()=>{

    const timeOutID = setTimeout(()=>{
      if(Math.random()>0.5) setIsValidcouponCode(true);
      else setIsValidcouponCode(false);

    },1000);


    return ()=>{
      clearTimeout(timeOutID);
      setIsValidcouponCode(false);

    }

  }, [couponCode])



  return (
    <div className="cart">
      <main>

        {
          cartItems.length > 0 ?cartItems.map((i, idx)=>(
            <CartItem key={idx} cartItem={i}/>
          )) : <h1>No Items Added</h1>
        }


      </main>
      <aside>

        <p>Subtotal: ${subtotal}</p>
        <p>Shipping Charges: ${shippingCharges}</p>
        <p>Tax: ${tax}</p>
        <p>
          Discount <em className="red">-${discount}</em>
        </p>
        <p>
          <b>Total:${total}</b>
        </p>

        <input type="text" placeholder="Coupon Code" value={couponCode} onChange={(e) => setcouponCode(e.target.value)}/>



        {
         couponCode && (
          IsValidcouponCode? (
            <span className="green">${discount} off using the <code>{couponCode}</code></span>):(
            <span className="red">Invalid<VscError/></span>)   
         )
        }

        {
          cartItems.length>0 && <Link to="/shipping">Checkout</Link>
        }

        

      </aside>
    </div>
  )
}

export default Cart