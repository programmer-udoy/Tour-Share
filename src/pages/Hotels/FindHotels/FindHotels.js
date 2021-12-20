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
  const [dateDifference,setDateDifference]=useState("")
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const uri = `http://localhost:5000/hotels?search=${placeName}&price=${price}&roomtype=${roomType}`;
     //console.log(uri)
    fetch(uri)
      .then((req) => req.json())
      .then((data) => setHotels(data));
  }, [placeName,price,roomType]);


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
    handledateDifference()
  };
  const handleRoomCount = (e) => {
    const value = e.target.value;
    setRoomCount(value);
  };
  const handledateDifference=()=>{

      
    
    const diffTime = Math.abs(endDate- startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  
    setDateDifference(diffDays );
  }
  
 
  

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
          <option value="Single Bed" />
          <option value="Double Bed" />
          <option value="Couple Bed" />
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
            dateDifference={dateDifference}
            roomType={roomType}
            roomCount={roomCount}
          ></HotelsDetails>
        ))}
      </div>
    </div>
  );
};

export default FindHotels;
