import Dropdown from '../../components/dropdown'
import React, { useRef } from 'react'

import './style.scss'

export default function DropdownsContainer({ items }) {
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
          key={i}
          ref={(el) => (itemRefs.current[i] = el)}
          title={item.title}
          currentPosition={i}
          onDropdownClick={onDropdownClick}
        >
          {item.content}
        </Dropdown>
      ))}
    </div>
  )
}
