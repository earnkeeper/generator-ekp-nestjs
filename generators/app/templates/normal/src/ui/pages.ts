import helloWorld from '../hello-world/hello-world.processor';


export default function pages() {
  return [
    {
      id: '<%= pluginId %>/hello-world',
      element: helloWorld(),
    },
  ];
}
