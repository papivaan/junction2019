/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "./views/Index.jsx";
import Login from "./views/Login.jsx";

import Profile from "./views/examples/Profile.jsx";
import Maps from "./views/examples/Maps.jsx";
import Tables from "./views/examples/Tables.jsx";
import Icons from "./views/examples/Icons.jsx";

// Civil views
import CivilDashboard from "./views/civil/Dashboard";

// Worker views
import WorkerDashboard from "./views/worker/Dashboard";

// Site manager views
import SiteManagerDashboard from "./views/site-manager/Dashboard.jsx";

// Work manager views
import WorkManagerDashboard from "./views/work-manager/Dashboard.jsx";

import DynamicTest from "./views/DynamicTest.jsx";

export const exampleRoutes = [
  {
    path: "/",
    name: "Examples",
    icon: "ni ni-tv-2 text-blue",
    component: Index,
    layout: "/examples"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/examples"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/examples"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/examples"
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/examples"
  }
];

export const adminRoutes = [
  {
    path: "/",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  // TODO: Create dynamic pages like here under.
  // Set `dynamic: true` to filter page out from the sidebar
  {
    path: "/test",
    name: "Test",
    icon: "ni ni-planet text-blue",
    component: DynamicTest,
    layout: "/admin"
  },
  {
    path: "/test/:id",
    name: "Test",
    icon: "ni ni-key-25 text-orange",
    component: DynamicTest,
    layout: "/admin",
    dynamic: true
  }
];

export const civilRoutes = [
  {
    path: "/",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: CivilDashboard,
    layout: "/civil"
  }
];

export const workerRoutes = [
  {
    path: "/",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: WorkerDashboard,
    layout: "/worker"
  }
];

export const siteManagerRoutes = [
  {
    path: "/",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: SiteManagerDashboard,
    layout: "/site-manager"
  },
  {
    path: "/details",
    name: "Details",
    icon: "ni ni-glasses-2 text-primary",
    component: Index,
    layout: "/site-manager"
  },
  {
    path: "/:id",
    name: "manager",
    icon: "ni ni-glasses-2 text-primary",
    component: SiteManagerDashboard,
    layout: "/site-manager"
  }
];

export const workManagerRoutes = [
  {
    path: "/",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: WorkManagerDashboard,
    layout: "/work-manager"
  }
];

const routes = [
  ...adminRoutes,
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  // Role based routes
  ...civilRoutes,
  ...siteManagerRoutes,
  // Example routes
  ...exampleRoutes
];

export default routes;
