/* ------------
     PCB.js

     Routines for the Operating System, NOT the host.

------------ */
var TSOS;
(function (TSOS) {
    var PCB = (function () {
        // acc is accumulator
        function PCB(PID, IR, program_counter, acc, X, Y, Z) {
            if (PID === void 0) {PID = -1;}
            if (IR === void 0) {IR = "00"}
            if (program_counter === void 0) {program_counter = 0;}
            if (acc === void 0) {acc = 0;}
            if (X === void 0) {X = 0;}
            if (Y === void 0) {Y = 0;}
            if (Z === void 0) {Z = 0;}
            
            this.PID = PID;
            this.IR = IR;
            this.program_counter = program_counter;
            this.acc = acc;
            this.X = X;
            this.Y = Y;
            this.Z = Z;
            
            /*
              I use a stack to store PIDs.
              This keeps track of which PIDs
              are available to the user, according
              to what's in Memory.
              *We don't have storage other than 
              *memory, so only one PID can be
              *stored at a time.
            */
            // Pops last PID off stack
            if (_PIDList.length >= _MaxProcesses){
                _PIDList.pop();
            }
            // Pushes next PID onto the stack of 
            // available PIDs
            _PIDList.push(this.PID);
            
            console.log("Available PIDs: " + _PIDList);
        }
        
        PCB.prototype.updatePCBTable = function () {
            document.getElementById("PID").innerHTML = this.PID;
            document.getElementById("IR").innerHTML = this.IR;
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