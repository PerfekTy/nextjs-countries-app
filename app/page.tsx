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
import FilterBar from "@/components/filter-bar";
import SearchBar from "@/components/search-bar";

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
        <SearchBar setFilteredCountries={setFilteredCountries} filterCountriesName={filterCountriesName} />
        <FilterBar setFilteredCountries={setFilteredCountries} filterCountriesRegion={filterCountriesRegion} />
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
