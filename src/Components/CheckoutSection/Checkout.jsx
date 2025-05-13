import { useState } from 'react';
import './Checkout.css';
import calculator from '../Assets/calculator.jpg'; // sample image
const Checkout = () => {
  const [rentedItems, setRentedItems] = useState([
    { id: 1, name: 'Calculator', price: 100, image: calculator },
    { id: 2, name: 'Scientific Calculator', price: 150, image: calculator },
  ]);
  const [showModal, setShowModal] = useState(false);

  const removeItem = (id) => {
    setRentedItems(rentedItems.filter((item) => item.id !== id));
  };

  const subTotal = rentedItems.reduce((acc, item) => acc + item.price, 0);
  const platformFee = 10;
  const total = subTotal + platformFee;

  const handleCompleteRental = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const confirmRental = () => {
    // Here you could add API calls or navigation
    alert('Rental confirmed!');
    setShowModal(false);
  };

  return (
    <div className="page-container">
      <div className="main-content">
        <div className="left-section">
          <div className="card item-card">
            <h2 className="item-rented-title">Item Rented</h2>
            {rentedItems.map((item) => (
              <div key={item.id} className="rented-item">
                <div className="image-wrapper">
                  <img src={item.image} alt={item.name} />
                  <p className="item-name">{item.name}</p>
                </div>
                <div className="item-details">
                  <div className="price-info">
                    <div>
                      <p>Price</p>
                      <p>₱{item.price.toFixed(2)}</p>
                    </div>
                    <div>
                      <p>Sub Total</p>
                      <p>₱{item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <button
                    className="remove-button"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="card form-card">
            <h2 className="section-title">Renter Information</h2>
            <form className="input-form">
              <input type="text" placeholder="Name*" required />
              <input type="text" placeholder="Contact Number*" required />
              <input type="text" placeholder="Rent Duration*" required />
              <input type="text" placeholder="Message (optional)" />
            </form>
          </div>
        </div>

        <div className="right-section">
          <div className="card summary-card">
            <h2 className="section-title">Payment Summary</h2>
            <div className="summary-details">
              <div className="summary-row">
                <span>Sub Total</span>
                <span>₱{subTotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Platform Fee</span>
                <span>₱{platformFee.toFixed(2)}</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>₱{total.toFixed(2)}</span>
              </div>
            </div>

            <h3 className="section-subtitle">Payment Method</h3>
            <div className="payment-options">
              <label className="payment-option">
                <input type="radio" name="payment" defaultChecked />
                Cash on Delivery
              </label>
              <label className="payment-option">
                <input type="radio" name="payment" />
                PayMongo
              </label>
            </div>

            <button className="primary-button" onClick={handleCompleteRental}>
              Complete Rental
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Confirm Rental</h3>
            <p>Total Amount: ₱{total.toFixed(2)}</p>
            <div className="modal-buttons">
              <button className="confirm-button" onClick={confirmRental}>
                Confirm
              </button>
              <button className="cancel-button" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
