// z3.loader.js
// ID: Z3-LOD-01

import z3Kernel from "./z3.kernel.js";
import z3Anker from "./z3.anker.js";

import M1 from "./z3.module.1.js";
import M2 from "./z3.module.2.js";
import M3 from "./z3.module.3.js";
import M4 from "./z3.module.4.js";

import E1 from "./z3.engine.1.js";
import E2 from "./z3.engine.2.js";
import E3 from "./z3.engine.3.js";
import E4 from "./z3.engine.4.js";

const z3Loader = {
    id: "Z3-LOD-01",

    start() {
        z3Kernel.init();
        z3Anker.init();
        console.log("Zero-Three Loader → aktiv");
        this.runStep();
    },

    runStep() {
        switch(z3Kernel.step) {
            case 1: M1.run(); E1.exec(); break;
            case 2: M2.run(); E2.exec(); break;
            case 3: M3.run(); E3.exec(); break;
            case 4: M4.run(); E4.exec(); break;
        }
        z3Kernel.next();
    }
};

export default z3Loader;

