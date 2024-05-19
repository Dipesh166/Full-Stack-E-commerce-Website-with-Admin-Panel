import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import { FormEvent, useState } from 'react';



const stripePromise = loadStripe('pk_test_51PHlgySJMg2crfYpZJnbpWmiTaCAzbjPedXVDQG85j6khb6VZacAxtQshwQfPlcVvaahwRL6MLI1c42twe1t0CR2008dMxvISx');

const CheckOutForm= () =>{

    const stripe = useStripe()
    const elements  = useElements()

    const [isProcessing, setisProcessing] = useState<boolean>(false)

    const submitHandler = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        if(!stripe || !elements) return;

        setisProcessing(true)
        setTimeout(()=>{

            setisProcessing(false)

        }, 2000)

        const order ={};
    };
    return <div className='checkout-container'>
       <form onSubmit={submitHandler}>
        <PaymentElement/>

        <button>
            {isProcessing? "Processing..." :"Pay"}
        </button>


       </form>
    </div>
};


const Checkout = () => {
  return (
    <Elements  options={{
        clientSecret:"pi_3PIMA2SJMg2crfYp1acoACFh_secret_2HkQwONUNDHtHnU3zRgE3Bbjg",
    }} stripe={stripePromise}>
        <CheckOutForm/>
    </Elements>
  )
}

export default Checkout