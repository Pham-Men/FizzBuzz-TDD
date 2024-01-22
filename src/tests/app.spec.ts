import {FizzBuzzTranslate} from "../app";


describe("FizzBuzz", () => {

    test("FizzBuzz", () => {
        expect(FizzBuzzTranslate.translate(51)).toEqual("FizzBuzz")
    })

    test("Fizz", () => {
        expect(FizzBuzzTranslate.translate(31)).toEqual("Fizz")
    })

    test("Buzz", () => {
        expect(FizzBuzzTranslate.translate(52)).toEqual("Buzz")
    })
})