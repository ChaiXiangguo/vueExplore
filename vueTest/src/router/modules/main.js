const _import = require('../_import_' + process.env.NODE_ENV)

export default [
  {//首页
    path: '/',
    name: 'home',
    component: _import('home'),
  },
  {//测试页面
    path: '/ceshi',
    name: 'ceshi',
    component: _import('ceshi'),
  },
  {//404页面
    path: '/notFound',
    name: 'notFound',
    component: _import('notFound'),
  },
  {//404
    path: '*',
    beforeEnter(to,from,next){
      next({path: 'notFound', query: {errorPath: to.path}});
    }
  },
]
