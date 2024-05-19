import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { NewOrderRequest } from '../types/api-types';
import { useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/query';



const stripePromise = loadStripe('pk_test_51PHlgySJMg2crfYpZJnbpWmiTaCAzbjPedXVDQG85j6khb6VZacAxtQshwQfPlcVvaahwRL6MLI1c42twe1t0CR2008dMxvISx');

const CheckOutForm= () =>{

    const stripe = useStripe()
    const elements  = useElements()

    const navigate = useNavigate()

    const {user}= useSelector((state:RootState)=> state.userReducer)
    const [isProcessing, setIsProcessing] = useState<boolean>(false)

    const submitHandler = async(e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        if(!stripe || !elements) return;

        setIsProcessing(true)
        

        const orderData:NewOrderRequest ={

        };
        
       const {paymentIntent, error} = await stripe.confirmPayment({
            elements,
            confirmParams:{return_url:window.location.origin},
            redirect:"if_required",

        
        });

        if(error)  {

            setIsProcessing(false)

            return toast.error(error.message || "Something went Wrong")

        }
        
        if(paymentIntent.status ==="succeeded"){
        console.log("Placing Order")

        navigate("/orders")
      }
      setIsProcessing(false)



        


    };
    return <div className='checkout-container'>
       <form onSubmit={submitHandler}>
        <PaymentElement/>

        <button type='submit' disabled={isProcessing}>
            {isProcessing? "Processing..." :"Pay"}
        </button>


       </form>
    </div>
};


const Checkout = () => {

    const location = useLocation();

    const clientSecret:string | undefined = location.state

    if(!clientSecret) <Navigate to={"/shipping"}/>
  return (
    <Elements  options={{
        clientSecret,
    }} stripe={stripePromise}>
        <CheckOutForm/>
    </Elements>
  )
}

export default Checkout