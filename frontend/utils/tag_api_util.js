export const createTag = (tag) => (
  $.ajax({
    method: 'POST',
    url: `api/tags`,
    data: { tag }
  })
);

export const getTag = (tagName) => (
  $.ajax({
    method: 'GET',
    url: `api/tags/${tagName}`
  })
);
