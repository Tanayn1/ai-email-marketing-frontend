'use client'
import { useNode } from "@craftjs/core";
import React from "react";

export const Container = ({background, padding = 0, children} : any) => {
    const { connectors: {connect, drag} } = useNode();

  return (
    <div style={{margin: "5px 0", background, padding: `${padding}px`}}>
      {children}
    </div>
  )
}