/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { WebSocket, WebSocketCallbacks, WebSocketFactory } from '../_websocket.js';
export declare class NodeWebSocketFactory implements WebSocketFactory {
    create(url: string, headers: Record<string, string>, callbacks: WebSocketCallbacks): WebSocket;
}
export declare class NodeWebSocket implements WebSocket {
    private readonly url;
    private readonly headers;
    private readonly callbacks;
    private ws?;
    constructor(url: string, headers: Record<string, string>, callbacks: WebSocketCallbacks);
    connect(): void;
    send(message: string): void;
    close(): void;
}
