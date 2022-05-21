import cn from 'classnames';

import row from './row.module.css';

export const Row = ({ item, level, children }: any) => {
	return (
  <div key={`section-${item.id}`} style={{paddingLeft: `${level}px`, width: `calc(100% - ${level}px`}} className={row.container}>
    <span className={row.item}>{item.label}</span>
    <div>{children}</div>
  </div>
)};
