class Item {
    constructor(id, name, description,status) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.status = status;
    }
  }
  
  const itemsList = [
    new Item(1, 'Item 1', 'This is item 1',1),
    new Item(2, 'Item 2', 'This is item 2',0),
    new Item(3, 'Item 3', 'This is item 3',0),
    new Item(4, 'Item 2', 'This is item 2',0),
    new Item(5, 'Item 3', 'This is item 3',0),
    new Item(6, 'Item 2', 'This is item 2',0),
    new Item(7, 'Item 3', 'This is item 3',0),
  ];

  export {Item,itemsList};