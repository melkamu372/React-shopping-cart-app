import React, { useState, useEffect, useContext } from 'react';
import ProductCard from '../../components/ProductCard';
import { getShopItems } from '../../services/api';
import { CartContext } from '../../context/context';

const Shop = () => {
  const [shopItems, setShopItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSortOption, setSelectedSortOption] = useState('none');
  const [searchQuery, setSearchQuery] = useState('');
  const { setCartItemsCount } = useContext(CartContext);

  useEffect(() => {
    fetchShopItems();
  }, []);

  const fetchShopItems = async () => {
    try {
      const items = await getShopItems();
      setShopItems(items.products);
    } catch (error) {
      console.error('Error fetching shop items:', error);
    }
  };

  const addToCart = (product, quantity) => {
    console.log('Adding to cart:', product, 'Quantity:', quantity);
    setCartItemsCount((prevCount) => prevCount + quantity);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSortOptionChange = (sortOption) => {
    setSelectedSortOption(sortOption);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const applySort = (items) => {
    switch (selectedSortOption) {
      case 'priceLowToHigh':
        return items.sort((a, b) => a.price - b.price);
      case 'priceHighToLow':
        return items.sort((a, b) => b.price - a.price);
      case 'nameAscending':
        return items.sort((a, b) => a.title.localeCompare(b.name));
      case 'nameDescending':
        return items.sort((a, b) => b.title.localeCompare(a.name));
      default:
        return items;
    }
  };

  const categoryOptions = [
    { value: 'all', label: 'All' },
    { value: 'smartphones', label: 'Smartphones' },
    { value: 'laptops', label: 'Laptops' },
    { value: 'fragrances', label: 'Perfumes' },
    { value: 'skincare', label: 'Skin Care' },
    { value: 'home-decoration', label: 'Home Decoration' },
    { value: 'groceries', label: 'Groceries' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? shopItems
      : shopItems.filter((item) => item.category === selectedCategory);
  const sortedItems = applySort(filteredItems);

  const searchFilteredItems = sortedItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <> 
    <div className="container-fluid mt-3">
      <div className="d-flex justify-content-end mb-3">
      <div className="me-5">
          <input
            type="text"
            id="searchInput"
            className="form-control"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />

          
        </div>
        <div className="me-3">
          <select
            id="categorySelect"
            className="form-select"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            {categoryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <select
            id="sortOptionSelect"
            className="form-select"
            value={selectedSortOption}
            onChange={(e) => handleSortOptionChange(e.target.value)}
          >
            <option value="none">None</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="nameAscending">Name: A to Z</option>
            <option value="nameDescending">Name: Z to A</option>
          </select>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {searchFilteredItems.map((item) => (
          <div key={item.id} className="col">
            <ProductCard product={item} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Shop;