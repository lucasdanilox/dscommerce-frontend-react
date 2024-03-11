import './styles.css';
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import ButtonInverse from '../../../components/ButtonInverse';
import * as ProductService from '../../../services/product-service';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {

    const params = useParams();

    const product = ProductService.findById(Number(params.productId));

    return (
        <main>
            <section id="product-details-section" className="dsc-container">
                {
                    product &&
                    <ProductDetailsCard product={product} />
                }

                <div className="dsc-btn-page-container">
                    <ButtonPrimary text="Comprar" />
                    <ButtonInverse text="Início" />
                </div>
            </section>
        </main>
    );
}