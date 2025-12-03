/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { WebSocketCallbacks, WebSocketFactory, WebSocket as Ws } from '../_websocket.js';
export declare class BrowserWebSocketFactory implements WebSocketFactory {
    create(url: string, headers: Record<string, string>, callbacks: WebSocketCallbacks): Ws;
}
export declare class BrowserWebSocket implements Ws {
    private readonly url;
    private readonly headers;
    private readonly callbacks;
    private ws?;
    constructor(url: string, headers: Record<string, string>, callbacks: WebSocketCallbacks);
    connect(): void;
    send(message: string): void;
    close(): void;
}
