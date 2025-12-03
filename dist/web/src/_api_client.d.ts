/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Auth } from './_auth.js';
import { Downloader } from './_downloader.js';
import { Uploader } from './_uploader.js';
import * as types from './types.js';
export declare const GOOGLE_API_CLIENT_HEADER = "x-goog-api-client";
export declare const SDK_VERSION = "1.30.0";
/**
 * Options for initializing the ApiClient. The ApiClient uses the parameters
 * for authentication purposes as well as to infer if SDK should send the
 * request to Vertex AI or Gemini API.
 */
export interface ApiClientInitOptions {
    /**
     * The object used for adding authentication headers to API requests.
     */
    auth: Auth;
    /**
     * The uploader to use for uploading files. This field is required for
     * creating a client, will be set through the Node_client or Web_client.
     */
    uploader: Uploader;
    /**
     * Optional. The downloader to use for downloading files. This field is
     * required for creating a client, will be set through the Node_client or
     * Web_client.
     */
    downloader: Downloader;
    /**
     * Optional. The Google Cloud project ID for Vertex AI users.
     * It is not the numeric project name.
     * If not provided, SDK will try to resolve it from runtime environment.
     */
    project?: string;
    /**
     * Optional. The Google Cloud project location for Vertex AI users.
     * If not provided, SDK will try to resolve it from runtime environment.
     */
    location?: string;
    /**
     * The API Key. This is required for Gemini API users.
     */
    apiKey?: string;
    /**
     * Optional. Set to true if you intend to call Vertex AI endpoints.
     * If unset, default SDK behavior is to call Gemini API.
     */
    vertexai?: boolean;
    /**
     * Optional. The API version for the endpoint.
     * If unset, SDK will choose a default api version.
     */
    apiVersion?: string;
    /**
     * Optional. A set of customizable configuration for HTTP requests.
     */
    httpOptions?: types.HttpOptions;
    /**
     * Optional. An extra string to append at the end of the User-Agent header.
     *
     * This can be used to e.g specify the runtime and its version.
     */
    userAgentExtra?: string;
}
/**
 * Represents the necessary information to send a request to an API endpoint.
 * This interface defines the structure for constructing and executing HTTP
 * requests.
 */
export interface HttpRequest {
    /**
     * URL path from the modules, this path is appended to the base API URL to
     * form the complete request URL.
     *
     * If you wish to set full URL, use httpOptions.baseUrl instead. Example to
     * set full URL in the request:
     *
     * const request: HttpRequest = {
     *   path: '',
     *   httpOptions: {
     *     baseUrl: 'https://<custom-full-url>',
     *     apiVersion: '',
     *   },
     *   httpMethod: 'GET',
     * };
     *
     * The result URL will be: https://<custom-full-url>
     *
     */
    path: string;
    /**
     * Optional query parameters to be appended to the request URL.
     */
    queryParams?: Record<string, string>;
    /**
     * Optional request body in json string or Blob format, GET request doesn't
     * need a request body.
     */
    body?: string | Blob;
    /**
     * The HTTP method to be used for the request.
     */
    httpMethod: 'GET' | 'POST' | 'PATCH' | 'DELETE';
    /**
     * Optional set of customizable configuration for HTTP requests.
     */
    httpOptions?: types.HttpOptions;
    /**
     * Optional abort signal which can be used to cancel the request.
     */
    abortSignal?: AbortSignal;
}
/**
 * The ApiClient class is used to send requests to the Gemini API or Vertex AI
 * endpoints.
 */
export declare class ApiClient {
    readonly clientOptions: ApiClientInitOptions;
    constructor(opts: ApiClientInitOptions);
    /**
     * Determines the base URL for Vertex AI based on project and location.
     * Uses the global endpoint if location is 'global' or if project/location
     * are not specified (implying API key usage).
     * @private
     */
    private baseUrlFromProjectLocation;
    /**
     * Normalizes authentication parameters for Vertex AI.
     * If project and location are provided, API key is cleared.
     * If project and location are not provided (implying API key usage),
     * project and location are cleared.
     * @private
     */
    private normalizeAuthParameters;
    isVertexAI(): boolean;
    getProject(): string | undefined;
    getLocation(): string | undefined;
    getApiVersion(): string;
    getBaseUrl(): string;
    getRequestUrl(): string;
    getHeaders(): Record<string, string>;
    private getRequestUrlInternal;
    getBaseResourcePath(): string;
    getApiKey(): string | undefined;
    getWebsocketBaseUrl(): string;
    setBaseUrl(url: string): void;
    private constructUrl;
    private shouldPrependVertexProjectPath;
    request(request: HttpRequest): Promise<types.HttpResponse>;
    private patchHttpOptions;
    requestStream(request: HttpRequest): Promise<AsyncGenerator<types.HttpResponse>>;
    private includeExtraHttpOptionsToRequestInit;
    private unaryApiCall;
    private streamApiCall;
    processStreamResponse(response: Response): AsyncGenerator<types.HttpResponse>;
    private apiCall;
    getDefaultHeaders(): Record<string, string>;
    private getHeadersInternal;
    private getFileName;
    /**
     * Uploads a file asynchronously using Gemini API only, this is not supported
     * in Vertex AI.
     *
     * @param file The string path to the file to be uploaded or a Blob object.
     * @param config Optional parameters specified in the `UploadFileConfig`
     *     interface. @see {@link types.UploadFileConfig}
     * @return A promise that resolves to a `File` object.
     * @throws An error if called on a Vertex AI client.
     * @throws An error if the `mimeType` is not provided and can not be inferred,
     */
    uploadFile(file: string | Blob, config?: types.UploadFileConfig): Promise<types.File>;
    /**
     * Uploads a file to a given file search store asynchronously using Gemini API only, this is not supported
     * in Vertex AI.
     *
     * @param fileSearchStoreName The name of the file search store to upload the file to.
     * @param file The string path to the file to be uploaded or a Blob object.
     * @param config Optional parameters specified in the `UploadFileConfig`
     *     interface. @see {@link UploadFileConfig}
     * @return A promise that resolves to a `File` object.
     * @throws An error if called on a Vertex AI client.
     * @throws An error if the `mimeType` is not provided and can not be inferred,
     */
    uploadFileToFileSearchStore(fileSearchStoreName: string, file: string | Blob, config?: types.UploadToFileSearchStoreConfig): Promise<types.UploadToFileSearchStoreOperation>;
    /**
     * Downloads a file asynchronously to the specified path.
     *
     * @params params - The parameters for the download request, see {@link
     * types.DownloadFileParameters}
     */
    downloadFile(params: types.DownloadFileParameters): Promise<void>;
    private fetchUploadUrl;
}
/**
 * Recursively updates the `requestInit.body` with values from an `extraBody` object.
 *
 * If `requestInit.body` is a string, it's assumed to be JSON and will be parsed.
 * The `extraBody` is then deeply merged into this parsed object.
 * If `requestInit.body` is a Blob, `extraBody` will be ignored, and a warning logged,
 * as merging structured data into an opaque Blob is not supported.
 *
 * The function does not enforce that updated values from `extraBody` have the
 * same type as existing values in `requestInit.body`. Type mismatches during
 * the merge will result in a warning, but the value from `extraBody` will overwrite
 * the original. `extraBody` users are responsible for ensuring `extraBody` has the correct structure.
 *
 * @param requestInit The RequestInit object whose body will be updated.
 * @param extraBody The object containing updates to be merged into `requestInit.body`.
 */
export declare function includeExtraBodyToRequestInit(requestInit: RequestInit, extraBody: Record<string, unknown>): void;
