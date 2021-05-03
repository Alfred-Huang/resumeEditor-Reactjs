import Home from "./Welcome";
import BuildResume from "./BuildResume";
import Resume2 from "./Resume2";

const routes = [
    { path: '/',
        exact: true,
        component: Home,
        requiresAuth: false,
    },
    {
        path: '/main',
        exact: true,
        component: BuildResume,
        requiresAuth: true,
    },
    {
        path: '/resume2',
        exact: true,
        component: Resume2,
        requiresAuth: true,
    }
]

export default routes
