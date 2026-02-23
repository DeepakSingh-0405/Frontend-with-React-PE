import ProductCard from './ProductCard';
export default function ProductList({products,addToCart})
{
    return(
        <div style={{
            display:'grid',
            gridTemplateColumns: 'auto auto auto',
            gap: '10px',
            backgroundColor: 'dodgerblue',
            padding: '10px'
        }}>
        {products.map(product=>
        <ProductCard 
         key={product.id} 
        product={product} 
        addToCart={addToCart} />

        )}
        </div>
    )
}