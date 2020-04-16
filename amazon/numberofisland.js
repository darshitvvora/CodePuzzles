function numIslands(grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++;
        dfs(grid, i,j);
      }
    }
  }

  return count;
}

function dfs(grid, row, col) {
  // bound check
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return;

  const value = grid[row][col];
  if (value === '1') {
    grid[row][col] = '#';
    dfs(grid, row + 1, col);
    dfs(grid, row - 1, col);
    dfs(grid, row, col + 1);
    dfs(grid, row, col - 1);
  }
}