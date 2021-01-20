import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import MarvelScreen from '../components/marvel/MarvelScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import DcScreen from '../components/DC/DcScreen';

const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div>
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/heroe/:heroeId" component={ HeroScreen } />
                    <Route exact path="/dc/" component={ DcScreen } />
                    <Route exact path="/marvel/" component={ MarvelScreen } />

                </Switch>
            </div>
        </>
    )
}

export default DashboardRoutes