// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import routeProps from './routeProps';

if (process.env.NODE_ENV === 'development') {
  Object.entries(routeProps).forEach(([key, value]) => {
    const internalProps = ['path', 'id', 'parentId', 'isLayout', 'isWrapper', 'layout', 'clientLoader'];
    Object.keys(value).forEach((prop) => {
      if (internalProps.includes(prop)) {
        throw new Error(
          `[UmiJS] route '${key}' should not have '${prop}' prop, please remove this property in 'routeProps'.`
        )
      }
    })
  })
}

import React from 'react';

export async function getRoutes() {
  const routes = {"Classfiy/index":{"path":"Classfiy","id":"Classfiy/index","parentId":"@@/global-layout"},"Home/index":{"path":"Home","id":"Home/index","parentId":"@@/global-layout"},"Note/index":{"path":"Note","id":"Note/index","parentId":"@@/global-layout"},"Own/index":{"path":"Own","id":"Own/index","parentId":"@@/global-layout"},"index":{"path":"/","id":"index","parentId":"@@/global-layout"},"@@/global-layout":{"id":"@@/global-layout","path":"/","isLayout":true}} as const;
  return {
    routes,
    routeComponents: {
'Classfiy/index': React.lazy(() => import(/* webpackChunkName: "src__pages__Classfiy__index" */'../../../src/pages/Classfiy/index.tsx')),
'Home/index': React.lazy(() => import(/* webpackChunkName: "src__pages__Home__index" */'../../../src/pages/Home/index.tsx')),
'Note/index': React.lazy(() => import(/* webpackChunkName: "src__pages__Note__index" */'../../../src/pages/Note/index.tsx')),
'Own/index': React.lazy(() => import(/* webpackChunkName: "src__pages__Own__index" */'../../../src/pages/Own/index.tsx')),
'index': React.lazy(() => import(/* webpackChunkName: "src__pages__index" */'../../../src/pages/index.tsx')),
'@@/global-layout': React.lazy(() => import(/* webpackChunkName: "layouts__index" */'/Users/june/Desktop/June/github/classroom-h5/src/layouts/index.tsx')),
},
  };
}
