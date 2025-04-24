import { useNavigate, useSearchParams } from 'react-router-dom';
import { useStoreContext } from '../../context/StoreContext/StoreContext.tools';
import './PaymentVerification.page.css';
import axios from 'axios';
import { useEffect } from 'react';

function PaymentVerification() {
	const [searchParams, _] = useSearchParams();
  const navigate = useNavigate();
	const { serverUrl } = useStoreContext();
	const success = searchParams.get('success');
	const orderId = searchParams.get('orderId');

	async function verifyPayment() {
		const response = await axios.post(`${serverUrl}/api/order/verify`, {
			success,
			orderId,
		});

    console.log('response:', response);

    if(response.data.success) {
      navigate('/myorders');
    } else {
      // navigate(-1); // go back to previous page
      navigate('/'); // go to Home page
    }
	}

  useEffect(() => {
    verifyPayment();
  }, []);



	return (
		<main className='verify'>
			<div className='spinner'></div>
		</main>
	);
}

export default PaymentVerification;
