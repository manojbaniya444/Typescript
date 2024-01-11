import React from "react";
import useQueryFetch from "./useQueryFetch";
import "./style.css";
import DisplayProduct from "./DisplayProduct";

let url = "https://fakestoreapi.com/products";
let queryKey = "fetch";

const QueryFetch: React.FC = () => {
  const { data, isLoading, error } = useQueryFetch(url, queryKey);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;
  return (
    <div className="products">
      {data?.map((item: any) => {
        return <DisplayProduct key={item.id} product={item} />;
      })}
    </div>
  );
};

export default QueryFetch;
