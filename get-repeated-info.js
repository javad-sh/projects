function getRepeatedInfo(input) {
    let a = input.toString()
    let b = a.split('')
    a1 = b.filter(item => item == 1).length
    a2 = b.filter(item => item == 2).length*2
    a3 = b.filter(item => item == 3).length*3
    a4 = b.filter(item => item == 4).length*4
    a5 = b.filter(item => item == 5).length*5
    a6 = b.filter(item => item == 6).length*6
    a7 = b.filter(item => item == 7).length*7
    a8 = b.filter(item => item == 8).length*8
    a9 = b.filter(item => item == 9).length*9

    let d = {}

    a1 !==0 ? d[1] = Array(a1).fill(1).join(''): null
    a2 !==0 ? d[2] = Array(a2).fill(2).join(''): null
    a3 !==0 ? d[3] = Array(a3).fill(3).join(''): null
    a4 !==0 ? d[4] = Array(a4).fill(4).join(''): null
    a5 !==0 ? d[5] = Array(a5).fill(5).join(''): null
    a6 !==0 ? d[6] = Array(a6).fill(6).join(''): null
    a7 !==0 ? d[7] = Array(a7).fill(7).join(''): null
    a8 !==0 ? d[8] = Array(a8).fill(8).join(''): null
    a9 !==0 ? d[9] = Array(a9).fill(9).join(''): null

    return d
}
export default getRepeatedInfo