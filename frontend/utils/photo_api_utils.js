export const fetchPhotos = () => (
  $.ajax({
    method: 'GET',
    url: `api/photos`
  })
);

export const fetchPhoto = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/photos/${id}`
  })
);

export const updatePhoto = (photo) => (
  $.ajax({
    method: 'PATCH',
    url: `api/photos/${photo.id}`,
    data: {photo}
  })
);

export const createPhoto = (photo) => {
  return $.ajax({
    method: 'POST',
    url: `api/albums/${photo.albumId}/photos`,
    data: photo
  });
};

export const deletePhoto = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/photos/${id}`
  })
);
