let data = [];

data[0] = 8;
data[199] = 4;
console.log(data);

for (let n in data) {
  console.log(n);
}
