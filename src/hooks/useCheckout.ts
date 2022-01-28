import { useCart } from 'hooks';
import { useLazyCaptureOrderQuery, useGetCheckoutQuery } from 'services/chec';
import { useAppSelector, useAppDispatch } from 'app/store';
import { updateForm, updateOrder, updatePayment } from 'components/checkout/checkoutSlice';
import { PaymentMethod } from '@stripe/stripe-js';
import { useEffect } from 'react';
import useCommerce from './useCommerce';

export default function useCheckout() {
  const dispatch = useAppDispatch();
  const { cartId, clear } = useCart();
  const { data: checkoutToken } = useGetCheckoutQuery(cartId);
  const checkout = useAppSelector((state) => state.checkout);
  const { refetch } = useCommerce();
  const [captureOrder, { data: checkoutResponse, isFetching: isCapturing }] =
    useLazyCaptureOrderQuery();

  function updateFormData(state: CheckoutState) {
    dispatch(updateForm(state));
  }

  function updateOrderData(paymentId: string) {
    const body: CheckoutCapture = {
      line_items: checkoutToken?.live.line_items,
      customer: {
        firstname: checkout.form.firstName,
        lastname: checkout.form.lastName,
        email: checkout.form.email,
      },
      shipping: {
        name: 'Frete convencional',
        street: checkout.form.address,
        town_city: checkout.form.city,
        county_state: checkout.form.state,
        postal_zip_code: checkout.form.postalCode,
        country: checkout.form.country,
      },
      fulfillment: {
        shipping_method: 'ship_r2LM5QrYRlZV1g',
      },
      payment: {
        gateway: 'stripe',
        stripe: {
          payment_method_id: paymentId,
        },
      },
    };
    dispatch(updateOrder(body));
  }

  function updatePaymentData(paymentMethod: PaymentMethod) {
    dispatch(updatePayment(paymentMethod));
  }

  function order() {
    captureOrder({
      checkoutId: checkoutToken?.id as string,
      body: checkout.order,
    });
  }

  useEffect(() => {
    if (!isCapturing && checkoutResponse) {
      clear();
    }
  }, [checkoutResponse]);

  return {
    formState: checkout.form,
    updateFormData,
    orderState: checkout.order,
    updateOrderData,
    paymentState: checkout.payment,
    updatePaymentData,
    order,
    refetch,
    checkoutResponse,
    isCapturing,
  };
}
