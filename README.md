# RNA to Protein Translator

See the http://rosalind.info/problems/prot/
for the fully detailed problem description.

The input consists of string of triplets made of letters
A, C, G, and U. These triplets are called **codons**. Each
codon encodes a specific amino acid. These amino acids
are abbreviated using single English letters
and represent protein string encoded by the
corresponding RNA codons.

The RNA input string must follow additional rules:
* It must start with AUG codon.
* It must end with one of UAA, UAG, or UGA codons.
* UAA, UAG, and UGA codons cannot be in the middle of RNA.

Sample input:<br />
`AUGGCCAUGGCGCCCAGAACUGAGAUCAAUAGUACCCGUAUUAACGGGUGA`<br />
translates into:<br />
`MAMAPRTEINSTRING`


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.

## Contact

Michal Molhanec
michal@molhanec.net
