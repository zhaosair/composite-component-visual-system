import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

const { Avatar, Title } = require('@/presenter/demo');

/**
 * 
 * @param {} props 
 */
export default function CartItem(props) {

  const allComponents = {
    Avatar,
    Title
  }

  return (
      <AutoComponent {...props} allComponents={allComponents}/>
  )
}