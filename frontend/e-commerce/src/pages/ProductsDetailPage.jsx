import React, { useEffect ,useState} from 'react'
import ProductsDetail from '../components/ProductsDetail/ProductsDetail'
import { useParams } from 'react-router-dom';
const ProductsDetailPage = () => {
   const { id: productId } = useParams();
   const [singleProduct, setSingleProduct] = useState(null)
   console.log("params", productId)
   const apiUrl = import.meta.env.VITE_API_BASE_URL;

   useEffect(() => {
      const fetchSingleProduct = async () => {
         try {
            const response = await fetch(`${apiUrl}/api/products/${productId}`);
            if (!response.ok) {
               throw new Error("Verileri getirme hatası");
            }
            const data = await response.json();
            setSingleProduct(data)
         } catch (error) {
            console.log("Veri hatası:", error);
         }
      };
      fetchSingleProduct();
   }, [apiUrl, productId]);
   console.log("info--->", singleProduct)
   return singleProduct ? <ProductsDetail singleProduct={singleProduct} setSingleProduct={setSingleProduct}/> : <p>Ürün yükleniyor</p>
} 

export default ProductsDetailPage
