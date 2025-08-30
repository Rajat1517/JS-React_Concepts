/**
 * The event loop in Js is the concept that helps JS look like multithreaded even though it a single-threaded language.
 * Using this concept we implemetn asynchrous tasks in JS.
 */

/**
 * The concept:
 * - Js has 3 datastrutures to handle the execution of tasks.
 *  - Main Call Stack
 *  - MacrTask Queue
 *  - Microtask Queue
 * 
 * - Stack is used to implement the tasks in order.
 * - Queues are used to record any async task scheduled to be executed.
 * - Macrotask: setTimeout, DOM events, tsc.
 * - Microtask: promises, await/then.
 */

/**
 * Execution:
 * 
 * - Stack folloes the order and add sync task immediately.
 * - Once the stack is completed with sync tasks in the entire thread. 
 * - It will start with the queue, which was filled while completing the sync tasks.
 * - Microtasks have higher priority and hence that queue is cleared first.
 * - Then comes the macrotasks.
 */

/**
 * - If await/then is used, the dev thinks that the code is sync. But it is not.
 * - Those await/then statements are pushed to the microtask queue and the execution of that immediate function is haulted (not the entire program) until the main stack is completed.
 */









console.log("A");

setTimeout(() => console.log("B - setTimeout"), 0);

Promise.resolve().then(() => console.log("C - promise"));

(async function() {
  console.log("D - async start");

  await null;

  console.log("E - after await");
})();

console.log("F");


/**
 * Output:
 * A (stack)
 * D (B,C are pushed to their respective queues)
 * F (E is again pushed to microtask as await halted the execution of IIFE)
 * C (microtask queue is prioritised and C was pushed first)
 * E (again form microtask queue)
 * B (from macrotask queue)
 */