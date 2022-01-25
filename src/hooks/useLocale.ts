import { useEffect } from 'react';
import { useGetCountriesQuery, useLazyGetSubdivisionsQuery } from 'services/chec';

const useLocale = (country: string) => {
  const { data: getCountriesData } = useGetCountriesQuery();
  const [getStates, { data: getStatesData }] = useLazyGetSubdivisionsQuery();

  useEffect(() => {
    if (country) getStates(country);
    else getStates('AF');
  }, [country]);

  return {
    countries: getCountriesData ?? ({} as Locale),
    states: getStatesData ?? ({} as Locale),
  };
};

export default useLocale;
