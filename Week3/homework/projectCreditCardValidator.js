function validateCreditNumber(creditCardNumber){
    if(creditCardNumber.length !== 16){
        return false;
      }
    for(var i = 0; i < creditCardNumber.length; i++){
        sum += Number(creditCardNumber[i]);
    }
    if(sum >= 16){
      return true;
    }else{
  
    return false;
    }
    if(creditCardNumber[creditCardNumber.length - 1] % 2 !== 0){
    return false;
    }

}

validateCreditNumber('a92332119c011112');
validateCreditNumber('4444444444444444');
validatecreditNumber('6666666666661666');