import './styles.css';

const ButtonSearch = () => {
  return (
    <div className="btn-container">
      <div
        className="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Digite sua busca"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon"
          ></input>
          <div >
            <button type="button" className="btn btn-icon-search">
              <h6>BUSCAR</h6>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonSearch;
