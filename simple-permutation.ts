export class SimplePermutation {
    public static print(dict: any[], prefix: string = '') {
        if (dict.length === 0) {
            console.log(prefix);
            return;
        }

        for (let i = 0; i < dict.length; i++) {
            const current = dict[i];
            const partialDict = dict.map(x => x);
            partialDict.splice(i, 1);
            this.print(partialDict, prefix + current.toString());
        }
    }
}