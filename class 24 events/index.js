import {EventEmitter} from "events";
const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
    console.log('started')
  })


eventEmitter.on('start', (arg) => {
    console.log(`started with ${arg}`);
  })

eventEmitter.on('start', (arg1,arg2,arg3,arg4) => {
    console.log(`started with ${arg1} ${arg2} ${arg3} ${arg4}`);
  })



var arg1 = "hello";
var arg2 = "testing";
var arg3 = "new";
var arg4 = "event";

eventEmitter.emit('start',arg1,arg2,arg3,arg4)