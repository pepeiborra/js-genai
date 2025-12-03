/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiClient } from './_api_client.js';
import { BaseModule } from './_common.js';
import { Pager } from './pagers.js';
import * as types from './types.js';
export declare class Documents extends BaseModule {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /**
     * Lists documents.
     *
     * @param params - The parameters for the list request.
     * @return - A pager of documents.
     *
     * @example
     * ```ts
     * const documents = await ai.documents.list({parent:'rag_store_name', config: {'pageSize': 2}});
     * for await (const document of documents) {
     *   console.log(document);
     * }
     * ```
     */
    list: (params: types.ListDocumentsParameters) => Promise<Pager<types.Document>>;
    /**
     * Gets a Document.
     *
     * @param params - The parameters for getting a document.
     * @return Document.
     */
    get(params: types.GetDocumentParameters): Promise<types.Document>;
    /**
     * Deletes a Document.
     *
     * @param params - The parameters for deleting a document.
     */
    delete(params: types.DeleteDocumentParameters): Promise<void>;
    private listInternal;
}
