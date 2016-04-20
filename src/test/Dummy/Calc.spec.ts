
import {expect} from "chai";
import {Calc} from "../../main/Dummy/Calc";

describe("Calc", () => {
    describe("add", () => {
        it("get sum of two numbers", () => {
            expect(Calc.add(2, 3)).to.equal(5);
        });
    });

    describe("subtract", () => {
        it("get difference of two numbers", () => {
            expect(Calc.subtract(2, 3)).to.equal(-1);
        });
    });
});
