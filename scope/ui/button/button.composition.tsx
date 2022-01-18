import React from 'react';
import { Button } from './button';

export const BasicButton = () => {
  return <Button>hello world!</Button>;
};

export const PrimaryButton = () => {
  const handleClick = () => alert('Hello button says how you doing ?');

  return (
    <Button type="primary" onClick={handleClick}>
      Primary
    </Button>
  );
};

export const SecondaryButton = () => {
  const handleClick = () => alert('Hello button says how you doing ?');

  return (
    <Button type="secondary" onClick={handleClick}>
      Secandary
    </Button>
  );
};
