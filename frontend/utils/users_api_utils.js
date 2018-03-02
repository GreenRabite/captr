export const signup = (user) => (
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: {user}
  })
);

export const fetchUserAlbums = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/albums`,
    data: {userId}
  })
);
