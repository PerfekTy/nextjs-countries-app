"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { PuffLoader } from "react-spinners";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import CountrySpan from "@/components/country-span";

interface CountryPageProps {
  params: {
    countryName: string;
  };
}

type Country = {
  population: any;
  capital: string;
  currencies: string[]
  name: string;
  flag:string;
  languages:string[]
  nativeName:string;
  region:string;
  subregion:string;
  topLevelDomain:string[];
  borders:string[];
}

const CountryPage = ({ params }: CountryPageProps) => {
  const router = useRouter();
  const { countryName } = params;
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState<Country | null>(null);

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
      (currency: any) => currency.name,
    );
  }, [country]);

  const languages = useMemo(() => {
    if (!country) {
      return null;
    }

    return country?.languages?.map(
      (language: any) => language.name,
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
            <div className="my-10 mx-2">
              <Button className="px-7 py-5" onClick={() => router.push("..")}>
                <ArrowLeft size={19} /> Back
              </Button>
            </div>
            <div className="flex flex-col md:flex-row">
              <Image
                src={country?.flag || "https://via.placeholder.com/150x150"}
                width={500}
                height={200}
                alt={`${country?.name} flag`}
                className="border w-[400px] mx-auto md:w-[500px]"
              />

              <div className="md:mx-20 text-center md:text-left">
                <h1 className="font-bold md:text-3xl text-2xl my-4">
                  {country?.name}
                </h1>
                <div className="md:flex md:gap-10">
                  <div className="flex flex-col gap-2">
                    <CountrySpan label="Native Name" content={country?.nativeName}/>
                    <CountrySpan label="Population" content={population}/>
                    <CountrySpan label="Region" content={country?.region}/>
                    <CountrySpan label="Sub Region" content={country?.subregion}/>
                    <CountrySpan label="Capital" content={country?.capital}/>
                  </div>
                  <div className="flex flex-col gap-3 mt-2">
                    <CountrySpan label="Top Level Domain" content={country?.topLevelDomain}/>
                    <CountrySpan label="Currencies" content={currencies?.join(", ")}/>
                    <CountrySpan label="Languages" content= {languages?.join(", ")}/>
                  </div>
                </div>
                <div className="my-10 w-full md:flex items-center md:justify-start justify-center gap-1">
                  <p className="text-sm">Border Countries:</p>
                  {country?.borders ? country?.borders?.map((border: string) => (
                      <Button
                          variant="ghost"
                          key={border}
                          onClick={() => router.push(`/${""}`)}
                      >
                        {border}
                      </Button>
                  )) : <p className="text-sm">No border countries.</p>}
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
