var app = new Vue({
    el: '#baseband-encoder',
    data: {
        bits: [],
        encodedBits1: [],
        encodedBits2: [],
        encodedBits3: [],
        encodedBits4: [],
        encodedBits5: [],
        encodedBits6: [],
        encodedBits7: [],
        status: '',
        numberOfBits: 8,
        validateBit: validateBit
    },
    created: function () {
        this.bits = getBitstream(this.numberOfBits);
    },
    methods: {
        encode: function(){
            this.encodedBits1 = getManchesterLevelEncoding(this.bits);
            this.encodedBits2 = getNonReturnZeroL(this.bits);
            this.encodedBits3 = getBiphaseMark(this.bits);
            this.encodedBits4 = getAlternateMarkInversion(this.bits);
            this.encodedBits5 = getNonReturnToZeroMark(this.bits);
            this.encodedBits6 = getMiller(this.bits);
            this.encodedBits7 = getNonReturnToZeroS(this.bits);
        }
    }
})

console.log('🍓🥑🍏☕🏆⚽✅🚦');