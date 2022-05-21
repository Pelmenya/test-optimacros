import cn from 'classnames';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPageState } from '../../services/redux/selectors/current-ingredient';
import { setCurrentPage } from '../../services/redux/slices/current-page';

import row from './row.module.css';

export const Row = ({ item, level, children }: any) => {
  const dispatch = useDispatch();
  const { page } = useSelector(getCurrentPageState);

  const handlerOnFocusPage = useCallback(
    () => {
      dispatch(setCurrentPage(item));
    },
    [
      dispatch,
      item,
    ],
  );

  return (
    <div
      key={`section-${item.id}`}
      style={{ paddingLeft: `${level}px`, width: `calc(100% - ${level}px` }}
      className={cn(row.container, 'text text_type_main-default')}>
      <span
        tabIndex={0}
        className={cn(row.item, 'pl-4', page?.id === item.id && row.item_focus)}
        onClick={handlerOnFocusPage}>
        {item.label}
      </span>
      <div>{children}</div>
    </div>
  );
};
