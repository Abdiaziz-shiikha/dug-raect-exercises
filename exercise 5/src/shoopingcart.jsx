import { useState } from "react";

const Shooping = () => {

    const [products, setProducts] = useState([])
    const [productName, setProductName] = useState("")
    const [productPrice, setProductPrice] = useState('')


    const handleAddButton = () => {

        if (productName.trim() !== ('') && productPrice.trim() !== ('')) {
            const newProduct = {
                id: Date.now(),
                name: productName,
                price: parseFloat(productPrice),
                quantity: 1
            }

            setProducts([...products, newProduct])
            setProductName("")
            setProductPrice('')
        }


    }

    const removeProduct = (id) => {

        const updateProduct = products.filter((Product) => Product.id !== id)
        setProducts(updateProduct)

    }

    const addprice=(id)=>{
        const updatedproducts = products.map((product)=>
            product.id===id ? {...product,quantity:product.quantity+1} : product
    )
    setProducts(updatedproducts)
    }
    const subPrice =(id)=>{
        const updatedproducts = products.map((product)=>
            product.id===id && product.quantity>1 ? {...product,quantity:product.quantity-1} : product
        )
        setProducts(updatedproducts)
    }

    const Total = products.reduce((Total,product)=> Total + product.price * product.quantity,0);

    return (
        <div>
            <div>
                <input type="text" placeholder="name" value={productName} onChange={(e) => (setProductName(e.target.value))} />
                <input type="number" placeholder="price" min={0} value={productPrice} onChange={(e) => (setProductPrice(e.target.value))} />
                <button onClick={handleAddButton}>Add to cart</button>

                {
                    !products.length == 0 ? (
                        <div>
                            <ul> <h3>products are here</h3>

                                {

                                    products.map((product) => (
                                        <li key={product.id}>
                                            <strong>{product.name}-${product.price.toFixed(2)}</strong>
                                            <div>
                                                Quantity :
                                                <button onClick={()=>subPrice(product.id)}>-</button>
                                                {product.quantity}
                                                <button onClick={()=> addprice(product.id)}>+</button>

                                            </div>
                                            <button onClick={() => removeProduct(product.id)}>remove</button>
                                        </li>
                                    )
                                    )}
                            </ul>
                            <h4>Total is : {Total}</h4>
                        </div>
                    ) : <p>the products are empety</p>
                }
            </div>
        </div>
    )

}

export default Shooping;