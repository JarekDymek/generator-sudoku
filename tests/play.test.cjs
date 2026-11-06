const {test}=require('node:test');
const assert=require('node:assert/strict');
const {generateFour,setPlayerEntry,entryConflicts,checkPlayerBoard,restoreGame}=require('../app.js');
const fresh=()=>generateFour('easy').map(board=>({...board,entries:Array(81).fill(0)}));

test('gra nie pozwala nadpisywać liczb startowych ani wpisywać nieprawidłowych wartości',()=>{
  const [board]=fresh(),given=board.puzzle.findIndex(Boolean),blank=board.puzzle.indexOf(0);
  const original=board.puzzle.slice();
  assert.equal(setPlayerEntry(board,given,0),false);
  for(const value of [-1,10,1.5,'3'])assert.equal(setPlayerEntry(board,blank,value),false);
  assert.equal(setPlayerEntry(board,81,3),false);
  assert.equal(setPlayerEntry(board,blank,board.solution[blank]),true);
  assert.equal(setPlayerEntry(board,blank,0),true);
  assert.deepEqual(board.puzzle,original);
});

test('powtórzona cyfra jest wykrywana i błędna pełna plansza nie daje wygranej',()=>{
  const [board]=fresh(),blank=board.puzzle.findIndex((v,i)=>!v&&board.puzzle.some((d,j)=>d&&Math.floor(j/9)===Math.floor(i/9))),row=Math.floor(blank/9);
  const peer=board.puzzle.findIndex((digit,i)=>digit&&Math.floor(i/9)===row);
  setPlayerEntry(board,blank,board.puzzle[peer]);
  assert.ok(entryConflicts(board).has(blank));
  assert.ok(checkPlayerBoard(board).errors.includes(blank));
  for(let i=0;i<81;i++)if(!board.puzzle[i])setPlayerEntry(board,i,board.solution[i]);
  assert.equal(checkPlayerBoard(board).complete,true);
  setPlayerEntry(board,blank,board.solution[blank]%9+1);
  assert.equal(checkPlayerBoard(board).complete,false);
});

test('cztery plansze mają niezależne odpowiedzi, a zapis przywraca je po ponownym otwarciu',()=>{
  const boards=fresh(),blank=boards[0].puzzle.indexOf(0);
  setPlayerEntry(boards[0],blank,boards[0].solution[blank]);
  assert.ok(boards.slice(1).every(board=>board.entries.every(v=>!v)));
  const restored=restoreGame(JSON.stringify({version:1,level:'easy',boards}));
  assert.ok(restored);
  assert.deepEqual(restored.boards[0].entries,boards[0].entries);
  assert.equal(restored.boards.length,4);
  assert.deepEqual(restored.boards[0].puzzle,boards[0].puzzle);
});

test('uszkodzony zapis i podmieniony klucz odpowiedzi nie są przywracane',()=>{
  assert.equal(restoreGame('invalid JSON'),null);
  const boards=fresh();boards[0].solution[0]=boards[0].solution[0]%9+1;
  assert.equal(restoreGame(JSON.stringify({version:1,level:'easy',boards})),null);
  assert.equal(restoreGame(JSON.stringify({version:1,level:'easy',boards:[]})),null);
});
