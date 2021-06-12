function vacation(number , conditions , day) {
    let sum = 0;

    

    switch (day){
        case "Friday":
            switch (conditions){
                case "Students":
                    sum = number * 8.45;
                    if(number >= 30) {
                        sum = sum - (sum * 0.15);
                    }
                    break;
                case "Business":
                    if(number >= 100) {
                        number = number - 10;
                    }
                    sum = number * 10.90;
                    break;
                case "Regular":
                    sum = number * 15;
                    if(number >= 10 && number <= 20){
                        sum = sum - (sum * 0.05);
                    }
                    break;
            }
            break;
        case "Saturday":
            switch (conditions){
                case "Students":
                    sum = number * 9.80;
                    if(number >= 30) {
                        sum = sum - (sum * 0.15);
                    }
                    break;
                case "Business":
                    if(number >= 100) {
                        number = number - 10;
                    }
                    sum = number * 15.60;
                    break;
                case "Regular":
                    sum = number * 20;
                    if(number >= 10 && number <= 20){
                        sum = sum - (sum * 0.05);
                    }
                    break;
            }
            break;
        case "Sunday":
            switch (conditions){
                case "Students":
                    sum = number * 10.46;
                    if(number >= 30) {
                        sum = sum - (sum * 0.15);
                    }
                    break;
                case "Business":
                    if(number >= 100) {
                        number = number - 10;
                    }
                    sum = number * 16;
                    break;
                case "Regular":
                    sum = number * 22.50;
                    if(number >= 10 && number <= 20){
                        sum = sum - (sum * 0.05);
                    }
                    break;
            }
            break;
    }

    console.log(`Total price: ${sum.toFixed(2)}`);

}

vacation(30 , "Students" , "Sunday");
vacation(40 , "Regular" , "Saturday");