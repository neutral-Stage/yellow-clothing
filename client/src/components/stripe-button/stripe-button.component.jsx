import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HinZHE8V5xm7KzMjPshQFZDfaXnVVkYWnXQv0SX9yZhu3KIHjJ1mRix2hSF44iV8M4Fl67r1EGG27ERme0HugTz001k48RNh8';

  const onToken = token => {
    axios({
      url: 'payment',
      method:'post',
      data: {
        amount: priceForStripe,
        token 
      }
    }).then(response=>{
      alert('Payment Successful')
    }).catch(error => {
      console.log('Payment error:', JSON.parse(error));
      alert(
        'There was issue with your payment. Please sure you use the provied credit card.'
      )
    })
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
