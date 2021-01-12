describe("My FizzBuzz game", function () {

    beforeEach(function () {
        fb = new fizzBuzz;
    });

    describe("Checks a number's divisibility by the numbers 3 and 5", function () {
        it("should exist", function () {
            expect(fizzBuzz).toBeDefined();
        });
        it("should return 'FizzBuzz' when called as fizzBuzz(15)", function () {
            var result = fizzBuzz(15);
            expect(result).toBe("FizzBuzz");
        });
        it("should return 'Fizz' when called as fizzBuzz(3)", function () {
            var result = fizzBuzz(3);
            expect(result).toBe("Fizz");
        });
        it("should return 'Fizz' when called as fizzBuzz(9)", function () {
            var result = fizzBuzz(9);
            expect(result).toBe("Fizz");
        });
        it("should return 'Buzz' when called as fizzBuzz(5)", function () {
            var result = fizzBuzz(5);
            expect(result).toBe("Buzz");
        });
        it("should return 'Buzz' when called as fizzBuzz(25)", function () {
            var result = fizzBuzz(25);
            expect(result).toBe("Buzz");
        });
        it("should return 7 when called as fizzBuzz(7)", function () {
            var result = fizzBuzz(7);
            expect(result).toBe(7);
        });
        it("should return 'Please select a valid number!' when called as fizzBuzz('abc')", function () {
            var result = fizzBuzz("abc");
            expect(result).toBe("Please select a valid number!");
        });
        it("should return 'Please select a valid number!' when called as fizzBuzz()", function () {
            var result = fizzBuzz();
            expect(result).toBe("Please select a valid number!");
        });
        it("should return 'Please select a valid number!' when called as fizzBuzz( )", function () {
            var result = fizzBuzz( );
            expect(result).toBe("Please select a valid number!");
        });
    });
});