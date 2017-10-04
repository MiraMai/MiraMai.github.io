function nextDate(date) {
  let year = Number(date.substring(0,4));// oi theseis se auto YYYY-MM-DD
  let month =Number(date.substring(5,7));
  let day = Number(date.substring(8,10));
  console.log('Datumet är: %s %s %s', year, month, day);
  
  day++;
  if((month ==1 || month ==3 || month ==5 || month ==7 || month ==8 || month ==10 || month ==12) && day>31) {
    month++;
    day = 1;
  }
  else if (month == 2 && dat > 28) {
    month++;
    day = 1;
  }
  else if ((month == 4 ||  month ==6 || month ==9 || month ==11) && day > 30) {
    month++;
    day = 1;
  }
  if (month == 13) {
    month =1;
    year++;
  }
  return year + '-'+ month + '-' + day;
  
}

nextDate('2016-11-17');