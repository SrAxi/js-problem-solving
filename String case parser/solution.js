function caseParser(str, outputCase) {
    const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1)
    const joinCapitalize = arr => arr.map(x => capitalize(x)).join('')

    const words = str
        .replace(/[-_]/g, ' ')
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .split(' ')
        .map(x => x.toLowerCase())

    switch (outputCase) {
        case 'camel':
            const [first, ...rest] = words
            return `${first}${joinCapitalize(rest)}`
        case 'pascal':
            return joinCapitalize(words)
        case 'snake':
            return words.join('_')
        case 'kebab':
            return words.join('-')
        default:
            return str
    }
}
