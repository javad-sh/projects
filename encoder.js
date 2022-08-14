function encoder(b) {
    let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b"];
    let a = b.split('')
    let c = a[a.length-1]
    let e = a.pop()
    let g = a.unshift(c)
    let element = '';
    for (let i = 0; i < a.length; i++) {
        element = element+ letters[letters.indexOf(a[i])+1];
    }
    return(element)
}