import { CountryElement } from "./country-element";

export const Countries = ({
  countries,
  filteredCountries,
}: {
  countries: any;
  filteredCountries: string[];
}) => {
  return (
    <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:m-5 gap-10">
      {filteredCountries.length
        ? filteredCountries?.map((country: any) => (
            <CountryElement key={country.name} country={country} />
          ))
        : countries?.map((country: any) => (
            <CountryElement key={country.name} country={country} />
          ))}
    </div>
  );
};
