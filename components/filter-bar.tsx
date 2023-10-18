import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

const FilterBar = ({setFilteredCountries, filterCountriesRegion} :
                      {setFilteredCountries: (countries: string[])=> void,
                         filterCountriesRegion: (e:any) => string[]}) => {
   return (
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
   );
};

export default FilterBar;
