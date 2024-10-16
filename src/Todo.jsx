// export function Todo ({task, isDone}) {
//     return (
//         <li>{task}</li>
//     )
// }

// conditional rendering option 1
// export function Todo ({task, isDone}) {
//    if (isDone === true){
//     return <li>Finished: {task}</li>
//    }
//    else{
//     return <li>Working on: {task}</li>
//    }
// }

// conditional rendering option 2
// export function Todo ({task, isDone}) {
//   if (isDone) {
//     return <li>Finished: {task}</li>
//   }
//   return <li>Working on: {task}</li>
// }

// conditional rendering option 3 - ternary operator
// export function Todo ({task, isDone}) {
//     return (
//         <li> {isDone ? 'Finished' : "Working on" } - {task}</li>
//     )
// }

// conditional rendering operator 4 - &&
// export function Todo ({task, isDone}) {
//     return (
//         <li>{task} {isDone && ": Done"}</li>
//     )
// }

// conditional rendering operator 5 - &&
// export function Todo ({task, isDone}) {
//     return (
//         <li>{task} {isDone || ": Working on it"}</li>
//     )
// }

// conditional rendering option 6
export default function Todo ({task, isDone}) {
    let listItem;
  if (isDone) {
    listItem = <li>Finished: {task}</li>
  }
 else{
    listItem = <li>Working on: {task}</li>
 }
 return listItem;
}
