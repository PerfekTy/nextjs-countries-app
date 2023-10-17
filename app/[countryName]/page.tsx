"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { PuffLoader } from "react-spinners";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface CountryPageProps {
  params: {
    countryName: string;
  };
}

const CountryPage = ({ params }: CountryPageProps) => {
  const router = useRouter();
  const { countryName } = params;
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState([]);

  const getCountry = useCallback(async () => {
    try {
      const res = await fetch(`/api/${countryName}`);
      const data = await res.json();
      setCountry(data[0]);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [countryName]);

  useEffect(() => {
    const timer = setTimeout(() => {
      getCountry();
    }, 1000);
    return () => clearTimeout(timer);
  }, [getCountry]);

  const population = useMemo(() => {
    if (!country) {
      return null;
    }

    return country?.population?.toLocaleString("en-EN");
  }, [country]);

  const currencies = useMemo(() => {
    if (!country) {
      return null;
    }

    return country?.currencies?.map(
      (currency: Record<string, any>) => currency.name,
    );
  }, [country]);

  const languages = useMemo(() => {
    if (!country) {
      return null;
    }

    return country?.languages?.map(
      (language: Record<string, any>) => language.name,
    );
  }, [country]);

  return (
    <div className="m-20 relative flex flex-col justify-center items-center">
      {loading ? (
        <div className="flex justify-center items-center">
          <PuffLoader size={200} color="#3bc04b" loading={loading} />
        </div>
      ) : (
        <div>
          <div>
            <div className="my-10">
              <Button className="px-7 py-5" onClick={() => router.push("..")}>
                <ArrowLeft size={19} /> Back
              </Button>
            </div>
            <div className="flex flex-col md:flex-row">
              <Image
                src={country.flags?.png}
                width={500}
                height={200}
                alt={`${country.name} flag`}
                className="border w-[400px] mx-auto md:w-[500px]"
              />

              <div className="md:mx-20 text-center">
                <h1 className="font-bold md:text-3xl text-2xl my-4">
                  {country.name}
                </h1>
                <div className="md:flex md:gap-10">
                  <div className="flex flex-col gap-2">
                    <span className="flex gap-1 items-center justify-center">
                      <p className="font-semibold text-sm">Native Name: </p>
                      <p className="font-light text-sm">{country.nativeName}</p>
                    </span>
                    <span className="flex gap-1 items-center justify-center">
                      <p className="font-semibold text-sm">Population: </p>
                      <p className="font-light text-sm">{population}</p>
                    </span>
                    <span className="flex gap-1 items-center justify-center">
                      <p className="font-semibold text-sm">Region: </p>
                      <p className="font-light text-sm">{country.region}</p>
                    </span>
                    <span className="flex gap-1 items-center justify-center">
                      <p className="font-semibold text-sm">Sub Region: </p>
                      <p className="font-light text-sm">{country.subregion}</p>
                    </span>
                    <span className="flex gap-1 items-center justify-center">
                      <p className="font-semibold text-sm">Capital: </p>
                      <p className="font-light text-sm">{country.capital}</p>
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 mt-2">
                    <span className="flex gap-1 items-center justify-center">
                      <p className="font-semibold text-sm">
                        Top Level Domain:{" "}
                      </p>
                      <p className="font-light text-sm">
                        {country.topLevelDomain}
                      </p>
                    </span>
                    <span className="flex gap-1 items-center justify-center">
                      <p className="font-semibold text-sm">Currencies: </p>
                      <p className="font-light text-sm">
                        {currencies.join(", ")}
                      </p>
                    </span>
                    <span className="flex gap-1 items-center justify-center">
                      <p className="font-semibold text-sm">Languages: </p>
                      <p className="font-light text-sm">
                        {languages.join(", ")}
                      </p>
                    </span>
                  </div>
                </div>
                <div className="my-10 flex items-center justify-center gap-1">
                  <p>Border Countries:</p>
                  {country.borders?.map((border: string) => (
                    <Button
                      variant="ghost"
                      key={border}
                      onClick={() => router.push(`/${""}`)}
                    >
                      {border}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryPage;
