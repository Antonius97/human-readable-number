const nums = ["zero","one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const decs = ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

module.exports = function toReadable(num = 0) {
    if (!num) {
        return nums[0];
    }

    let hund = Math.floor(num / 100);
    let dec = Math.floor(num / 10 % 10);
    let on = num % 10;

    let out = [];

    if (hund) {
        out.push(nums[hund], "hundred");
    }

    if (dec > 1) {
        out.push(decs[dec]);

        if (on) {
            out.push(nums[on]);
        }
    } else if (num % 100) {
        out.push(nums[num % 100]);
    }

    return out.join(" ");
}