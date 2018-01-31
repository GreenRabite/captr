export const signup = (user) => (
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: {user}
  })
);
