import React from "react";
import "./AddTranding.css";
import { useForm } from "react-hook-form";
import axios from "axios";
const AddTranding = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
      
    console.log(data)
    axios
    .post("https://peaceful-caverns-31356.herokuapp.com/tranding", data)
    .then((res) => {
      console.log(res);
      if (res.data.insertedId) {
        alert("Tranding Place add succesfully");
        reset();
      }
    });


};
  return (
    <div>
      <h1>this is add tranding section</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="label-style" htmlFor="">
            Place Name:
          </label>
          <input
            type="text"
            {...register("place")}
            placeholder="Place Name"
            className="d-inline"
            required
          />
        </div>

        <div>
          <label className="label-style" htmlFor="">
            Image Url:
          </label>
          <input
            type="text"
            {...register("img")}
            placeholder="Image Url"
            className="d-inline"
            required
          />
        </div>

        <div>
          <label className="label-style" htmlFor="">
            Description:
          </label>
          <textarea
            type="text"
            {...register("des")}
            placeholder="Description"
            className="d-inline"
            required
          />
        </div>

        <input type="submit" value="ADD" className="form-button-style " />
      </form>
    </div>
  );
};

export default AddTranding;
