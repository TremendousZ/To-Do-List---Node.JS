
function app() {
  // takes 2 params the name and the file
  pjs.defineDisplay("display", "todo.json");
  // execute shows screen to the user

  let list = pjs.query("SELECT * FROM todo");
  // refer to the child file 
  display.grid.replaceRecords(list);
  while(true){

    display.todoScreen.execute();

    if(add){
      addItem(display.grid, newItem)
    }
    // check all of the entries to see if the remove flag is tagged
    removeItems(display.grid);
  }

}

function addItem(grid, newItem){
   grid.push({
        item: newItem
      });
    // ? is a fill in value
    pjs.query("INSERT INTO todo SET ?", {item: newItem});
}


function removeItems(grid){

    let recordsToRemove = grid.filter(entry => entry.remove);
    recordsToRemove.forEach( record => pjs.query("DELETE FROM todo WHERE item = ?", record.item));
    grid.applyFilter(entry => !entry.remove);

}

exports.default = app;