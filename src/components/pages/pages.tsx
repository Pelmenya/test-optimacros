import cn from 'classnames';
import { useSelector } from 'react-redux';
import { getPagesState } from '../../services/redux/selectors/pages';
import { Tree } from '../tree/tree';
import pagesStyle from './pages.module.css';

export const Pages = () => {
  const { pages } = useSelector(getPagesState);

  return (
    <div className={pagesStyle.container}>
      {pages && <Tree treeData={pages} parent={-1} level={0} />}
    </div>
  );
};
