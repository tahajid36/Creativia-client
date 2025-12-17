import axios from "axios";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  console.log(sessionId);
  useEffect(() => {
    if (sessionId) {
     axios.post('http://localhost:5000/payment-success', {
        sessionId
     })
    }
  }, [sessionId]);
  return (
    <div>
      <h1>Payment is successfull</h1>
    </div>
  );
};

export default PaymentSuccess;
