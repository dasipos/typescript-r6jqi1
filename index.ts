// Import stylesheets
import './style.css';

import { foo } from './module';
import { ITask } from './interface';
import { TaskType } from './type';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

var s: string = 'strig';
const x: string = `blue

js`;
console.log(s + x);

var xy: null = null;
var xz: undefined = undefined;
console.log(xy == xz ? 'j' : 'N');

s = 's';

console.log(foo);

const bla: ITask = {
  id: 1,
  name: 's',
  complete: false,
  subtasks: [
    {
      id: 2,
      name: 'sa',
      complete: true,
    },
    {
      id: 3,
      name: 'sb',
      complete: true,
    },
  ],
};

const blah: TaskType = {
  id: 1,
  name: 'saaa',
  complete: true,
};

console.log(bla.name);
console.log(blah.name);
