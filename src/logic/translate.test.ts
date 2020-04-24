import { rnaToProtein } from './translate'

describe('RNA to protein translation', () => {
	it('should refuse empty string', () => {
		expect(() => rnaToProtein('')).toThrow('Cannot convert empty string')
	})

	it('should refuse string of length not divisible by 3', () => {
		expect(() => rnaToProtein('AU')).toThrow('Input length must be divisible by 3')
	})

	it('should refuse string with invalid characters', () => {
		expect(() => rnaToProtein('AUGXXX')).toThrow('Invalid codon: XXX')
	})

	it('should refuse string not starting with AUG codon', () => {
		expect(() => rnaToProtein('GCC')).toThrow('Must start with AUG codon')
	})

	it('should refuse string having stop codon inside the string', () => {
		expect(() => rnaToProtein('AUGUAGGCC')).toThrow('Stop codon must be the last one')
	})

	it('should refuse string without stop codon', () => {
		expect(() => rnaToProtein('AUGGCC')).toThrow('No stop codon')
	})

	it('should convert valid data', () => {
		expect(rnaToProtein('AUGGCCAUGGCGCCCAGAACUGAGAUCAAUAGUACCCGUAUUAACGGGUGA')).toBe('MAMAPRTEINSTRING')
	})
})
