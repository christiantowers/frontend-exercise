import { formatDate } from './utils';

describe('formatDate', () => {
  it('returns null for empty date', () => {
    expect(formatDate('')).toBeNull();
  });

  it('returns formatted date for valid date string', () => {
    const date = '2022-01-01T00:00:00';
    const formattedDate = formatDate(date);
    expect(formattedDate).toEqual('01/01/2022');
  });
});