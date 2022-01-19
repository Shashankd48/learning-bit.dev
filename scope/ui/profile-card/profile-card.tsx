import React, { ReactNode } from 'react';
import styles from './card.module.scss';
import { Button, ButtonProps } from '@company/scope.ui.button';

export type ProfileCardProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
  /**
   * Button text
   */
  buttonText?: string;
  /**
   * Card Title
   */
  cardTitle: string;
  /**
   * a node to be rendered in the special component.
   */
  actionButtons?: ReactNode;
} & ButtonProps;

export function ProfileCard({
  children,
  buttonText,
  cardTitle,
  actionButtons,
}: ProfileCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h1 className={styles.cardTitle}>{cardTitle}</h1>
        <Button type="primary" onClick={() => alert('hello there')}>
          {buttonText}
        </Button>
      </div>

      <div className={styles.cardContent}>{children}</div>

      {actionButtons && (
        <div className={styles.cardAction}>{actionButtons}</div>
      )}
    </div>
  );
}
