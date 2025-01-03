const month = 3

switch (month) {
    case 1:
        console.log("januar");
        break;
    case 2:
        console.log("febuary");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;

    default:
        break;
}

const month1 = "march"

switch (month1) {
    case "january":
        console.log("month is-1");
        break;
    case "febuary":
        console.log("month is-2");
        break;
    case "march":
        console.log("month is-3");
        break;
    case "april":
        console.log("month is-4");
        break;
    case "june":
        console.log("month is-5");
        break;

    default:
        break;
}

// ====================Truthyy or falsyyyyy value  =========================================================
// falsy value -------

// false , 0 , -0 , BigInt 0n , "" , null , undefined , Nan 

// turthy valueee ============
"0" , 'false' ,  " " , [] , {} , function(){}
