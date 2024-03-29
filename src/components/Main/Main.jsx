import items from '../../storage/items';
import CategoryList from '../CategoryList/CategoryList';
import PageWrapper from '../PageWrapper/PageWrapper';

function Main() {
  const headphones = items.filter((item) => item.type === 'headphones');
  const wireless = items.filter((item) => item.type === 'wireless');

  return (
    <PageWrapper>
      <CategoryList name="Наушники" list={headphones} />
      <CategoryList name="Беспроводные наушники" list={wireless} />
    </PageWrapper>
  );
}

export default Main;
