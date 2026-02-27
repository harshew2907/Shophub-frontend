import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 8; // For Pagination logic

  useEffect(() => {
    // Requirement #7: Loading state
    fetch(`${import.meta.env.VITE_API_URL}/products`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  // Filter Logic
  const filtered = products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
  
  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filtered.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) return <div className="loading-spinner">Loading Products...</div>;

  return (
    <div className="product-page">
      <div className="toolbar">
        <input 
          type="text" 
          placeholder="Search products..." 
          className="search-input"
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>

      <div className="product-grid">
        {currentItems.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="pagination">
        {/* Requirement #9: Simple Pagination */}
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>Prev</button>
        <span>Page {currentPage}</span>
        <button disabled={indexOfLastItem >= filtered.length} onClick={() => setCurrentPage(prev => prev + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Products;
