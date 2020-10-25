module.exports = function toReadable(number) {
    let result = "";
    const numberStr = String(number);
    let hundredStr = "";
    let decimalStr = "";

    if (number === 0) {
        return "zero";
    }

    const less19 = (less19num) => {
        switch (less19num) {
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            case 4:
                return "four";
            case 5:
                return "five";
            case 6:
                return "six";
            case 7:
                return "seven";
            case 8:
                return "eight";
            case 9:
                return "nine";
            case 10:
                return "ten";
            case 11:
                return "eleven";
            case 12:
                return "twelve";
            case 13:
                return "thirteen";
            case 14:
                return "fourteen";
            case 15:
                return "fifteen";
            case 16:
                return "sixteen";
            case 17:
                return "seventeen";
            case 18:
                return "eighteen";
            case 19:
                return "nineteen";

            default:
                break;
        }
    };

    const decimals = (decimal) => {
        switch (decimal) {
            case 2:
                return "twenty";
            case 3:
                return "thirty";
            case 4:
                return "forty";
            case 5:
                return "fifty";
            case 6:
                return "sixty";
            case 7:
                return "seventy";
            case 8:
                return "eighty";
            case 9:
                return "ninety";

            default:
                break;
        }
    };

    // *** <=19
    if (number <= 19) {
        result = less19(number);
    }
    // *** <=19

    if (number > 99) {
        let hundred = numberStr.split("")[0];
        hundred = parseInt(hundred);
        hundredStr = less19(hundred);
        hundredStr = `${hundredStr} hundred`;
        debugger;
        let decimal = numberStr.slice(1);
        decimal = parseInt(decimal);
        if (decimal < 20 && decimal !== 0) {
            decimalStr = less19(decimal);
            decimalStr = ` ${decimalStr}`;
            result = `${hundredStr}${decimalStr}`;
        } else {
            let decimal = numberStr.split("")[1];
            if (decimal === "0") {
                decimalStr = "";
            } else {
                decimalStr = decimals(parseInt(decimal));
                decimalStr = ` ${decimalStr}`;
            }

            let lastNum = numberStr.split("")[2];
            lastNum = parseInt(lastNum);
            if (lastNum === 0) {
                result = `${hundredStr}${decimalStr}`;
            } else {
                lastNumStr = less19(lastNum);
                result = `${hundredStr}${decimalStr} ${lastNumStr}`;
            }
        }
    }

    if (number <= 99 && number >= 20) {
        let decimal = numberStr.split("")[0];
        decimalStr = decimals(parseInt(decimal));
        decimalStr = `${decimalStr}`;

        let lastNum = numberStr.split("")[1];
        lastNum = parseInt(lastNum);
        if (lastNum === 0) {
            result = `${decimalStr}`;
        } else {
            lastNumStr = less19(lastNum);
            result = `${decimalStr} ${lastNumStr}`;
        }
    }

    return result;
};
