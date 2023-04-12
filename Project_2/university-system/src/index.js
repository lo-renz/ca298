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
import CohortModules from './components/CohortModules';
import CreateCohort from './components/CreateCohort';

// modules
import AllModules from './components/AllModules';
import SingleModule from './components/SingleModule';
import CreateModule from './components/CreateModule';

// students
import SingleStudent from './components/SingleStudent';
import CreateStudent from './components/CreateStudent';
import CreateGrade from './components/CreateGrade';

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
        path: "degree/:degreeCode",
        element: <SingleDegree />,
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
        path: "cohort/:cohortCode",
        element: <SingleCohort />,
    },
    {
        path: "cohort/:cohortCode/modules",
        element: <CohortModules />,
    },
    {
        path: "cohort/create",
        element: <CreateCohort />,
    },
    {
        path: "modules",
        element: <AllModules />,
    },
    {
        path: "module/:moduleCode",
        element: <SingleModule />,
    },
    {
        path: "module/create",
        element: <CreateModule />,
    },
    {
        path: "student",
        element: <SingleStudent />,
    },
    {
        path: "student/create",
        element: <CreateStudent />
    },
    {
        path: "student/grade/create",
        element: <CreateGrade />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

reportWebVitals();
