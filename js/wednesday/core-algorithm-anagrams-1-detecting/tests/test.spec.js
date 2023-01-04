const {
    isAnagrams
} = require('../isAnagrams');

describe("isAnagrams", () => {

    it('test1', () => {
        expect(isAnagrams('melon', 'lemon')).toEqual(true);
    });

    it('test2', () => {
        expect(isAnagrams('melon', 'bike')).toEqual(false);
    });

    it('test3', () => {
        expect(isAnagrams('melon', 'melon')).toEqual(true);
    });
    
    it('test4', () => {
        expect(isAnagrams('abcde2', 'c2abed')).toEqual(true)
    });

    it('test5', () => {
        expect(isAnagrams('lemon', 'melon')).toEqual(true);
    });

    it('test6', () => {
        expect(isAnagrams('kilso', 'osilk')).toEqual(true);
    });

    it('test7', () => {
        expect(isAnagrams('MELON', 'lemon')).toEqual(true);
    });

    it('test8', () => {
        expect(isAnagrams('qwerty', 'tryewq')).toEqual(true);
    });

    it('test9', () => {
        expect(isAnagrams('1234', '2431')).toEqual(true);
    });

    it('test10', () => {
        expect(isAnagrams('1234556', '24315')).toEqual(false);
    });

    it('test11', () => {
        expect(isAnagrams('123455', '24315')).toEqual(false);
    });
      it("test12", () => {
    expect(isAnagrams("jjccc", "jjjcc")).toEqual(false);
    });

});
