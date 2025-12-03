/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiClient } from './_api_client.js';
import { BaseModule } from './_common.js';
import { Pager } from './pagers.js';
import * as types from './types.js';
export declare class Caches extends BaseModule {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /**
     * Lists cached contents.
     *
     * @param params - The parameters for the list request.
     * @return - A pager of cached contents.
     *
     * @example
     * ```ts
     * const cachedContents = await ai.caches.list({config: {'pageSize': 2}});
     * for await (const cachedContent of cachedContents) {
     *   console.log(cachedContent);
     * }
     * ```
     */
    list: (params?: types.ListCachedContentsParameters) => Promise<Pager<types.CachedContent>>;
    /**
     * Creates a cached contents resource.
     *
     * @remarks
     * Context caching is only supported for specific models. See [Gemini
     * Developer API reference](https://ai.google.dev/gemini-api/docs/caching?lang=node/context-cac)
     * and [Vertex AI reference](https://cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview#supported_models)
     * for more information.
     *
     * @param params - The parameters for the create request.
     * @return The created cached content.
     *
     * @example
     * ```ts
     * const contents = ...; // Initialize the content to cache.
     * const response = await ai.caches.create({
     *   model: 'gemini-2.0-flash-001',
     *   config: {
     *    'contents': contents,
     *    'displayName': 'test cache',
     *    'systemInstruction': 'What is the sum of the two pdfs?',
     *    'ttl': '86400s',
     *  }
     * });
     * ```
     */
    create(params: types.CreateCachedContentParameters): Promise<types.CachedContent>;
    /**
     * Gets cached content configurations.
     *
     * @param params - The parameters for the get request.
     * @return The cached content.
     *
     * @example
     * ```ts
     * await ai.caches.get({name: '...'}); // The server-generated resource name.
     * ```
     */
    get(params: types.GetCachedContentParameters): Promise<types.CachedContent>;
    /**
     * Deletes cached content.
     *
     * @param params - The parameters for the delete request.
     * @return The empty response returned by the API.
     *
     * @example
     * ```ts
     * await ai.caches.delete({name: '...'}); // The server-generated resource name.
     * ```
     */
    delete(params: types.DeleteCachedContentParameters): Promise<types.DeleteCachedContentResponse>;
    /**
     * Updates cached content configurations.
     *
     * @param params - The parameters for the update request.
     * @return The updated cached content.
     *
     * @example
     * ```ts
     * const response = await ai.caches.update({
     *   name: '...',  // The server-generated resource name.
     *   config: {'ttl': '7600s'}
     * });
     * ```
     */
    update(params: types.UpdateCachedContentParameters): Promise<types.CachedContent>;
    private listInternal;
}
