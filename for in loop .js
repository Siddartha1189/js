let input = {
  name: "vas",
  tech: "js",

  laptop: {
    cpu: "i8",
    ram: 4,
    brand: "dell",
  },
};

for (let key in input.laptop) {
  console.log(key.values);
}
// console.log(input.laptop.ram);
