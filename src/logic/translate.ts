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

const startCodon = 'AUG'
const stopCodons = [ 'UAA', 'UAG', 'UGA' ]

export const rnaToProtein = (rna: string): string => {
	if (rna.length === 0) throw new Error('Cannot convert empty string')
	if (rna.length % 3) throw new Error('Input length must be divisible by 3')

	if (rna.substring(0, 3) !== startCodon) throw new Error('Must start with AUG codon')

	let protein = ''
	for (let i = 0; i < rna.length; i += 3) {
		const codon = rna.substring(i, i + 3)
		if (stopCodons.includes(codon)) {
			if (i !== rna.length - 3) throw new Error('Stop codon must be the last one')
			return protein
		}
		if (translationTable[codon]) protein += translationTable[codon]
		else throw new Error(`Invalid codon: ${codon}`)
	}

	throw new Error('No stop codon')
}
