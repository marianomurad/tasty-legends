import  ProductComponent from '../../components/product'
import { useRouter } from "next/router";
const Product = () => {
    const router = useRouter();
    console.log(router.query);

    return (
            <div className="container">
                <ProductComponent
                    name={router.query.name}
                    price={router.query.price}
                    url={router.query.url}
                    image={router.query.image}
                    ingredients={router.query.ingredients}
                />
            </div>
    );
};

export default Product;
