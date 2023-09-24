import Dropdown from '../../components/dropdown'
import React, { useRef } from 'react'

import './style.scss'

export default function DropdownContainer({ items }) {
  const itemRefs = useRef([])

  const onDropdownClick = (currentPosition) => {
    itemRefs.current.forEach((_, i) => {
      if (i !== currentPosition) {
        itemRefs.current[i].closeDropdown()
      }
    })
  }

  return (
    <div className='dropdown-container'>
      {items.map((item, i) => (
        <Dropdown
          ref={(el) => (itemRefs.current[i] = el)}
          item={item}
          currentPosition={i}
          onDropdownClick={onDropdownClick}
        />
      ))}
    </div>
  )
}
