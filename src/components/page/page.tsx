import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPageState } from '../../services/redux/selectors/current-ingredient';
import { getPagesState } from '../../services/redux/selectors/pages';
import { resetCurrentPage } from '../../services/redux/slices/current-page';
import { fetchPages, updatePages } from '../../services/redux/slices/pages';
import { DispatchType } from '../../utils/types/dispatch-type';
import { ButtonWithChildren } from '../button-with-children/button-with-children';
import { CurrentPageElement } from '../current-page-element/current-page-element';
import { Flex } from '../flex/flex';
import pageStyle from './page.module.css';

export const Page = () => {
  const { page } = useSelector(getCurrentPageState);
  const { pages: pagesState } = useSelector(getPagesState);

  const dispatch = useDispatch<DispatchType>();
  let entries;
  if (page !== undefined) entries = Object.entries(page);

  const handlerRefreshPages = useCallback(
    () => {
      dispatch(fetchPages());
      dispatch(resetCurrentPage());
    },
    [
      dispatch,
    ],
  );

  const handlerRemovePages = () => {
    let pages = [...pagesState];

    function findBrunchs (attribute: string, value: number | undefined){
      const result = [];
    
      for (let i = 0; i < pages.length; i++) {
        if (pages[i][attribute]  === value) {
          result.push(pages[i]);
        }
      }
    
      return result;
    }
    
    // удалит текущую ветку и её потомков
    function deleteBrunch (id: number | undefined){
      const brunch = findBrunchs( 'id', id)[0]; // первый найденный элемент по "id"
      const children = findBrunchs('parentId', id); // его дети
    
      pages.splice(pages.indexOf(brunch), 1); // удаляем найденный элемент
    
      for (let i = 0; i < children.length; i++) {
        deleteBrunch(children[i].id); // повторяем алгоритм для всех потомков
      }
    }
    deleteBrunch(page?.id)
    dispatch(updatePages(pages));
		dispatch(resetCurrentPage());
  };

  const handlerApplyPages = () => {
    console.log(pagesState)
  }

  return (
    <Flex flexDirection='column' className={pageStyle.container}>
      <Flex flexDirection='column' className={pageStyle.wrapper}>
        {page &&
          entries &&
          entries.map((item) => (
            <CurrentPageElement key={item[0]} keyItem={String(item[0])} item={String(item[1])} />
          ))}
      </Flex>
      <Flex gap={32}>
        <ButtonWithChildren type='primary' onClick={handlerRefreshPages}>
          <span>Refresh</span>
        </ButtonWithChildren>
        <ButtonWithChildren type='primary' disabled={!page} onClick={handlerRemovePages}>
          <span>Remove</span>
        </ButtonWithChildren>
        <ButtonWithChildren type='primary' onClick={handlerApplyPages}>
          <span>Apply</span>
        </ButtonWithChildren>
      </Flex>
    </Flex>
  );
};
