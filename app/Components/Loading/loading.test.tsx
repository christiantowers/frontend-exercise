import React from 'react';
import { render } from '@testing-library/react';
import Loading from './index';

describe('Loading', () => {
  it('renders nothing when loading is false', () => {
    const { container } = render(<Loading loading={false} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders loading spinner when loading is true', () => {
    const { getByRole } = render(<Loading loading={true} />);
    const spinner = getByRole('status');
    expect(spinner).toBeInTheDocument();
  });
});