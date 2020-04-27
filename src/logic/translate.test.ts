import { rnaToProtein } from './translate'

describe('RNA to protein translation', () => {
	it('should refuse empty string', () => {
		expect(rnaToProtein('')).toStrictEqual({ kind: 'empty' })
	})

	it('should refuse string of length not divisible by 3', () => {
		expect(rnaToProtein('AU')).toStrictEqual({ kind: 'notTriplet' })
	})

	it('should refuse string with invalid characters', () => {
		expect(rnaToProtein('AUGXXX')).toStrictEqual({ kind: 'invalidCodon' })
	})

	it('should refuse string not starting with AUG codon', () => {
		expect(rnaToProtein('GCC')).toStrictEqual({ kind: 'invalidStart' })
	})

	it('should refuse string having stop codon inside the string', () => {
		expect(rnaToProtein('AUGUAGGCC')).toStrictEqual({ kind: 'stopInside' })
	})

	it('should refuse string without stop codon', () => {
		expect(rnaToProtein('AUGGCC')).toStrictEqual({ kind: 'invalidStop' })
	})

	it('should convert valid data', () => {
		expect(rnaToProtein('AUGGCCAUGGCGCCCAGAACUGAGAUCAAUAGUACCCGUAUUAACGGGUGA'))
			.toStrictEqual({ kind: 'valid', protein: 'MAMAPRTEINSTRING' })
	})
})
