import React, { ReactNode } from 'react';
import styles from './card.module.scss';
import { Button } from '@company/scope.ui.button';

export type ProfileCardProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
  /**
   * Button text
   */
  buttonText?: string;
};

export function ProfileCard({ children, buttonText }: ProfileCardProps) {
  return (
    <div className={styles.card}>
      {children}
      <Button type="primary" onClick={() => alert('hello there')}>
        {buttonText}
      </Button>
    </div>
  );
}
