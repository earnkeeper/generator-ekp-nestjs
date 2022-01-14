import helloWorld from '../hello-world/hello-world.processor';


export default function pages() {
  return [
    {
      id: 'hello-world/hello-world',
      element: helloWorld(),
    },
  ];
}
