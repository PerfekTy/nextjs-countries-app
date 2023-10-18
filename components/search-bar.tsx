import {Label} from "@/components/ui/label";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";

const SearchBar = ({setFilteredCountries, filterCountriesName} :
                      {setFilteredCountries: (countries: string[])=> void,
                         filterCountriesName: (e:any) => string[]}) => {
   return (
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
   );
};

export default SearchBar;
