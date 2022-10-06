/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const clonedNumbers = [...numbers];
    if (clonedNumbers.length <= 0) {
        return [];
    } else if (clonedNumbers.length == 1) {
        const short = [...clonedNumbers, ...clonedNumbers];
        return short;
    } else {
        const firstLast = [
            clonedNumbers[0],
            clonedNumbers[clonedNumbers.length - 1]
        ];
        return firstLast;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triple = numbers.map((num: number): number => num * 3);
    return triple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const ints = numbers.map((name: string): number => {
        if (isNaN(parseInt(name))) {
            return 0;
        } else {
            return parseInt(name);
        }
    });
    return ints;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noDollar = amounts.map((element: string): string => {
        return element.includes("$") ? element.replace("$", "") : element;
    });
    const all = noDollar.map((element: string): number => {
        if (isNaN(parseInt(element))) {
            return 0;
        } else {
            return parseInt(element);
        }
    });
    return all;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const loud = messages.map((element: string): string => {
        return element.includes("!") ? element.toUpperCase() : element;
    });
    const noQ = loud.filter(
        (element: string): boolean => !element.includes("?")
    );
    return noQ;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short = words.filter(
        (element: string): boolean => element.length < 4
    );
    return short.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors === null) {
        return true;
    }
    let rgb = false;
    rgb = colors.every(
        (element: string): boolean =>
            element === "red" || element === "blue" || element === "green"
    );
    return rgb;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        addends = [...addends, 0];
    }
    const all = addends.join("+");
    const sum = addends.reduce(
        (total: number, element: number): number => total + element,
        0
    );
    return sum + "=" + all;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const valuesC = [...values];
    const neg = valuesC.some((element: number): boolean => element < 0);
    if (neg) {
        const locationOfNeg = valuesC.findIndex(
            (element: number): boolean => element < 0
        );
        const noNeg = valuesC.slice(0, locationOfNeg);
        const negSum = noNeg.reduce(
            (total: number, element: number): number => total + element,
            0
        );
        const afterNeg = valuesC.slice(locationOfNeg + 1, valuesC.length);
        return [...noNeg, valuesC[locationOfNeg], negSum, ...afterNeg];
    } else {
        const sum = valuesC.reduce(
            (total: number, element: number): number => total + element,
            0
        );
        return [...valuesC, sum];
    }
}
