exports.div = function (x, y) {
    return `A divisão de ${x} para ${y} resulta em: ${x/y}`;
};

exports.mult = function (x, y) {
    return `A multiplicação entre ${x} e ${y} resulta em: ${x*y}`;
};

exports.a = (x) => {
    let A = 'a';
    return A.repeat(x);
    
};