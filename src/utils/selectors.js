export const genresSelector = (arr, arrObj) => arrObj.filter((el) => arr.includes(el.id)).map((item) => item.name).join(', ');

export const propSelector = (arr, prop) => arr.map((item) => item[prop]);
