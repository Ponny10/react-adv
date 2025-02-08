# React + TypeScript + Vite

El proyecto cuenta con la implementación de:

- [react-router-dom@6.29.0](https://reactrouter.com/en/6.29.0/)

## Otras características

- `Control de rutas dinámicas:`

```js
<Routes>
  {routes.map(({ Component, path }: _Routes) => (
    <Route key={path} path={path} element={<Component />} />
  ))}
  <Route path="/*" element={<Navigate to={routes[0].to} />} />
</Routes>
```

- `Opción a rutas dinámicas`

````js
import { JSX } from 'react';
import { LazyOne, LazyThree, LazyTwo } from '../pages';

export interface _Routes {
    Component: () => JSX.Element;
    name: string;
    path: string;
    to: string;
}

export const routes: _Routes[] = [
    {
        Component: LazyOne,
        name: 'Lazy 1',
        to: 'lazy-1',
        path: '/lazy-1',
    },
    {
        Component: LazyTwo,
        name: 'Lazy 2',
        to: 'lazy-2',
        path: '/lazy-2',
    },
    {
        Component: LazyThree,
        name: 'Lazy 3',
        to: 'lazy-3',
        path: '/lazy-3',
    },
];
```
