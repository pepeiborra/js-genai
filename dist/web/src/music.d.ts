/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Live music client.
 *
 * @experimental
 */
import { ApiClient } from './_api_client.js';
import { Auth } from './_auth.js';
import { WebSocket, WebSocketFactory } from './_websocket.js';
import * as types from './types.js';
/**
   LiveMusic class encapsulates the configuration for live music
   generation via Lyria Live models.

   @experimental
  */
export declare class LiveMusic {
    private readonly apiClient;
    private readonly auth;
    private readonly webSocketFactory;
    constructor(apiClient: ApiClient, auth: Auth, webSocketFactory: WebSocketFactory);
    /**
       Establishes a connection to the specified model and returns a
       LiveMusicSession object representing that connection.
  
       @experimental
  
       @remarks
  
       @param params - The parameters for establishing a connection to the model.
       @return A live session.
  
       @example
       ```ts
       let model = 'models/lyria-realtime-exp';
       const session = await ai.live.music.connect({
         model: model,
         callbacks: {
           onmessage: (e: MessageEvent) => {
             console.log('Received message from the server: %s\n', debug(e.data));
           },
           onerror: (e: ErrorEvent) => {
             console.log('Error occurred: %s\n', debug(e.error));
           },
           onclose: (e: CloseEvent) => {
             console.log('Connection closed.');
           },
         },
       });
       ```
      */
    connect(params: types.LiveMusicConnectParameters): Promise<LiveMusicSession>;
}
/**
   Represents a connection to the API.

   @experimental
  */
export declare class LiveMusicSession {
    readonly conn: WebSocket;
    private readonly apiClient;
    constructor(conn: WebSocket, apiClient: ApiClient);
    /**
      Sets inputs to steer music generation. Updates the session's current
      weighted prompts.
  
      @param params - Contains one property, `weightedPrompts`.
  
        - `weightedPrompts` to send to the model; weights are normalized to
          sum to 1.0.
  
      @experimental
     */
    setWeightedPrompts(params: types.LiveMusicSetWeightedPromptsParameters): Promise<void>;
    /**
      Sets a configuration to the model. Updates the session's current
      music generation config.
  
      @param params - Contains one property, `musicGenerationConfig`.
  
        - `musicGenerationConfig` to set in the model. Passing an empty or
      undefined config to the model will reset the config to defaults.
  
      @experimental
     */
    setMusicGenerationConfig(params: types.LiveMusicSetConfigParameters): Promise<void>;
    private sendPlaybackControl;
    /**
     * Start the music stream.
     *
     * @experimental
     */
    play(): void;
    /**
     * Temporarily halt the music stream. Use `play` to resume from the current
     * position.
     *
     * @experimental
     */
    pause(): void;
    /**
     * Stop the music stream and reset the state. Retains the current prompts
     * and config.
     *
     * @experimental
     */
    stop(): void;
    /**
     * Resets the context of the music generation without stopping it.
     * Retains the current prompts and config.
     *
     * @experimental
     */
    resetContext(): void;
    /**
       Terminates the WebSocket connection.
  
       @experimental
     */
    close(): void;
}
