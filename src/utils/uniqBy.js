const uniqBy = (array, key) => {
  return array.reduce((acc, item) => {
    if (!acc.some((obj) => obj[key] === item[key])) {
      acc.push(item);
    }
    return acc;
  }, []);
};

export default uniqBy;
