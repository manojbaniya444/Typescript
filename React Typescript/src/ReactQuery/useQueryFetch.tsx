import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "./utils/fakeStoreApi";

const useQueryFetch = (url: string, queryKey: string) => {
  const results = useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchProducts(url),
  });

  const { data, isLoading, error } = results;

  return { data, isLoading, error };
};

export default useQueryFetch;
