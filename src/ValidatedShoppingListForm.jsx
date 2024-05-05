import { useState } from "react"

function ValidatedShoppingListForm ({ addItem }) {
    const [formData, setFormData] = useState({
        product: "",
        quantity: 0,
    });

    const [productIsValid, setProductIsValid] = useState(false);

    const validate = (product) => {
        if (product.length === 0) {
            setProductIsValid(false);
        } else {
            setProductIsValid(true);
        }
    }

    const handleChange = (evt) => {
        if (evt.target.name === "product") {
            validate(evt.target.value);
        }
        setFormData(curr => {
            return {
                ...curr,
                [evt.target.name]: evt.target.value,
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (productIsValid) {
            addItem(formData);
            setFormData({product: "", quantity: 0}); 
        }
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
            {!productIsValid && (<p style={{color: "red"}}>Product name can't be empty</p>)}
            <label htmlFor="quantity">Quantity : </label>
            <input
                type="number"
                placeholder="1"
                name="quantity"
                onChange={handleChange}
                id="quantity"
                value={formData.quantity}
            />
            <button disabled={!productIsValid}>Add Item</button>
        </form>
    )
}

export default ValidatedShoppingListForm