"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
const stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
const zod_1 = require("zod");
const web_extractor_js_1 = require("./web-extractor.js");
// Create MCP server
const server = new mcp_js_1.McpServer({
    name: "WebExtractor",
    version: "0.1.0"
});
// Register the extract_content tool
server.tool("extract_content", {
    url: zod_1.z.string().url("Must provide a valid URL")
}, async ({ url }) => {
    try {
        const content = await (0, web_extractor_js_1.extractWebContent)(url);
        return {
            content: [{ type: "text", text: content }]
        };
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return {
            content: [{ type: "text", text: `Error extracting content: ${errorMessage}` }],
            isError: true
        };
    }
});
// Start the server with stdio transport
async function main() {
    const transport = new stdio_js_1.StdioServerTransport();
    console.error("Web Extractor MCP Server starting...");
    try {
        await server.connect(transport);
        console.error("Web Extractor MCP Server running");
    }
    catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
}
main();
