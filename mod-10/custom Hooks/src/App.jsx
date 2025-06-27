import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import usePagination from './components/usePagination';
import DebounceDemo from './components/useDebounce';




function App() {
  //usePageination
  const numbersArray = Array.from({length:123}, (v,i) => `item ${i + 1}`)
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const{totalPages, currentPage, startIndex, endIndex, canNextPage, canPrevPage, setPage, nextPage, prevPage} = usePagination (numbersArray.length, itemsPerPage, 1)
  const currentItems = numbersArray.slice(startIndex, endIndex)
  const totalItems = 123
    

  return (
    <>
    <div className="container1">
     <h1>Pagination Demo</h1>
     <div className="total">
    <div className="totalPerPage">
     <label>Items per page: </label>
      <select value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
    </div>
    <div className='totalItems'>
    <p>Total Items: {totalItems}</p>
    </div>
    </div>
     <div>
      <ul>
        {currentItems.map((value,index)=> <li key={index}>{value}</li>)}
      </ul>
      <div className="button">
        <button onClick={prevPage} disabled={!canPrevPage}>Previous</button>
        <p>Page {currentPage} - {totalPages}</p>
        <button onClick={nextPage} disabled={!canNextPage}>Next</button>
      </div>
        <p>Showing items {startIndex} - {endIndex} | Total on this page: {currentItems.length}</p>
     </div>
            {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => setPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>

        <DebounceDemo />
      
    </>
  )
}

export default App
