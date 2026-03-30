
const games_rockstar = ["GTA","RDR","MAX PAYNE","BULLY"]

const games_ubisoft = ["AC","WATCH DOGS","POP","GHOST RECON"]

games_rockstar.push(games_ubisoft)

console.log(games_rockstar);

console.log(games_rockstar[4][2]);


const allgames = games_rockstar.concat(games_ubisoft)

console.log(allgames);

const all_new_games = [...games_rockstar,...games_ubisoft]

console.log(all_new_games);

const new_array = [2,4,6,[1,3,5],8,4,9,[6,2,[5,8]]]

const fix_new_array = new_array.flat(2)

console.log(fix_new_array);

console.log(Array.isArray("Som"))
console.log(Array.from("Som"))
console.log(Array.from({name:"Som"}))

let score1 = 100
let score2 = 500
let score3 = 800

console.log(Array.of(100,500,800));
