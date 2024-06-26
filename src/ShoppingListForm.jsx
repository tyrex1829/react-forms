import { useState } from "react"

function ShoppingListForm ({ addItem }) {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(formData);
        setFormData({product: "", quantity: 0});
    }

    return (
        <form action="#" onSubmit={handleSubmit}>
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