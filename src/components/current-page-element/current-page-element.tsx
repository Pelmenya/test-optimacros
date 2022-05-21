import React from 'react';
import cn from 'classnames';
import { Flex } from '../flex/flex';

import profileFormLink from './current-page-element.module.css';

export const CurrentPageElement = ({ keyItem, item }: { keyItem: string; item: string }) => {
  return (
    <Flex className='pt-4 pb-4'>
      <p className={cn('text text_type_main-default mr-2', profileFormLink.keyItem)}>
        {keyItem} :{' '}
      </p>
      <p className={cn('text text_type_main-default', profileFormLink.item)}>{item}</p>
    </Flex>
  );
};
