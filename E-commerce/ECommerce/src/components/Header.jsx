export default function Header({cartCount,searchProduct})
{
    return(<div className="header">
        <h2> React Demo App</h2>
        <p>Cart Item Count:{cartCount}</p>
        <form onSubmit={(e)=>searchProduct(e)}>
            <input type="search" placeholder="search products" name="bar"/>
            <button type="submit">Search</button>
        </form>
    </div>);
}