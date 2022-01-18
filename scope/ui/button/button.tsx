import React, { ReactNode } from 'react';
import "./button.css"

export type ButtonProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <div className='sample-btn' >
      {children}
    </div>
  );
}
