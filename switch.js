// let user;
// user = 4;
// switch(user){
//     case 1:
//         console.log("this is user1")
//         break;
//         case 2:
//             console.log("this is user2")
//             break;
//             default:
//             console.log("Default")
// }


// let months =["january","february","march","april","may","june"]
// console.log(months[0]);

// let months;
// months = 2;
// switch (months) {
//     case 1:
//         console.log("january")
//         break;
//     case 2:
//         console.log("february")
//         break;
//     case 3:
//         console.log("March")
//         break;
//     case 4:
//         console.log("April")
//         break;
//     case 5:
// //         console.log("May")
// //         break;
// //     case 6:
// //         console.log("june")
// //         break;

// //     case 7:
// //         console.log("july")
// //         break;
// //     case 8:
// //         console.log("August")
// //         break;
// //     case 9:
// //         console.log("September")
// //         break;
// //     case 10:
// //         console.log("OCTOBER")
// //         break;
// //     case 11:
// //         console.log("November")
// //         break;
// //     case 12:
// //         console.log("December")
// //         break;

// // }



// let Days;
// Days = 5;
// switch (){
//     case 1:
//         console.log("Sunday")
//         break;
//         case 2:
//             console.log("Monday")
//             break;
//             case 3:
//                 console.log("Tuesday")
//                 break;
//                 case 4:
//                     console.log("Wednesday")
//                     break;
//                     case 5:
//                         console.log("Thursday")
//                         break; 
//                         case 6:
//                             console.log("Friday")
//                             break;
//                             case 7:
//                                 console.log("Saturday")
//                                 break;
// }


let date = new Date();
function getDay(Days) {
    var Days;
    switch (Days) {
        case 1:
            console.log("Sunday")
            break;
        case 2:
            console.log("Monday")
            break;
        case 3:
            console.log("Tuesday")
            break;
        case 4:
            console.log("Wednesday")
            break;
        case 5:
            console.log("Thursday")
            break;
        case 6:
            console.log("Friday")
            break;
        case 7:
            console.log("Saturday")
            break;
    }
}
console.log("today = " + date);
console.log(new Date(date.getFullYear(), 0, 1));
