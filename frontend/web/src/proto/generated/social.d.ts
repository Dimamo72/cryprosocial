import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace social. */
export namespace social {

    /** Represents a SocialService */
    class SocialService extends $protobuf.rpc.Service {

        /**
         * Constructs a new SocialService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new SocialService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SocialService;

        /**
         * Calls GetUser.
         * @param request GetUserRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and User
         */
        public getUser(request: social.IGetUserRequest, callback: social.SocialService.GetUserCallback): void;

        /**
         * Calls GetUser.
         * @param request GetUserRequest message or plain object
         * @returns Promise
         */
        public getUser(request: social.IGetUserRequest): Promise<social.User>;

        /**
         * Calls CreatePost.
         * @param request CreatePostRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Post
         */
        public createPost(request: social.ICreatePostRequest, callback: social.SocialService.CreatePostCallback): void;

        /**
         * Calls CreatePost.
         * @param request CreatePostRequest message or plain object
         * @returns Promise
         */
        public createPost(request: social.ICreatePostRequest): Promise<social.Post>;

        /**
         * Calls GetFeed.
         * @param request GetFeedRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and PostList
         */
        public getFeed(request: social.IGetFeedRequest, callback: social.SocialService.GetFeedCallback): void;

        /**
         * Calls GetFeed.
         * @param request GetFeedRequest message or plain object
         * @returns Promise
         */
        public getFeed(request: social.IGetFeedRequest): Promise<social.PostList>;

        /**
         * Calls LikePost.
         * @param request LikePostRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Post
         */
        public likePost(request: social.ILikePostRequest, callback: social.SocialService.LikePostCallback): void;

        /**
         * Calls LikePost.
         * @param request LikePostRequest message or plain object
         * @returns Promise
         */
        public likePost(request: social.ILikePostRequest): Promise<social.Post>;

        /**
         * Calls MintPostNFT.
         * @param request MintPostNFTRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and NFTResponse
         */
        public mintPostNFT(request: social.IMintPostNFTRequest, callback: social.SocialService.MintPostNFTCallback): void;

        /**
         * Calls MintPostNFT.
         * @param request MintPostNFTRequest message or plain object
         * @returns Promise
         */
        public mintPostNFT(request: social.IMintPostNFTRequest): Promise<social.NFTResponse>;
    }

    namespace SocialService {

        /**
         * Callback as used by {@link social.SocialService#getUser}.
         * @param error Error, if any
         * @param [response] User
         */
        type GetUserCallback = (error: (Error|null), response?: social.User) => void;

        /**
         * Callback as used by {@link social.SocialService#createPost}.
         * @param error Error, if any
         * @param [response] Post
         */
        type CreatePostCallback = (error: (Error|null), response?: social.Post) => void;

        /**
         * Callback as used by {@link social.SocialService#getFeed}.
         * @param error Error, if any
         * @param [response] PostList
         */
        type GetFeedCallback = (error: (Error|null), response?: social.PostList) => void;

        /**
         * Callback as used by {@link social.SocialService#likePost}.
         * @param error Error, if any
         * @param [response] Post
         */
        type LikePostCallback = (error: (Error|null), response?: social.Post) => void;

        /**
         * Callback as used by {@link social.SocialService#mintPostNFT}.
         * @param error Error, if any
         * @param [response] NFTResponse
         */
        type MintPostNFTCallback = (error: (Error|null), response?: social.NFTResponse) => void;
    }

    /** Properties of a User. */
    interface IUser {

        /** User id */
        id?: (string|null);

        /** User address */
        address?: (string|null);

        /** User username */
        username?: (string|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: social.IUser);

        /** User id. */
        public id: string;

        /** User address. */
        public address: string;

