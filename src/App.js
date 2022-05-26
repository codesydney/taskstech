import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Auth from "./components/Auth";
import NewInventory from "./components/inventory/NewInventory";

import CreateJob from "./components/Jobs/CreateJob/CreateJob";
import JobDetails from "./components/Jobs/JobDetails/JobDetails";
import JobDiary from "./components/Jobs/JobDiary/JobDiary";

import Header from "./components/Header/Header";
import ViewJobs from "./components/Jobs/ViewJobs/ViewJobs";
import InventoryList from "./components/inventory/InventoryList";
import RightSideBar from "./components/rightSideBar/RightSideBar";

import TradieProfileForm from "./components/Trader/TradieProfileForm";
import InventoryDetail from "./components/inventory/InventoryDetail";

import * as Pages from "../src/pages/Pages";
import * as History from 'history';

export const history = History.createBrowserHistory();

function App() {
    return (
        <div className="App">
            <Header />
            <RightSideBar />
            <Switch>
                <Route exact path="/login" component={Pages.Login} />
                <Route exact path="/signup" component={Pages.SignUp} />

                <Auth history={history}>
                    {/* Inventory Routes */}
                    <Route
                        exact={true}
                        path="/create/inventory"
                        component={NewInventory}
                    />
                    <Route
                        exact={true}
                        path="/list/inventory"
                        component={InventoryList}
                    />
                    <Route
                        exact={true}
                        path="/detail/inventory/:id"
                        component={InventoryDetail}
                    />
                    {/* Trader Routes */}
                    <Route
                        exact
                        path="/tradie/profile"
                        component={TradieProfileForm}
                    />
                    {/* Customer Routes */}
                    <Route
                        exact
                        path="/create/customer"
                        component={Pages.CustomerRegistration}
                    />
                    <Route
                        exact
                        path="/view/customers"
                        component={Pages.CustomerListPage}
                    />
                    <Route
                        exact={true}
                        path="/detail/customer/:id"
                        component={Pages.CustomerProfileUpdate}
                    />
                    {/* Job Routes */}
                    <Route 
                        exact path="/create/job" 
                        component={CreateJob} 
                     />
                     
                    <Route 
                        exact path="/view/jobs" 
                        component={ViewJobs} 
                     />
                    
                    <Route 
                        exact path="/view/jobs/diary" 
                        component={JobDiary} 
                    />
                    <Route 
                        exact path="/view/jobs/details/id" 
                        component={JobDetails} 
                    />
                </Auth>
            </Switch>
        </div>
    );
}

export default App;
