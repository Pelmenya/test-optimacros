import { useSelector } from 'react-redux';
import { getCurrentPageState } from '../../services/redux/selectors/current-ingredient';
import { CurrentPageElement } from '../current-page-element/current-page-element';
import pageStyle from './page.module.css';

export const Page = () => {
  const { page } = useSelector(getCurrentPageState);

  if (page !== undefined) {
    const entries = Object.entries(page);
    return (
      <div className={pageStyle.container}>
        {entries.map((item) => (
          <CurrentPageElement key={item[0]} keyItem={String(item[0])} item={String(item[1])} />
        ))}
      </div>
    );
  }
  return null;
};
