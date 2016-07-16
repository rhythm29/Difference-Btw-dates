function daysBtwDates(accum, d1, m1, y1, d2, m2, y2){
	if(m2 == m1 && y2 == y1){
		return accum + d2 - d1 ;
	}
	accum = accum + daysBtwMonth(m1,y1) - d1 + 1;;
	d1 = 1;
	if(m1 == 12){
		m1 = 1;
		y1 = y1+1
	} else{
	    m1 = m1 + 1;	
	  }
	return daysBtwDates(accum, d1, m1, y1, d2, m2, y2);
}

function daysBtwMonth(m1, y1){
	if(m1 == 4 || m1 == 6 || m1 == 9 || m1 == 11) return 30;
	if(m1 == 2) return isLeapYear(y1) ? 29 : 28;
	else return 31;
}

function isLeapYear(y1){
	if(y1 % 4 == 0) return true;
	return false;
}




var d1 = 29
var m1 = 5
var y1 = 1989
var d2 = 29
var m2 = 5
var y2 = 2016

console.log(daysBtwDates(0,d1,m1,y1,d2,m2,y2));