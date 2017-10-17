/* ------------
     PCB.js

     Routines for the Operating System, NOT the host.

------------ */
var TSOS;
(function (TSOS) {
    var PCB = (function () {
        // acc is accumulator
        function PCB(PID, program_counter, acc, X, Y, Z) {
            if (PID === void 0) {PID = -1;}
            if (program_counter === void 0) {program_counter = 0;}
            if (acc === void 0) {acc = 0;}
            if (X === void 0) {X = 0;}
            if (Y === void 0) {Y = 0;}
            if (Z === void 0) {Z = 0;}
            
            this.PID = PID;
            this.program_counter = program_counter;
            this.acc = acc;
            this.X = X;
            this.Y = Y;
            this.Z = Z;
        };
        
        PCB.prototype.updatePCBTable = function () {
            document.getElementById("PID").innerHTML = this.PID;
            document.getElementById("PC").innerHTML = this.program_counter;
            document.getElementById("acc").innerHTML = this.acc;
            document.getElementById("X").innerHTML = this.X;
            document.getElementById("Y").innerHTML = this.Y;
            document.getElementById("Z").innerHTML = this.Z;
        };

        return PCB;
    })();
    TSOS.PCB = PCB;
})(TSOS || (TSOS = {}));