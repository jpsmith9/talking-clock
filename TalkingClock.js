var dict = {
  0:"twelve",
1:"one",
2:"two",
3:"three",
4:"four",
5:"five",
6:"six",
7:"seven",
8:"eight",
9:"nine",
10:"ten",
11:"eleven",
12:"twelve",
13:"thirteen",
14:"fourteen",
15:"fifteen",
16:"sixteen",
17:"seventeen",
18:"eighteen",
19:"nineteen",
20:"twenty",
30:"thirty",
40:"fourty",
50:"fifty"
}

function talkingClock(myTime){
  var times = myTime.split(":");
  var numHour = parseInt(times[0]);
  var numMin = parseInt(times[1]);
  var strMin;
  var suffix="am";

  if (numHour>12){
    numHour-=12;
    suffix="pm";
  }
  var strHour = dict[numHour];
  if (numMin === 0){
    strMin = "o'clock"
  }
  else if(numMin < 10){
    strMin = "oh "+dict[numMin];
  }
  else if (numMin <20){
    strMin = dict[numMin];
  }
  else
  {
    var tens = (Math.floor(numMin/10)*10);
    var ones = numMin%10;
    if (ones>0){
      strMin = dict[tens] + " " + dict[ones];
    }
    else {
      strMin = dict[tens]
    }
  }
console.log("It's " + strHour + " " + strMin + " " + suffix)
}

talkingClock("00:00");
talkingClock("01:30");
talkingClock("12:05");
talkingClock("14:01");
talkingClock("20:29");
talkingClock("21:00");
