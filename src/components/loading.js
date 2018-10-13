import React from 'react';
import { connect } from 'react-redux'
import img from '../images/loading.svg'

let Loading = ({ loading }) => (
  loading ?
    <div style={{ textAlign: 'center' }}>
      <img src={img} alt='loading' width='50px' />
      <p>LOADING</p>
    </div> :
    null
);

const mapStateToProps = () => ({})
Loading = connect(mapStateToProps, null)(Loading)
export default Loading;
