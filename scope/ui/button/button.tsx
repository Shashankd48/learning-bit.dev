import React, { ReactNode } from 'react';
import styles from "./button.module.scss"

export type ButtonProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
  /**
   * On click event for the button.
   */
  onClick?: React.MouseEventHandler;

  /**
   * Button style
   */
  type?:'primary' | 'secondary'
};

export function Button({ children, onClick, type }: ButtonProps) {
  return (
    <button className={styles.button} data-variation = {type} onClick={onClick} >
      {children}
    </button>
  );
}
