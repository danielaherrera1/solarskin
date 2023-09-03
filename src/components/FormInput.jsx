
const FormInput = ({ labelText = "", name, type = "text", value, handleValue }) => {


  return (
    <div
      className="d-flex flex-column gap-2"
    >
      <label htmlFor={name}>{labelText}</label>
      
      <input 
        className="m-auto"
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleValue}
      />
      
    </div>
  );
};


export default FormInput;
