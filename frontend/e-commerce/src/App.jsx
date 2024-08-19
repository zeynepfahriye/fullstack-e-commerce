
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import AuthPage from './pages/AuthPage';
import ProductsDetailPage from './pages/ProductsDetailPage';
import UserPage from './pages/Admin/UserPage';
import CategoryPage from './pages/Admin/Categories/CategoryPage';
import UpdateCategoryPage from './pages/Admin/Categories/UpdateCategoryPage';
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/shop' element={<ShopPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/auth' element={<AuthPage />} />
      <Route path='/product/:id' element={<ProductsDetailPage />} />
      <Route path='/blog/id' element={<BlogPage />} />
      <Route path='/admin/*'>
        <Route path='users' element={<UserPage/>} />
        <Route path='categories' element={<CategoryPage/>} />
        <Route path='categories/update/:id' element={<UpdateCategoryPage/>} />
      </Route>
    </Routes>
  )
}

export default App
