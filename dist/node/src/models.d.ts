/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiClient } from './_api_client.js';
import { BaseModule } from './_common.js';
import { Pager } from './pagers.js';
import * as types from './types.js';
export declare class Models extends BaseModule {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /**
     * Makes an API request to generate content with a given model.
     *
     * For the `model` parameter, supported formats for Vertex AI API include:
     * - The Gemini model ID, for example: 'gemini-2.0-flash'
     * - The full resource name starts with 'projects/', for example:
     *  'projects/my-project-id/locations/us-central1/publishers/google/models/gemini-2.0-flash'
     * - The partial resource name with 'publishers/', for example:
     *  'publishers/google/models/gemini-2.0-flash' or
     *  'publishers/meta/models/llama-3.1-405b-instruct-maas'
     * - `/` separated publisher and model name, for example:
     * 'google/gemini-2.0-flash' or 'meta/llama-3.1-405b-instruct-maas'
     *
     * For the `model` parameter, supported formats for Gemini API include:
     * - The Gemini model ID, for example: 'gemini-2.0-flash'
     * - The model name starts with 'models/', for example:
     *  'models/gemini-2.0-flash'
     * - For tuned models, the model name starts with 'tunedModels/',
     * for example:
     * 'tunedModels/1234567890123456789'
     *
     * Some models support multimodal input and output.
     *
     * @param params - The parameters for generating content.
     * @return The response from generating content.
     *
     * @example
     * ```ts
     * const response = await ai.models.generateContent({
     *   model: 'gemini-2.0-flash',
     *   contents: 'why is the sky blue?',
     *   config: {
     *     candidateCount: 2,
     *   }
     * });
     * console.log(response);
     * ```
     */
    generateContent: (params: types.GenerateContentParameters) => Promise<types.GenerateContentResponse>;
    /**
     * This logic is needed for GenerateContentConfig only.
     * Previously we made GenerateContentConfig.responseSchema field to accept
     * unknown. Since v1.9.0, we switch to use backend JSON schema support.
     * To maintain backward compatibility, we move the data that was treated as
     * JSON schema from the responseSchema field to the responseJsonSchema field.
     */
    private maybeMoveToResponseJsonSchem;
    /**
     * Makes an API request to generate content with a given model and yields the
     * response in chunks.
     *
     * For the `model` parameter, supported formats for Vertex AI API include:
     * - The Gemini model ID, for example: 'gemini-2.0-flash'
     * - The full resource name starts with 'projects/', for example:
     *  'projects/my-project-id/locations/us-central1/publishers/google/models/gemini-2.0-flash'
     * - The partial resource name with 'publishers/', for example:
     *  'publishers/google/models/gemini-2.0-flash' or
     *  'publishers/meta/models/llama-3.1-405b-instruct-maas'
     * - `/` separated publisher and model name, for example:
     * 'google/gemini-2.0-flash' or 'meta/llama-3.1-405b-instruct-maas'
     *
     * For the `model` parameter, supported formats for Gemini API include:
     * - The Gemini model ID, for example: 'gemini-2.0-flash'
     * - The model name starts with 'models/', for example:
     *  'models/gemini-2.0-flash'
     * - For tuned models, the model name starts with 'tunedModels/',
     * for example:
     *  'tunedModels/1234567890123456789'
     *
     * Some models support multimodal input and output.
     *
     * @param params - The parameters for generating content with streaming response.
     * @return The response from generating content.
     *
     * @example
     * ```ts
     * const response = await ai.models.generateContentStream({
     *   model: 'gemini-2.0-flash',
     *   contents: 'why is the sky blue?',
     *   config: {
     *     maxOutputTokens: 200,
     *   }
     * });
     * for await (const chunk of response) {
     *   console.log(chunk);
     * }
     * ```
     */
    generateContentStream: (params: types.GenerateContentParameters) => Promise<AsyncGenerator<types.GenerateContentResponse>>;
    /**
     * Transforms the CallableTools in the parameters to be simply Tools, it
     * copies the params into a new object and replaces the tools, it does not
     * modify the original params. Also sets the MCP usage header if there are
     * MCP tools in the parameters.
     */
    private processParamsMaybeAddMcpUsage;
    private initAfcToolsMap;
    private processAfcStream;
    /**
     * Generates an image based on a text description and configuration.
     *
     * @param params - The parameters for generating images.
     * @return The response from the API.
     *
     * @example
     * ```ts
     * const response = await client.models.generateImages({
     *  model: 'imagen-3.0-generate-002',
     *  prompt: 'Robot holding a red skateboard',
     *  config: {
     *    numberOfImages: 1,
     *    includeRaiReason: true,
     *  },
     * });
     * console.log(response?.generatedImages?.[0]?.image?.imageBytes);
     * ```
     */
    generateImages: (params: types.GenerateImagesParameters) => Promise<types.GenerateImagesResponse>;
    list: (params?: types.ListModelsParameters) => Promise<Pager<types.Model>>;
    /**
     * Edits an image based on a prompt, list of reference images, and configuration.
     *
     * @param params - The parameters for editing an image.
     * @return The response from the API.
     *
     * @example
     * ```ts
     * const response = await client.models.editImage({
     *  model: 'imagen-3.0-capability-001',
     *  prompt: 'Generate an image containing a mug with the product logo [1] visible on the side of the mug.',
     *  referenceImages: [subjectReferenceImage]
     *  config: {
     *    numberOfImages: 1,
     *    includeRaiReason: true,
     *  },
     * });
     * console.log(response?.generatedImages?.[0]?.image?.imageBytes);
     * ```
     */
    editImage: (params: types.EditImageParameters) => Promise<types.EditImageResponse>;
    /**
     * Upscales an image based on an image, upscale factor, and configuration.
     * Only supported in Vertex AI currently.
     *
     * @param params - The parameters for upscaling an image.
     * @return The response from the API.
     *
     * @example
     * ```ts
     * const response = await client.models.upscaleImage({
     *  model: 'imagen-3.0-generate-002',
     *  image: image,
     *  upscaleFactor: 'x2',
     *  config: {
     *    includeRaiReason: true,
     *  },
     * });
     * console.log(response?.generatedImages?.[0]?.image?.imageBytes);
     * ```
     */
    upscaleImage: (params: types.UpscaleImageParameters) => Promise<types.UpscaleImageResponse>;
    /**
     *  Generates videos based on a text description and configuration.
     *
     * @param params - The parameters for generating videos.
     * @return A Promise<GenerateVideosOperation> which allows you to track the progress and eventually retrieve the generated videos using the operations.get method.
     *
     * @example
     * ```ts
     * const operation = await ai.models.generateVideos({
     *  model: 'veo-2.0-generate-001',
     *  source: {
     *    prompt: 'A neon hologram of a cat driving at top speed',
     *  },
     *  config: {
     *    numberOfVideos: 1
     * });
     *
     * while (!operation.done) {
     *   await new Promise(resolve => setTimeout(resolve, 10000));
     *   operation = await ai.operations.getVideosOperation({operation: operation});
     * }
     *
     * console.log(operation.response?.generatedVideos?.[0]?.video?.uri);
     * ```
     */
    generateVideos: (params: types.GenerateVideosParameters) => Promise<types.GenerateVideosOperation>;
    private generateContentInternal;
    private generateContentStreamInternal;
    /**
     * Calculates embeddings for the given contents. Only text is supported.
     *
     * @param params - The parameters for embedding contents.
     * @return The response from the API.
     *
     * @example
     * ```ts
     * const response = await ai.models.embedContent({
     *  model: 'text-embedding-004',
     *  contents: [
     *    'What is your name?',
     *    'What is your favorite color?',
     *  ],
     *  config: {
     *    outputDimensionality: 64,
     *  },
     * });
     * console.log(response);
     * ```
     */
    embedContent(params: types.EmbedContentParameters): Promise<types.EmbedContentResponse>;
    /**
     * Private method for generating images.
     */
    private generateImagesInternal;
    /**
     * Private method for editing an image.
     */
    private editImageInternal;
    /**
     * Private method for upscaling an image.
     */
    private upscaleImageInternal;
    /**
     * Recontextualizes an image.
     *
     * There are two types of recontextualization currently supported:
     * 1) Imagen Product Recontext - Generate images of products in new scenes
     *    and contexts.
     * 2) Virtual Try-On: Generate images of persons modeling fashion products.
     *
     * @param params - The parameters for recontextualizing an image.
     * @return The response from the API.
     *
     * @example
     * ```ts
     * const response1 = await ai.models.recontextImage({
     *  model: 'imagen-product-recontext-preview-06-30',
     *  source: {
     *    prompt: 'In a modern kitchen setting.',
     *    productImages: [productImage],
     *  },
     *  config: {
     *    numberOfImages: 1,
     *  },
     * });
     * console.log(response1?.generatedImages?.[0]?.image?.imageBytes);
     *
     * const response2 = await ai.models.recontextImage({
     *  model: 'virtual-try-on-preview-08-04',
     *  source: {
     *    personImage: personImage,
     *    productImages: [productImage],
     *  },
     *  config: {
     *    numberOfImages: 1,
     *  },
     * });
     * console.log(response2?.generatedImages?.[0]?.image?.imageBytes);
     * ```
     */
    recontextImage(params: types.RecontextImageParameters): Promise<types.RecontextImageResponse>;
    /**
     * Segments an image, creating a mask of a specified area.
     *
     * @param params - The parameters for segmenting an image.
     * @return The response from the API.
     *
     * @example
     * ```ts
     * const response = await ai.models.segmentImage({
     *  model: 'image-segmentation-001',
     *  source: {
     *    image: image,
     *  },
     *  config: {
     *    mode: 'foreground',
     *  },
     * });
     * console.log(response?.generatedMasks?.[0]?.mask?.imageBytes);
     * ```
     */
    segmentImage(params: types.SegmentImageParameters): Promise<types.SegmentImageResponse>;
    /**
     * Fetches information about a model by name.
     *
     * @example
     * ```ts
     * const modelInfo = await ai.models.get({model: 'gemini-2.0-flash'});
     * ```
     */
    get(params: types.GetModelParameters): Promise<types.Model>;
    private listInternal;
    /**
     * Updates a tuned model by its name.
     *
     * @param params - The parameters for updating the model.
     * @return The response from the API.
     *
     * @example
     * ```ts
     * const response = await ai.models.update({
     *   model: 'tuned-model-name',
     *   config: {
     *     displayName: 'New display name',
     *     description: 'New description',
     *   },
     * });
     * ```
     */
    update(params: types.UpdateModelParameters): Promise<types.Model>;
    /**
     * Deletes a tuned model by its name.
     *
     * @param params - The parameters for deleting the model.
     * @return The response from the API.
     *
     * @example
     * ```ts
     * const response = await ai.models.delete({model: 'tuned-model-name'});
     * ```
     */
    delete(params: types.DeleteModelParameters): Promise<types.DeleteModelResponse>;
    /**
     * Counts the number of tokens in the given contents. Multimodal input is
     * supported for Gemini models.
     *
     * @param params - The parameters for counting tokens.
     * @return The response from the API.
     *
     * @example
     * ```ts
     * const response = await ai.models.countTokens({
     *  model: 'gemini-2.0-flash',
     *  contents: 'The quick brown fox jumps over the lazy dog.'
     * });
     * console.log(response);
     * ```
     */
    countTokens(params: types.CountTokensParameters): Promise<types.CountTokensResponse>;
    /**
     * Given a list of contents, returns a corresponding TokensInfo containing
     * the list of tokens and list of token ids.
     *
     * This method is not supported by the Gemini Developer API.
     *
     * @param params - The parameters for computing tokens.
     * @return The response from the API.
     *
     * @example
     * ```ts
     * const response = await ai.models.computeTokens({
     *  model: 'gemini-2.0-flash',
     *  contents: 'What is your name?'
     * });
     * console.log(response);
     * ```
     */
    computeTokens(params: types.ComputeTokensParameters): Promise<types.ComputeTokensResponse>;
    /**
     * Private method for generating videos.
     */
    private generateVideosInternal;
}
