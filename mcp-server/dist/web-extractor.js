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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractWebContent = extractWebContent;
const cheerio = __importStar(require("cheerio"));
async function extractWebContent(url) {
    try {
        if (!url.match(/^(https?:\/\/)/i)) {
            throw new Error('Invalid URL');
        }
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch content');
        }
        const html = await response.text();
        const $ = cheerio.load(html);
        const title = $('title').text().trim();
        $('script, style, nav, header, footer, iframe, noscript').remove();
        let mainContent = $('main, article, [role="main"], .content, #content');
        if (mainContent.length === 0) {
            mainContent = $('body');
        }
        const text = mainContent.text();
        return `Title: ${title}\n\n${text}`;
    }
    catch (error) {
        throw new Error('Failed to extract');
    }
}
