import { connect } from 'react-redux';
import { fetchPhotos } from './../../actions/photo_actions';
import PhotoIndex from './photo_index';
import { selectAllPhotos } from './../../reducers/selectors';

const mapStateToProps = (state) =>{
  return {
    photos: selectAllPhotos(state),
    loading: state.ui.loading
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPhotos: () => dispatch(fetchPhotos())
});

export default connect(mapStateToProps,mapDispatchToProps)(PhotoIndex);
