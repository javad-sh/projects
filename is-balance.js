function isBalance(input) {
    let a = input.split('')
    let b = a.filter(item => item == '}').length
    let b1 = a.filter(item => item == '{').length
    let c = a.filter(item => item == ')').length
    let c1 = a.filter(item => item == '(').length
    let d = a.filter(item => item == '[').length
    let d1= a.filter(item => item == ']').length
    if (b!==b1 || c!==c1 || d!==d1) {
        return 'input is false'
    }else{
        return 'input is true'
    }
}
export default isBalance