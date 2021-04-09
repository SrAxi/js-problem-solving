function caseParser(str, outputCase) {
    const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1)

    const words = str
        .replace(/[-_]/, ' ')
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .split(' ')
        .map(x => x.toLowerCase())

    switch (outputCase) {
        case 'camel':
            return `${words[0]}${capitalize(words[1])}`
        case 'pascal':
            return `${capitalize(words[0])}${capitalize(words[1])}`
        case 'snake':
            return `${words[0]}_${words[1]}`
        case 'kebab':
            return `${words[0]}-${words[1]}`
        default:
            return str
    }
}


