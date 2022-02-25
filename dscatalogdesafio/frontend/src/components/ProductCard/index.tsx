import ImageCard from 'assets/images/car-card-1.png';
import ButtonCatalog from 'components/ButtonCatalog';
import './styles.css';

const ProductCard = () => {
  return (
    <div className="div-product-card">
      <div className="div-card-catalog">
        <img src={ImageCard} alt="Imagem do Carro 1" />
      </div>

      <div className="div-content-card">
        <div className="div-title">
          <h4>Audi Supra TT</h4>
        </div>
        <div className="div-content">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae hic
            ...
          </p>
        </div>
      </div>

      <div className="div-button-catalog">
        <ButtonCatalog />
      </div>
    </div>
  );
};

export default ProductCard;
