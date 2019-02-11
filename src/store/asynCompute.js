import { observable, action } from 'mobx';

class TodoStore {
  @observable num = 3;

  @action
  add() {
    this.num += 1;
  }
}
export default TodoStore;
