/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// Algorithm 1

// let ombor = {
//     moy: ['pista', 'paxta', 'semechka'],
//     gosht: ['mol', 'qoy', 'echki', 'tovuq'],
//     masalliq: ['kartoshka', 'bodiring', 'piyoz', 'sabzi'],
//     ziravor: ['tuz', 'uksus', 'zira', 'kunjut', 'kashnich']
// }
// function ovqatTayyorla(index, call_production) {
//     setTimeout(() => {
//         console.log(`birinchi ${ombor.moy[index]} solinadi`);
//     }, 1000)
//     call_production()
// }

// let tayyorla = () => {
//     setTimeout(() => {
//         console.log("Yog qizishini kutamiz");
//         setTimeout(() => {
//             console.log(`keyin ${ombor.gosht[1]} goshti solamiz`);
//             setTimeout(() => {
//                 console.log("gosht qizarib qovuriladi");
//                 setTimeout(() => {
//                     console.log(`ustidan ${ombor.masalliq[2]} solinadi`);
//                     setTimeout(() => {
//                         console.log(`piyoz qovurilgandan song ${ombor.masalliq[0]} solinadi`);
//                         setTimeout(() => {
//                             console.log(`ustidan ${ombor.ziravor[0]} solib dimlab qoyamiz`);
//                         }, 0000)
//                     }, 2000)
//                 }, 1000)
//             }, 3000)
//         }, 1000)
//     }, 2000)
// }

// ovqatTayyorla(2, tayyorla)

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// Algorithm 2

// let evos_is_open = true;

// function order(time, work) {
//   return new Promise((resolve, reject) => {
//     if (evos_is_open) {
//       setTimeout(() => {
//         resolve (work())
//       },time)
//     } else {
//       reject(console.log("the shop is closed"));
//     }
//   });
// }

// order(1000, () => console.log("the shop is open"))
// .then(() => {
//   return order(2000, () => console.log("what do you want?"))
// })
// .then(() => {
//     return order(3000, () => console.log("we will go to the 5 minut"))
// })
// .then(() => {
//     return order(2000, () => console.log("if you pleasent our work, we will be happy"))
// })
// .catch(() =>{
//     console.log("something was wrong");
// })
// .finally(() => {
//     console.log("thenks for attention");
// })