import './styles.css';
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import ButtonInverse from '../../../components/ButtonInverse';
import * as ProductService from '../../../services/product-service';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';

export default function ProductDetails() {

    const params = useParams();


    const [product, setProduct] = useState<ProductDTO>();

    useEffect(() => {
        const prod = ProductService.findById(Number(params.productId));
        setProduct(prod);
    }, []);

    return (
        <main>
            <section id="product-details-section" className="dsc-container">
                {
                    product &&
                    <ProductDetailsCard product={product} />
                }

                <div className="dsc-btn-page-container">
                    <ButtonPrimary text="Comprar" />
                    <Link to="/">
                        <ButtonInverse text="Início" />
                    </Link>

                </div>
            </section>
        </main>
    );
}