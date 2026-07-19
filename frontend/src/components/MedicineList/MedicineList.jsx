import { useEffect, useState } from "react";
import axios from "axios";
import "./MedicineList.css";

function MedicineList() {

  const [medicines, setMedicines] = useState([]);

  const fetchMedicines = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/medicines"
      );

      setMedicines(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMedicines();
  }, []);

  const deleteMedicine = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/medicines/${id}`
      );

      fetchMedicines();

    } catch (error) {
      console.log(error);
    }
  };
const handleUpdate = async (med) => {
  const updatedName = prompt(
    "Enter updated medicine name",
    med.name
  );

  if (!updatedName) return;

  try {
    await axios.put(
      `http://localhost:5000/api/medicines/${med._id}`,
      {
        ...med,
        name: updatedName,
      }
    );

    fetchMedicines();
  } catch (error) {
    console.log(error);
  }
};
  return (

    <div>

      <h2>Medicine Stock</h2>

      <div className="medicine-list">

        {medicines.map((med) => (

          <div className="card" key={med._id}>

            <h3>{med.name}</h3>

            <p>
              <strong>Category:</strong>
              {med.category}
            </p>

            <p>
              <strong>Price:</strong>
              ₹{med.price}
            </p>

            <p>
              <strong>Quantity:</strong>
              {med.quantity}
            </p>

            <p>
              <strong>Expiry:</strong>
              {new Date(
                med.expiryDate
              ).toLocaleDateString()}
            </p>

            {med.quantity < 10 && (
              <p className="low-stock">
                Low Stock!
              </p>
            )}

            <button
              className="delete-btn"
              onClick={() => deleteMedicine(med._id)}
            >
              Delete
            </button>


            <button
              className="update-btn"
              onClick={() =>handleUpdate(med)}
            >
              Update
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default MedicineList;