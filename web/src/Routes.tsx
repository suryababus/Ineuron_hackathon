// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'
import CategoriesLayout from 'src/layouts/CategoriesLayout'
import MenusLayout from 'src/layouts/MenusLayout'
import RestaurantsLayout from 'src/layouts/RestaurantsLayout'
import RestaurantTablesLayout from 'src/layouts/RestaurantTablesLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/order-success" page={OrderSuccessPage} name="orderSuccess" />
      <Route path="/order-summary" page={OrderSummaryPage} name="orderSummary" />
      <Route path="/{id:Int}/menu" page={MenuPage} name="menu" />

      <Route path="/" page={LoginPage} name="login" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />

      <Route path="/category" page={CategoryPage} name="home" />
      <Route path="/admin/login" page={AdminAuthPage} name="adminAuth" />
      <Route notfound page={NotFoundPage} />
      <Private unauthenticated="login" roles={'admin'}>
        <Set wrap={MenusLayout}>
          <Route path="/admin/menus/new" page={MenuNewMenuPage} name="newMenu" />
          <Route path="/admin/menus/{id:Int}/edit" page={MenuEditMenuPage} name="editMenu" />
          <Route path="/admin/menus/{id:Int}" page={MenuMenuPage} name="adminMenu" />
          <Route path="/admin/menus" page={MenuMenusPage} name="adminMenus" />
        </Set>
        <Set wrap={CategoriesLayout}>
          <Route path="/admin/categories/new" page={CategoryNewCategoryPage} name="newCategory" />
          <Route path="/admin/categories/{id:Int}/edit" page={CategoryEditCategoryPage} name="editCategory" />
          <Route path="/admin/categories/{id:Int}" page={CategoryCategoryPage} name="category" />
          <Route path="/admin/categories" page={CategoryCategoriesPage} name="categories" />
        </Set>
        <Set wrap={CategoriesLayout}>
          <Route path="/admin/categories/new" page={CategoryNewCategoryPage} name="newCategory" />
          <Route path="/admin/categories/{id:Int}/edit" page={CategoryEditCategoryPage} name="editCategory" />
          <Route path="/admin/categories/{id:Int}" page={CategoryCategoryPage} name="category" />
          <Route path="/admin/categories" page={CategoryCategoriesPage} name="categories" />
        </Set>
        <Set wrap={MenusLayout}>
          <Route path="/admin/menus/new" page={MenuNewMenuPage} name="newMenu" />
          <Route path="/admin/menus/{id:Int}/edit" page={MenuEditMenuPage} name="editMenu" />
          <Route path="/admin/menus/{id:Int}" page={MenuMenuPage} name="menu" />
          <Route path="/admin/menus" page={MenuMenusPage} name="menus" />
        </Set>
        <Set wrap={RestaurantsLayout}>
          <Route path="/admin/restaurants/new" page={RestaurantNewRestaurantPage} name="newRestaurant" />
          <Route path="/admin/restaurants/{id:Int}/edit" page={RestaurantEditRestaurantPage} name="editRestaurant" />
          <Route path="/admin/restaurants/{id:Int}" page={RestaurantRestaurantPage} name="restaurant" />
          <Route path="/admin/restaurants" page={RestaurantRestaurantsPage} name="restaurants" />
        </Set>
        <Set wrap={RestaurantTablesLayout}>
          <Route path="/admin/restaurant-tables/new" page={RestaurantTableNewRestaurantTablePage} name="newRestaurantTable" />
          <Route path="/admin/restaurant-tables/{id:Int}/edit" page={RestaurantTableEditRestaurantTablePage} name="editRestaurantTable" />
          <Route path="/admin/restaurant-tables/{id:Int}" page={RestaurantTableRestaurantTablePage} name="restaurantTable" />
          <Route path="/admin/restaurant-tables" page={RestaurantTableRestaurantTablesPage} name="restaurantTables" />
        </Set>
        <Route path="/admin/tables" page={AdminTablesPage} name="adminTables" />
        <Route path="/admin/home" page={AdminHomePage} name="adminHome" />
      </Private>
    </Router>
  )
}

export default Routes
