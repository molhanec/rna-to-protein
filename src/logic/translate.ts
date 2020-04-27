interface ValidProtein {
	kind: 'valid'
	protein: string
}

interface TranslationError {
	kind: 'empty' | 'notTriplet' | 'invalidStart' | 'invalidStop' | 'stopInside' | 'invalidCodon'
}

export type TranslationResult = ValidProtein | TranslationError

export const rnaToProtein = (rna: string): TranslationResult => {
	if (rna.length === 0) return { kind: 'empty' }
	if (rna.length % 3) return { kind: 'notTriplet' }

	if (rna.substring(0, 3) !== startCodon) return { kind: 'invalidStart' }

	let protein = ''
	for (let i = 0; i < rna.length; i += 3) {
		const codon = rna.substring(i, i + 3)
		if (stopCodons.includes(codon)) {
			if (i !== rna.length - 3) return { kind: 'stopInside' }
			return { kind: 'valid', protein }
		}
		if (translationTable[codon]) protein += translationTable[codon]
		else return { kind: 'invalidCodon' }
	}

	return { kind: 'invalidStop' }
}

const startCodon = 'AUG'
const stopCodons = [ 'UAA', 'UAG', 'UGA' ]

const translationTable: { [key: string]: string } = {
	UUU: 'F',
	CUU: 'L',
	AUU: 'I',
	GUU: 'V',
	UUC: 'F',
	CUC: 'L',
	AUC: 'I',
	GUC: 'V',
	UUA: 'L',
	CUA: 'L',
	AUA: 'I',
	GUA: 'V',
	UUG: 'L',
	CUG: 'L',
	AUG: 'M',
	GUG: 'V',
	UCU: 'S',
	CCU: 'P',
	ACU: 'T',
	GCU: 'A',
	UCC: 'S',
	CCC: 'P',
	ACC: 'T',
	GCC: 'A',
	UCA: 'S',
	CCA: 'P',
	ACA: 'T',
	GCA: 'A',
	UCG: 'S',
	CCG: 'P',
	ACG: 'T',
	GCG: 'A',
	UAU: 'Y',
	CAU: 'H',
	AAU: 'N',
	GAU: 'D',
	UAC: 'Y',
	CAC: 'H',
	AAC: 'N',
	GAC: 'D',
	CAA: 'Q',
	AAA: 'K',
	GAA: 'E',
	CAG: 'Q',
	AAG: 'K',
	GAG: 'E',
	UGU: 'C',
	CGU: 'R',
	AGU: 'S',
	GGU: 'G',
	UGC: 'C',
	CGC: 'R',
	AGC: 'S',
	GGC: 'G',
	CGA: 'R',
	AGA: 'R',
	GGA: 'G',
	UGG: 'W',
	CGG: 'R',
	AGG: 'R',
	GGG: 'G'
}
