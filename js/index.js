setInterval(clock,1);

var change = true;
function getDay(code){
    switch(code){
        case 0:
            return "Sunday";
            break;
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
            break;
    }
}

function getMonth(code){
    switch(code){
        case 0:
            return "January";
            break;
        case 1:
            return "February";
            break;
        case 2:
            return "March";
            break;
        case 3:
            return "April";
            break;
        case 4:
            return "May";
            break;
        case 5:
            return "June";
            break;
        case 6:
            return "July";
            break;
        case 7:
            return "August";
            break;
        case 8:
            return "September";
            break;
        case 9:
            return "October";
            break;
        case 10:
            return "November";
            break;
        case 11:
            return "December";
            break;
    }
}

function getDate(code){
    if(!(code>10 && code<20)){
        if(code%10==1)
            return "st";
        else if(code%10==2)
            return "nd";
        else if(code%10==3)
            return "rd";
        else 
            return "th";
    }
    return "th";
}

function fixSecs(code){
    if(code<10){
        return "0" + code;
    }
    return code;
}

function convert(text){
    if(text==0)
        return 12;
    else if(text>12)
        return text%12;
    return text;
}

function period(text){
    if(text>=12)
        return " pm";
    return " am";
}

function tf(){
    change = true;
}

function tw(){
    change = false;
}

function clock(){
    var time = new Date();
    var hrs = time.getHours(), mins = time.getMinutes(), secs = time.getSeconds();  
    var day = time.getDay(), date = time.getDate(), month = time.getMonth(), year = time.getFullYear();
    if(change){
        document.getElementById('time').innerHTML = fixSecs(hrs) + ":" + fixSecs(mins) + ":" + fixSecs(secs);
        document.getElementById('day').innerHTML = getDay(day) + ", " + date + getDate(date).sup()  + " " + getMonth(month) + ", " + year;
    }
    else{
        document.getElementById('time').innerHTML = fixSecs(convert(hrs)) + ":" + fixSecs(mins) + ":" + fixSecs(secs) + period(hrs).fontsize(50);
        document.getElementById('day').innerHTML = getDay(day) + ", " + date + getDate(date).sup()  + " " + getMonth(month) + ", " + year;
    }
    
}