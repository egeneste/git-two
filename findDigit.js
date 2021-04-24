const findDigit = (digits) => {
    const numDigit = digits.toString().split('');
    
    let count =0;

    numDigit.forEach(element => {
        
        if(digits % parseInt(element) == 0) {
            count++;
        }
    });

    console.log(count);
}

findDigit(1012);