const cats =  ['Milo', 'Otis', 'Garfield'];

const beforeEach = function () {
  cats.length = 0;

  cats.push('Milo', 'Otis', 'Garfield');
};

beforeEach();

const destructivelyAppendCat = function () {
  cats.push ('Ralph');
  return cats
}

console.log(destructivelyAppendCat());

beforeEach(); 

const destructivelyPrependCat = function () {
  cats.unshift ('Bob')
  return cats
}

console.log(destructivelyPrependCat());

beforeEach();

const destructivelyRemoveLastCat = function () {
  cats.pop();
  return cats
}
console.log(destructivelyRemoveLastCat());
beforeEach();

const destructivelyRemoveFirstCat = function () {
  cats.shift()
  return cats
}
console.log(destructivelyRemoveFirstCat());
beforeEach();

const appendCat = function (name) {
  return [...cats, name]
}
appendCat('Broom');
console.log(appendCat('Broom'));

beforeEach();

const prependCat = function(name) {
  return [name, ...cats]
}
prependCat('Arnold');
console.log(prependCat('Arnold'));

beforeEach();

const removeLastCat = function () {
  return cats.slice(0, -1);
}
console.log(removeLastCat());

beforeEach();

const removeFirstCat = function() {
  return cats.slice(1);
}
console.log(removeFirstCat());

beforeEach();

console.log(cats);







