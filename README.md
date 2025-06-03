---

# a1hul-mcp

**MCP server for extracting content from web pages**

`a1hul-mcp` is a CLI utility designed to run a lightweight MCP (Model Context Protocol) server that extracts structured content from HTML web pages using `cheerio` and schema validation via `zod`.

## 🚀 Features

* Extracts meaningful content from webpages
* Validates extracted data using Zod schemas
* Built using the official `@modelcontextprotocol/sdk`
* CLI-friendly and easy to integrate into existing workflows

## 📦 Installation

You can run the package directly with `npx`:

```bash
npx a1hul-mcp
```

Or install it globally:

```bash
npm install -g a1hul-mcp
```

Then run:

```bash
a1hul-mcp
```

## 🛠 Usage

Once started, the CLI will initiate the MCP server and begin listening for model context extraction tasks. You can configure and connect it to tools that support the MCP protocol.

> **Note**: The server expects valid MCP-compatible requests and is intended for use in content analysis pipelines or developer automation flows.

## 📁 Project Structure

* **dist/index.js** – Main entry point compiled from TypeScript
* **cheerio** – Used to parse and traverse HTML
* **zod** – Ensures the extracted content adheres to a strict schema
* **@modelcontextprotocol/sdk** – Integrates MCP server capabilities

## 🧪 Scripts

Build the project:

```bash
npm run build
```

Start the server (after build):

```bash
npm start
```

## 👤 Author

**Athul S. Nair**
GitHub: [@athulnair](https://github.com/Athulsn10)

## 📄 License

This project is licensed under the ISC License.

---
