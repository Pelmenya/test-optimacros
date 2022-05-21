import cn from 'classnames';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { resetCurrentPage, setCurrentPage } from '../../services/redux/slices/current-page';

import row from './row.module.css';

export const Row = ({ item, level, children }: any) => {
  const dispatch = useDispatch();

  const handlerOnFocusPage = useCallback(
    () => {
      dispatch(setCurrentPage(item));
    },
    [
      dispatch,
      item,
    ],
  );

  const handlerOnBlurPage = useCallback(
    () => {
      dispatch(resetCurrentPage());
    },
    [
      dispatch,
    ],
  );

  return (
    <div
      key={`section-${item.id}`}
      style={{ paddingLeft: `${level}px`, width: `calc(100% - ${level}px` }}
      className={cn(row.container, 'text text_type_main-default')}>
      <span
        tabIndex={0}
        className={cn(row.item, 'pl-4')}
        onFocus={handlerOnFocusPage}
        onBlur={handlerOnBlurPage}>
        {item.label}
      </span>
      <div>{children}</div>
    </div>
  );
};
