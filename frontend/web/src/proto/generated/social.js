/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.social = (function() {

    /**
     * Namespace social.
     * @exports social
     * @namespace
     */
    var social = {};

    social.SocialService = (function() {

        /**
         * Constructs a new SocialService service.
         * @memberof social
         * @classdesc Represents a SocialService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function SocialService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (SocialService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = SocialService;

        /**
         * Creates new SocialService service using the specified rpc implementation.
         * @function create
         * @memberof social.SocialService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {SocialService} RPC service. Useful where requests and/or responses are streamed.
         */
        SocialService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link social.SocialService#getUser}.
         * @memberof social.SocialService
         * @typedef GetUserCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {social.User} [response] User
         */

        /**
         * Calls GetUser.
         * @function getUser
         * @memberof social.SocialService
         * @instance
         * @param {social.IGetUserRequest} request GetUserRequest message or plain object
         * @param {social.SocialService.GetUserCallback} callback Node-style callback called with the error, if any, and User
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(SocialService.prototype.getUser = function getUser(request, callback) {
            return this.rpcCall(getUser, $root.social.GetUserRequest, $root.social.User, request, callback);
        }, "name", { value: "GetUser" });

        /**
         * Calls GetUser.
         * @function getUser
         * @memberof social.SocialService
         * @instance
         * @param {social.IGetUserRequest} request GetUserRequest message or plain object
         * @returns {Promise<social.User>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link social.SocialService#createPost}.
         * @memberof social.SocialService
         * @typedef CreatePostCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {social.Post} [response] Post
         */

        /**
         * Calls CreatePost.
         * @function createPost
         * @memberof social.SocialService
         * @instance
         * @param {social.ICreatePostRequest} request CreatePostRequest message or plain object
         * @param {social.SocialService.CreatePostCallback} callback Node-style callback called with the error, if any, and Post
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(SocialService.prototype.createPost = function createPost(request, callback) {
            return this.rpcCall(createPost, $root.social.CreatePostRequest, $root.social.Post, request, callback);
        }, "name", { value: "CreatePost" });

        /**
         * Calls CreatePost.
         * @function createPost
         * @memberof social.SocialService
         * @instance
         * @param {social.ICreatePostRequest} request CreatePostRequest message or plain object
         * @returns {Promise<social.Post>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link social.SocialService#getFeed}.
         * @memberof social.SocialService
         * @typedef GetFeedCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {social.PostList} [response] PostList
         */

        /**
         * Calls GetFeed.
         * @function getFeed
         * @memberof social.SocialService
         * @instance
         * @param {social.IGetFeedRequest} request GetFeedRequest message or plain object
         * @param {social.SocialService.GetFeedCallback} callback Node-style callback called with the error, if any, and PostList
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(SocialService.prototype.getFeed = function getFeed(request, callback) {
            return this.rpcCall(getFeed, $root.social.GetFeedRequest, $root.social.PostList, request, callback);
        }, "name", { value: "GetFeed" });

        /**
         * Calls GetFeed.
         * @function getFeed
         * @memberof social.SocialService
         * @instance
         * @param {social.IGetFeedRequest} request GetFeedRequest message or plain object
         * @returns {Promise<social.PostList>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link social.SocialService#likePost}.
         * @memberof social.SocialService
         * @typedef LikePostCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {social.Post} [response] Post
         */

        /**
         * Calls LikePost.
         * @function likePost
         * @memberof social.SocialService
         * @instance
         * @param {social.ILikePostRequest} request LikePostRequest message or plain object
         * @param {social.SocialService.LikePostCallback} callback Node-style callback called with the error, if any, and Post
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(SocialService.prototype.likePost = function likePost(request, callback) {
            return this.rpcCall(likePost, $root.social.LikePostRequest, $root.social.Post, request, callback);
        }, "name", { value: "LikePost" });

        /**
         * Calls LikePost.
         * @function likePost
         * @memberof social.SocialService
         * @instance
         * @param {social.ILikePostRequest} request LikePostRequest message or plain object
         * @returns {Promise<social.Post>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link social.SocialService#mintPostNFT}.
         * @memberof social.SocialService
         * @typedef MintPostNFTCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {social.NFTResponse} [response] NFTResponse
         */

        /**
         * Calls MintPostNFT.
         * @function mintPostNFT
         * @memberof social.SocialService
         * @instance
         * @param {social.IMintPostNFTRequest} request MintPostNFTRequest message or plain object
         * @param {social.SocialService.MintPostNFTCallback} callback Node-style callback called with the error, if any, and NFTResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(SocialService.prototype.mintPostNFT = function mintPostNFT(request, callback) {
            return this.rpcCall(mintPostNFT, $root.social.MintPostNFTRequest, $root.social.NFTResponse, request, callback);
        }, "name", { value: "MintPostNFT" });

        /**
         * Calls MintPostNFT.
         * @function mintPostNFT
         * @memberof social.SocialService
         * @instance
         * @param {social.IMintPostNFTRequest} request MintPostNFTRequest message or plain object
         * @returns {Promise<social.NFTResponse>} Promise
         * @variation 2
         */

        return SocialService;
    })();

    social.User = (function() {

        /**
         * Properties of a User.
         * @memberof social
         * @interface IUser
         * @property {string|null} [id] User id
         * @property {string|null} [address] User address
         * @property {string|null} [username] User username
         */

        /**
         * Constructs a new User.
         * @memberof social
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {social.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User id.
         * @member {string} id
         * @memberof social.User
         * @instance
         */
        User.prototype.id = "";

        /**
         * User address.
         * @member {string} address
         * @memberof social.User
         * @instance
         */
        User.prototype.address = "";

        /**
         * User username.
         * @member {string} username
         * @memberof social.User
         * @instance
         */
        User.prototype.username = "";

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof social.User
         * @static
         * @param {social.IUser=} [properties] Properties to set
         * @returns {social.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link social.User.verify|verify} messages.
         * @function encode
         * @memberof social.User
         * @static
         * @param {social.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.address);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.username);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link social.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof social.User
         * @static
         * @param {social.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof social.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {social.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.social.User();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.address = reader.string();
                        break;
                    }
                case 3: {
                        message.username = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof social.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {social.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof social.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!$util.isString(message.address))
                    return "address: string expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof social.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {social.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.social.User)
                return object;
            var message = new $root.social.User();
            if (object.id != null)
                message.id = String(object.id);
            if (object.address != null)
                message.address = String(object.address);
            if (object.username != null)
                message.username = String(object.username);
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof social.User
         * @static
         * @param {social.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.address = "";
                object.username = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = message.address;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof social.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for User
         * @function getTypeUrl
         * @memberof social.User
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        User.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/social.User";
        };

        return User;
    })();

    social.GetUserRequest = (function() {

        /**
         * Properties of a GetUserRequest.
         * @memberof social
         * @interface IGetUserRequest
         * @property {string|null} [address] GetUserRequest address
         */

        /**
         * Constructs a new GetUserRequest.
         * @memberof social
         * @classdesc Represents a GetUserRequest.
         * @implements IGetUserRequest
         * @constructor
         * @param {social.IGetUserRequest=} [properties] Properties to set
         */
        function GetUserRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserRequest address.
         * @member {string} address
         * @memberof social.GetUserRequest
         * @instance
         */
        GetUserRequest.prototype.address = "";

        /**
         * Creates a new GetUserRequest instance using the specified properties.
         * @function create
         * @memberof social.GetUserRequest
         * @static
         * @param {social.IGetUserRequest=} [properties] Properties to set
         * @returns {social.GetUserRequest} GetUserRequest instance
         */
        GetUserRequest.create = function create(properties) {
            return new GetUserRequest(properties);
        };

        /**
         * Encodes the specified GetUserRequest message. Does not implicitly {@link social.GetUserRequest.verify|verify} messages.
         * @function encode
         * @memberof social.GetUserRequest
         * @static
         * @param {social.IGetUserRequest} message GetUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.address);
            return writer;
        };

        /**
         * Encodes the specified GetUserRequest message, length delimited. Does not implicitly {@link social.GetUserRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof social.GetUserRequest
         * @static
         * @param {social.IGetUserRequest} message GetUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserRequest message from the specified reader or buffer.
         * @function decode
         * @memberof social.GetUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {social.GetUserRequest} GetUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.social.GetUserRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.address = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUserRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof social.GetUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {social.GetUserRequest} GetUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUserRequest message.
         * @function verify
         * @memberof social.GetUserRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!$util.isString(message.address))
                    return "address: string expected";
            return null;
        };

        /**
         * Creates a GetUserRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof social.GetUserRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {social.GetUserRequest} GetUserRequest
         */
        GetUserRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.social.GetUserRequest)
                return object;
            var message = new $root.social.GetUserRequest();
            if (object.address != null)
                message.address = String(object.address);
            return message;
        };

        /**
         * Creates a plain object from a GetUserRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof social.GetUserRequest
         * @static
         * @param {social.GetUserRequest} message GetUserRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.address = "";
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = message.address;
            return object;
        };

        /**
         * Converts this GetUserRequest to JSON.
         * @function toJSON
         * @memberof social.GetUserRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetUserRequest
         * @function getTypeUrl
         * @memberof social.GetUserRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetUserRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/social.GetUserRequest";
        };

        return GetUserRequest;
    })();

    social.Post = (function() {

        /**
         * Properties of a Post.
         * @memberof social
         * @interface IPost
         * @property {string|null} [id] Post id
         * @property {string|null} [content] Post content
         * @property {social.IUser|null} [author] Post author
         * @property {string|null} [createdAt] Post createdAt
         * @property {number|null} [likesCount] Post likesCount
         * @property {Array.<social.IComment>|null} [comments] Post comments
         * @property {string|null} [nftAddress] Post nftAddress
         */

        /**
         * Constructs a new Post.
         * @memberof social
         * @classdesc Represents a Post.
         * @implements IPost
         * @constructor
         * @param {social.IPost=} [properties] Properties to set
         */
        function Post(properties) {
            this.comments = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Post id.
         * @member {string} id
         * @memberof social.Post
         * @instance
         */
        Post.prototype.id = "";

        /**
         * Post content.
         * @member {string} content
         * @memberof social.Post
         * @instance
         */
        Post.prototype.content = "";

        /**
         * Post author.
         * @member {social.IUser|null|undefined} author
         * @memberof social.Post
         * @instance
         */
        Post.prototype.author = null;

        /**
         * Post createdAt.
         * @member {string} createdAt
         * @memberof social.Post
         * @instance
         */
        Post.prototype.createdAt = "";

        /**
         * Post likesCount.
         * @member {number} likesCount
         * @memberof social.Post
         * @instance
         */
        Post.prototype.likesCount = 0;

        /**
         * Post comments.
         * @member {Array.<social.IComment>} comments
         * @memberof social.Post
         * @instance
         */
        Post.prototype.comments = $util.emptyArray;

        /**
         * Post nftAddress.
         * @member {string|null|undefined} nftAddress
         * @memberof social.Post
         * @instance
         */
        Post.prototype.nftAddress = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Post.prototype, "_nftAddress", {
            get: $util.oneOfGetter($oneOfFields = ["nftAddress"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Post instance using the specified properties.
         * @function create
         * @memberof social.Post
         * @static
         * @param {social.IPost=} [properties] Properties to set
         * @returns {social.Post} Post instance
         */
        Post.create = function create(properties) {
            return new Post(properties);
        };

        /**
         * Encodes the specified Post message. Does not implicitly {@link social.Post.verify|verify} messages.
         * @function encode
         * @memberof social.Post
         * @static
         * @param {social.IPost} message Post message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Post.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
            if (message.author != null && Object.hasOwnProperty.call(message, "author"))
                $root.social.User.encode(message.author, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.createdAt);
            if (message.likesCount != null && Object.hasOwnProperty.call(message, "likesCount"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.likesCount);
            if (message.comments != null && message.comments.length)
                for (var i = 0; i < message.comments.length; ++i)
                    $root.social.Comment.encode(message.comments[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.nftAddress != null && Object.hasOwnProperty.call(message, "nftAddress"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.nftAddress);
            return writer;
        };

        /**
         * Encodes the specified Post message, length delimited. Does not implicitly {@link social.Post.verify|verify} messages.
         * @function encodeDelimited
         * @memberof social.Post
         * @static
         * @param {social.IPost} message Post message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Post.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Post message from the specified reader or buffer.
         * @function decode
         * @memberof social.Post
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {social.Post} Post
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Post.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.social.Post();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.content = reader.string();
                        break;
                    }
                case 3: {
                        message.author = $root.social.User.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.createdAt = reader.string();
                        break;
                    }
                case 5: {
                        message.likesCount = reader.int32();
                        break;
                    }
                case 6: {
                        if (!(message.comments && message.comments.length))
                            message.comments = [];
                        message.comments.push($root.social.Comment.decode(reader, reader.uint32()));
                        break;
                    }
                case 7: {
                        message.nftAddress = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Post message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof social.Post
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {social.Post} Post
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Post.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Post message.
         * @function verify
         * @memberof social.Post
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Post.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.author != null && message.hasOwnProperty("author")) {
                var error = $root.social.User.verify(message.author);
                if (error)
                    return "author." + error;
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.likesCount != null && message.hasOwnProperty("likesCount"))
                if (!$util.isInteger(message.likesCount))
                    return "likesCount: integer expected";
            if (message.comments != null && message.hasOwnProperty("comments")) {
                if (!Array.isArray(message.comments))
                    return "comments: array expected";
                for (var i = 0; i < message.comments.length; ++i) {
                    var error = $root.social.Comment.verify(message.comments[i]);
                    if (error)
                        return "comments." + error;
                }
            }
            if (message.nftAddress != null && message.hasOwnProperty("nftAddress")) {
                properties._nftAddress = 1;
                if (!$util.isString(message.nftAddress))
                    return "nftAddress: string expected";
            }
            return null;
        };

        /**
         * Creates a Post message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof social.Post
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {social.Post} Post
         */
        Post.fromObject = function fromObject(object) {
            if (object instanceof $root.social.Post)
                return object;
            var message = new $root.social.Post();
            if (object.id != null)
                message.id = String(object.id);
            if (object.content != null)
                message.content = String(object.content);
            if (object.author != null) {
                if (typeof object.author !== "object")
                    throw TypeError(".social.Post.author: object expected");
                message.author = $root.social.User.fromObject(object.author);
            }
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.likesCount != null)
                message.likesCount = object.likesCount | 0;
            if (object.comments) {
                if (!Array.isArray(object.comments))
                    throw TypeError(".social.Post.comments: array expected");
                message.comments = [];
                for (var i = 0; i < object.comments.length; ++i) {
                    if (typeof object.comments[i] !== "object")
                        throw TypeError(".social.Post.comments: object expected");
                    message.comments[i] = $root.social.Comment.fromObject(object.comments[i]);
                }
            }
            if (object.nftAddress != null)
                message.nftAddress = String(object.nftAddress);
            return message;
        };

        /**
         * Creates a plain object from a Post message. Also converts values to other types if specified.
         * @function toObject
         * @memberof social.Post
         * @static
         * @param {social.Post} message Post
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Post.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.comments = [];
            if (options.defaults) {
                object.id = "";
                object.content = "";
                object.author = null;
                object.createdAt = "";
                object.likesCount = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.author != null && message.hasOwnProperty("author"))
                object.author = $root.social.User.toObject(message.author, options);
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.likesCount != null && message.hasOwnProperty("likesCount"))
                object.likesCount = message.likesCount;
            if (message.comments && message.comments.length) {
                object.comments = [];
                for (var j = 0; j < message.comments.length; ++j)
                    object.comments[j] = $root.social.Comment.toObject(message.comments[j], options);
            }
            if (message.nftAddress != null && message.hasOwnProperty("nftAddress")) {
                object.nftAddress = message.nftAddress;
                if (options.oneofs)
                    object._nftAddress = "nftAddress";
            }
            return object;
        };

        /**
         * Converts this Post to JSON.
         * @function toJSON
         * @memberof social.Post
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Post.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Post
         * @function getTypeUrl
         * @memberof social.Post
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Post.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/social.Post";
        };

        return Post;
    })();

    social.Comment = (function() {

        /**
         * Properties of a Comment.
         * @memberof social
         * @interface IComment
         * @property {string|null} [id] Comment id
         * @property {string|null} [content] Comment content
         * @property {social.IUser|null} [author] Comment author
         * @property {string|null} [createdAt] Comment createdAt
         */

        /**
         * Constructs a new Comment.
         * @memberof social
         * @classdesc Represents a Comment.
         * @implements IComment
         * @constructor
         * @param {social.IComment=} [properties] Properties to set
         */
        function Comment(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Comment id.
         * @member {string} id
         * @memberof social.Comment
         * @instance
         */
        Comment.prototype.id = "";

        /**
         * Comment content.
         * @member {string} content
         * @memberof social.Comment
         * @instance
         */
        Comment.prototype.content = "";

        /**
         * Comment author.
         * @member {social.IUser|null|undefined} author
         * @memberof social.Comment
         * @instance
         */
        Comment.prototype.author = null;

        /**
         * Comment createdAt.
         * @member {string} createdAt
         * @memberof social.Comment
         * @instance
         */
        Comment.prototype.createdAt = "";

        /**
         * Creates a new Comment instance using the specified properties.
         * @function create
         * @memberof social.Comment
         * @static
         * @param {social.IComment=} [properties] Properties to set
         * @returns {social.Comment} Comment instance
         */
        Comment.create = function create(properties) {
            return new Comment(properties);
        };

        /**
         * Encodes the specified Comment message. Does not implicitly {@link social.Comment.verify|verify} messages.
         * @function encode
         * @memberof social.Comment
         * @static
         * @param {social.IComment} message Comment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Comment.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
            if (message.author != null && Object.hasOwnProperty.call(message, "author"))
                $root.social.User.encode(message.author, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.createdAt);
            return writer;
        };

        /**
         * Encodes the specified Comment message, length delimited. Does not implicitly {@link social.Comment.verify|verify} messages.
         * @function encodeDelimited
         * @memberof social.Comment
         * @static
         * @param {social.IComment} message Comment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Comment.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Comment message from the specified reader or buffer.
         * @function decode
         * @memberof social.Comment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {social.Comment} Comment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Comment.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.social.Comment();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.content = reader.string();
                        break;
                    }
                case 3: {
                        message.author = $root.social.User.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.createdAt = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Comment message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof social.Comment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {social.Comment} Comment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Comment.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Comment message.
         * @function verify
         * @memberof social.Comment
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Comment.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.author != null && message.hasOwnProperty("author")) {
                var error = $root.social.User.verify(message.author);
                if (error)
                    return "author." + error;
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            return null;
        };

        /**
         * Creates a Comment message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof social.Comment
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {social.Comment} Comment
         */
        Comment.fromObject = function fromObject(object) {
            if (object instanceof $root.social.Comment)
                return object;
            var message = new $root.social.Comment();
            if (object.id != null)
                message.id = String(object.id);
            if (object.content != null)
                message.content = String(object.content);
            if (object.author != null) {
                if (typeof object.author !== "object")
                    throw TypeError(".social.Comment.author: object expected");
                message.author = $root.social.User.fromObject(object.author);
            }
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            return message;
        };

        /**
         * Creates a plain object from a Comment message. Also converts values to other types if specified.
         * @function toObject
         * @memberof social.Comment
         * @static
         * @param {social.Comment} message Comment
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Comment.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.content = "";
                object.author = null;
                object.createdAt = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.author != null && message.hasOwnProperty("author"))
                object.author = $root.social.User.toObject(message.author, options);
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            return object;
        };

        /**
         * Converts this Comment to JSON.
         * @function toJSON
         * @memberof social.Comment
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Comment.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Comment
         * @function getTypeUrl
         * @memberof social.Comment
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Comment.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/social.Comment";
        };

        return Comment;
    })();

    social.CreatePostRequest = (function() {

        /**
         * Properties of a CreatePostRequest.
         * @memberof social
         * @interface ICreatePostRequest
         * @property {string|null} [content] CreatePostRequest content
         * @property {string|null} [nftAddress] CreatePostRequest nftAddress
         */

        /**
         * Constructs a new CreatePostRequest.
         * @memberof social
         * @classdesc Represents a CreatePostRequest.
         * @implements ICreatePostRequest
         * @constructor
         * @param {social.ICreatePostRequest=} [properties] Properties to set
         */
        function CreatePostRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreatePostRequest content.
         * @member {string} content
         * @memberof social.CreatePostRequest
         * @instance
         */
        CreatePostRequest.prototype.content = "";

        /**
         * CreatePostRequest nftAddress.
         * @member {string|null|undefined} nftAddress
         * @memberof social.CreatePostRequest
         * @instance
         */
        CreatePostRequest.prototype.nftAddress = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CreatePostRequest.prototype, "_nftAddress", {
            get: $util.oneOfGetter($oneOfFields = ["nftAddress"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CreatePostRequest instance using the specified properties.
         * @function create
         * @memberof social.CreatePostRequest
         * @static
         * @param {social.ICreatePostRequest=} [properties] Properties to set
         * @returns {social.CreatePostRequest} CreatePostRequest instance
         */
        CreatePostRequest.create = function create(properties) {
            return new CreatePostRequest(properties);
        };

        /**
         * Encodes the specified CreatePostRequest message. Does not implicitly {@link social.CreatePostRequest.verify|verify} messages.
         * @function encode
         * @memberof social.CreatePostRequest
         * @static
         * @param {social.ICreatePostRequest} message CreatePostRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePostRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
            if (message.nftAddress != null && Object.hasOwnProperty.call(message, "nftAddress"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nftAddress);
            return writer;
        };

        /**
         * Encodes the specified CreatePostRequest message, length delimited. Does not implicitly {@link social.CreatePostRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof social.CreatePostRequest
         * @static
         * @param {social.ICreatePostRequest} message CreatePostRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePostRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreatePostRequest message from the specified reader or buffer.
         * @function decode
         * @memberof social.CreatePostRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {social.CreatePostRequest} CreatePostRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePostRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.social.CreatePostRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.content = reader.string();
                        break;
                    }
                case 2: {
                        message.nftAddress = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreatePostRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof social.CreatePostRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {social.CreatePostRequest} CreatePostRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePostRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreatePostRequest message.
         * @function verify
         * @memberof social.CreatePostRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreatePostRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.nftAddress != null && message.hasOwnProperty("nftAddress")) {
                properties._nftAddress = 1;
                if (!$util.isString(message.nftAddress))
                    return "nftAddress: string expected";
            }
            return null;
        };

        /**
         * Creates a CreatePostRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof social.CreatePostRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {social.CreatePostRequest} CreatePostRequest
         */
        CreatePostRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.social.CreatePostRequest)
                return object;
            var message = new $root.social.CreatePostRequest();
            if (object.content != null)
                message.content = String(object.content);
            if (object.nftAddress != null)
                message.nftAddress = String(object.nftAddress);
            return message;
        };

        /**
         * Creates a plain object from a CreatePostRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof social.CreatePostRequest
         * @static
         * @param {social.CreatePostRequest} message CreatePostRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreatePostRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.content = "";
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.nftAddress != null && message.hasOwnProperty("nftAddress")) {
                object.nftAddress = message.nftAddress;
                if (options.oneofs)
                    object._nftAddress = "nftAddress";
            }
            return object;
        };

        /**
         * Converts this CreatePostRequest to JSON.
         * @function toJSON
         * @memberof social.CreatePostRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreatePostRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreatePostRequest
         * @function getTypeUrl
         * @memberof social.CreatePostRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreatePostRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/social.CreatePostRequest";
        };

        return CreatePostRequest;
    })();

    social.GetFeedRequest = (function() {

        /**
         * Properties of a GetFeedRequest.
         * @memberof social
         * @interface IGetFeedRequest
         * @property {number|null} [limit] GetFeedRequest limit
         * @property {number|null} [offset] GetFeedRequest offset
         */

        /**
         * Constructs a new GetFeedRequest.
         * @memberof social
         * @classdesc Represents a GetFeedRequest.
         * @implements IGetFeedRequest
         * @constructor
         * @param {social.IGetFeedRequest=} [properties] Properties to set
         */
        function GetFeedRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetFeedRequest limit.
         * @member {number} limit
         * @memberof social.GetFeedRequest
         * @instance
         */
        GetFeedRequest.prototype.limit = 0;

        /**
         * GetFeedRequest offset.
         * @member {number} offset
         * @memberof social.GetFeedRequest
         * @instance
         */
        GetFeedRequest.prototype.offset = 0;

        /**
         * Creates a new GetFeedRequest instance using the specified properties.
         * @function create
         * @memberof social.GetFeedRequest
         * @static
         * @param {social.IGetFeedRequest=} [properties] Properties to set
         * @returns {social.GetFeedRequest} GetFeedRequest instance
         */
        GetFeedRequest.create = function create(properties) {
            return new GetFeedRequest(properties);
        };

        /**
         * Encodes the specified GetFeedRequest message. Does not implicitly {@link social.GetFeedRequest.verify|verify} messages.
         * @function encode
         * @memberof social.GetFeedRequest
         * @static
         * @param {social.IGetFeedRequest} message GetFeedRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFeedRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.limit);
            if (message.offset != null && Object.hasOwnProperty.call(message, "offset"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.offset);
            return writer;
        };

        /**
         * Encodes the specified GetFeedRequest message, length delimited. Does not implicitly {@link social.GetFeedRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof social.GetFeedRequest
         * @static
         * @param {social.IGetFeedRequest} message GetFeedRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFeedRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetFeedRequest message from the specified reader or buffer.
         * @function decode
         * @memberof social.GetFeedRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {social.GetFeedRequest} GetFeedRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFeedRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.social.GetFeedRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.limit = reader.int32();
                        break;
                    }
                case 2: {
                        message.offset = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetFeedRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof social.GetFeedRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {social.GetFeedRequest} GetFeedRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFeedRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetFeedRequest message.
         * @function verify
         * @memberof social.GetFeedRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetFeedRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (!$util.isInteger(message.limit))
                    return "limit: integer expected";
            if (message.offset != null && message.hasOwnProperty("offset"))
                if (!$util.isInteger(message.offset))
                    return "offset: integer expected";
            return null;
        };

        /**
         * Creates a GetFeedRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof social.GetFeedRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {social.GetFeedRequest} GetFeedRequest
         */
        GetFeedRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.social.GetFeedRequest)
                return object;
            var message = new $root.social.GetFeedRequest();
            if (object.limit != null)
                message.limit = object.limit | 0;
            if (object.offset != null)
                message.offset = object.offset | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetFeedRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof social.GetFeedRequest
         * @static
         * @param {social.GetFeedRequest} message GetFeedRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetFeedRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.limit = 0;
                object.offset = 0;
            }
            if (message.limit != null && message.hasOwnProperty("limit"))
                object.limit = message.limit;
            if (message.offset != null && message.hasOwnProperty("offset"))
                object.offset = message.offset;
            return object;
        };

        /**
         * Converts this GetFeedRequest to JSON.
         * @function toJSON
         * @memberof social.GetFeedRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetFeedRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetFeedRequest
         * @function getTypeUrl
         * @memberof social.GetFeedRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetFeedRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/social.GetFeedRequest";
        };

        return GetFeedRequest;
    })();

    social.PostList = (function() {

        /**
         * Properties of a PostList.
         * @memberof social
         * @interface IPostList
         * @property {Array.<social.IPost>|null} [posts] PostList posts
         * @property {number|null} [total] PostList total
         */

        /**
         * Constructs a new PostList.
         * @memberof social
         * @classdesc Represents a PostList.
         * @implements IPostList
         * @constructor
         * @param {social.IPostList=} [properties] Properties to set
         */
        function PostList(properties) {
            this.posts = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PostList posts.
         * @member {Array.<social.IPost>} posts
         * @memberof social.PostList
         * @instance
         */
        PostList.prototype.posts = $util.emptyArray;

        /**
         * PostList total.
         * @member {number} total
         * @memberof social.PostList
         * @instance
         */
        PostList.prototype.total = 0;

        /**
         * Creates a new PostList instance using the specified properties.
         * @function create
         * @memberof social.PostList
         * @static
         * @param {social.IPostList=} [properties] Properties to set
         * @returns {social.PostList} PostList instance
         */
        PostList.create = function create(properties) {
            return new PostList(properties);
        };

        /**
         * Encodes the specified PostList message. Does not implicitly {@link social.PostList.verify|verify} messages.
         * @function encode
         * @memberof social.PostList
         * @static
         * @param {social.IPostList} message PostList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PostList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.posts != null && message.posts.length)
                for (var i = 0; i < message.posts.length; ++i)
                    $root.social.Post.encode(message.posts[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.total);
            return writer;
        };

        /**
         * Encodes the specified PostList message, length delimited. Does not implicitly {@link social.PostList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof social.PostList
         * @static
         * @param {social.IPostList} message PostList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PostList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PostList message from the specified reader or buffer.
         * @function decode
         * @memberof social.PostList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {social.PostList} PostList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PostList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.social.PostList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.posts && message.posts.length))
                            message.posts = [];
                        message.posts.push($root.social.Post.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.total = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PostList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof social.PostList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {social.PostList} PostList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PostList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PostList message.
         * @function verify
         * @memberof social.PostList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PostList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.posts != null && message.hasOwnProperty("posts")) {
                if (!Array.isArray(message.posts))
                    return "posts: array expected";
                for (var i = 0; i < message.posts.length; ++i) {
                    var error = $root.social.Post.verify(message.posts[i]);
                    if (error)
                        return "posts." + error;
                }
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total))
                    return "total: integer expected";
            return null;
        };

        /**
         * Creates a PostList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof social.PostList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {social.PostList} PostList
         */
        PostList.fromObject = function fromObject(object) {
            if (object instanceof $root.social.PostList)
                return object;
            var message = new $root.social.PostList();
            if (object.posts) {
                if (!Array.isArray(object.posts))
                    throw TypeError(".social.PostList.posts: array expected");
                message.posts = [];
                for (var i = 0; i < object.posts.length; ++i) {
                    if (typeof object.posts[i] !== "object")
                        throw TypeError(".social.PostList.posts: object expected");
                    message.posts[i] = $root.social.Post.fromObject(object.posts[i]);
                }
            }
            if (object.total != null)
                message.total = object.total | 0;
            return message;
        };

        /**
         * Creates a plain object from a PostList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof social.PostList
         * @static
         * @param {social.PostList} message PostList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PostList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.posts = [];
            if (options.defaults)
                object.total = 0;
            if (message.posts && message.posts.length) {
                object.posts = [];
                for (var j = 0; j < message.posts.length; ++j)
                    object.posts[j] = $root.social.Post.toObject(message.posts[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                object.total = message.total;
            return object;
        };

        /**
         * Converts this PostList to JSON.
         * @function toJSON
         * @memberof social.PostList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PostList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PostList
         * @function getTypeUrl
         * @memberof social.PostList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PostList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/social.PostList";
        };

        return PostList;
    })();

    social.LikePostRequest = (function() {

        /**
         * Properties of a LikePostRequest.
         * @memberof social
         * @interface ILikePostRequest
         * @property {string|null} [postId] LikePostRequest postId
         */

        /**
         * Constructs a new LikePostRequest.
         * @memberof social
         * @classdesc Represents a LikePostRequest.
         * @implements ILikePostRequest
         * @constructor
         * @param {social.ILikePostRequest=} [properties] Properties to set
         */
        function LikePostRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LikePostRequest postId.
         * @member {string} postId
         * @memberof social.LikePostRequest
         * @instance
         */
        LikePostRequest.prototype.postId = "";

        /**
         * Creates a new LikePostRequest instance using the specified properties.
         * @function create
         * @memberof social.LikePostRequest
         * @static
         * @param {social.ILikePostRequest=} [properties] Properties to set
         * @returns {social.LikePostRequest} LikePostRequest instance
         */
        LikePostRequest.create = function create(properties) {
            return new LikePostRequest(properties);
        };

        /**
         * Encodes the specified LikePostRequest message. Does not implicitly {@link social.LikePostRequest.verify|verify} messages.
         * @function encode
         * @memberof social.LikePostRequest
         * @static
         * @param {social.ILikePostRequest} message LikePostRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LikePostRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.postId != null && Object.hasOwnProperty.call(message, "postId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.postId);
            return writer;
        };

        /**
         * Encodes the specified LikePostRequest message, length delimited. Does not implicitly {@link social.LikePostRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof social.LikePostRequest
         * @static
         * @param {social.ILikePostRequest} message LikePostRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LikePostRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LikePostRequest message from the specified reader or buffer.
         * @function decode
         * @memberof social.LikePostRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {social.LikePostRequest} LikePostRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LikePostRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.social.LikePostRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.postId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LikePostRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof social.LikePostRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {social.LikePostRequest} LikePostRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LikePostRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LikePostRequest message.
         * @function verify
         * @memberof social.LikePostRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LikePostRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.postId != null && message.hasOwnProperty("postId"))
                if (!$util.isString(message.postId))
                    return "postId: string expected";
            return null;
        };

        /**
         * Creates a LikePostRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof social.LikePostRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {social.LikePostRequest} LikePostRequest
         */
        LikePostRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.social.LikePostRequest)
                return object;
            var message = new $root.social.LikePostRequest();
            if (object.postId != null)
                message.postId = String(object.postId);
            return message;
        };

        /**
         * Creates a plain object from a LikePostRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof social.LikePostRequest
         * @static
         * @param {social.LikePostRequest} message LikePostRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LikePostRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.postId = "";
            if (message.postId != null && message.hasOwnProperty("postId"))
                object.postId = message.postId;
            return object;
        };

        /**
         * Converts this LikePostRequest to JSON.
         * @function toJSON
         * @memberof social.LikePostRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LikePostRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LikePostRequest
         * @function getTypeUrl
         * @memberof social.LikePostRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LikePostRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/social.LikePostRequest";
        };

        return LikePostRequest;
    })();

    social.MintPostNFTRequest = (function() {

        /**
         * Properties of a MintPostNFTRequest.
         * @memberof social
         * @interface IMintPostNFTRequest
         * @property {string|null} [postId] MintPostNFTRequest postId
         */

        /**
         * Constructs a new MintPostNFTRequest.
         * @memberof social
         * @classdesc Represents a MintPostNFTRequest.
         * @implements IMintPostNFTRequest
         * @constructor
         * @param {social.IMintPostNFTRequest=} [properties] Properties to set
         */
        function MintPostNFTRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MintPostNFTRequest postId.
         * @member {string} postId
         * @memberof social.MintPostNFTRequest
         * @instance
         */
        MintPostNFTRequest.prototype.postId = "";

        /**
         * Creates a new MintPostNFTRequest instance using the specified properties.
         * @function create
         * @memberof social.MintPostNFTRequest
         * @static
         * @param {social.IMintPostNFTRequest=} [properties] Properties to set
         * @returns {social.MintPostNFTRequest} MintPostNFTRequest instance
         */
        MintPostNFTRequest.create = function create(properties) {
            return new MintPostNFTRequest(properties);
        };

        /**
         * Encodes the specified MintPostNFTRequest message. Does not implicitly {@link social.MintPostNFTRequest.verify|verify} messages.
         * @function encode
         * @memberof social.MintPostNFTRequest
         * @static
         * @param {social.IMintPostNFTRequest} message MintPostNFTRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MintPostNFTRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.postId != null && Object.hasOwnProperty.call(message, "postId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.postId);
            return writer;
        };

        /**
         * Encodes the specified MintPostNFTRequest message, length delimited. Does not implicitly {@link social.MintPostNFTRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof social.MintPostNFTRequest
         * @static
         * @param {social.IMintPostNFTRequest} message MintPostNFTRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MintPostNFTRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MintPostNFTRequest message from the specified reader or buffer.
         * @function decode
         * @memberof social.MintPostNFTRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {social.MintPostNFTRequest} MintPostNFTRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MintPostNFTRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.social.MintPostNFTRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.postId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MintPostNFTRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof social.MintPostNFTRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {social.MintPostNFTRequest} MintPostNFTRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MintPostNFTRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MintPostNFTRequest message.
         * @function verify
         * @memberof social.MintPostNFTRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MintPostNFTRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.postId != null && message.hasOwnProperty("postId"))
                if (!$util.isString(message.postId))
                    return "postId: string expected";
            return null;
        };

        /**
         * Creates a MintPostNFTRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof social.MintPostNFTRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {social.MintPostNFTRequest} MintPostNFTRequest
         */
        MintPostNFTRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.social.MintPostNFTRequest)
                return object;
            var message = new $root.social.MintPostNFTRequest();
            if (object.postId != null)
                message.postId = String(object.postId);
            return message;
        };

        /**
         * Creates a plain object from a MintPostNFTRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof social.MintPostNFTRequest
         * @static
         * @param {social.MintPostNFTRequest} message MintPostNFTRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MintPostNFTRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.postId = "";
            if (message.postId != null && message.hasOwnProperty("postId"))
                object.postId = message.postId;
            return object;
        };

        /**
         * Converts this MintPostNFTRequest to JSON.
         * @function toJSON
         * @memberof social.MintPostNFTRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MintPostNFTRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MintPostNFTRequest
         * @function getTypeUrl
         * @memberof social.MintPostNFTRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MintPostNFTRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/social.MintPostNFTRequest";
        };

        return MintPostNFTRequest;
    })();

    social.NFTResponse = (function() {

        /**
         * Properties of a NFTResponse.
         * @memberof social
         * @interface INFTResponse
         * @property {string|null} [transactionHash] NFTResponse transactionHash
         * @property {string|null} [nftAddress] NFTResponse nftAddress
         * @property {string|null} [tokenId] NFTResponse tokenId
         */

        /**
         * Constructs a new NFTResponse.
         * @memberof social
         * @classdesc Represents a NFTResponse.
         * @implements INFTResponse
         * @constructor
         * @param {social.INFTResponse=} [properties] Properties to set
         */
        function NFTResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NFTResponse transactionHash.
         * @member {string} transactionHash
         * @memberof social.NFTResponse
         * @instance
         */
        NFTResponse.prototype.transactionHash = "";

        /**
         * NFTResponse nftAddress.
         * @member {string} nftAddress
         * @memberof social.NFTResponse
         * @instance
         */
        NFTResponse.prototype.nftAddress = "";

        /**
         * NFTResponse tokenId.
         * @member {string} tokenId
         * @memberof social.NFTResponse
         * @instance
         */
        NFTResponse.prototype.tokenId = "";

        /**
         * Creates a new NFTResponse instance using the specified properties.
         * @function create
         * @memberof social.NFTResponse
         * @static
         * @param {social.INFTResponse=} [properties] Properties to set
         * @returns {social.NFTResponse} NFTResponse instance
         */
        NFTResponse.create = function create(properties) {
            return new NFTResponse(properties);
        };

        /**
         * Encodes the specified NFTResponse message. Does not implicitly {@link social.NFTResponse.verify|verify} messages.
         * @function encode
         * @memberof social.NFTResponse
         * @static
         * @param {social.INFTResponse} message NFTResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NFTResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.transactionHash != null && Object.hasOwnProperty.call(message, "transactionHash"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.transactionHash);
            if (message.nftAddress != null && Object.hasOwnProperty.call(message, "nftAddress"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nftAddress);
            if (message.tokenId != null && Object.hasOwnProperty.call(message, "tokenId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.tokenId);
            return writer;
        };

        /**
         * Encodes the specified NFTResponse message, length delimited. Does not implicitly {@link social.NFTResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof social.NFTResponse
         * @static
         * @param {social.INFTResponse} message NFTResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NFTResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NFTResponse message from the specified reader or buffer.
         * @function decode
         * @memberof social.NFTResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {social.NFTResponse} NFTResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NFTResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.social.NFTResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.transactionHash = reader.string();
                        break;
                    }
                case 2: {
                        message.nftAddress = reader.string();
                        break;
                    }
                case 3: {
                        message.tokenId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NFTResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof social.NFTResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {social.NFTResponse} NFTResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NFTResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NFTResponse message.
         * @function verify
         * @memberof social.NFTResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NFTResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.transactionHash != null && message.hasOwnProperty("transactionHash"))
                if (!$util.isString(message.transactionHash))
                    return "transactionHash: string expected";
            if (message.nftAddress != null && message.hasOwnProperty("nftAddress"))
                if (!$util.isString(message.nftAddress))
                    return "nftAddress: string expected";
            if (message.tokenId != null && message.hasOwnProperty("tokenId"))
                if (!$util.isString(message.tokenId))
                    return "tokenId: string expected";
            return null;
        };

        /**
         * Creates a NFTResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof social.NFTResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {social.NFTResponse} NFTResponse
         */
        NFTResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.social.NFTResponse)
                return object;
            var message = new $root.social.NFTResponse();
            if (object.transactionHash != null)
                message.transactionHash = String(object.transactionHash);
            if (object.nftAddress != null)
                message.nftAddress = String(object.nftAddress);
            if (object.tokenId != null)
                message.tokenId = String(object.tokenId);
            return message;
        };

        /**
         * Creates a plain object from a NFTResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof social.NFTResponse
         * @static
         * @param {social.NFTResponse} message NFTResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NFTResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.transactionHash = "";
                object.nftAddress = "";
                object.tokenId = "";
            }
            if (message.transactionHash != null && message.hasOwnProperty("transactionHash"))
                object.transactionHash = message.transactionHash;
            if (message.nftAddress != null && message.hasOwnProperty("nftAddress"))
                object.nftAddress = message.nftAddress;
            if (message.tokenId != null && message.hasOwnProperty("tokenId"))
                object.tokenId = message.tokenId;
            return object;
        };

        /**
         * Converts this NFTResponse to JSON.
         * @function toJSON
         * @memberof social.NFTResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NFTResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NFTResponse
         * @function getTypeUrl
         * @memberof social.NFTResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NFTResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/social.NFTResponse";
        };

        return NFTResponse;
    })();

    return social;
})();

module.exports = $root;
