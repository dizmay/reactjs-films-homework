import { genresSelector, propSelector } from '../selectors';

describe('selectors tests', () => {
  it('should get genres from array of objects by id', () => {
    const arrOfObj = [{ name: 'test', id: 0 }, { name: '123123', id: 1 }, { name: 'TEST', id: 2 }];
    const arr = [0, 2];
    const result = genresSelector(arr, arrOfObj);
    expect(result).toBe('test, TEST');
  });

  it('should get element by property index', () => {
    const arrOfObj = [{ name: 'test', id: 0, test: 'TEST' }];
    const prop = 'test';
    const result = propSelector(arrOfObj, prop);
    expect(result).toStrictEqual(['TEST']);
  });
});
