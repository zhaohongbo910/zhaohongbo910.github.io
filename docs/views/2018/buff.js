// //1: 得到十六进制的数
// var buffer = Buffer.from('小布丁');
// console.log(buffer);  //得到十六进制的数:  e5 b0 8f e5 b8 83 e4 b8 81

// //2: 将十六进制转换成十进制
// let decimalism = []
// for (let index = 0; index < buffer.length; index++) {
//     let element = buffer[index];
//     decimalism.push(element)
// }
// console.log("decimalism", decimalism);
// // [229, 176, 143, 229, 184, 131, 228, 184, 129]

// //3: 将十进制转换成二进制
// let binary = []
// for (let index = 0; index < decimalism.length; index++) {
//     let element = (decimalism[index]).toString(2);
//     binary.push(element)
// }
// console.log("binary", binary);
// // [11100101, 10110000, 10001111, 11100101, 10111000, 10000011, 11100100, 10111000, 10000001]
// let binaryNumber = '111001011011000010001111111001011011100010000011111001001011100010000001'
// console.log("binaryNumber", binaryNumber.length) // 72 

// //4. 将 8位 字节转换成 6位 字节, 之后在前面补两个0 形成一个新的8位字节
// let splitBinaryNumber = [];
// for (let index = 0; index < binaryNumber.length; index++) {
//     if (index % 6 == 0) {
//         let str = binaryNumber.substr(index, 6)
//         splitBinaryNumber.push(`00${str}`)
//     }
// }
// console.log("splitBinaryNumber", splitBinaryNumber)
// // ['00111001', '00011011', '00000010', '00001111', '00111001', '00011011', '00100010', '00000011', '00111001', '00001011', '00100010', '00000001' ]

// //5: 将每8位对应的字符进行获取
// var base64= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P',
//         'Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f',
//         'g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v',
//         'w','x','y','z','0','1','2','3','4','5','6','7','8','9','+','/',];
// let base64Code = ''
// for (let index = 0; index < splitBinaryNumber.length; index++) {
//     let element = Number(splitBinaryNumber[index])
//     let baseIndex =  parseInt(element, 2)
//     base64Code += base64[baseIndex]
    
// }

// console.log("base64Code", base64Code) // 5bCP5biD5LiB // 通过解密 出 为 小布丁


let buf = Buffer.alloc(5);
buf[3] = 300
console.log("buf", buf[3])

let bufe = Buffer.allocUnsafe(10)
console.log("bufe", bufe[4])




