/* ------------
   Globals.ts

   Global CONSTANTS and _Variables.
   (Global over both the OS and Hardware Simulation / Host.)

   This code references page numbers in the text book:
   Operating System Concepts 8th edition by Silberschatz, Galvin, and Gagne.  ISBN 978-0-470-12872-5
   ------------ */
//
// Global CONSTANTS (TypeScript 1.5 introduced const. Very cool.)
//
var APP_NAME = "Cube OS"; // 'cause Bob and I were at a loss for a better name.
var APP_VERSION = "1.007"; // What did you expect?
var CPU_CLOCK_INTERVAL = 100; // This is in ms (milliseconds) so 1000 = 1 second.
var TIMER_IRQ = 0; // Pages 23 (timer), 9 (interrupts), and 561 (interrupt priority).
// NOTE: The timer is different from hardware/host clock pulses. Don't confuse these.
var KEYBOARD_IRQ = 1;
//
// Global Variables
// TODO: Make a global object and use that instead of the "_" naming convention in the global namespace.
//
var _CPU; // Utilize TypeScript's type annotation system to ensure that _CPU is an instance of the Cpu class.

// Initializes memory instances
var _Memory; // Instance of Memory class for Main memory
var _MemoryManager; // Instance of memory manager

var _PCB; // Instance of a Process Control Block (PCB Class)
var residentQueue; // Stores the PCBs created
var _resQTable = [];
var _segNumber = 0; // Number for which segment is next to put code in

var _PID = 0; // Current PCB ID
var _MaxProcesses = 3;

var _isRun = false; // Boolean for single run (true) or runall (false)

// For scheduling
var _scheduler;
var _readyQueue;
var _waitingQueue;
var _progCounter = 0;
var _quantum = 6;

var _DefaultMemorySize = 768; // Sets system memory size
var _OSclock = 0; // Page 23.
var _Mode = 0; // (currently unused)  0 = Kernel Mode, 1 = User Mode.  See page 21.
var _Canvas; // Initialized in Control.hostInit().
var _DrawingContext; // = _Canvas.getContext("2d");  // Assigned here for type safety, but re-initialized in Control.hostInit() for OCD and logic.
var _DefaultFontFamily = "sans"; // Ignored, I think. The was just a place-holder in 2008, but the HTML canvas may have use for it.
var _DefaultFontSize = 13;
var _FontHeightMargin = 4; // Additional space added to font size when advancing a line.
var _Trace = true; // Default the OS trace to be on.
// The OS Kernel and its queues.
var _Kernel;
var _KernelInterruptQueue; // Initializing this to null (which I would normally do) would then require us to specify the 'any' type, as below.
var _KernelInputQueue = null; // Is this better? I don't like uninitialized variables. But I also don't like using the type specifier 'any'
var _KernelBuffers = null; // when clearly 'any' is not what we want. There is likely a better way, but what is it?
// File system 
var _hdd;
var _currHDD = 0;
var _availableHDD; // TODO: For possible future enhancements
var _blockSize = 64; // TODO: Should be a attribute of hdd
var _fileNameSize = 60; // TODO: Should be a attribute of hdd
var _emptyBlock = [];
for (var l = 0; l < _blockSize; l++){
    _emptyBlock.push('00');
}
// Standard input and output
var _StdIn; // Same "to null or not to null" issue as above.
var _StdOut;
// UI
var _Console;
var _OsShell;
// At least this OS is not trying to kill you. (Yet.)
var _SarcasticMode = false;
// Global Device Driver Objects - page 12
var _krnKeyboardDriver; //  = null;
var _krnfsDDDriver; // = null
var _hardwareClockID = null;
// For testing (and enrichment)...
var Glados = null; // This is the function Glados() in glados.js on Labouseur.com.
var _GLaDOS = null; // If the above is linked in, this is the instantiated instance of Glados.
var _Status = 'None'; // This is the status set by user
var onDocumentLoad = function () {
    TSOS.Control.hostInit();
};
