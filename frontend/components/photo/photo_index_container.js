import { connect } from 'react-redux';
import { fetchPhotos, fetchMorePhotos } from './../../actions/photo_actions';
import PhotoIndex from './photo_index';
import { selectAllPhotos } from './../../reducers/selectors';

const mapStateToProps = (state) =>{
  return {
    photos: selectAllPhotos(state),
    loading: state.ui.loading
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
  fetchMorePhotos: (photoCount) => dispatch(fetchMorePhotos(photoCount))
});

export default connect(mapStateToProps,mapDispatchToProps)(PhotoIndex);