        /** User username. */
        public username: string;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: social.IUser): social.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link social.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: social.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link social.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: social.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): social.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): social.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: social.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for User
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetUserRequest. */
    interface IGetUserRequest {

        /** GetUserRequest address */
        address?: (string|null);
    }

    /** Represents a GetUserRequest. */
    class GetUserRequest implements IGetUserRequest {

        /**
         * Constructs a new GetUserRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: social.IGetUserRequest);

        /** GetUserRequest address. */
        public address: string;

        /**
         * Creates a new GetUserRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUserRequest instance
         */
        public static create(properties?: social.IGetUserRequest): social.GetUserRequest;

        /**
         * Encodes the specified GetUserRequest message. Does not implicitly {@link social.GetUserRequest.verify|verify} messages.
         * @param message GetUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: social.IGetUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetUserRequest message, length delimited. Does not implicitly {@link social.GetUserRequest.verify|verify} messages.
         * @param message GetUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: social.IGetUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetUserRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.GetUserRequest;

        /**
         * Decodes a GetUserRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): social.GetUserRequest;

        /**
         * Verifies a GetUserRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetUserRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserRequest
         */
        public static fromObject(object: { [k: string]: any }): social.GetUserRequest;

        /**
         * Creates a plain object from a GetUserRequest message. Also converts values to other types if specified.
         * @param message GetUserRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: social.GetUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUserRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetUserRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Post. */
    interface IPost {

        /** Post id */
        id?: (string|null);

        /** Post content */
        content?: (string|null);

        /** Post author */
        author?: (social.IUser|null);

        /** Post createdAt */
        createdAt?: (string|null);

        /** Post likesCount */
        likesCount?: (number|null);

        /** Post comments */
        comments?: (social.IComment[]|null);

        /** Post nftAddress */
        nftAddress?: (string|null);
    }

    /** Represents a Post. */
    class Post implements IPost {

        /**
         * Constructs a new Post.
         * @param [properties] Properties to set
         */
        constructor(properties?: social.IPost);

        /** Post id. */
        public id: string;

        /** Post content. */
        public content: string;

        /** Post author. */
        public author?: (social.IUser|null);

        /** Post createdAt. */
        public createdAt: string;

        /** Post likesCount. */
        public likesCount: number;

        /** Post comments. */
        public comments: social.IComment[];

        /** Post nftAddress. */
        public nftAddress?: (string|null);

        /**
         * Creates a new Post instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Post instance
         */
        public static create(properties?: social.IPost): social.Post;

        /**
         * Encodes the specified Post message. Does not implicitly {@link social.Post.verify|verify} messages.
         * @param message Post message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: social.IPost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Post message, length delimited. Does not implicitly {@link social.Post.verify|verify} messages.
         * @param message Post message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: social.IPost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Post message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Post
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.Post;

        /**
         * Decodes a Post message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Post
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): social.Post;

        /**
         * Verifies a Post message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Post message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Post
         */
        public static fromObject(object: { [k: string]: any }): social.Post;

        /**
         * Creates a plain object from a Post message. Also converts values to other types if specified.
         * @param message Post
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: social.Post, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Post to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Post
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Comment. */
    interface IComment {

        /** Comment id */
        id?: (string|null);

        /** Comment content */
        content?: (string|null);

        /** Comment author */
        author?: (social.IUser|null);

        /** Comment createdAt */
        createdAt?: (string|null);
    }

    /** Represents a Comment. */
    class Comment implements IComment {

        /**
         * Constructs a new Comment.
         * @param [properties] Properties to set
         */
        constructor(properties?: social.IComment);

        /** Comment id. */
        public id: string;

        /** Comment content. */
        public content: string;

        /** Comment author. */
        public author?: (social.IUser|null);

        /** Comment createdAt. */
        public createdAt: string;

        /**
         * Creates a new Comment instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Comment instance
         */
        public static create(properties?: social.IComment): social.Comment;

        /**
         * Encodes the specified Comment message. Does not implicitly {@link social.Comment.verify|verify} messages.
         * @param message Comment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: social.IComment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Comment message, length delimited. Does not implicitly {@link social.Comment.verify|verify} messages.
         * @param message Comment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: social.IComment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Comment message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Comment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.Comment;

        /**
         * Decodes a Comment message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Comment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): social.Comment;

        /**
         * Verifies a Comment message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Comment message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Comment
         */
        public static fromObject(object: { [k: string]: any }): social.Comment;

        /**
         * Creates a plain object from a Comment message. Also converts values to other types if specified.
         * @param message Comment
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: social.Comment, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Comment to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Comment
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CreatePostRequest. */
    interface ICreatePostRequest {

        /** CreatePostRequest content */
        content?: (string|null);

        /** CreatePostRequest nftAddress */
        nftAddress?: (string|null);
    }

    /** Represents a CreatePostRequest. */
    class CreatePostRequest implements ICreatePostRequest {

        /**
         * Constructs a new CreatePostRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: social.ICreatePostRequest);

        /** CreatePostRequest content. */
        public content: string;

        /** CreatePostRequest nftAddress. */
        public nftAddress?: (string|null);

        /**
         * Creates a new CreatePostRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreatePostRequest instance
         */
        public static create(properties?: social.ICreatePostRequest): social.CreatePostRequest;

        /**
         * Encodes the specified CreatePostRequest message. Does not implicitly {@link social.CreatePostRequest.verify|verify} messages.
         * @param message CreatePostRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: social.ICreatePostRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreatePostRequest message, length delimited. Does not implicitly {@link social.CreatePostRequest.verify|verify} messages.
         * @param message CreatePostRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: social.ICreatePostRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreatePostRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreatePostRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.CreatePostRequest;

        /**
         * Decodes a CreatePostRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreatePostRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): social.CreatePostRequest;

        /**
         * Verifies a CreatePostRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreatePostRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreatePostRequest
         */
        public static fromObject(object: { [k: string]: any }): social.CreatePostRequest;

        /**
         * Creates a plain object from a CreatePostRequest message. Also converts values to other types if specified.
         * @param message CreatePostRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: social.CreatePostRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreatePostRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CreatePostRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetFeedRequest. */
    interface IGetFeedRequest {

        /** GetFeedRequest limit */
        limit?: (number|null);

        /** GetFeedRequest offset */
        offset?: (number|null);
    }

    /** Represents a GetFeedRequest. */
    class GetFeedRequest implements IGetFeedRequest {

        /**
         * Constructs a new GetFeedRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: social.IGetFeedRequest);

        /** GetFeedRequest limit. */
        public limit: number;

        /** GetFeedRequest offset. */
        public offset: number;

        /**
         * Creates a new GetFeedRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetFeedRequest instance
         */
        public static create(properties?: social.IGetFeedRequest): social.GetFeedRequest;

        /**
         * Encodes the specified GetFeedRequest message. Does not implicitly {@link social.GetFeedRequest.verify|verify} messages.
         * @param message GetFeedRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: social.IGetFeedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetFeedRequest message, length delimited. Does not implicitly {@link social.GetFeedRequest.verify|verify} messages.
         * @param message GetFeedRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: social.IGetFeedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetFeedRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetFeedRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.GetFeedRequest;

        /**
         * Decodes a GetFeedRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetFeedRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): social.GetFeedRequest;

        /**
         * Verifies a GetFeedRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetFeedRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetFeedRequest
         */
        public static fromObject(object: { [k: string]: any }): social.GetFeedRequest;

        /**
         * Creates a plain object from a GetFeedRequest message. Also converts values to other types if specified.
         * @param message GetFeedRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: social.GetFeedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetFeedRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetFeedRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PostList. */
    interface IPostList {

        /** PostList posts */
        posts?: (social.IPost[]|null);

        /** PostList total */
        total?: (number|null);
    }

    /** Represents a PostList. */
    class PostList implements IPostList {

        /**
         * Constructs a new PostList.
         * @param [properties] Properties to set
         */
        constructor(properties?: social.IPostList);

        /** PostList posts. */
        public posts: social.IPost[];

        /** PostList total. */
        public total: number;

        /**
         * Creates a new PostList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PostList instance
         */
        public static create(properties?: social.IPostList): social.PostList;

        /**
         * Encodes the specified PostList message. Does not implicitly {@link social.PostList.verify|verify} messages.
         * @param message PostList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: social.IPostList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PostList message, length delimited. Does not implicitly {@link social.PostList.verify|verify} messages.
         * @param message PostList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: social.IPostList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PostList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PostList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.PostList;

        /**
         * Decodes a PostList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PostList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): social.PostList;

        /**
         * Verifies a PostList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PostList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PostList
         */
        public static fromObject(object: { [k: string]: any }): social.PostList;

        /**
         * Creates a plain object from a PostList message. Also converts values to other types if specified.
         * @param message PostList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: social.PostList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PostList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PostList
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LikePostRequest. */
    interface ILikePostRequest {

        /** LikePostRequest postId */
        postId?: (string|null);
    }

    /** Represents a LikePostRequest. */
    class LikePostRequest implements ILikePostRequest {

        /**
         * Constructs a new LikePostRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: social.ILikePostRequest);

        /** LikePostRequest postId. */
        public postId: string;

        /**
         * Creates a new LikePostRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LikePostRequest instance
         */
        public static create(properties?: social.ILikePostRequest): social.LikePostRequest;

        /**
         * Encodes the specified LikePostRequest message. Does not implicitly {@link social.LikePostRequest.verify|verify} messages.
         * @param message LikePostRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: social.ILikePostRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LikePostRequest message, length delimited. Does not implicitly {@link social.LikePostRequest.verify|verify} messages.
         * @param message LikePostRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: social.ILikePostRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LikePostRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LikePostRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.LikePostRequest;

        /**
         * Decodes a LikePostRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LikePostRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): social.LikePostRequest;

        /**
         * Verifies a LikePostRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LikePostRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LikePostRequest
         */
        public static fromObject(object: { [k: string]: any }): social.LikePostRequest;

        /**
         * Creates a plain object from a LikePostRequest message. Also converts values to other types if specified.
         * @param message LikePostRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: social.LikePostRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LikePostRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LikePostRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MintPostNFTRequest. */
    interface IMintPostNFTRequest {

        /** MintPostNFTRequest postId */
        postId?: (string|null);
    }

    /** Represents a MintPostNFTRequest. */
    class MintPostNFTRequest implements IMintPostNFTRequest {

        /**
         * Constructs a new MintPostNFTRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: social.IMintPostNFTRequest);

        /** MintPostNFTRequest postId. */
        public postId: string;

        /**
         * Creates a new MintPostNFTRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MintPostNFTRequest instance
         */
        public static create(properties?: social.IMintPostNFTRequest): social.MintPostNFTRequest;

        /**
         * Encodes the specified MintPostNFTRequest message. Does not implicitly {@link social.MintPostNFTRequest.verify|verify} messages.
         * @param message MintPostNFTRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: social.IMintPostNFTRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MintPostNFTRequest message, length delimited. Does not implicitly {@link social.MintPostNFTRequest.verify|verify} messages.
         * @param message MintPostNFTRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: social.IMintPostNFTRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MintPostNFTRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MintPostNFTRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.MintPostNFTRequest;

        /**
         * Decodes a MintPostNFTRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MintPostNFTRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): social.MintPostNFTRequest;

        /**
         * Verifies a MintPostNFTRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MintPostNFTRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MintPostNFTRequest
         */
        public static fromObject(object: { [k: string]: any }): social.MintPostNFTRequest;

        /**
         * Creates a plain object from a MintPostNFTRequest message. Also converts values to other types if specified.
         * @param message MintPostNFTRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: social.MintPostNFTRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MintPostNFTRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MintPostNFTRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NFTResponse. */
    interface INFTResponse {

        /** NFTResponse transactionHash */
        transactionHash?: (string|null);

        /** NFTResponse nftAddress */
        nftAddress?: (string|null);

        /** NFTResponse tokenId */
        tokenId?: (string|null);
    }

    /** Represents a NFTResponse. */
    class NFTResponse implements INFTResponse {

        /**
         * Constructs a new NFTResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: social.INFTResponse);

        /** NFTResponse transactionHash. */
        public transactionHash: string;

        /** NFTResponse nftAddress. */
        public nftAddress: string;

        /** NFTResponse tokenId. */
        public tokenId: string;

        /**
         * Creates a new NFTResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NFTResponse instance
         */
        public static create(properties?: social.INFTResponse): social.NFTResponse;

        /**
         * Encodes the specified NFTResponse message. Does not implicitly {@link social.NFTResponse.verify|verify} messages.
         * @param message NFTResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: social.INFTResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NFTResponse message, length delimited. Does not implicitly {@link social.NFTResponse.verify|verify} messages.
         * @param message NFTResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: social.INFTResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NFTResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NFTResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.NFTResponse;

        /**
         * Decodes a NFTResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NFTResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): social.NFTResponse;

        /**
         * Verifies a NFTResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NFTResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NFTResponse
         */
        public static fromObject(object: { [k: string]: any }): social.NFTResponse;

        /**
         * Creates a plain object from a NFTResponse message. Also converts values to other types if specified.
         * @param message NFTResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: social.NFTResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NFTResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NFTResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
