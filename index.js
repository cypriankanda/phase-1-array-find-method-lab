// code your solution here
function superbowlWin(record) {
    // Use find() to look for the first win (result === "W")
    const win = record.find(game => game.result === "W");
  
    // If a win is found, return the year. If not, return undefined.
    return win ? win.year : undefined;
  }
  