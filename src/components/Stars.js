import React, { useState } from "react"
import { SelectStars } from "../styles/components"

export default function Stars() {
  const [starts, setStars] = useState(s)
  return (
    <SelectStars selected={stars}>
      <span onClick={() => setStars(1)}>🎇</span>
      <span onClick={() => setStars(2)}>🎇</span>
      <span onClick={() => setStars(3)}>🎇</span>
      <span onClick={() => setStars(4)}>🎇</span>
      <span onClick={() => setStars(5)}>🎇</span>
    </SelectStars>
  )
}
