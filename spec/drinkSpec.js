describe("My whatCanIDrink function", function () {

    beforeEach(function () {
        drink = new whatCanIDrink;
    });

    describe("Checks age", function () {
        it("should exist", function () {
            expect(whatCanIDrink).toBeDefined();
        });
        it("should return 'Sorry. I can't tell what drink because that age is incorrect!' when called as whatCanIDrink(-1)", function () {
            var result = whatCanIDrink(-1);
            expect(result).toBe("Sorry. I can't tell what drink because that age is incorrect!");
        });
        it("should return 'Drink Toddy' when called as whatCanIDrink(13)", function () {
            var result = whatCanIDrink(13);
            expect(result).toBe("Drink Toddy");
        });
        it("should return 'Drink Coke' when called as whatCanIDrink(17)", function () {
            var result = whatCanIDrink(17);
            expect(result).toBe("Drink Coke");
        });
        it("should return 'Drink Beer' when called as whatCanIDrink(18)", function () {
            var result = whatCanIDrink(18);
            expect(result).toBe("Drink Beer");
        });
        it("should return 'Drink Beer' when called as whatCanIDrink(20)", function () {
            var result = whatCanIDrink(20);
            expect(result).toBe("Drink Beer");
        });
        it("should return 'Drink Whiskey' when called as whatCanIDrink(21)", function () {
            var result = whatCanIDrink(21);
            expect(result).toBe("Drink Whiskey");
        });
        it("should return 'Drink Whiskey' when called as whatCanIDrink(129)", function () {
            var result = whatCanIDrink(129);
            expect(result).toBe("Drink Whiskey");
        });
        it("should return 'Sorry. I can't tell what drink because that age is incorrect!' when called as whatCanIDrink(130)", function () {
            var result = whatCanIDrink(130);
            expect(result).toBe("Sorry. I can't tell what drink because that age is incorrect!");
        });
        it("should contain the word 'Drink' when called as whatCanIDrink(10)", function () {
            var result = whatCanIDrink(10).indexOf("Drink");
            expect(result).not.toEqual(-1);
        });
    });
});