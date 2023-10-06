import React, { forwardRef, useState, useImperativeHandle } from 'react'
import './style.scss'

import Arrow from './arrow.svg'

const Dropdown = forwardRef(
  (
    { title, children, currentPosition = 1, onDropdownClick = () => {} },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false)

    useImperativeHandle(ref, () => ({
      toggleDropdown() {
        setIsOpen(!isOpen)
      },
      closeDropdown(I) {
        setIsOpen(false)
      },
    }))

    const handleClick = () => {
      setIsOpen(!isOpen)
      onDropdownClick(currentPosition)
    }

    return (
      <div className='dropdown'>
        <div className='dropdown__title' onClick={handleClick}>
          {title}{' '}
          <img
            className={`dropdown__chevron ${isOpen ? 'dropdown__open' : ''}`}
            src={Arrow}
            alt=''
          />
        </div>
        {isOpen && <div className='dropdown__content'>{children}</div>}
      </div>
    )
  }
)

export default Dropdown
