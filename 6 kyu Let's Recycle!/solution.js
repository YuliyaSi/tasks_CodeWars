function recycle(array) {
let output = {
paper: [],
glass: [],
organic: [],
plastic: []
};

array.forEach(i => {
output[i.material].push(i.type);
if (i.secondMaterial) {
output[i.secondMaterial].push(i.type)
}
})

  return Object.values(output)
}
