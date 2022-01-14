export default function menus() {
  return [
    {
      id: '<%= pluginId %>',
      header: '<%= pluginName %>',
    },
    {
      id: '<%= pluginId %>-hello-world',
      title: 'Hello World',
      navLink: '<%= pluginId %>/hello-world',
      icon: 'cil-bullhorn',
    },
  ];
}
