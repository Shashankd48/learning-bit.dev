import React from 'react';
import { render } from '@testing-library/react';
import { BasicProfileCard } from './profile-card.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicProfileCard />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
