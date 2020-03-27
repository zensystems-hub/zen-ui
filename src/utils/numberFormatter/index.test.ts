import { numericFormat, bpsSize } from './index';

describe('천단위로 구분 문자열을 표현시하다.', () => {
  it('numericFormat', () => {
    expect(numericFormat(123123)).toBe('123,123');
  });
});
