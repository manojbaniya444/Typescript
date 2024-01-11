type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
};

export const fetchProducts = async (
  url: string
): Promise<Product[]> => {
  const res = await fetch(url);
  return res.json();
};
