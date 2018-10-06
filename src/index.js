module.exports = function solveSudoku(matrix) {
  var solution = [];
  var steps = 0;
  inputSol(matrix);
  console.log(matrix);
  console.log(solution);

function inputSol(in_val) {
  steps = 0;
  var suggest = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for ( var i=0; i<9; i++) {
      solution[i] = [];
      for ( var j=0; j<9; j++ ) {
          if ( in_val[i][j] ) {
              solution[i][j] = [in_val[i][j], 'default', []];
          }
          else {
              solution[i][j] = [0, 'nothing', suggest];
          }
      }
  }
}
}