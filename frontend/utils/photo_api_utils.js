// direct api utils

export const countAllPhotos = () => (
  $.ajax({
    method: 'GET',
    url: `api/photo_count`
  })
)

// indirect api utils

export const fetchPhotos = () => (
  $.ajax({
    method: 'GET',
    url: `api/photos`
  })
);

export const fetchMorePhotos = (photoCount) => (
  $.ajax({
    method: 'GET',
    url: `api/more_photos?num=${photoCount}`
  })
)

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

export const createPhotoBrandNewAlbum = (photo) => {
  return $.ajax({
    method: 'POST',
    url: `api/photos`,
    data: {
      photo: {
        title: photo.title,
        description: photo.description,
        img_url: photo.img_url,
        thumb_url: photo.thumb_url
      }
    }
  });
};

export const createPhotoNewAlbum = (photo) => {
  return $.ajax({
    method: 'POST',
    url: `api/albums/${photo.value}/photos`,
    data: {
      photo: {
        title: photo.title,
        description: photo.description,
        img_url: photo.img_url,
        thumb_url: photo.thumb_url,
        album_id: photo.value
      }
    }
  });
};

export const deletePhoto = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/photos/${id}`
  })
);
