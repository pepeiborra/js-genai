/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Auth } from '../_auth.js';
export declare const GOOGLE_API_KEY_HEADER = "x-goog-api-key";
export declare class WebAuth implements Auth {
    private readonly apiKey;
    constructor(apiKey: string);
    addAuthHeaders(headers: Headers, url?: string): Promise<void>;
}
