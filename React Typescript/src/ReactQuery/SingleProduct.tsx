import { useParams } from "react-router-dom";
import useQueryFetch from "./useQueryFetch";
import { categoryData } from "../Quiz/categoryData";

const SingleProduct = () => {
  const { id } = useParams();

  let url = `https://fakestoreapi.com/products/${id}`;
  let queryKey = `fetch${id}`;
  const { data, isLoading, error } = useQueryFetch(url, queryKey);
  console.log(data);
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Something went wrong</div>}
      <div>
        <h3>{data?.title}</h3>
        <p>{data?.description}</p>
        <p>Price: {data?.price}</p>
        <img
          src={data?.image}
          alt={data?.title}
          style={{ width: 100, height: 100 }}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
