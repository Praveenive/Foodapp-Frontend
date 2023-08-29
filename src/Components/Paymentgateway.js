import React, { useState } from 'react'
import Userbase from '../Base/Userbase'

export default function Paymentgateway({amount,setAmount,count,setCount}) {
    
    const handlesubmit =()=>{
        if(amount===""){
            alert("Atleast select One order ")
        }
        else{
            alert(amount);
            var options ={
                key:"rzp_test_nDznSFx60ecBqY",
                key_secret:"ofF7OlloIPMaroVX7F2EDvTf",
                amount:amount*100,
                currency:"INR",
                name:"Hungry Hunters",
                description:"Food Application",
                handler:function(response){
                    alert(response.razorpay_payment_id);
                },
                prefill:{
                    name:"Praveen",
                    email:"praveenhb0610@gmail.com",
                    contact:"9361035926"
                },
                notes:{
                    address:"Razorpay Corporate office"
                },
                theme:{
                    color:"blue"
                }
            };
            var pay = new window.Razorpay(options);
            pay.open();
        }
    }
  return (
    <Userbase>
    <div>
        <h2>Payment Gateway</h2>
        <h3>Total Payment:{amount}</h3>
        <h3>No of Orders:{count} </h3>
        <input type="text" placeholder='enter amount' value={amount} onChange={(e)=>setAmount(e.target.value)}/><br/><br/>
        <button type="submit" onClick={handlesubmit} >Submit</button>
    </div>
    </Userbase>
  )
}
