import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layouts";
import ProtectedRoute from "./ProtectedRoute";
import UserAuthentication from "../pages/auth/UserAuthentication";
import ClientsTableView from "../pages/clients/ClientsTableView";
import ClientBillings from "../pages/clients/ClientBillings";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/auth" element={<UserAuthentication />} />
          <Route index element={
            <ProtectedRoute element={
              <ClientsTableView />
            } />
          } />
          <Route path="/clients/:id" element={
            <ProtectedRoute element={
              <ClientBillings />
            } />
          } />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default AppRoutes;