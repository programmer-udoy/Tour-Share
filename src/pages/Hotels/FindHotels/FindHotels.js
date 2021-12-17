import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import HotelsDetails from "../HotelsDetails/HotelsDetails";
import "./FindHotels.css";
const FindHotels = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [price, setPrice] = useState(null);
  const [roomType, setRoomType] = useState("");
  const [roomCount, setRoomCount] = useState("");
  const [hotels, setHotels] = useState([]);

  const handleInput = (e) => {
    e.preventDefault();
  };
  
  const handlePlace = (e) => {
    const value = e.target.value;
    setPlaceName(value);
  };

  const handlePrice = (e) => {
    const value = e.target.value;
    setPrice(value);
  };
  const handleRoomType = (e) => {
    const value = e.target.value;
    setRoomType(value);
  };
  const handleRoomCount = (e) => {
    const value = e.target.value;
    setRoomCount(value);
  };
 
  // useEffect(() => {
  //   const uri = `https://peaceful-caverns-31356.herokuapp.com/hotels?search=${placeName}&price=${price}`;

  //   fetch(uri)
  //     .then((req) => req.json())
  //     .then((data) => setHotels(data));
  // }, [price]);


  return (
    <div>
      <h1>Find Hotels</h1>

      <form onSubmit={handleInput} action="" className="input-field-container">
        <input
          type="text"
          className="text-field "
          name="hotels"
          id=""
          placeholder="Place name"
          onBlur={handlePlace}
          required
        />

        <input
          type="number"
          className="price-field "
          name=""
          id=""
          placeholder="Price"
          onBlur={handlePrice}
          required
        />

        <DatePicker
          selected={startDate}
          wrapperClassName="datePicker2"
          placeholderText="Check In"
          onChange={(date) => setStartDate(date)}
          required
        />
        <DatePicker
          wrapperClassName="datePicker"
          selected={endDate}
          placeholderText="Check Out "
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          onChange={(date) => setEndDate(date)}
          required
        />
        <input
          type="text"
          list="browsers"
          placeholder="room "
          onBlur={handleRoomType}
        />

        <datalist id="browsers">
          <option value="Single Bad" />
          <option value="Double bad" />
          <option value="Couple bad" />
        </datalist>
        <input
          type="number"
          placeholder="room count"
          onBlur={handleRoomCount}
        />
        <input type="submit" className="search-field " value="Search" />
      </form>

      <div className="card-group">
        {hotels?.map((hotelDetails) => (
          <HotelsDetails
            key={Math.random()}
            hotelDetails={hotelDetails}
          ></HotelsDetails>
        ))}
      </div>
    </div>
  );
};

export default FindHotels;
