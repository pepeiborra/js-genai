/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Client as McpClient } from '@modelcontextprotocol/sdk/client/index.js';
import { CallableTool, CallableToolConfig, FunctionCall, Part, Tool, ToolListUnion } from '../types.js';
export declare const MCP_LABEL = "mcp_used/unknown";
export declare function hasMcpToolUsage(tools: ToolListUnion): boolean;
export declare function setMcpUsageHeader(headers: Record<string, string>): void;
/**
 * McpCallableTool can be used for model inference and invoking MCP clients with
 * given function call arguments.
 *
 * @experimental Built-in MCP support is an experimental feature, may change in future
 * versions.
 */
export declare class McpCallableTool implements CallableTool {
    private readonly mcpClients;
    private mcpTools;
    private functionNameToMcpClient;
    private readonly config;
    private constructor();
    /**
     * Creates a McpCallableTool.
     */
    static create(mcpClients: McpClient[], config: CallableToolConfig): McpCallableTool;
    /**
     * Validates the function names are not duplicate and initialize the function
     * name to MCP client mapping.
     *
     * @throws {Error} if the MCP tools from the MCP clients have duplicate tool
     *     names.
     */
    initialize(): Promise<void>;
    tool(): Promise<Tool>;
    callTool(functionCalls: FunctionCall[]): Promise<Part[]>;
}
/**
 * Creates a McpCallableTool from MCP clients and an optional config.
 *
 * The callable tool can invoke the MCP clients with given function call
 * arguments. (often for automatic function calling).
 * Use the config to modify tool parameters such as behavior.
 *
 * @experimental Built-in MCP support is an experimental feature, may change in future
 * versions.
 */
export declare function mcpToTool(...args: [...McpClient[], CallableToolConfig | McpClient]): CallableTool;
/**
 * Sets the MCP tool usage flag from calling mcpToTool. This is used for
 * telemetry.
 */
export declare function setMcpToolUsageFromMcpToTool(mcpToolUsage: boolean): void;
