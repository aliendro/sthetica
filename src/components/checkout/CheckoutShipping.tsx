import { useCheckout } from 'hooks';
import useProgressBar from 'hooks/useProgressBar';
import { BaseSyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetSubdivisionsQuery } from 'services/chec';

export default function CheckoutShipping() {
  const { next: nextStep } = useProgressBar();
  const navigate = useNavigate();
  const [state, setState] = useState({ country: 'BR' } as CheckoutState);
  const { data: subdivisions } = useGetSubdivisionsQuery('BR');
  const { updateFormData } = useCheckout();

  const handleSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    updateFormData(state);
    nextStep();
  };

  const handleChange = (event: BaseSyntheticEvent) => {
    const { name: field, value }: { name: keyof CheckoutState; value: string } = event.target;
    setState({ ...state, [field]: value });
  };

  return (
    <>
      <h1 className="title">shipping details</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          // required
          name="firstName"
          className="input"
          onChange={handleChange}
          placeholder="First name"
          type="text"
        />
        <input
          // required
          name="lastName"
          onChange={handleChange}
          className="input"
          placeholder="Last name"
          type="text"
        />
        <input
          // required
          name="email"
          onChange={handleChange}
          className="input"
          placeholder="Email"
          type="email"
        />
        <input
          // required
          name="address"
          onChange={handleChange}
          className="input"
          placeholder="Address"
          type="text"
        />
        <input
          disabled
          // required
          className="input"
          type="text"
          value="Brazil"
          title="Brazil is currently the only shipping destination available."
        />
        <select className="input bg-white" onChange={handleChange} name="state">
          {subdivisions?.map((subdivision) => (
            <option key={subdivision} value={subdivision}>
              {subdivision}
            </option>
          ))}
        </select>
        <input
          // required
          name="city"
          onChange={handleChange}
          className="input"
          placeholder="City"
          type="text"
        />
        <input
          // required
          name="postalCode"
          onChange={handleChange}
          className="input"
          placeholder="Postal code"
          type="number"
        />
        <div className="flex w-full flex-col items-center justify-center gap-5">
          <button type="submit" className="button mt-10">
            continue
          </button>
          <button
            type="button"
            className="button bg-transparent text-black hover:underline"
            onClick={() => navigate('../cart')}
          >
            back to cart
          </button>
        </div>
      </form>
    </>
  );
}
