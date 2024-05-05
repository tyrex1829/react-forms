import { useState } from "react"

function ShoppingListForm () {
    const [formData, setFormData] = useState({
        product: "",
        quantity: 0,
    });

    const handleChange = (evt) => {
        setFormData(curr => {
            return {
                ...curr,
                [evt.target.name]: evt.target.value,
            }
        })
    }

    return (
        <form action="#">
            <h1>Product is : {formData.product} - {formData.quantity}</h1>
            <label htmlFor="product">Product Name : </label>
            <input
                type="text"
                placeholder="Name"
                name="product"
                onChange={handleChange}
                id="product"
                value={formData.product}
            />
            <label htmlFor="quantity">Quantity : </label>
            <input
                type="number"
                placeholder="1"
                name="quantity"
                onChange={handleChange}
                id="quantity"
                value={formData.quantity}
            />
            <button>Add Item</button>
        </form>
    )
}

export default ShoppingListForm