"use client"
import { FormspreeProvider } from '@formspree/react'
import React from 'react'

function Providers({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <FormspreeProvider project="2276191974035815494">
        {children}
    </FormspreeProvider>
  )
}

export default Providers