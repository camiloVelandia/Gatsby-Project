import React, { useState, useContext } from "react"
import priceFormat from "../utils/priceFormat"
import { CartContext } from "../Context"
import {
  Tag,
  SizeButton,
  QtyButton,
  SizeSelect,
  Button,
  StyledProductDetail,
  QtySelect,
} from "../styles/components"

import { SEO, Stars } from "./"

export default function productDetail({
  price,
  id,
  product: { name, metadata },
}) {
  const formatPrice = priceFormat(price)
  const [size, setSize] = useState(2)
  const [qty, setQty] = useState(1)
  const { addToCart } = useContext(CartContext)
  const handleSubmit = () => {
    addToCart({ price, sku: id, name, metadata, quantity: qty })
  }
  return (
    <StyledProductDetail>
      <SEO title={name} />
      <img src={metadata.img} alt={name} />
      <div>
        <Tag>popular</Tag>
        <h2>{name}</h2>
        <b>USD {formatPrice} </b>
        <Stars />
        {metadata.wear && <h3>color: azul</h3>}
        <small>{metadata.description}</small>
        {metadata.wear && (
          <SizeSelect selected={size}>
            <SizeButton onClick={() => setSize(1)}>s</SizeButton>
            <SizeButton onClick={() => setSize(2)}>m</SizeButton>
            <SizeButton onClick={() => setSize(3)}>l</SizeButton>
          </SizeSelect>
        )}
        <p>cantidad:</p>
        <QtySelect>
          <button onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>-</button>
          <input type="text" disabled value={qty} />
          <button onClick={() => setQty(qty + 1)}>+</button>
        </QtySelect>
        <Button onClick={handleSubmit}>agregar al carrito</Button>
      </div>
    </StyledProductDetail>
  )
}
