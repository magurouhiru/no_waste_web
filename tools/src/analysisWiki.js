"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const https = __importStar(require("node:https"));
const node_html_parser_1 = require("node-html-parser");
https.get('https://satisfactory.fandom.com/wiki/Adaptive_Control_Unit', (res) => {
    res.on("data", (data) => {
        const p = (0, node_html_parser_1.parse)(data);
        const f = p.getElementById("firstHeading");
        if (f) {
            console.log(f);
            console.log("-------------------------------------");
            console.log(f.toString());
            console.log("-------------------------------------");
            console.log(f.childNodes[1]);
            console.log("-------------------------------------");
            console.log(f.childNodes[1].toString());
            console.log("-------------------------------------");
            console.log(f.childNodes[1].text);
            console.log("-------------------------------------");
        }
        const ts = p.getElementsByTagName("table");
        if (ts.length > 0) {
            ts.forEach((t) => {
                if (t.rawAttrs === 'class="wikitable" style="text-align:center"') {
                    console.log("-------------------------------------");
                    console.log(t);
                }
            });
        }
    });
});
