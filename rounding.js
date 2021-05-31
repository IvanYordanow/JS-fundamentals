function rounding(num , precision) {
    if (precision > 15) {
        let precision = 15;
        let number = num.toFixed(precision);
        console.log(parseFloat(number));
    } else {
    let number = num.toFixed(precision);
    console.log(parseFloat(number));
    }
}

rounding(3.1415926535897932384626433832795 , 2);
rounding(10.5 , 3);
rounding(6.45569496544949651911915915658496512 , 20);