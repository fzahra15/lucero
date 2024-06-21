import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Filters from '../components/MarketComponents/Filters'
import ProductsContainer from '../components/MarketComponents/ProductsContainer'
import { getMaterials, getModels, getProducts, getType } from '../actions/MainActions'
import { changeStateValue } from '../redux/MainReducer'
import { Link } from 'react-router-dom'

function Market({ updateLocalStorage, totalSum }) {
  const [prodVisible, setProdVisible] = useState(false)
  const dispatch = useDispatch()
  const products = useSelector(state => state.Data.products)
  const materials = useSelector((state) => state.Data.materials);
  const models = useSelector((state) => state.Data.models);
  const types = useSelector((state) => state.Data.types);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getProducts())
    dispatch(getMaterials());
    dispatch(getModels());
    dispatch(getType());
  }, [dispatch])

  const handleMaterialChange = (value) => {

    setSelectedMaterials((prevSelectedMaterials) => {
      if (prevSelectedMaterials.includes(value)) {
        return prevSelectedMaterials.filter((material) => material !== value);
      } else {
        return [...prevSelectedMaterials, value];
      }
    });
  };

  const handleModelChange = (value) => {
    setSelectedModels((prevSelectedModels) => {
      if (prevSelectedModels.includes(value)) {
        return prevSelectedModels.filter((model) => model !== value);
      } else {
        return [...prevSelectedModels, value];
      }
    });
  };

  const handleTypeChange = (value) => {
    setSelectedTypes((prevSelectedTypes) => {
      if (prevSelectedTypes.includes(value)) {
        return prevSelectedTypes.filter((type) => type !== value);
      } else {
        return [...prevSelectedTypes, value];
      }
    });
  };


  useEffect(() => {
    dispatch(getProducts(selectedMaterials.join(','), selectedTypes.join(','), selectedModels.join(',')))
  }, [selectedMaterials, selectedModels, selectedTypes]);


  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = useSelector(state => state.Data.totalPages);
  useEffect(() => {
    dispatch(getProducts(selectedMaterials.join(','), selectedTypes.join(','), selectedModels.join(','), currentPage));
  }, [selectedMaterials, selectedModels, selectedTypes, currentPage, dispatch]);


  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    dispatch(getProducts(selectedMaterials.join(','), selectedTypes.join(','), selectedModels.join(','), newPage));
    window.scrollTo(0, 0);
  };



  return (
    <main>
      <div className="container">
        <h2 className="section_header">Коллекция ювелирных изделий</h2>
        <p className='section_sub_heading'>Вашему вниманию предлагаются ювелирные изделия бренда «Lucero» (перевод с испанского - утренняя яркая звезда). Коллекция авторская, создана нумерологом Светланой Завгородней. «Главные герои» изделий - числа и камни, знаки и символы, - то, что не только подчеркнет Вашу индивидуальность, но и поможет усилить Вашу силу и потенциал.</p>
        <p className='section_sub_heading'>Lucero by Svetlana Numerology - товарный знак (<Link to={'/роспатент'}>Свидетельство Роспатента</Link>  № 974079 от 16.10.2023)</p>
        <label htmlFor="checkbox" id='filtersLabel'>
          Фильтеры
          <i className="fa-solid fa-bars" style={{ color: '#c90' }}></i>
        </label>
        <div className="market_container">
          <input type='checkbox' style={{ backgroundColor: 'black' }} id='checkbox' />
          <Filters materials={materials}
            types={types}
            models={models}
            handleMaterialChange={handleMaterialChange}
            handleModelChange={handleModelChange}
            handleTypeChange={handleTypeChange}
            selectedMaterials={selectedMaterials}
            selectedModels={selectedModels}
            selectedTypes={selectedTypes} />
          <ProductsContainer products={products} totalSum={totalSum} selectedMaterials={selectedMaterials}
            selectedModels={selectedModels}
            selectedTypes={selectedTypes} filteredProducts={filteredProducts} updateLocalStorage={updateLocalStorage} prodVisible={prodVisible} setProdVisible={setProdVisible} />
        </div>
        <div className="pagination">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <span>{`${currentPage} из ${totalPages}`}</span>
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>

      </div>
    </main>
  )
}

export default Market