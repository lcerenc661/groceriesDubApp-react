import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";


const Form = ({ items, setItems, addItem }) => {
  const [val, setVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(val);
    setVal("");
    if (!val) {
        toast.error('Please provide value')
      console.log("please add a value");
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery dub</h4>
      <div className="form-control">
        <input
          className="form-input"
          type="text"
          id="inputField"
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          Add items
        </button>
      </div>
    </form>
  );
};
export default Form;
