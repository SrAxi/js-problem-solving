const { isNoteFromMagazine, testCollections } = require('./is-note-from-magazine');

describe('isNoteFromMagazine', () => {
    it('should be able to figure if the given note has been built from the given magazine', () => {
        testCollections.forEach(({ magazine, note, result }) => {
            expect(isNoteFromMagazine(magazine, note)).toBe(result);
        })
    });
});
