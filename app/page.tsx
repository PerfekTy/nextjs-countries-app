"use client";

import { useCallback, useEffect, useState } from "react";
import { Countries } from "@/components/countries";
import { PuffLoader } from "react-spinners";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState<string[]>([]);

  const getCountries = useCallback(async () => {
    try {
      const res = await fetch("/api/countries");
      const data = await res.json();
      setCountries(data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      getCountries();
    }, 1000);
    return () => clearTimeout(timer);
  }, [getCountries]);

  const filterCountriesRegion = (filter: string) => {
    return countries.filter((country: Record<string, any>) =>
      country.region.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const filterCountriesName = (filter: string) => {
    return countries.filter((country: Record<string, any>) =>
      country.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  return (
    <main className="">
      <div className="static md:flex md:justify-between md:items-center xl:mx-20 mx-5 my-10">
        <div className="relative">
          <Label className="absolute top-4 left-4">
            <Search size={24} />
          </Label>
          <Input
            className="dark:bg-dark bg-light rounded-lg p-7 px-12 lg:w-[500px]"
            placeholder="Search for a country..."
            onChange={(e) =>
              setFilteredCountries(filterCountriesName(e.target.value))
            }
          />
        </div>
        <div className="md:m-0 my-5">
          <Select
            onValueChange={(e) => {
              setFilteredCountries(filterCountriesRegion(e));
            }}
          >
            <SelectTrigger className="p-7 dark:bg-dark bg-light md:w-[300px] w-[250px] rounded-lg">
              <SelectValue placeholder="Filter by Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className="p-3" value="africa">
                Africa
              </SelectItem>
              <SelectItem className="p-3" value="america">
                America
              </SelectItem>
              <SelectItem className="p-3" value="asia">
                Asia
              </SelectItem>
              <SelectItem className="p-3" value="europe">
                Europe
              </SelectItem>
              <SelectItem className="p-3" value="oceania">
                Oceania
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center">
          <PuffLoader size={200} color="#3bc04b" loading={loading} />
        </div>
      ) : (
        <Countries
          countries={countries}
          filteredCountries={filteredCountries}
        />
      )}
    </main>
  );
}
