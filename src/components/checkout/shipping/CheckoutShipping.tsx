import { useAppSelector } from 'app/store';
import { useCheckout, useLocale } from 'hooks';
import { BaseSyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  formTitle: 'col-span-2 text-center uppercase tracking-wider text-2xl',
  input:
    'group transition-all duration-300 p-2 border outline-none focus:ring-2 focus:ring-green-400',
  button: 'p-4 w-full col-span-2 font-light uppercase transition-all bg-opacity-90 lg:w-auto',
};

const CheckoutShipping = () => {
  const navigate = useNavigate();
  const form = useAppSelector((state) => state.checkout.form);
  const [formState, setFormState] = useState(form);
  const { updateFormData } = useCheckout();
  const { countries, states } = useLocale(formState.country);

  const render = (list: Locale) =>
    Object.keys(list).map((placeCode) => (
      <option key={placeCode} value={placeCode}>
        {list[placeCode]}
      </option>
    ));

  const handleSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    updateFormData(formState);
    navigate('../payment', { state: 'payment', replace: true });
  };

  const handleChange = (event: BaseSyntheticEvent, field: keyof CheckoutState) => {
    setFormState({ ...formState, [field]: event.target.value });
  };

  return (
    <section className="flex flex-col ml-auto mr-auto">
      <form onSubmit={handleSubmit} className="grid gap-2 m-5 grid-cols-2">
        <span className={styles.formTitle}>shipping details</span>
        <input
          required
          className={styles.input}
          onChange={(e) => handleChange(e, 'firstName')}
          placeholder="First name"
          type="text"
        />
        <input
          required
          className={styles.input}
          onChange={(e) => handleChange(e, 'lastName')}
          placeholder="Last name"
          type="text"
        />
        <input
          required
          className={`${styles.input} col-span-2`}
          onChange={(e) => handleChange(e, 'email')}
          placeholder="Email"
          type="email"
        />
        <input
          required
          className={`${styles.input} col-span-2`}
          onChange={(e) => handleChange(e, 'address')}
          placeholder="Address"
          type="text"
        />
        <select
          required
          className={`${styles.input} bg-white max-w-xs`}
          onChange={(e) => handleChange(e, 'country')}
        >
          {render(countries)}
        </select>
        <select
          required
          className={`${styles.input} bg-white`}
          onChange={(e) => handleChange(e, 'state')}
        >
          {render(states)}
        </select>
        <input
          required
          className={styles.input}
          onChange={(e) => handleChange(e, 'city')}
          placeholder="City"
          type="text"
        />
        <input
          required
          className={styles.input}
          onChange={(e) => handleChange(e, 'postalCode')}
          placeholder="Postal code"
          type="number"
        />
        <button
          type="submit"
          className={`${styles.button} bg-gray-900 text-white lg:hover:opacity-90`}
        >
          continue
        </button>
        <button
          type="button"
          className={`${styles.button} hover:underline`}
          onClick={() => navigate('../../cart')}
        >
          back to cart
        </button>
      </form>
    </section>
  );
};

export default CheckoutShipping;
