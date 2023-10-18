const CountrySpan = ({label, content}:{label: string, content: string | undefined | string[]}) => {
   return (
      <span className="flex gap-1 items-center md:justify-start justify-center">
         <p className="font-semibold text-sm">{label}: </p>
         <p className="font-light text-sm">{content}</p>
      </span>
   );
};

export default CountrySpan;
