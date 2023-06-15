import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      //update with confirmation page specific to Book Mark
      elements,
      confirmParams: {
        //return_url: "link-here",
      },
    });

    if (result.error) {
      // Show error to customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // customer will be redirected to your `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe}>Submit</button>
    </form>
  )
};

export default CheckoutForm;