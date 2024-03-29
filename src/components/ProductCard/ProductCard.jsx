import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  CardButton,
  CardContent,
  CardGroup,
  CardImage,
  CardName,
  CardPrice,
  CardRating,
  CardStyled
} from './product-card-styled';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function ProductCard({ options, addToCart }) {
  const { img, title, price, rating } = options;

  return (
    <CardStyled>
      <CardImage src={img} alt="" />
      <CardContent>
        <CardGroup>
          <CardName>{title}</CardName>
          <CardPrice>{price} ₽</CardPrice>
        </CardGroup>
        <CardGroup>
          <CardRating>
            <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
            {rating}
          </CardRating>
          <CardButton onClick={() => addToCart(options)}>Купить</CardButton>
        </CardGroup>
      </CardContent>
    </CardStyled>
  );
}

export default ProductCard;
