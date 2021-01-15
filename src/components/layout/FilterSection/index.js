import React from "react";
import { useQuery } from "react-query";
import FilterCard from "../../widget/FilterCard";
import { getFilters } from "../../../services/apiServcie";

const FilterSection = () => {
  const { isLoading, error, data } = useQuery("filters", getFilters);

  return (
    <div className="hidden lg:flex flex-col mr-4 w-64">
      {isLoading ? (
        <div className="flex flex-col h-full w-full justify-center items-center">
          Loading...
        </div>
      ) : error ? (
        <div className="flex flex-col min-h-screen justify-center items-center">
          {`Something went wrong ${error.message}`}
        </div>
      ) : (
        Object.keys(data).map((item, index) => (
          <FilterCard
            key={index}
            filterType={item}
            filterOptions={data[item]}
          />
        ))
      )}
    </div>
  );
};

export default FilterSection;
