import React, { useState } from 'react';
import SuperSwitch from '../SuperSwitch/SuperSwitch';
import SuperButton from '../SuperButton/SuperButton';
import './ProductCreator.css';

const ProductCreator = () => {
  const [formValues, setFormValues] = useState({
    productName: '',
    price: '',
    discount: '',
    hasDiscount: false,
  });

  const onFieldChange = (fieldName, value) => {
    setFormValues((_formValues) => ({
      ..._formValues,
      [fieldName]: value,
    }));
  };

  return (
    <div className="product-creator">
      <input
        type="text"
        placeholder="Nombre Producto"
        value={formValues.productName}
        onChange={(event) => onFieldChange('productName', event.target.value)}
      />
      <input
        name="price"
        type="number"
        placeholder="Precio"
        min={0}
        value={formValues.price}
        onChange={(event) => onFieldChange('price', event.target.value)}
      />
      <SuperSwitch
        hasMargin={true}
        value={formValues.hasDiscount}
        onChange={(active) => onFieldChange('hasDiscount', active)}
      />
      {formValues.hasDiscount && (
        <input
          type="number"
          min={0}
          max={100}
          value={formValues.discount}
          onChange={(event) => onFieldChange('discount', event.target.value)}
        />
      )}
      <SuperButton
        text="Crear"
        onClick={() => console.log('Valores del form', formValues)}
      />
    </div>
  );
};

export default ProductCreator;
