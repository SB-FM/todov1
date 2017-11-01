import { ITodoItem } from './ITodoItem';

export class TodoStore {
    items: ITodoItem[];

    constructor() {
        this.items = [];

    }
    addItem(newItem: string) {
        this.items.push({
            text: newItem,
            done: false
        });
    }

    removeItem(item: ITodoItem) {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
    }
    doneItem(item: ITodoItem) {
        const index = this.items.indexOf(item);
        this.items[index].done = !this.items[index].done;
    }
}
