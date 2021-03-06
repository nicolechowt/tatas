import React, { useEffect } from "react";
import './style/library.css';
import Box from '../box';
import ScrollToTop from '../scroll-to-top';
import { 
  ADD_MODAL,
  REMOVE_MODAL,
} from '../../reducers/actions'
import { connect } from 'react-redux';

import {
  useRouteMatch,
  withRouter,
} from "react-router-dom";

import { COLORS } from '../../../src/enums/colors'

function Library(props) {
  const { removeModal } = props;

  let { url } = useRouteMatch();

  const nextPath = (path) => {
    props.history.push(path);
  }

  useEffect(()=>{
    if(props.history.action==='PUSH' || props.history.action==='POP') {
      removeModal();
    }
  }, [removeModal, props.history.action])

  return (
    <div className="library">
      <ScrollToTop />
      <div 
        className="library__box"
        style={{backgroundColor: `${COLORS.EXERCISE}`}}
      >
        <Box onClick={()=>nextPath(`${url}/exercise`)}>
          EXERCISE
        </Box>
      </div>


      <div 
        className="library__box"
        style={{backgroundColor: `${COLORS.MINDFULNESS}`}}
      >
        <Box onClick={()=>nextPath(`${url}/mindfulness`)}>
          MINDFULNESS
        </Box>
      </div>

      <div 
        className="library__box library__box-breast"
        style={{backgroundColor: `${COLORS.SELF_CHECK}`}}
      >
        <Box onClick={()=>nextPath(`${url}/breast-health`)}>
          BREAST HEALTH
        </Box>
      </div>

      <div 
        className="library__box"
        style={{backgroundColor: `${COLORS.FRUITS_AND_VEGGIES}`}}
      >
        <Box onClick={()=>nextPath(`${url}/healthy-eating`)}>
          HEALTHY EATING
        </Box>   
      </div>
   
      <div 
        className="library__box"
        style={{backgroundColor: `${COLORS.SLEEP}`}}
      >
        <Box onClick={()=>nextPath(`${url}/sleep`)}>
          SLEEP
        </Box>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { 
    currentUserReducer, 
    dashboardReducer,
    modalReducer,
  } = state;

  return { 
    currentUser: currentUserReducer.currentUser,
    dashboard: dashboardReducer,    
    modal: modalReducer,
  }
}
function mapDispatchToProps(dispatch) {
  return { 
    addModal: (data) => dispatch({ type: ADD_MODAL, data}),
    removeModal: () => dispatch({ type: REMOVE_MODAL}),
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Library)
);