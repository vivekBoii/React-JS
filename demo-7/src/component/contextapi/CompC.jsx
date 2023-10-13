import React from 'react'
import { Firstname } from '../../App'

export const CompC = () => {
  return (
    <React.Fragment>
        <Firstname.Consumer>{(fname)=>{
            return <div>CompC {fname}</div>;
        }}</Firstname.Consumer>
    </React.Fragment>
  )
}
