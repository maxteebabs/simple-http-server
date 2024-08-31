const v8 = require('v8');

function triggerMajorGC() {
    const memoryHog = [];
    
    // Fill the array with large objects
    for (let i = 0; i < 1e6; i++) {
        memoryHog.push({ data: new Array(1e3).fill('*') });
    }

    console.log('Allocated large amount of memory.');

    if (global.gc) {
        console.log('Forcing garbage collection...');
        global.gc();
    } else {
        console.log('Garbage collection is not exposed. Run Node.js with --expose-gc to allow manual GC.');
    }

    memoryHog.length = 0;
    console.log('Memory released. Waiting for garbage collection...');
}

// Lets track the stats before and after GC
function printHeapStats() {
    const stats = v8.getHeapStatistics();
    console.log('Heap Stats:', stats);
}

printHeapStats();
triggerMajorGC();
setTimeout(printHeapStatistics, 5000);
