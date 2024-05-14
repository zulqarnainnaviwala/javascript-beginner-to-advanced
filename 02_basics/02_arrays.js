const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// const result  = marvel_heros.push(dc_heros) //mutates original array and returns length  
// console.log(marvel_heros)
// console.log(result)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) //do not mutates original but limited to two
// console.log(marvel_heros.concat(dc_heros)); //
// console.log(marvel_heros)
// console.log(dc_heros)

//Spread operator
const all_new_heros = [...marvel_heros, ...dc_heros,] //return new concated array
// console.log(all_new_heros);
const all_new_heros_2 = [...marvel_heros, ...dc_heros,...marvel_heros] 
// console.log(all_new_heros_2);

//any case having same type of data but in array of arrays and just wanted to have elements in one array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(2) //deapth to define is a good practice 
// console.log(real_another_array);
const real_another_array_2 = another_array.flat(Infinity) //JS find the depth at its own
// console.log(real_another_array_2);

// console.log(Array.isArray("Zulqarnain")) //returns boolean
// console.log(Array.isArray([]))

// console.log(Array.from("Zulqarnain")) //convert string to array and puts each char in that array 
const sample  = (Array.from("123"))
// console.log(typeof(sample[0]))

// console.log(Array.from({name: "Zulqarnain"})) // interesting : returns an empty array cause unable to identify 

let score1 = 100
let score2 = 200 
let score3 = 300
let scores = [10,20,30,40,50,60,70,80,90,100]
// console.log(Array.of(score1, score2, score3)); //takes numbers & puts each in array
const sample_2 = Array.of(...scores,score1,score2,score3)
console.log((sample_2))
console.log(typeof(sample_2[0]))
