/* ------------
     PCB.js

     Routines for the Operating System, NOT the host.

------------ */
var TSOS;
(function (TSOS) {
    var PCB = (function () {
        // acc is accumulator
        function PCB(PID, IR, program_counter, acc, X, Y, Z, base, limit, segment, active, loc) {
            if (PID === void 0) {PID = -1;}
            if (IR === void 0) {IR = "00"}
            if (program_counter === void 0) {program_counter = 0;}
            if (acc === void 0) {acc = 0;}
            if (X === void 0) {X = 0;}
            if (Y === void 0) {Y = 0;}
            if (Z === void 0) {Z = 0;}
            var baseLimit = _MemoryManager.getBaseLimit(_MemoryManager.getMemSegment());
            if (base === void 0) {base = baseLimit[0];}
            if (limit === void 0) {limit = baseLimit[1];}
            if (segment === void 0) {segment = _segNumber;}
            if (active == void 0){active = 'Waiting';}
            if (loc == void 0){loc = 'Memory';}
            
            this.PID = PID;
            this.IR = IR;
            this.program_counter = program_counter;
            this.acc = acc;
            this.X = X;
            this.Y = Y;
            this.Z = Z;
            
            this.base = base;
            this.limit = limit;
            this.active = active; // I realize this should be status, after it's working
            // |-> TODO: Changing this should prob be a PCB function...I will handle that at some point
            if (loc === 'Memory'){
                this.segment = segment;
            } else {
                this.segment = undefined;
            }
            this.loc = loc;
            
            /*
              I use a stack to store PIDs.
              This keeps track of which PIDs
              are available to the user, according
              to what's in Memory.
              *We don't have storage other than 
              *memory, so only one PID can be
              *stored at a time.
            */
            /* Old not needed
            // Pops last PID off stack
            //if (_readyQueue.length >= _MaxProcesses){
            //    _readyQueue.pop();
            //}
            // Pushes next PID onto the stack of 
            // available PIDs
            //_readyQueue.push(this.PID);
            //_residentQueue.push(_PCB);
            
            */
            
            // Write to next available segment.
            // Validation for segment being full is in
            // the shell load function in shell.js
            //_readyQueue[_MemoryManager.getMemSegment()] = this.PID;
            
        }
        
        PCB.prototype.updatePCBTable = function () {
            document.getElementById("PID").innerHTML = this.PID;
            document.getElementById("IR").innerHTML = this.IR;
            document.getElementById("PC").innerHTML = this.program_counter;
            document.getElementById("acc").innerHTML = this.acc;
            document.getElementById("X").innerHTML = this.X;
            document.getElementById("Y").innerHTML = this.Y;
            document.getElementById("Z").innerHTML = this.Z;
            document.getElementById("PCBloc").innerHTML = this.loc;
        };

        return PCB;
    })();
    TSOS.PCB = PCB;
})(TSOS || (TSOS = {}));