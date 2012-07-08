/*
------------
-Exercise 1-
------------
Write some code that will accept an amount and convert it to the
appropriate string representation.
Example:
Convert 2523.04
     to "Two thousand five hundred twenty-three and 04/100 dollars"
*/

/*
Groups of three digits.
Bottom group
   N "hundred
   9...2,19-11: ninety...twenty,nineteen-eleven
   9...1

N thousand, million, billion, trillion
*/

/*
Parse into groups.
*/

var ones =
[
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
];

var teens =
[
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
];

var tys =
[
    "zeroty",
    "tenty",
    "twenty",
    "thirty",
    "fourty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
];

var grp =
[
    "",
    "",
    "thousand",
    "million",
    "billion",
    "trillion"
];

//var test1 = 2523.04;
//var test1 = 9876543.21;
var test1 = 9811519.21;

var test_array = test1.toString().split(".");
var d_str = test_array[0];
var cents = " and " + test_array[1] + "/100 dollars";

var thousands = d_str[0] + " thousand ";
var hundreds  = d_str[1] + " hundred ";
var decands   = tys[d_str[2].valueOf()]
var dollars   = ones[d_str[3].valueOf()]
var whole = thousands + hundreds + decands + "-" + dollars + cents;

var a = "";
//alert(d_str);
dollars_to_str(d_str);
alert (test1 + " is " +  a + cents);

//var l, m;
function dollars_to_str(n)
{
    //alert(n);

    //Offset into group names
    gn_offset = Math.ceil(n.length/3);
    gn = grp[gn_offset];
    //alert("gn = " + gn_offset + ". " + gn);

    //How many digits in this group.
    m = n.length%3;
    m = (m == 0 ? 3 : m);
    //alert("m = " + m);

    //This group of digits
    var n2 = n.slice(0, m );
    //alert("n2 = " + n2 + " " + gn);
    a += " " + digits_to_str(n2,gn);
    if (n2 == 0) return;

    //The left over number
    var n3 = n.substring(m);
    //alert("n3 = " + n3);

    if (n3.length < 3) return;
    dollars_to_str(n3);
    return;
}

function digits_to_str(n)
{
    //n will be a group of digits
    if (n.length == 3)
    {
        dstr  = ones[n[0]] + " hundred ";
        if (10 <= n.substr(1,2) && n.substr(1,2) <= 19)
            dstr += teens[n[2]];
        else
        {
            dstr += tys[n[1]];
            dstr += "-" + ones[n[2]];
        }
    }
    else if (n.length == 2)
    {
        if (10 <= n.substr(0,2) && n.substr(0,2) <= 19)
            dstr += teens[n[1]];
        else
        {
            dstr  = tys[n[0]];
            dstr += "-" + ones[n[1]];
        }
    }
    else if (n.length == 1)
    {
        dstr  = ones[n[0]];
    }
    //alert(dstr);
    return dstr + " " + gn;

}

