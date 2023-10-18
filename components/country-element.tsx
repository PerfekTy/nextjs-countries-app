"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const CountryElement = ({ country }: { country: any }) => {
  const router = useRouter();
  const population = useMemo(() => {
    if (!country) {
      return null;
    }

    return country.population.toLocaleString("en-EN");
  }, [country]);

  return (
    <Card
      className="md:w-full m-5 md:mx-auto dark:bg-dark md:hover:scale-105 hover:scale-[1.02] transition cursor-pointer"
      onClick={() => router.push(`/${country.numericCode}`)}
    >
      <CardHeader className="p-0">
        <CardTitle className="w-full h-64">
          <img
            src={country.flags.png}
            alt={country.name}
            className="h-64 w-full rounded-t-lg"
          />
        </CardTitle>
        <CardDescription className="text-black dark:text-white">
          <h2 className="text-xl py-2 pt-5 ml-11 font-bold">{country.name}</h2>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="my-3 mx-5 flex flex-col gap-1 justify-center">
          <span className="flex gap-1 font-light">
            <p className="font-semibold">Population:</p> {population}
          </span>
          <span className="flex gap-1 font-light">
            <p className="font-semibold">Region:</p> {country.region}
          </span>
          <span className="flex gap-1 font-light">
            <p className="font-semibold">Capital:</p> {country.capital}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
