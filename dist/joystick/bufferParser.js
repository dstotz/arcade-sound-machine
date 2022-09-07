"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseBuffer = (buffer, buttonMapping) => {
    for (const trigger in buttonMapping) {
        const { bufferIndex, val } = buttonMapping[trigger];
        if (buffer[bufferIndex] === val) {
            return {
                trigger,
                mapping: buttonMapping[trigger],
            };
        }
    }
};
exports.default = parseBuffer;
//# sourceMappingURL=bufferParser.js.map