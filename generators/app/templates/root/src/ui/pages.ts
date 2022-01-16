import helloWorld from '../hello-world/hello-world.uielement';


export default function pages() {
  return [
    {
      id: '<%= pluginId %>/hello-world',
      element: helloWorld(),
    },
  ];
}
