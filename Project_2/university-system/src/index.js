import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App';
// degrees
import AllDegrees from './components/AllDegrees';
import SingleDegree from './components/SingleDegree';
import CreateDegree from './components/CreateDegree';

// cohorts
import AllCohorts from './components/AllCohorts';
import SingleCohort from './components/SingleCohort';
import CreateCohort from './components/CreateCohort';

// modules
import AllModules from './components/AllModules';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "degrees",
        element: <AllDegrees />,
    },
    {
        path: "degree/COMSCI",
        element: <SingleDegree degreeCode="COMSCI" />,
    },
    {
        path: "degree/COMBUS",
        element: <SingleDegree degreeCode="COMBUS" />,
    },
    {
        path: "degree/DS",
        element: <SingleDegree degreeCode="DS" />,
    },
    {
        path: "degree/create",
        element: <CreateDegree />,
    },
    {
        path: "cohorts",
        element: <AllCohorts />,
    },
    {
        path: "cohort/COMBUS1",
        element: <SingleCohort cohortCode="COMBUS1" />,
    },
    {
        path: "cohort/COMBUS2",
        element: <SingleCohort cohortCode="COMBUS2" />,
    },
    {
        path: "cohort/COMBUS3",
        element: <SingleCohort cohortCode="COMBUS3" />,
    },
    {
        path: "cohort/COMBUS4",
        element: <SingleCohort cohortCode="COMBUS4" />,
    },
    {
        path: "cohort/COMSCI1",
        element: <SingleCohort cohortCode="COMSCI1" />,
    },
    {
        path: "cohort/COMSCI2",
        element: <SingleCohort cohortCode="COMSCI2" />,
    },
    {
        path: "cohort/COMSCI3",
        element: <SingleCohort cohortCode="COMSCI3" />,
    },
    {
        path: "cohort/COMSCI4",
        element: <SingleCohort cohortCode="COMSCI4" />,
    },
    {
        path: "cohort/DS1",
        element: <SingleCohort cohortCode="DS1" />,
    },
    {
        path: "cohort/DS2",
        element: <SingleCohort cohortCode="DS2" />,
    },
    {
        path: "cohort/DS3",
        element: <SingleCohort cohortCode="DS3" />,
    },
    {
        path: "cohort/DS4",
        element: <SingleCohort cohortCode="DS4" />,
    },
    {
        path: "cohort/create",
        element: <CreateCohort />,
    },
    {
        path: "modules",
        element: <AllModules />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
