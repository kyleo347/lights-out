const db = require('_helpers/db');
const Board = db.Board;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};


async function getAll() {
    return await Board.find().select('-hash');
}

async function getById(id) {
    return await Board.findById(id).select('-hash');
}

async function create(boardParam) {
    // validate
    if (await Board.findOne({ name: boardParam.name })) {
        throw 'name "' + boardParam.name + '" is already taken';
    }

    const board = new Board(boardParam);

    // save board
    await board.save();
}

async function update(id, boardParam) {
    const board = await Board.findById(id);

    // validate
    if (!board) throw 'Board not found';
    if (board.name !== boardParam.name && await Board.findOne({ username: boardParam.username, name: boardParam.name })) {
        throw 'name "' + boardParam.name + '" is already taken';
    }

    // copy boardParam properties to board
    Object.assign(board, boardParam);

    await board.save();
}

async function _delete(id) {
    await Board.findByIdAndRemove(id);
}