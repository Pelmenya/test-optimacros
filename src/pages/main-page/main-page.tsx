import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { Title } from '../../components/title/title';

import mainPage from './main-page.module.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Pages } from '../../components/pages/pages';

export const MainPage = () => {

  return (
    <main className={mainPage.main}>
      <Title type={'h1'} className={cn('pt-10', mainPage.title)}>
        List of pages
      </Title>
      <DndProvider backend={HTML5Backend}>
        <aside className={mainPage.main__content}>
          <Pages />
        </aside>
      </DndProvider>
    </main>
  );
};
