function removerRepetitive(string) {
    let a = string.split('')
    let b = [...new Set(a)]
    let result = b.join('')
    return result
}

export default removerRepetitive