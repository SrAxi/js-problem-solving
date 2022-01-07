function caseParser(str, outputCase) {
    const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1)

    const words = str
        .replace(/[-_]/, ' ')
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .split(' ')
        .map(x => x.toLowerCase())

    switch (outputCase) {
        case 'camel':
            const [first, ...rest] = words
            return `${first}${rest.map(x => capitalize(x)).join('')}`
        case 'pascal':
            return words.map(x => capitalize(x)).join('')
        case 'snake':
            return words.join('_')
        case 'kebab':
            return words.join('-')
        default:
            return str
    }
}


