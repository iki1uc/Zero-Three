// z3.zero.js
// ID: Z3-0CORE-01

const ZeroThreeZero = {
    id: "Z3-0CORE-01",
    zero: 0,
    one: 1,
    activeZero: "Z3-0",
    activeOne: "Z3-1",

    getZero() {
        return this.activeZero;
    },

    getOne() {
        return this.activeOne;
    },

    setZero(id) {
        this.activeZero = id;
    },

    setOne(id) {
        this.activeOne = id;
    }
};

export default ZeroThreeZero;

