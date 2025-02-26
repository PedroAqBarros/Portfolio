const X_CLASS = 'X';
const O_CLASS = 'O';
const cells = document.querySelectorAll('[data-cell]');
const status = document.getElementById('status');
const restartButton = document.getElementById('restartButton');
const pvpButton = document.getElementById('pvpButton');
const pvcButton = document.getElementById('pvcButton');

let xIsNext = true;
let gameActive = false;
let vsComputer = false;

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

pvpButton.addEventListener('click', () => {
    vsComputer = false;
    startGame();
});

pvcButton.addEventListener('click', () => {
    vsComputer = true;
    startGame();
});

function startGame() {
    xIsNext = true;
    gameActive = true;
    cells.forEach(cell => {
        cell.textContent = '';
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, { once: true });
    });
    updateStatus();
}

function handleClick(e) {
    if (!gameActive) return;
    
    const cell = e.target;
    if (cell.textContent !== '') return;

    const currentClass = xIsNext ? X_CLASS : O_CLASS;
    placeMark(cell, currentClass);
    
    if (checkWin(currentClass)) {
        endGame(false);
        return;
    }
    if (isDraw()) {
        endGame(true);
        return;
    }

    if (vsComputer && gameActive) {
        xIsNext = false;
        updateStatus();
        setTimeout(computerMove, 500);
    } else {
        xIsNext = !xIsNext;
        updateStatus();
    }
}
function computerMove() {
    if (!gameActive) return;

    // Try to win
    const winMove = findBestMove(O_CLASS);
    if (winMove !== -1) {
        makeMove(winMove);
        return;
    }

    // Block player
    const blockMove = findBestMove(X_CLASS);
    if (blockMove !== -1) {
        makeMove(blockMove);
        return;
    }

    // Take center if available
    if (cells[4].textContent === '') {
        makeMove(4);
        return;
    }

    // Take random available cell
    const emptyCells = [...cells].map((cell, index) => ({cell, index}))
                                .filter(({cell}) => cell.textContent === '');
    if (emptyCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        makeMove(emptyCells[randomIndex].index);
    }
}

function findBestMove(player) {
    for (const combination of winningCombinations) {
        const marks = combination.map(index => cells[index].textContent);
        const playerCount = marks.filter(mark => mark === player).length;
        const emptyCount = marks.filter(mark => mark === '').length;
        
        if (playerCount === 2 && emptyCount === 1) {
            return combination[marks.indexOf('')];
        }
    }
    return -1;
}

function makeMove(index) {
    placeMark(cells[index], O_CLASS);
    if (checkWin(O_CLASS)) {
        endGame(false);
        return;
    }
    if (isDraw()) {
        endGame(true);
        return;
    }
    xIsNext = true;
    updateStatus();
}

function placeMark(cell, currentClass) {
    cell.textContent = currentClass;
}

function updateStatus() {
    if (gameActive) {
        status.textContent = `Vez do jogador ${xIsNext ? X_CLASS : O_CLASS}`;
    }
}

function checkWin(currentClass) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].textContent === currentClass;
        });
    });
}

function isDraw() {
    return [...cells].every(cell => {
        return cell.textContent === X_CLASS || cell.textContent === O_CLASS;
    });
}

function endGame(draw) {
    gameActive = false;
    if (draw) {
        status.textContent = 'Empate!';
    } else {
        status.textContent = `${xIsNext ? 'Você' : 'Computador'} venceu!`;
    }
}

restartButton.addEventListener('click', startGame);
