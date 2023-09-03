import React, { useState } from "react";
import FormInput from "../components/FormInput";

const datosCheckoutInitial = {
  nombre: "",
  correo: "",
  direccion: "",
  tipo_pago: ""
};

const Checkout = () => {
  const [datosCheckout, setDatosCheckout] = useState(datosCheckoutInitial);

  const handleInputChange = (event) => {
    const value = event.target.value
    const name = event.target.name

    setDatosCheckout({
      ...datosCheckout,
      [name]: value
    })
  }

  const handleFinalizarCompra = () => {
    console.log(datosCheckout)
    alert('Compra realizada')
  }

  return (
    <div className="container">
      <aside className="col-6 col-md-12 p-4 bg-white border rounded-3">
        <h3>Datos del cliente</h3>

        <form>
          <FormInput name="nombre" labelText="Nombre" value={datosCheckout?.nombre} handleValue={handleInputChange} />

          <FormInput name="correo" labelText="Correo" value={datosCheckout?.correo} handleValue={handleInputChange}/>

          <FormInput name="direccion" labelText="Dirección"  value={datosCheckout?.direccion} handleValue={handleInputChange}/>

          
          <select id='select-metodo-pago' name="tipo_pago" className="mt-3" onChange={handleInputChange}>
            <option value='MercadoPago'>MercadoPago</option>
            <option value='WebPay'>WebPay</option>
          </select>
        </form>

        <button className="mt-4" onClick={() => handleFinalizarCompra()}>Finalizar compra</button>
      </aside>

      <aside className="col-6 col-md-12 p-4">
      </aside>
    </div>
  );
};

export default Checkout;
