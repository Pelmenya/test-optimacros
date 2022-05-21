import cn from 'classnames';
import { useCallback } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPageState } from '../../services/redux/selectors/current-ingredient';
import { getPagesState } from '../../services/redux/selectors/pages';
import { setCurrentPage } from '../../services/redux/slices/current-page';
import { updatePages } from '../../services/redux/slices/pages';
import { PageType } from '../../utils/types/page';

import row from './row.module.css';

export const Row = ({ item, level, children }: any) => {
  const dispatch = useDispatch();
  const { page } = useSelector(getCurrentPageState);
  const { pages} = useSelector(getPagesState);

  const handlerDrop = (dropPage: PageType) => {
    const indexPage = pages.findIndex((myPage) => myPage.id === item.id);
    const indexDropPage = pages.findIndex(
      (myPage) => myPage.id === dropPage.id,
    );
    let arrDisposition = [
      ...pages,
    ];
    if (indexPage < indexDropPage) {
      arrDisposition.splice(indexDropPage, 1);
      arrDisposition.splice(indexPage, 0, dropPage);
    } else {
      arrDisposition.splice(indexPage + 1, 0, dropPage);
      arrDisposition.splice(indexDropPage, 1);
    }
    dispatch(updatePages(arrDisposition));
  };


  const [
    { opacity },
    drag,
  ] = useDrag({
    item: item,
    type: 'pages',
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0 : 1,
    }),
  });

  const [
    ,
    drop,
  ] = useDrop({
    accept: 'pages',
    hover: (dropPage, monitor) => {
      !monitor.isOver() && handlerDrop(dropPage as PageType);
    },
  });


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
      <div style={{ opacity }} ref={drop}>
        <div
          ref={drag}
          tabIndex={0}
          className={cn(row.item, 'pl-4', page?.id === item.id && row.item_focus)}
          onClick={handlerOnFocusPage}>
          {item.label}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
