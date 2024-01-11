import { Link } from "react-router-dom";

const DisplayProduct = ({ product }: any) => {
  return (
    <div className="singleProduct">
      <h3>{product.title}</h3>
      <p>
        {product.description.length > 90
          ? `${product.description.substring(0, 90)}...`
          : product.description}
      </p>
      <p>Price: {product.price}</p>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: 100, height: 100 }}
      />
      <Link to={`/product/${product.id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
};

export default DisplayProduct;
