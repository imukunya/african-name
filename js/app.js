function DayWeekBorn(CC,YY,MM,DD,NameSpaces){
var dateObj = date.split("/");


var d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;

	return NameSpaces[d];

}
