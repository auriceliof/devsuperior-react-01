import { ReactComponent as ImageCar } from 'assets/images/car-header-1.svg';
import './styles.css';
import ButtonIcon from 'components/ButtonIcon';

const Home = () => {
  return (
    <>
      <div>
        <div className="div-home">
          <div className="div-card">
            <div className="div-image-car">
              <ImageCar />
            </div>
            <div className="div-content-car">
              <div>
                <h4>O carro perfeito para você</h4>
              </div>
              <div>
                <p>
                  Conheça nossos carros e dê mais um passo 
                  na realização do seu sonho
                </p>
              </div>
            </div>
          </div>

          <div className="div-main-button">
            <div className="div-button">
              <ButtonIcon />
            </div>
            <div className="div-content-button">
              <p>Comece agora a navegar</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
