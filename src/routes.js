import App from './App';

const errorLoading = err => console.error('Dynamic page loading failed', err);

const loadRoute = cb => module => cb(null, module.default);

export default {
  component: App,
  childRoutes: [
    {
      path: '/',
      getComponent(location, cb) {
        System.import('./Home')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'slider',
      getComponent(location, cb) {
        System.import('./modules/slider/SliderModule')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'charts',
      getComponent(location, cb) {
        System.import('./modules/charts/Charts')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    }
  ]
}