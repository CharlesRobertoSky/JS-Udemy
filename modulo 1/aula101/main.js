const pessoas = [
  {id:2, nome:'Maria'},
  {id:1, nome:'João'},
  {id:3, nome:'Claudio'}
]

const novasPessoas = new Map()

for(const pessoa of pessoas){
  const { id } = pessoa;
  novasPessoas.set(id, {...pessoa});
}

console.log(novasPessoas)