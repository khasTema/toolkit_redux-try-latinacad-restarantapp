import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";
import ReservationCard from "./components/ReservationCard";
import { addResesrvation } from "./features/reservationSlice";

function App() {

  const [ reservationNameInput, setReservationNameInput ] = useState('')

  const reservation = useSelector((state: RootState) => state.reservation.value)

  const dispatch = useDispatch()

  const handleAddReservations = () => {
    if(!reservationNameInput)return;
    dispatch(addResesrvation(reservationNameInput))
    setReservationNameInput('')
  }
 
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservation.map((name, index) => <ReservationCard name={name} index={index}/>)}
            </div>
          </div>
          <div className="reservation-input-container">
              <input value={reservationNameInput} onChange={(e) => setReservationNameInput(e.target.value)}/>
              <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          <div className="customer-food-card-container">
            <p>Selena Gomez</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;