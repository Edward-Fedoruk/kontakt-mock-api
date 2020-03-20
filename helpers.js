const compose = (...fns) => (...args) => fns.reduceRight((s, fn) => [fn.call(null, ...s)], args)[0];

const map = (f) => (arr) => arr.map(f);

const arrayTransformer = ([k, v]) => ([k, parseInt(v, 10)]);

const fromEntries = (arr) => arr
  .reduce((acc, pair) => (pair.length === 2 ? { ...acc, [pair[0]]: pair[1] } : {}), {});

const transformToInt = compose(
  fromEntries,
  map(arrayTransformer),
  Object.entries,
);

const range = (from, count, arr) => arr.slice(from, from + count);

const handlePaginationRequest = (query, responseData) => {
  const { currentItemID, itemsToFetch } = transformToInt(query);

  const responseItems = currentItemID && itemsToFetch
    ? range(currentItemID + 1, itemsToFetch, responseData) : range(0, 4, responseData);

  const itemsLeft = responseItems.length - responseItems[responseItems.length - 1].id;

  const response = {
    responseItems,
    itemsLeft,
	};

  return response
}

module.exports = {
  range,
  transformToInt,
  handlePaginationRequest
}