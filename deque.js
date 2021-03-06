class Deque {
  constructor() {
    this.head = [];
    this.tail = [];
  }

  get length() {
    return this.head.length + this.tail.length;
  }
  
  push_front(...xs) {
    this.head.push(...xs);
  }
  
  push_back(...xs) {
    this.tail.push(...xs);
  }
  
  pop_front() {
    if (!this.head.length) {
      const tail = this.head;
      tail.length = 0;
      this.head = this.tail.reverse();
      this.tail = tail;
    }
    return this.head.pop();
  }
  
  pop_back() {
    if (!this.tail.length) {
      const head = this.tail;
      head.length = 0;
      this.tail = this.head.reverse();
      this.head = head;
    }
    return this.tail.pop();
  }
}
