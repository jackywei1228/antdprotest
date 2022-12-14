/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,title 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/Login',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin',
        redirect: '/admin/sub-page',
      },
      {
        path: '/admin/sub-page',
        name: 'Overview',
        component: './Admin',
      },
      {
        path: '/admin/UserManager',
        name: 'User Manager',
        component: './UserManager',
      },
    ],
  },
  {
    name: 'Log Config Manager',
    path: '/DeviceLogConfig',
    icon: 'crown',
    routes: [
      {
        path: '/DeviceLogConfig',
        redirect: '/DeviceLogConfig/DeviceLogConfig',
      },
      {
        path: '/DeviceLogConfig/DeviceLogConfig',
        name: 'Overview',
        component: './DeviceLogConfig',
      },
      {
        name: 'Role Manager',
        path: '/DeviceLogConfig/RoleManager',
        component: './TableList',
      },
    ],
  },
  {
    name: 'Log Storage Manager',
    path: '/LogStorageManager',
    icon: 'crown',
    routes: [
      {
        path: '/LogStorageManager',
        redirect: '/LogStorageManager/LogStorageManager',
      },
      {
        path: '/LogStorageManager/LogStorageManager',
        name: 'Overview',
        component: './LogStorageManager',
      },
    ],
  },
  {
    name: 'Log Analysis Manager',
    path: '/LogAnalysisManager',
    icon: 'crown',
    routes: [
      {
        path: '/LogAnalysisManager',
        redirect: '/LogAnalysisManager/LogAnalysisManager',
      },
      {
        path: '/LogAnalysisManager/LogAnalysisManager',
        name: 'Overview',
        component: './LogAnalysisManager',
      },
    ],
  },
  {
    name: 'Log Archive Manager',
    path: '/LogArchiveManager',
    icon: 'crown',
    routes: [
      {
        path: '/LogArchiveManager',
        redirect: '/LogArchiveManager/LogArchiveManager',
      },
      {
        path: '/LogArchiveManager/LogArchiveManager',
        name: 'Overview',
        component: './LogArchiveManager',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    layout: false,
    component: './TableList',
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
