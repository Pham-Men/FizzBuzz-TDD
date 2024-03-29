export class FizzBuzzTranslate {
    public static translate (num: number): string {
        if (num % 3 === 0 && num % 5 === 0 || num.toString().includes("3") && num.toString().includes("5") || num % 3 === 0 && num.toString().includes("5") || num % 5 === 0 && num.toString().includes("3")) {
            return "FizzBuzz";
        }
        if (num % 3 === 0|| num.toString().includes("3")) {
            return "Fizz";
        }
        if (num % 5 === 0 || num.toString().includes("5")) {
            return "Buzz";
        } else {
            return num.toString()
        }
    }
}