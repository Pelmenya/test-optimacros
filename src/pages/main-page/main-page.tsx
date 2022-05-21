import React from 'react';
import cn from 'classnames';
import { Title } from '../../components/title/title';

import mainPage from './main-page.module.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Pages } from '../../components/pages/pages';
import { Page } from '../../components/page/page';
import { useSelector } from 'react-redux';
import { getPagesState } from '../../services/redux/selectors/pages';
import { Loader } from '../../components/loader/loader';
import { BadRequest } from '../../components/bad-request/bad-request';

export const MainPage = () => {
  const { loading, error } = useSelector(getPagesState);

  return (
    <main className={mainPage.main}>
      <Title type={'h1'} className={cn('pt-10 pb-5', mainPage.title)}>
        List of pages
      </Title>
      <DndProvider backend={HTML5Backend}>
        <aside className={mainPage.main__content}>
          {loading === 'pending' && <Loader />}
          {loading === 'succeeded' && <Pages />}
          {loading === 'failed' && <BadRequest error={error} />}
          <Page />
        </aside>
      </DndProvider>
    </main>
  );
};
