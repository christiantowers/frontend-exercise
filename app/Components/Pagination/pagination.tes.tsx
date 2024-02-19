import React from 'react';
import { render, screen } from '@testing-library/react';

import Pagination from './index';

test('show render correctly', () => {
    render(<Pagination onPageChange={jest.fn()}
                  currentPage={1}
                  totalCount={6}
                  pageSize={10} />)
    expect(screen.getByTestId('item-back')).toBeVisible()
});