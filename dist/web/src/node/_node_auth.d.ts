/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { GoogleAuthOptions } from 'google-auth-library';
import { Auth } from '../_auth.js';
export declare const GOOGLE_API_KEY_HEADER = "x-goog-api-key";
export interface NodeAuthOptions {
    /**
     * The API Key. This is required for Gemini API users.
     */
    apiKey?: string;
    /**
     * Optional. These are the authentication options provided by google-auth-library for Vertex AI users.
     * Complete list of authentication options are documented in the
     * GoogleAuthOptions interface:
     * https://github.com/googleapis/google-auth-library-nodejs/blob/main/src/auth/googleauth.ts.
     */
    googleAuthOptions?: GoogleAuthOptions;
}
export declare class NodeAuth implements Auth {
    private readonly googleAuth?;
    private readonly apiKey?;
    constructor(opts: NodeAuthOptions);
    addAuthHeaders(headers: Headers, url?: string): Promise<void>;
    private addKeyHeader;
    private addGoogleAuthHeaders;
}
