import {
  createRouter,
  createRootRoute,
  createRoute,
  Outlet,
} from '@tanstack/react-router';
import Game from './components/TicTacToe';
import SearchThink from './components/SearchThink';
import Nav from './components/Nav';
import Ui from './components/ui/Ui';
import Interact from './components/interact/Interact';
import ToDoApp from './components/interact/todo/ToDoApp';
import ManagingState from './components/state/ManagingState';

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Nav />
      <Outlet />
    </>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Game,
});
const filterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/filter',
  component: SearchThink,
});

const uiRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ui',
  component: Ui,
});

const interactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/interact',
  component: Interact,
});

const todoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/todo',
  component: ToDoApp,
});

const stateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/state',
  component: ManagingState,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  filterRoute,
  uiRoute,
  interactRoute,
  todoRoute,
  stateRoute,
]);

export const router = createRouter({ routeTree });

// Auto type registration
// declare module '@tanstack/react-router' {
//     inferface Register {
//         router: typeof router
//     }
// }
