import React from 'react';
import './Admin.css'
import AddProducts from '../AddProducts/AddProducts';
import{
        BrowserRouter as Router,
        Switch,
        Route,
        Link
} from 'react-router-dom';
import ManageProduct from '../ManageProduct/ManageProduct';

const routes = [

    {
        path: "/addProduct",
        exact: true,
        sidebar: () => <div></div>,
        main: () => <AddProducts></AddProducts>
    },
    {
        path: "/manageProduct",
        sidebar: () => <div></div>,
        main: () => <ManageProduct></ManageProduct>
    }
];

const Admin = () => {
    return (
        <div className="container">
            <Router>
                <div style={{ display: "flex" }}>
                    <div style={{ padding: "10px", width: "30%", height: "80vh", background: "#343a40" }}>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                            <li className="mb-3 mt-4">
                                <Link className="text-white" to="/addProduct">Add Product</Link>
                            </li>
                            <li>
                                <Link className="text-white" to="/manageProduct">ManageProduct</Link>
                            </li>

                        </ul>

                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.sidebar />}
                                />
                            ))}
                        </Switch>
                    </div>

                    <div style={{ flex: 1, padding: "10px" }}>
                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.main />}
                                />
                            ))}
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
};

export default Admin;