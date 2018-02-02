import values from 'lodash/values';

export const selectAllPhotos = (state) => {
  return (Object.values(state.entities.photos)
);};
