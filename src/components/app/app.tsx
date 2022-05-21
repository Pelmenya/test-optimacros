import React, { useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import app from './app.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPages } from '../../services/redux/slices/pages';
import { ROUTES } from '../../utils/routes/routes';
import { DispatchType } from '../../utils/types/dispatch-type';
import { Modal } from '../modal/modal';
import { clearError } from '../../services/redux/slices/error-request';
import { BadRequest } from '../bad-request/bad-request';
import { getErrorRequestState } from '../../services/redux/selectors/error-request';

export const App = () => {
  const { isError, message } = useSelector(getErrorRequestState);
  const dispatch = useDispatch<DispatchType>();

  const handlerOnCloseErrorModal = () => {
    dispatch(clearError());
  };


  useEffect(
    () => {
      dispatch(fetchPages());
    },
    [
      dispatch,
    ],
  );

  return (
    <div className={app.app}>
      <Routes>
        {ROUTES.map((route) => (
          <Route key={route.name} path={route.path} element={<route.element />} />
        ))}
      </Routes>
      {isError && (
        <Modal title='Error' handlerOnClose={handlerOnCloseErrorModal}>
          <BadRequest error={message} />
        </Modal>
      )}
    </div>
  );
};
