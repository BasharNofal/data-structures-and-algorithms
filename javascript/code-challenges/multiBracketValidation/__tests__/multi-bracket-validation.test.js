'use strict';

const multiBracketValidation = require('../multi-bracket-validation.js');

describe('================MULTI BRACKET VALIDATION================', () => {
    it('Should return true if brackets are balanced, and false if they are not', () => {
        expect(multiBracketValidation('((){[fsdfa]})')).toEqual(true);
        expect(multiBracketValidation('({)]')).toEqual(false);
        expect(multiBracketValidation('{}{Code}[Fellows](())')).toEqual(true);
        expect(multiBracketValidation('{(})')).toEqual(false);
    });
});