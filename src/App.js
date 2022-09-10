import Todo from "./components/Todo";
import { Route } from 'react-router-dom'

import AllGuidesPage from "./pages/AllGuides";
import AllListingsPage from "./pages/AllListings";
import FavoriteGuidesPage from "./pages/FavoriteGuides";
import FavoriteListingsPage from "./pages/FavoriteListings";
import NewListingPage from "./pages/NewListing";
import NewGuidePage from "./pages/NewGuide";

function App() {
  //localhost:3000/pathname / is default
  return (
    <div>

  <Route path="/">
    <AllListingsPage />
  </Route>

  <Route path="/all-guides">
    <AllGuidesPage />
  </Route>

  <Route path="/new-listing">
    <NewListingPage />
  </Route>

  <Route path="/new-guide">
    <NewGuidePage />
  </Route>

  <Route path="favorite-guides">
    <FavoriteGuidesPage />
  </Route>

  <Route path="favorite-listings">
    <FavoriteListingsPage />
  </Route>
    </div>
  );
}
export default App;
