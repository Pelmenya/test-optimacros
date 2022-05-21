import cn from 'classnames';

import row from './row.module.css';

export const Row = ({ item, level, children }: any) => (
  <div key={`section-${item.id}`} className={row.container}>
    <span className={cn(`pl-${level}`, row.item)}>{item.label}</span>
    <div>{children}</div>
  </div>
);
