(()=>{const e=new Float32Array(1024);class r extends AudioWorkletProcessor{constructor(){super()}process(r,s,t){const o=r[0][0];for(let r=0;r<o.length;r++)e[r]=o[r];return this.port.postMessage({buffer:e,length:o.length}),!0}}registerProcessor("waveformCapture",r)})();
//# sourceMappingURL=audioWorklet.js.map