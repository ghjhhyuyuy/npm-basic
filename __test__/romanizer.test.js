import {transform} from "../src/romanizer";

describe('romanizer', () => {
    it('should return x when input 10', () => {
        const formatted = transform(10);
        expect(formatted).toEqual("X");
    });
});