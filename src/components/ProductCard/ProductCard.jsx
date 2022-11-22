import PropTypes from 'prop-types';

import './ProductCard.css';

const ProductCard = ({ name, imageLink, price }) => (
  <div className={ 'product-card' }>
    <h1>{ name }</h1>
    <img
      className={ 'product-image' }
      src={ imageLink }
      alt='products'/>
    <h2>{ price }₽</h2>
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
