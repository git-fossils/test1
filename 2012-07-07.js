/*
------------
-Exercise 1-
------------
Write some code that will accept an amount and convert it to the
appropriate string representation.
Example:
Convert 2523.04
     to "Two thousand five hundred twenty-three and 04/100 dollars"

Kelly John Carney
*/

var ones =
[
    "",
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
    "",
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

function convert_number(n)
{
    a = "";
    var test_array = n.toString().split(".");
    var d_str = test_array[0];
    var cents = "and " + test_array[1] + "/100 dollars";

    dollars_to_str(d_str);
    alert (n + " is " +  a.substr(1,1).toUpperCase() + a.substr(2) + cents);
}

function dollars_to_str(n)
{
    //Offset into group names
    var gn_offset = Math.ceil(n.length/3);
    var gn = grp[gn_offset];

    //How many digits in this group.
    var m = n.length%3;
    var m = (m == 0 ? 3 : m);

    //This group of digits
    var n2 = n.slice(0, m );
    a += " " + digits_to_str(n2,gn);

    //Recurse on the left over number or end
    var n3 = n.substring(m);
    if (n3.length < 3)
        return;
    dollars_to_str(n3);
}

function digits_to_str(n,gn)
{
    var dstr = "";

    //n will be a group of 3 digits
    //gn is a group name like "trillion", "million", ...
    if (n.length == 3)
    {
        if (n[0] != 0)
            dstr  = ones[n[0]] + " hundred ";
        if (10 <= n.substr(1,2) && n.substr(1,2) <= 19)
            dstr += teens[n[2]];
        else
        {
            dstr += tys[n[1]];
            if (n[1] !=0) dstr += "-";
            dstr += ones[n[2]];
        }
    }
    else if (n.length == 2)
    {
        if (10 <= n.substr(0,2) && n.substr(0,2) <= 19)
            dstr += teens[n[1]];
        else
        {
            dstr  = tys[n[0]];
            if (n[1] !=0) dstr += "-";
            dstr += ones[n[1]];
        }
    }
    else if (n.length == 1)
    {
        dstr  = ones[n[0]];
    }

    if (dstr != "") dstr += " " + gn;
    return dstr;

}

