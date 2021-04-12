const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  get size() {
    let currentItem = Queue;
    let nextItem = Queue.next;
    let counter = 0;
    while (currentItem.next === null) {
      currentItem = nextItem;
      nextItem = nextItem.next;
      counter++;
    }
    return counter;
  }

  enqueue(element) {
    return new ListNode(element);
  }

  dequeue() {

  }
}

module.exports = Queue;
