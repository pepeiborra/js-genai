/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiClient } from '../_api_client.js';
import { Batches } from '../batches.js';
import { Caches } from '../caches.js';
import { Chats } from '../chats.js';
import { GoogleGenAIOptions } from '../client.js';
import { Files } from '../files.js';
import { FileSearchStores } from '../filesearchstores.js';
import { Live } from '../live.js';
import { Models } from '../models.js';
import { Operations } from '../operations.js';
import { Tokens } from '../tokens.js';
import { Tunings } from '../tunings.js';
/**
 * The Google GenAI SDK.
 *
 * @remarks
 * Provides access to the GenAI features through either the {@link
 * https://cloud.google.com/vertex-ai/docs/reference/rest | Gemini API} or
 * the {@link https://cloud.google.com/vertex-ai/docs/reference/rest | Vertex AI
 * API}.
 *
 * The {@link GoogleGenAIOptions.vertexai} value determines which of the API
 * services to use.
 *
 * When using the Gemini API, a {@link GoogleGenAIOptions.apiKey} must also be
 * set. When using Vertex AI, currently only {@link GoogleGenAIOptions.apiKey}
 * is supported via Express mode. {@link GoogleGenAIOptions.project} and {@link
 * GoogleGenAIOptions.location} should not be set.
 *
 * @example
 * Initializing the SDK for using the Gemini API:
 * ```ts
 * import {GoogleGenAI} from '@google/genai';
 * const ai = new GoogleGenAI({apiKey: 'GEMINI_API_KEY'});
 * ```
 *
 * @example
 * Initializing the SDK for using the Vertex AI API:
 * ```ts
 * import {GoogleGenAI} from '@google/genai';
 * const ai = new GoogleGenAI({
 *   vertexai: true,
 *   project: 'PROJECT_ID',
 *   location: 'PROJECT_LOCATION'
 * });
 * ```
 *
 */
export declare class GoogleGenAI {
    protected readonly apiClient: ApiClient;
    private readonly apiKey?;
    readonly vertexai: boolean;
    private readonly apiVersion?;
    private readonly httpOptions?;
    readonly models: Models;
    readonly live: Live;
    readonly batches: Batches;
    readonly chats: Chats;
    readonly caches: Caches;
    readonly files: Files;
    readonly operations: Operations;
    readonly authTokens: Tokens;
    readonly tunings: Tunings;
    readonly fileSearchStores: FileSearchStores;
    constructor(options: GoogleGenAIOptions);
}
