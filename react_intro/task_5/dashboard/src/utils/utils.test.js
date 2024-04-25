import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear', () => {
  it('should return the current year', () => {
    const currentYear = (new Date()).getFullYear();
    expect(getFullYear()).toEqual(currentYear);
  });
});

describe('getFooterCopy', () => {
	it('should return "Holberton School" when the isIndex is true', () => {
	  expect(getFooterCopy(true)).toEqual('Holberton School');
	});

	it('should return "Holberton School main dashboard" when the isIndex is false', () => {
		expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
	  });
  });

  describe('getLatestNotification function', () => {
	it('should return the correct string', () => {
	  const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
	  expect(getLatestNotification()).toEqual(expectedString);
	});
});
