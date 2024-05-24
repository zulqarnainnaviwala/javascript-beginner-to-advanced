// To check condition on same type on data 
// switch (key) {
//     case value:
//         break;
//     default:
//         break;
// }

const month = "march"
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        // break;
        //break; //if case matched , all code after that will execute till next break keyword except default , so it's imp to add break;
    case "april":
        console.log("april");
        break;
    case "may":
        console.log("may");
        break;

    default:
        console.log("default case match");
        break;
}