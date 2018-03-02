export const fetchAlbums = () => (
  $.ajax({
    method: 'GET',
    url: `api/albums`
  })
);

export const fetchAlbum = (albumId) => (
  $.ajax({
    method: 'GET',
    url: `api/albums/${albumId}`,
    data: {albumId}
  })
);

export const updateAlbum = (album) => (
  $.ajax({
    method: 'PATCH',
    url: `api/albums/${album.id}`,
    data: {album}
  })
);

export const createAlbum = (album) => {
  return $.ajax({
    method: 'POST',
    url: `api/albums`,
    data: {album}
  });
};

export const deleteAlbum = (albumId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/albums/${albumId}`
  })
);
