import { useState } from "react";
import axios from "axios";
import "./AddMedicine.css";

function AddMedicine() {

  const [medicine, setMedicine] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    expiryDate: ""
  });

  const handleChange = (e) => {
    setMedicine({
      ...medicine,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/medicines",
        medicine
      );

      alert("Medicine Added");

      setMedicine({
        name: "",
        category: "",
        price: "",
        quantity: "",
        expiryDate: ""
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">

      <h2>Add Medicine</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Medicine Name"
          name="name"
          value={medicine.name}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Category"
          name="category"
          value={medicine.category}
          onChange={handleChange}
        />

        <input
          type="number"
          placeholder="Price"
          name="price"
          value={medicine.price}
          onChange={handleChange}
        />

        <input
          type="number"
          placeholder="Quantity"
          name="quantity"
          value={medicine.quantity}
          onChange={handleChange}
        />

        <input
          type="date"
          name="expiryDate"
          value={medicine.expiryDate}
          onChange={handleChange}
        />

        <button type="submit">
          Add Medicine
        </button>

      </form>

    </div>
  );
}

export default AddMedicine;