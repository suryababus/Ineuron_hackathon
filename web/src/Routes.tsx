// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import MenusLayout from 'src/layouts/MenusLayout'
import RestaurantsLayout from 'src/layouts/RestaurantsLayout'
import RestaurantTablesLayout from 'src/layouts/RestaurantTablesLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MenusLayout}>
        <Route path="/menus/new" page={MenuNewMenuPage} name="newMenu" />
        <Route path="/menus/{id:Int}/edit" page={MenuEditMenuPage} name="editMenu" />
        <Route path="/menus/{id:Int}" page={MenuMenuPage} name="menu" />
        <Route path="/menus" page={MenuMenusPage} name="menus" />
      </Set>
      <Set wrap={RestaurantsLayout}>
        <Route path="/restaurants/new" page={RestaurantNewRestaurantPage} name="newRestaurant" />
        <Route path="/restaurants/{id:Int}/edit" page={RestaurantEditRestaurantPage} name="editRestaurant" />
        <Route path="/restaurants/{id:Int}" page={RestaurantRestaurantPage} name="restaurant" />
        <Route path="/restaurants" page={RestaurantRestaurantsPage} name="restaurants" />
      </Set>
      <Set wrap={RestaurantTablesLayout}>
        <Route path="/admin/restaurant-tables/new" page={RestaurantTableNewRestaurantTablePage} name="newRestaurantTable" />
        <Route path="/admin/restaurant-tables/{id:Int}/edit" page={RestaurantTableEditRestaurantTablePage} name="editRestaurantTable" />
        <Route path="/admin/restaurant-tables/{id:Int}" page={RestaurantTableRestaurantTablePage} name="restaurantTable" />
        <Route path="/admin/restaurant-tables" page={RestaurantTableRestaurantTablesPage} name="restaurantTables" />
      </Set>
      <Route path="/admin/tables" page={AdminTablesPage} name="adminTables" />
      <Route path="/admin/home" page={AdminHomePage} name="adminHome" />
      <Route path="/admin/login" page={AdminAuthPage} name="adminAuth" />
      <Route path="/category" page={CategoryPage} name="category" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
