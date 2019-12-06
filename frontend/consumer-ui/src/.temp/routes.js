export default [
  {
    path: "/articles",
    component: () => import(/* webpackChunkName: "page--src-pages-articles-vue" */ "D:\\workspace\\shopozor\\tmp\\gridsome-postgres-graphql\\src\\pages\\Articles.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\workspace\\shopozor\\tmp\\gridsome-postgres-graphql\\src\\pages\\Index.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "D:\\workspace\\shopozor\\tmp\\gridsome-postgres-graphql\\node_modules\\gridsome\\app\\pages\\404.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "D:\\workspace\\shopozor\\tmp\\gridsome-postgres-graphql\\node_modules\\gridsome\\app\\pages\\404.vue"),
    meta: {
      data: true
    }
  }
]

