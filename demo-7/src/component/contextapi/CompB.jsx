import React, { useContext } from 'react'
import { CompC } from './CompC'
import { Firstname } from '../../App'

export const CompB = () => {
  const fname =useContext(Firstname);
  return (
    <div>CompC {fname}</div>
  )
}
