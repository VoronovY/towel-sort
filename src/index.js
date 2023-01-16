// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    return matrix.map((el, idx) => (idx % 2 === 1 ? el.reverse() : el)).flat();
};
