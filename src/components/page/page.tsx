import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPageState } from '../../services/redux/selectors/current-ingredient';
import { resetCurrentPage } from '../../services/redux/slices/current-page';
import { fetchPages } from '../../services/redux/slices/pages';
import { DispatchType } from '../../utils/types/dispatch-type';
import { ButtonWithChildren } from '../button-with-children/button-with-children';
import { CurrentPageElement } from '../current-page-element/current-page-element';
import { Flex } from '../flex/flex';
import pageStyle from './page.module.css';

export const Page = () => {
  const { page } = useSelector(getCurrentPageState);
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
        <ButtonWithChildren type='primary' disabled={!page}>
          <span>Remove</span>
        </ButtonWithChildren>
      </Flex>
    </Flex>
  );
};
