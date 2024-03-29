import { useCallback } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { CategoryListStyled, List, ListHeader } from './category-list-styled';
import cart from '../../storage/cart';
import storage from '../../storage/storage';

function CategoryList({ name, list }) {
  const addToCart = useCallback(
    (options) => {
      const itemId = cart.findIndex((item) => item.id === options.id);

      if (itemId !== -1) {
        cart[itemId].amount += 1;
      } else {
        options.amount = 1;

        cart.push(Object.assign({}, options));
        delete options.amount;
      }

      storage.addToStorage('cart', cart);
    },
    [list]
  );

  const cardsList = list.map((item) => (
    <ProductCard addToCart={addToCart} key={item.id} options={item} />
  ));

  return (
    <CategoryListStyled>
      <ListHeader>{name}</ListHeader>
      <List>{...cardsList}</List>
    </CategoryListStyled>
  );
}

export default CategoryList;
