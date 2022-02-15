// test('adds 1 + 2 to equal 3', () => {
//     expect(1+2).toBe(3);
//   });

const markStudents = require ('./src/index.js')

test('Muy deficiente', () => {
  expect(markStudents(0)).toBe("Muy deficiente")
  expect(markStudents(1)).toBe("Muy deficiente")
  expect(markStudents(2)).toBe("Muy deficiente")
});

test('Insuficiente', () => {
  expect(markStudents(3)).toBe("Insuficiente")
  expect(markStudents(4)).toBe("Insuficiente")
});

test('Suficiente', () => {
  expect(markStudents(5)).toBe("Suficiente")
});

test('Bien', () => {
  expect(markStudents(6)).toBe("Bien")
});

test('Notable', () => {
  expect(markStudents(7)).toBe("Notable")
  expect(markStudents(8)).toBe("Notable")
});

test('Sobresaliente', () => {
  expect(markStudents(9)).toBe("Sobresaliente")
  expect(markStudents(10)).toBe("Sobresaliente")
});

test('Nota no valida', () => {
  expect(markStudents(-1)).toBe("Esa nota no existe, introduce un valor entre 0-10")
  expect(markStudents(11)).toBe("Esa nota no existe, introduce un valor entre 0-10")
});