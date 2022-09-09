"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardName = void 0;
function cardName(nome) {
    const nome2 = nome.split(' ');
    const nome3 = [];
    for (let i = 0; i < nome2.length; i++) {
        if (i === 0)
            nome3.push(nome2[i].toUpperCase());
        if (i !== 0 && i !== nome2.length - 1) {
            if (nome2[i].length >= 3) {
                nome3.push(nome2[i][0].toUpperCase());
            }
        }
        if (i === nome2.length - 1)
            nome3.push(nome2[i].toUpperCase());
    }
    return nome3.join(' ');
}
exports.cardName = cardName;
