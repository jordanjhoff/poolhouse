
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Match
 * 
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>
/**
 * Model UserV2
 * 
 */
export type UserV2 = $Result.DefaultSelection<Prisma.$UserV2Payload>
/**
 * Model MatchV2
 * 
 */
export type MatchV2 = $Result.DefaultSelection<Prisma.$MatchV2Payload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **Match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.MatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userV2`: Exposes CRUD operations for the **UserV2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserV2s
    * const userV2s = await prisma.userV2.findMany()
    * ```
    */
  get userV2(): Prisma.UserV2Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matchV2`: Exposes CRUD operations for the **MatchV2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchV2s
    * const matchV2s = await prisma.matchV2.findMany()
    * ```
    */
  get matchV2(): Prisma.MatchV2Delegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Match: 'Match',
    UserV2: 'UserV2',
    MatchV2: 'MatchV2'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "match" | "userV2" | "matchV2"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Match: {
        payload: Prisma.$MatchPayload<ExtArgs>
        fields: Prisma.MatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findFirst: {
            args: Prisma.MatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findMany: {
            args: Prisma.MatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          create: {
            args: Prisma.MatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          createMany: {
            args: Prisma.MatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          delete: {
            args: Prisma.MatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          update: {
            args: Prisma.MatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          deleteMany: {
            args: Prisma.MatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          upsert: {
            args: Prisma.MatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.MatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchCountArgs<ExtArgs>
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
          }
        }
      }
      UserV2: {
        payload: Prisma.$UserV2Payload<ExtArgs>
        fields: Prisma.UserV2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserV2FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserV2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserV2FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserV2Payload>
          }
          findFirst: {
            args: Prisma.UserV2FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserV2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserV2FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserV2Payload>
          }
          findMany: {
            args: Prisma.UserV2FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserV2Payload>[]
          }
          create: {
            args: Prisma.UserV2CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserV2Payload>
          }
          createMany: {
            args: Prisma.UserV2CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserV2CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserV2Payload>[]
          }
          delete: {
            args: Prisma.UserV2DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserV2Payload>
          }
          update: {
            args: Prisma.UserV2UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserV2Payload>
          }
          deleteMany: {
            args: Prisma.UserV2DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserV2UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserV2UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserV2Payload>[]
          }
          upsert: {
            args: Prisma.UserV2UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserV2Payload>
          }
          aggregate: {
            args: Prisma.UserV2AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserV2>
          }
          groupBy: {
            args: Prisma.UserV2GroupByArgs<ExtArgs>
            result: $Utils.Optional<UserV2GroupByOutputType>[]
          }
          count: {
            args: Prisma.UserV2CountArgs<ExtArgs>
            result: $Utils.Optional<UserV2CountAggregateOutputType> | number
          }
        }
      }
      MatchV2: {
        payload: Prisma.$MatchV2Payload<ExtArgs>
        fields: Prisma.MatchV2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchV2FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchV2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchV2FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchV2Payload>
          }
          findFirst: {
            args: Prisma.MatchV2FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchV2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchV2FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchV2Payload>
          }
          findMany: {
            args: Prisma.MatchV2FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchV2Payload>[]
          }
          create: {
            args: Prisma.MatchV2CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchV2Payload>
          }
          createMany: {
            args: Prisma.MatchV2CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchV2CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchV2Payload>[]
          }
          delete: {
            args: Prisma.MatchV2DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchV2Payload>
          }
          update: {
            args: Prisma.MatchV2UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchV2Payload>
          }
          deleteMany: {
            args: Prisma.MatchV2DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchV2UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchV2UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchV2Payload>[]
          }
          upsert: {
            args: Prisma.MatchV2UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchV2Payload>
          }
          aggregate: {
            args: Prisma.MatchV2AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatchV2>
          }
          groupBy: {
            args: Prisma.MatchV2GroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchV2GroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchV2CountArgs<ExtArgs>
            result: $Utils.Optional<MatchV2CountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    match?: MatchOmit
    userV2?: UserV2Omit
    matchV2?: MatchV2Omit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    matches1: number
    matches2: number
    wins: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches1?: boolean | UserCountOutputTypeCountMatches1Args
    matches2?: boolean | UserCountOutputTypeCountMatches2Args
    wins?: boolean | UserCountOutputTypeCountWinsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatches1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatches2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }


  /**
   * Count Type UserV2CountOutputType
   */

  export type UserV2CountOutputType = {
    matches1: number
    matches2: number
    wins: number
  }

  export type UserV2CountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches1?: boolean | UserV2CountOutputTypeCountMatches1Args
    matches2?: boolean | UserV2CountOutputTypeCountMatches2Args
    wins?: boolean | UserV2CountOutputTypeCountWinsArgs
  }

  // Custom InputTypes
  /**
   * UserV2CountOutputType without action
   */
  export type UserV2CountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserV2CountOutputType
     */
    select?: UserV2CountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserV2CountOutputType without action
   */
  export type UserV2CountOutputTypeCountMatches1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchV2WhereInput
  }

  /**
   * UserV2CountOutputType without action
   */
  export type UserV2CountOutputTypeCountMatches2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchV2WhereInput
  }

  /**
   * UserV2CountOutputType without action
   */
  export type UserV2CountOutputTypeCountWinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchV2WhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    elo: number | null
    k: number | null
  }

  export type UserSumAggregateOutputType = {
    elo: number | null
    k: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    elo: number | null
    k: number | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    elo: number | null
    k: number | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    password: number
    elo: number
    k: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    elo?: true
    k?: true
  }

  export type UserSumAggregateInputType = {
    elo?: true
    k?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
    elo?: true
    k?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
    elo?: true
    k?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    elo?: true
    k?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    password: string
    elo: number
    k: number
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    elo?: boolean
    k?: boolean
    createdAt?: boolean
    matches1?: boolean | User$matches1Args<ExtArgs>
    matches2?: boolean | User$matches2Args<ExtArgs>
    wins?: boolean | User$winsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    elo?: boolean
    k?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    elo?: boolean
    k?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
    elo?: boolean
    k?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password" | "elo" | "k" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches1?: boolean | User$matches1Args<ExtArgs>
    matches2?: boolean | User$matches2Args<ExtArgs>
    wins?: boolean | User$winsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      matches1: Prisma.$MatchPayload<ExtArgs>[]
      matches2: Prisma.$MatchPayload<ExtArgs>[]
      wins: Prisma.$MatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      password: string
      elo: number
      k: number
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matches1<T extends User$matches1Args<ExtArgs> = {}>(args?: Subset<T, User$matches1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matches2<T extends User$matches2Args<ExtArgs> = {}>(args?: Subset<T, User$matches2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wins<T extends User$winsArgs<ExtArgs> = {}>(args?: Subset<T, User$winsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly elo: FieldRef<"User", 'Int'>
    readonly k: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.matches1
   */
  export type User$matches1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.matches2
   */
  export type User$matches2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.wins
   */
  export type User$winsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchAvgAggregateOutputType = {
    player1eloChange: number | null
    player2eloChange: number | null
  }

  export type MatchSumAggregateOutputType = {
    player1eloChange: number | null
    player2eloChange: number | null
  }

  export type MatchMinAggregateOutputType = {
    id: string | null
    player1Id: string | null
    player2Id: string | null
    winnerId: string | null
    createdAt: Date | null
    player1eloChange: number | null
    player2eloChange: number | null
  }

  export type MatchMaxAggregateOutputType = {
    id: string | null
    player1Id: string | null
    player2Id: string | null
    winnerId: string | null
    createdAt: Date | null
    player1eloChange: number | null
    player2eloChange: number | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    player1Id: number
    player2Id: number
    winnerId: number
    createdAt: number
    player1eloChange: number
    player2eloChange: number
    _all: number
  }


  export type MatchAvgAggregateInputType = {
    player1eloChange?: true
    player2eloChange?: true
  }

  export type MatchSumAggregateInputType = {
    player1eloChange?: true
    player2eloChange?: true
  }

  export type MatchMinAggregateInputType = {
    id?: true
    player1Id?: true
    player2Id?: true
    winnerId?: true
    createdAt?: true
    player1eloChange?: true
    player2eloChange?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    player1Id?: true
    player2Id?: true
    winnerId?: true
    createdAt?: true
    player1eloChange?: true
    player2eloChange?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    player1Id?: true
    player2Id?: true
    winnerId?: true
    createdAt?: true
    player1eloChange?: true
    player2eloChange?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Match to aggregate.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type MatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithAggregationInput | MatchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: MatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _avg?: MatchAvgAggregateInputType
    _sum?: MatchSumAggregateInputType
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    id: string
    player1Id: string
    player2Id: string
    winnerId: string
    createdAt: Date
    player1eloChange: number
    player2eloChange: number
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type MatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player1Id?: boolean
    player2Id?: boolean
    winnerId?: boolean
    createdAt?: boolean
    player1eloChange?: boolean
    player2eloChange?: boolean
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
    winner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player1Id?: boolean
    player2Id?: boolean
    winnerId?: boolean
    createdAt?: boolean
    player1eloChange?: boolean
    player2eloChange?: boolean
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
    winner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player1Id?: boolean
    player2Id?: boolean
    winnerId?: boolean
    createdAt?: boolean
    player1eloChange?: boolean
    player2eloChange?: boolean
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
    winner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectScalar = {
    id?: boolean
    player1Id?: boolean
    player2Id?: boolean
    winnerId?: boolean
    createdAt?: boolean
    player1eloChange?: boolean
    player2eloChange?: boolean
  }

  export type MatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "player1Id" | "player2Id" | "winnerId" | "createdAt" | "player1eloChange" | "player2eloChange", ExtArgs["result"]["match"]>
  export type MatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
    winner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
    winner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
    winner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Match"
    objects: {
      player1: Prisma.$UserPayload<ExtArgs>
      player2: Prisma.$UserPayload<ExtArgs>
      winner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      player1Id: string
      player2Id: string
      winnerId: string
      createdAt: Date
      player1eloChange: number
      player2eloChange: number
    }, ExtArgs["result"]["match"]>
    composites: {}
  }

  type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = $Result.GetResult<Prisma.$MatchPayload, S>

  type MatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface MatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Match'], meta: { name: 'Match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {MatchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFindUniqueArgs>(args: SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFindFirstArgs>(args?: SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchFindManyArgs>(args?: SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match.
     * @param {MatchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
     */
    create<T extends MatchCreateArgs>(args: SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {MatchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchCreateManyArgs>(args?: SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {MatchCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Match.
     * @param {MatchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
     */
    delete<T extends MatchDeleteArgs>(args: SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match.
     * @param {MatchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchUpdateArgs>(args: SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {MatchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchDeleteManyArgs>(args?: SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchUpdateManyArgs>(args: SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {MatchUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Match.
     * @param {MatchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends MatchUpsertArgs>(args: SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchCountArgs>(
      args?: Subset<T, MatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Match model
   */
  readonly fields: MatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player1<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player2<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    winner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Match model
   */
  interface MatchFieldRefs {
    readonly id: FieldRef<"Match", 'String'>
    readonly player1Id: FieldRef<"Match", 'String'>
    readonly player2Id: FieldRef<"Match", 'String'>
    readonly winnerId: FieldRef<"Match", 'String'>
    readonly createdAt: FieldRef<"Match", 'DateTime'>
    readonly player1eloChange: FieldRef<"Match", 'Int'>
    readonly player2eloChange: FieldRef<"Match", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Match findUnique
   */
  export type MatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findUniqueOrThrow
   */
  export type MatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findFirst
   */
  export type MatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findFirstOrThrow
   */
  export type MatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findMany
   */
  export type MatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match create
   */
  export type MatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Match.
     */
    data: XOR<MatchCreateInput, MatchUncheckedCreateInput>
  }

  /**
   * Match createMany
   */
  export type MatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Match createManyAndReturn
   */
  export type MatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match update
   */
  export type MatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Match.
     */
    data: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
    /**
     * Choose, which Match to update.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match updateMany
   */
  export type MatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Match updateManyAndReturn
   */
  export type MatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match upsert
   */
  export type MatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Match to update in case it exists.
     */
    where: MatchWhereUniqueInput
    /**
     * In case the Match found by the `where` argument doesn't exist, create a new Match with this data.
     */
    create: XOR<MatchCreateInput, MatchUncheckedCreateInput>
    /**
     * In case the Match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
  }

  /**
   * Match delete
   */
  export type MatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter which Match to delete.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match deleteMany
   */
  export type MatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to delete.
     */
    limit?: number
  }

  /**
   * Match without action
   */
  export type MatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
  }


  /**
   * Model UserV2
   */

  export type AggregateUserV2 = {
    _count: UserV2CountAggregateOutputType | null
    _avg: UserV2AvgAggregateOutputType | null
    _sum: UserV2SumAggregateOutputType | null
    _min: UserV2MinAggregateOutputType | null
    _max: UserV2MaxAggregateOutputType | null
  }

  export type UserV2AvgAggregateOutputType = {
    rating: number | null
    rd: number | null
  }

  export type UserV2SumAggregateOutputType = {
    rating: number | null
    rd: number | null
  }

  export type UserV2MinAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    rating: number | null
    rd: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserV2MaxAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    rating: number | null
    rd: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserV2CountAggregateOutputType = {
    id: number
    name: number
    password: number
    rating: number
    rd: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserV2AvgAggregateInputType = {
    rating?: true
    rd?: true
  }

  export type UserV2SumAggregateInputType = {
    rating?: true
    rd?: true
  }

  export type UserV2MinAggregateInputType = {
    id?: true
    name?: true
    password?: true
    rating?: true
    rd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserV2MaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
    rating?: true
    rd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserV2CountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    rating?: true
    rd?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserV2AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserV2 to aggregate.
     */
    where?: UserV2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserV2s to fetch.
     */
    orderBy?: UserV2OrderByWithRelationInput | UserV2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserV2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserV2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserV2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserV2s
    **/
    _count?: true | UserV2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserV2AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserV2SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserV2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserV2MaxAggregateInputType
  }

  export type GetUserV2AggregateType<T extends UserV2AggregateArgs> = {
        [P in keyof T & keyof AggregateUserV2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserV2[P]>
      : GetScalarType<T[P], AggregateUserV2[P]>
  }




  export type UserV2GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserV2WhereInput
    orderBy?: UserV2OrderByWithAggregationInput | UserV2OrderByWithAggregationInput[]
    by: UserV2ScalarFieldEnum[] | UserV2ScalarFieldEnum
    having?: UserV2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserV2CountAggregateInputType | true
    _avg?: UserV2AvgAggregateInputType
    _sum?: UserV2SumAggregateInputType
    _min?: UserV2MinAggregateInputType
    _max?: UserV2MaxAggregateInputType
  }

  export type UserV2GroupByOutputType = {
    id: string
    name: string
    password: string
    rating: number
    rd: number
    createdAt: Date
    updatedAt: Date
    _count: UserV2CountAggregateOutputType | null
    _avg: UserV2AvgAggregateOutputType | null
    _sum: UserV2SumAggregateOutputType | null
    _min: UserV2MinAggregateOutputType | null
    _max: UserV2MaxAggregateOutputType | null
  }

  type GetUserV2GroupByPayload<T extends UserV2GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserV2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserV2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserV2GroupByOutputType[P]>
            : GetScalarType<T[P], UserV2GroupByOutputType[P]>
        }
      >
    >


  export type UserV2Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    rating?: boolean
    rd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    matches1?: boolean | UserV2$matches1Args<ExtArgs>
    matches2?: boolean | UserV2$matches2Args<ExtArgs>
    wins?: boolean | UserV2$winsArgs<ExtArgs>
    _count?: boolean | UserV2CountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userV2"]>

  export type UserV2SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    rating?: boolean
    rd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userV2"]>

  export type UserV2SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    rating?: boolean
    rd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userV2"]>

  export type UserV2SelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
    rating?: boolean
    rd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserV2Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password" | "rating" | "rd" | "createdAt" | "updatedAt", ExtArgs["result"]["userV2"]>
  export type UserV2Include<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches1?: boolean | UserV2$matches1Args<ExtArgs>
    matches2?: boolean | UserV2$matches2Args<ExtArgs>
    wins?: boolean | UserV2$winsArgs<ExtArgs>
    _count?: boolean | UserV2CountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserV2IncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserV2IncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserV2Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserV2"
    objects: {
      matches1: Prisma.$MatchV2Payload<ExtArgs>[]
      matches2: Prisma.$MatchV2Payload<ExtArgs>[]
      wins: Prisma.$MatchV2Payload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      password: string
      rating: number
      rd: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userV2"]>
    composites: {}
  }

  type UserV2GetPayload<S extends boolean | null | undefined | UserV2DefaultArgs> = $Result.GetResult<Prisma.$UserV2Payload, S>

  type UserV2CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserV2FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserV2CountAggregateInputType | true
    }

  export interface UserV2Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserV2'], meta: { name: 'UserV2' } }
    /**
     * Find zero or one UserV2 that matches the filter.
     * @param {UserV2FindUniqueArgs} args - Arguments to find a UserV2
     * @example
     * // Get one UserV2
     * const userV2 = await prisma.userV2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserV2FindUniqueArgs>(args: SelectSubset<T, UserV2FindUniqueArgs<ExtArgs>>): Prisma__UserV2Client<$Result.GetResult<Prisma.$UserV2Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserV2 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserV2FindUniqueOrThrowArgs} args - Arguments to find a UserV2
     * @example
     * // Get one UserV2
     * const userV2 = await prisma.userV2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserV2FindUniqueOrThrowArgs>(args: SelectSubset<T, UserV2FindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserV2Client<$Result.GetResult<Prisma.$UserV2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserV2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserV2FindFirstArgs} args - Arguments to find a UserV2
     * @example
     * // Get one UserV2
     * const userV2 = await prisma.userV2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserV2FindFirstArgs>(args?: SelectSubset<T, UserV2FindFirstArgs<ExtArgs>>): Prisma__UserV2Client<$Result.GetResult<Prisma.$UserV2Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserV2 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserV2FindFirstOrThrowArgs} args - Arguments to find a UserV2
     * @example
     * // Get one UserV2
     * const userV2 = await prisma.userV2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserV2FindFirstOrThrowArgs>(args?: SelectSubset<T, UserV2FindFirstOrThrowArgs<ExtArgs>>): Prisma__UserV2Client<$Result.GetResult<Prisma.$UserV2Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserV2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserV2FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserV2s
     * const userV2s = await prisma.userV2.findMany()
     * 
     * // Get first 10 UserV2s
     * const userV2s = await prisma.userV2.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userV2WithIdOnly = await prisma.userV2.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserV2FindManyArgs>(args?: SelectSubset<T, UserV2FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserV2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserV2.
     * @param {UserV2CreateArgs} args - Arguments to create a UserV2.
     * @example
     * // Create one UserV2
     * const UserV2 = await prisma.userV2.create({
     *   data: {
     *     // ... data to create a UserV2
     *   }
     * })
     * 
     */
    create<T extends UserV2CreateArgs>(args: SelectSubset<T, UserV2CreateArgs<ExtArgs>>): Prisma__UserV2Client<$Result.GetResult<Prisma.$UserV2Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserV2s.
     * @param {UserV2CreateManyArgs} args - Arguments to create many UserV2s.
     * @example
     * // Create many UserV2s
     * const userV2 = await prisma.userV2.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserV2CreateManyArgs>(args?: SelectSubset<T, UserV2CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserV2s and returns the data saved in the database.
     * @param {UserV2CreateManyAndReturnArgs} args - Arguments to create many UserV2s.
     * @example
     * // Create many UserV2s
     * const userV2 = await prisma.userV2.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserV2s and only return the `id`
     * const userV2WithIdOnly = await prisma.userV2.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserV2CreateManyAndReturnArgs>(args?: SelectSubset<T, UserV2CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserV2Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserV2.
     * @param {UserV2DeleteArgs} args - Arguments to delete one UserV2.
     * @example
     * // Delete one UserV2
     * const UserV2 = await prisma.userV2.delete({
     *   where: {
     *     // ... filter to delete one UserV2
     *   }
     * })
     * 
     */
    delete<T extends UserV2DeleteArgs>(args: SelectSubset<T, UserV2DeleteArgs<ExtArgs>>): Prisma__UserV2Client<$Result.GetResult<Prisma.$UserV2Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserV2.
     * @param {UserV2UpdateArgs} args - Arguments to update one UserV2.
     * @example
     * // Update one UserV2
     * const userV2 = await prisma.userV2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserV2UpdateArgs>(args: SelectSubset<T, UserV2UpdateArgs<ExtArgs>>): Prisma__UserV2Client<$Result.GetResult<Prisma.$UserV2Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserV2s.
     * @param {UserV2DeleteManyArgs} args - Arguments to filter UserV2s to delete.
     * @example
     * // Delete a few UserV2s
     * const { count } = await prisma.userV2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserV2DeleteManyArgs>(args?: SelectSubset<T, UserV2DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserV2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserV2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserV2s
     * const userV2 = await prisma.userV2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserV2UpdateManyArgs>(args: SelectSubset<T, UserV2UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserV2s and returns the data updated in the database.
     * @param {UserV2UpdateManyAndReturnArgs} args - Arguments to update many UserV2s.
     * @example
     * // Update many UserV2s
     * const userV2 = await prisma.userV2.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserV2s and only return the `id`
     * const userV2WithIdOnly = await prisma.userV2.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserV2UpdateManyAndReturnArgs>(args: SelectSubset<T, UserV2UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserV2Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserV2.
     * @param {UserV2UpsertArgs} args - Arguments to update or create a UserV2.
     * @example
     * // Update or create a UserV2
     * const userV2 = await prisma.userV2.upsert({
     *   create: {
     *     // ... data to create a UserV2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserV2 we want to update
     *   }
     * })
     */
    upsert<T extends UserV2UpsertArgs>(args: SelectSubset<T, UserV2UpsertArgs<ExtArgs>>): Prisma__UserV2Client<$Result.GetResult<Prisma.$UserV2Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserV2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserV2CountArgs} args - Arguments to filter UserV2s to count.
     * @example
     * // Count the number of UserV2s
     * const count = await prisma.userV2.count({
     *   where: {
     *     // ... the filter for the UserV2s we want to count
     *   }
     * })
    **/
    count<T extends UserV2CountArgs>(
      args?: Subset<T, UserV2CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserV2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserV2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserV2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserV2AggregateArgs>(args: Subset<T, UserV2AggregateArgs>): Prisma.PrismaPromise<GetUserV2AggregateType<T>>

    /**
     * Group by UserV2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserV2GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserV2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserV2GroupByArgs['orderBy'] }
        : { orderBy?: UserV2GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserV2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserV2GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserV2 model
   */
  readonly fields: UserV2FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserV2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserV2Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matches1<T extends UserV2$matches1Args<ExtArgs> = {}>(args?: Subset<T, UserV2$matches1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchV2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matches2<T extends UserV2$matches2Args<ExtArgs> = {}>(args?: Subset<T, UserV2$matches2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchV2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wins<T extends UserV2$winsArgs<ExtArgs> = {}>(args?: Subset<T, UserV2$winsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchV2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserV2 model
   */
  interface UserV2FieldRefs {
    readonly id: FieldRef<"UserV2", 'String'>
    readonly name: FieldRef<"UserV2", 'String'>
    readonly password: FieldRef<"UserV2", 'String'>
    readonly rating: FieldRef<"UserV2", 'Float'>
    readonly rd: FieldRef<"UserV2", 'Float'>
    readonly createdAt: FieldRef<"UserV2", 'DateTime'>
    readonly updatedAt: FieldRef<"UserV2", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserV2 findUnique
   */
  export type UserV2FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserV2
     */
    select?: UserV2Select<ExtArgs> | null
    /**
     * Omit specific fields from the UserV2
     */
    omit?: UserV2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserV2Include<ExtArgs> | null
    /**
     * Filter, which UserV2 to fetch.
     */
    where: UserV2WhereUniqueInput
  }

  /**
   * UserV2 findUniqueOrThrow
   */
  export type UserV2FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserV2
     */
    select?: UserV2Select<ExtArgs> | null
    /**
     * Omit specific fields from the UserV2
     */
    omit?: UserV2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserV2Include<ExtArgs> | null
    /**
     * Filter, which UserV2 to fetch.
     */
    where: UserV2WhereUniqueInput
  }

  /**
   * UserV2 findFirst
   */
  export type UserV2FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserV2
     */
    select?: UserV2Select<ExtArgs> | null
    /**
     * Omit specific fields from the UserV2
     */
    omit?: UserV2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserV2Include<ExtArgs> | null
    /**
     * Filter, which UserV2 to fetch.
     */
    where?: UserV2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserV2s to fetch.
     */
    orderBy?: UserV2OrderByWithRelationInput | UserV2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserV2s.
     */
    cursor?: UserV2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserV2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserV2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserV2s.
     */
    distinct?: UserV2ScalarFieldEnum | UserV2ScalarFieldEnum[]
  }

  /**
   * UserV2 findFirstOrThrow
   */
  export type UserV2FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserV2
     */
    select?: UserV2Select<ExtArgs> | null
    /**
     * Omit specific fields from the UserV2
     */
    omit?: UserV2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserV2Include<ExtArgs> | null
    /**
     * Filter, which UserV2 to fetch.
     */
    where?: UserV2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserV2s to fetch.
     */
    orderBy?: UserV2OrderByWithRelationInput | UserV2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserV2s.
     */
    cursor?: UserV2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserV2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserV2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserV2s.
     */
    distinct?: UserV2ScalarFieldEnum | UserV2ScalarFieldEnum[]
  }

  /**
   * UserV2 findMany
   */
  export type UserV2FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserV2
     */
    select?: UserV2Select<ExtArgs> | null
    /**
     * Omit specific fields from the UserV2
     */
    omit?: UserV2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserV2Include<ExtArgs> | null
    /**
     * Filter, which UserV2s to fetch.
     */
    where?: UserV2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserV2s to fetch.
     */
    orderBy?: UserV2OrderByWithRelationInput | UserV2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserV2s.
     */
    cursor?: UserV2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserV2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserV2s.
     */
    skip?: number
    distinct?: UserV2ScalarFieldEnum | UserV2ScalarFieldEnum[]
  }

  /**
   * UserV2 create
   */
  export type UserV2CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserV2
     */
    select?: UserV2Select<ExtArgs> | null
    /**
     * Omit specific fields from the UserV2
     */
    omit?: UserV2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserV2Include<ExtArgs> | null
    /**
     * The data needed to create a UserV2.
     */
    data: XOR<UserV2CreateInput, UserV2UncheckedCreateInput>
  }

  /**
   * UserV2 createMany
   */
  export type UserV2CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserV2s.
     */
    data: UserV2CreateManyInput | UserV2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserV2 createManyAndReturn
   */
  export type UserV2CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserV2
     */
    select?: UserV2SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserV2
     */
    omit?: UserV2Omit<ExtArgs> | null
    /**
     * The data used to create many UserV2s.
     */
    data: UserV2CreateManyInput | UserV2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserV2 update
   */
  export type UserV2UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserV2
     */
    select?: UserV2Select<ExtArgs> | null
    /**
     * Omit specific fields from the UserV2
     */
    omit?: UserV2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserV2Include<ExtArgs> | null
    /**
     * The data needed to update a UserV2.
     */
    data: XOR<UserV2UpdateInput, UserV2UncheckedUpdateInput>
    /**
     * Choose, which UserV2 to update.
     */
    where: UserV2WhereUniqueInput
  }

  /**
   * UserV2 updateMany
   */
  export type UserV2UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserV2s.
     */
    data: XOR<UserV2UpdateManyMutationInput, UserV2UncheckedUpdateManyInput>
    /**
     * Filter which UserV2s to update
     */
    where?: UserV2WhereInput
    /**
     * Limit how many UserV2s to update.
     */
    limit?: number
  }

  /**
   * UserV2 updateManyAndReturn
   */
  export type UserV2UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserV2
     */
    select?: UserV2SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserV2
     */
    omit?: UserV2Omit<ExtArgs> | null
    /**
     * The data used to update UserV2s.
     */
    data: XOR<UserV2UpdateManyMutationInput, UserV2UncheckedUpdateManyInput>
    /**
     * Filter which UserV2s to update
     */
    where?: UserV2WhereInput
    /**
     * Limit how many UserV2s to update.
     */
    limit?: number
  }

  /**
   * UserV2 upsert
   */
  export type UserV2UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserV2
     */
    select?: UserV2Select<ExtArgs> | null
    /**
     * Omit specific fields from the UserV2
     */
    omit?: UserV2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserV2Include<ExtArgs> | null
    /**
     * The filter to search for the UserV2 to update in case it exists.
     */
    where: UserV2WhereUniqueInput
    /**
     * In case the UserV2 found by the `where` argument doesn't exist, create a new UserV2 with this data.
     */
    create: XOR<UserV2CreateInput, UserV2UncheckedCreateInput>
    /**
     * In case the UserV2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserV2UpdateInput, UserV2UncheckedUpdateInput>
  }

  /**
   * UserV2 delete
   */
  export type UserV2DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserV2
     */
    select?: UserV2Select<ExtArgs> | null
    /**
     * Omit specific fields from the UserV2
     */
    omit?: UserV2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserV2Include<ExtArgs> | null
    /**
     * Filter which UserV2 to delete.
     */
    where: UserV2WhereUniqueInput
  }

  /**
   * UserV2 deleteMany
   */
  export type UserV2DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserV2s to delete
     */
    where?: UserV2WhereInput
    /**
     * Limit how many UserV2s to delete.
     */
    limit?: number
  }

  /**
   * UserV2.matches1
   */
  export type UserV2$matches1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchV2
     */
    select?: MatchV2Select<ExtArgs> | null
    /**
     * Omit specific fields from the MatchV2
     */
    omit?: MatchV2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchV2Include<ExtArgs> | null
    where?: MatchV2WhereInput
    orderBy?: MatchV2OrderByWithRelationInput | MatchV2OrderByWithRelationInput[]
    cursor?: MatchV2WhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchV2ScalarFieldEnum | MatchV2ScalarFieldEnum[]
  }

  /**
   * UserV2.matches2
   */
  export type UserV2$matches2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchV2
     */
    select?: MatchV2Select<ExtArgs> | null
    /**
     * Omit specific fields from the MatchV2
     */
    omit?: MatchV2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchV2Include<ExtArgs> | null
    where?: MatchV2WhereInput
    orderBy?: MatchV2OrderByWithRelationInput | MatchV2OrderByWithRelationInput[]
    cursor?: MatchV2WhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchV2ScalarFieldEnum | MatchV2ScalarFieldEnum[]
  }

  /**
   * UserV2.wins
   */
  export type UserV2$winsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchV2
     */
    select?: MatchV2Select<ExtArgs> | null
    /**
     * Omit specific fields from the MatchV2
     */
    omit?: MatchV2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchV2Include<ExtArgs> | null
    where?: MatchV2WhereInput
    orderBy?: MatchV2OrderByWithRelationInput | MatchV2OrderByWithRelationInput[]
    cursor?: MatchV2WhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchV2ScalarFieldEnum | MatchV2ScalarFieldEnum[]
  }

  /**
   * UserV2 without action
   */
  export type UserV2DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserV2
     */
    select?: UserV2Select<ExtArgs> | null
    /**
     * Omit specific fields from the UserV2
     */
    omit?: UserV2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserV2Include<ExtArgs> | null
  }


  /**
   * Model MatchV2
   */

  export type AggregateMatchV2 = {
    _count: MatchV2CountAggregateOutputType | null
    _avg: MatchV2AvgAggregateOutputType | null
    _sum: MatchV2SumAggregateOutputType | null
    _min: MatchV2MinAggregateOutputType | null
    _max: MatchV2MaxAggregateOutputType | null
  }

  export type MatchV2AvgAggregateOutputType = {
    player1RatingBefore: number | null
    player2RatingBefore: number | null
    player1RatingAfter: number | null
    player2RatingAfter: number | null
    player1RdBefore: number | null
    player2RdBefore: number | null
    player1RdAfter: number | null
    player2RdAfter: number | null
  }

  export type MatchV2SumAggregateOutputType = {
    player1RatingBefore: number | null
    player2RatingBefore: number | null
    player1RatingAfter: number | null
    player2RatingAfter: number | null
    player1RdBefore: number | null
    player2RdBefore: number | null
    player1RdAfter: number | null
    player2RdAfter: number | null
  }

  export type MatchV2MinAggregateOutputType = {
    id: string | null
    player1Id: string | null
    player2Id: string | null
    winnerId: string | null
    createdAt: Date | null
    player1RatingBefore: number | null
    player2RatingBefore: number | null
    player1RatingAfter: number | null
    player2RatingAfter: number | null
    player1RdBefore: number | null
    player2RdBefore: number | null
    player1RdAfter: number | null
    player2RdAfter: number | null
  }

  export type MatchV2MaxAggregateOutputType = {
    id: string | null
    player1Id: string | null
    player2Id: string | null
    winnerId: string | null
    createdAt: Date | null
    player1RatingBefore: number | null
    player2RatingBefore: number | null
    player1RatingAfter: number | null
    player2RatingAfter: number | null
    player1RdBefore: number | null
    player2RdBefore: number | null
    player1RdAfter: number | null
    player2RdAfter: number | null
  }

  export type MatchV2CountAggregateOutputType = {
    id: number
    player1Id: number
    player2Id: number
    winnerId: number
    createdAt: number
    player1RatingBefore: number
    player2RatingBefore: number
    player1RatingAfter: number
    player2RatingAfter: number
    player1RdBefore: number
    player2RdBefore: number
    player1RdAfter: number
    player2RdAfter: number
    _all: number
  }


  export type MatchV2AvgAggregateInputType = {
    player1RatingBefore?: true
    player2RatingBefore?: true
    player1RatingAfter?: true
    player2RatingAfter?: true
    player1RdBefore?: true
    player2RdBefore?: true
    player1RdAfter?: true
    player2RdAfter?: true
  }

  export type MatchV2SumAggregateInputType = {
    player1RatingBefore?: true
    player2RatingBefore?: true
    player1RatingAfter?: true
    player2RatingAfter?: true
    player1RdBefore?: true
    player2RdBefore?: true
    player1RdAfter?: true
    player2RdAfter?: true
  }

  export type MatchV2MinAggregateInputType = {
    id?: true
    player1Id?: true
    player2Id?: true
    winnerId?: true
    createdAt?: true
    player1RatingBefore?: true
    player2RatingBefore?: true
    player1RatingAfter?: true
    player2RatingAfter?: true
    player1RdBefore?: true
    player2RdBefore?: true
    player1RdAfter?: true
    player2RdAfter?: true
  }

  export type MatchV2MaxAggregateInputType = {
    id?: true
    player1Id?: true
    player2Id?: true
    winnerId?: true
    createdAt?: true
    player1RatingBefore?: true
    player2RatingBefore?: true
    player1RatingAfter?: true
    player2RatingAfter?: true
    player1RdBefore?: true
    player2RdBefore?: true
    player1RdAfter?: true
    player2RdAfter?: true
  }

  export type MatchV2CountAggregateInputType = {
    id?: true
    player1Id?: true
    player2Id?: true
    winnerId?: true
    createdAt?: true
    player1RatingBefore?: true
    player2RatingBefore?: true
    player1RatingAfter?: true
    player2RatingAfter?: true
    player1RdBefore?: true
    player2RdBefore?: true
    player1RdAfter?: true
    player2RdAfter?: true
    _all?: true
  }

  export type MatchV2AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchV2 to aggregate.
     */
    where?: MatchV2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchV2s to fetch.
     */
    orderBy?: MatchV2OrderByWithRelationInput | MatchV2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchV2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchV2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchV2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchV2s
    **/
    _count?: true | MatchV2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchV2AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchV2SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchV2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchV2MaxAggregateInputType
  }

  export type GetMatchV2AggregateType<T extends MatchV2AggregateArgs> = {
        [P in keyof T & keyof AggregateMatchV2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchV2[P]>
      : GetScalarType<T[P], AggregateMatchV2[P]>
  }




  export type MatchV2GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchV2WhereInput
    orderBy?: MatchV2OrderByWithAggregationInput | MatchV2OrderByWithAggregationInput[]
    by: MatchV2ScalarFieldEnum[] | MatchV2ScalarFieldEnum
    having?: MatchV2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchV2CountAggregateInputType | true
    _avg?: MatchV2AvgAggregateInputType
    _sum?: MatchV2SumAggregateInputType
    _min?: MatchV2MinAggregateInputType
    _max?: MatchV2MaxAggregateInputType
  }

  export type MatchV2GroupByOutputType = {
    id: string
    player1Id: string
    player2Id: string
    winnerId: string
    createdAt: Date
    player1RatingBefore: number
    player2RatingBefore: number
    player1RatingAfter: number
    player2RatingAfter: number
    player1RdBefore: number
    player2RdBefore: number
    player1RdAfter: number
    player2RdAfter: number
    _count: MatchV2CountAggregateOutputType | null
    _avg: MatchV2AvgAggregateOutputType | null
    _sum: MatchV2SumAggregateOutputType | null
    _min: MatchV2MinAggregateOutputType | null
    _max: MatchV2MaxAggregateOutputType | null
  }

  type GetMatchV2GroupByPayload<T extends MatchV2GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchV2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchV2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchV2GroupByOutputType[P]>
            : GetScalarType<T[P], MatchV2GroupByOutputType[P]>
        }
      >
    >


  export type MatchV2Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player1Id?: boolean
    player2Id?: boolean
    winnerId?: boolean
    createdAt?: boolean
    player1RatingBefore?: boolean
    player2RatingBefore?: boolean
    player1RatingAfter?: boolean
    player2RatingAfter?: boolean
    player1RdBefore?: boolean
    player2RdBefore?: boolean
    player1RdAfter?: boolean
    player2RdAfter?: boolean
    player1?: boolean | UserV2DefaultArgs<ExtArgs>
    player2?: boolean | UserV2DefaultArgs<ExtArgs>
    winner?: boolean | UserV2DefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchV2"]>

  export type MatchV2SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player1Id?: boolean
    player2Id?: boolean
    winnerId?: boolean
    createdAt?: boolean
    player1RatingBefore?: boolean
    player2RatingBefore?: boolean
    player1RatingAfter?: boolean
    player2RatingAfter?: boolean
    player1RdBefore?: boolean
    player2RdBefore?: boolean
    player1RdAfter?: boolean
    player2RdAfter?: boolean
    player1?: boolean | UserV2DefaultArgs<ExtArgs>
    player2?: boolean | UserV2DefaultArgs<ExtArgs>
    winner?: boolean | UserV2DefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchV2"]>

  export type MatchV2SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player1Id?: boolean
    player2Id?: boolean
    winnerId?: boolean
    createdAt?: boolean
    player1RatingBefore?: boolean
    player2RatingBefore?: boolean
    player1RatingAfter?: boolean
    player2RatingAfter?: boolean
    player1RdBefore?: boolean
    player2RdBefore?: boolean
    player1RdAfter?: boolean
    player2RdAfter?: boolean
    player1?: boolean | UserV2DefaultArgs<ExtArgs>
    player2?: boolean | UserV2DefaultArgs<ExtArgs>
    winner?: boolean | UserV2DefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchV2"]>

  export type MatchV2SelectScalar = {
    id?: boolean
    player1Id?: boolean
    player2Id?: boolean
    winnerId?: boolean
    createdAt?: boolean
    player1RatingBefore?: boolean
    player2RatingBefore?: boolean
    player1RatingAfter?: boolean
    player2RatingAfter?: boolean
    player1RdBefore?: boolean
    player2RdBefore?: boolean
    player1RdAfter?: boolean
    player2RdAfter?: boolean
  }

  export type MatchV2Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "player1Id" | "player2Id" | "winnerId" | "createdAt" | "player1RatingBefore" | "player2RatingBefore" | "player1RatingAfter" | "player2RatingAfter" | "player1RdBefore" | "player2RdBefore" | "player1RdAfter" | "player2RdAfter", ExtArgs["result"]["matchV2"]>
  export type MatchV2Include<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserV2DefaultArgs<ExtArgs>
    player2?: boolean | UserV2DefaultArgs<ExtArgs>
    winner?: boolean | UserV2DefaultArgs<ExtArgs>
  }
  export type MatchV2IncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserV2DefaultArgs<ExtArgs>
    player2?: boolean | UserV2DefaultArgs<ExtArgs>
    winner?: boolean | UserV2DefaultArgs<ExtArgs>
  }
  export type MatchV2IncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserV2DefaultArgs<ExtArgs>
    player2?: boolean | UserV2DefaultArgs<ExtArgs>
    winner?: boolean | UserV2DefaultArgs<ExtArgs>
  }

  export type $MatchV2Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchV2"
    objects: {
      player1: Prisma.$UserV2Payload<ExtArgs>
      player2: Prisma.$UserV2Payload<ExtArgs>
      winner: Prisma.$UserV2Payload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      player1Id: string
      player2Id: string
      winnerId: string
      createdAt: Date
      player1RatingBefore: number
      player2RatingBefore: number
      player1RatingAfter: number
      player2RatingAfter: number
      player1RdBefore: number
      player2RdBefore: number
      player1RdAfter: number
      player2RdAfter: number
    }, ExtArgs["result"]["matchV2"]>
    composites: {}
  }

  type MatchV2GetPayload<S extends boolean | null | undefined | MatchV2DefaultArgs> = $Result.GetResult<Prisma.$MatchV2Payload, S>

  type MatchV2CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchV2FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchV2CountAggregateInputType | true
    }

  export interface MatchV2Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchV2'], meta: { name: 'MatchV2' } }
    /**
     * Find zero or one MatchV2 that matches the filter.
     * @param {MatchV2FindUniqueArgs} args - Arguments to find a MatchV2
     * @example
     * // Get one MatchV2
     * const matchV2 = await prisma.matchV2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchV2FindUniqueArgs>(args: SelectSubset<T, MatchV2FindUniqueArgs<ExtArgs>>): Prisma__MatchV2Client<$Result.GetResult<Prisma.$MatchV2Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MatchV2 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchV2FindUniqueOrThrowArgs} args - Arguments to find a MatchV2
     * @example
     * // Get one MatchV2
     * const matchV2 = await prisma.matchV2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchV2FindUniqueOrThrowArgs>(args: SelectSubset<T, MatchV2FindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchV2Client<$Result.GetResult<Prisma.$MatchV2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchV2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchV2FindFirstArgs} args - Arguments to find a MatchV2
     * @example
     * // Get one MatchV2
     * const matchV2 = await prisma.matchV2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchV2FindFirstArgs>(args?: SelectSubset<T, MatchV2FindFirstArgs<ExtArgs>>): Prisma__MatchV2Client<$Result.GetResult<Prisma.$MatchV2Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchV2 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchV2FindFirstOrThrowArgs} args - Arguments to find a MatchV2
     * @example
     * // Get one MatchV2
     * const matchV2 = await prisma.matchV2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchV2FindFirstOrThrowArgs>(args?: SelectSubset<T, MatchV2FindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchV2Client<$Result.GetResult<Prisma.$MatchV2Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MatchV2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchV2FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchV2s
     * const matchV2s = await prisma.matchV2.findMany()
     * 
     * // Get first 10 MatchV2s
     * const matchV2s = await prisma.matchV2.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchV2WithIdOnly = await prisma.matchV2.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchV2FindManyArgs>(args?: SelectSubset<T, MatchV2FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchV2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MatchV2.
     * @param {MatchV2CreateArgs} args - Arguments to create a MatchV2.
     * @example
     * // Create one MatchV2
     * const MatchV2 = await prisma.matchV2.create({
     *   data: {
     *     // ... data to create a MatchV2
     *   }
     * })
     * 
     */
    create<T extends MatchV2CreateArgs>(args: SelectSubset<T, MatchV2CreateArgs<ExtArgs>>): Prisma__MatchV2Client<$Result.GetResult<Prisma.$MatchV2Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MatchV2s.
     * @param {MatchV2CreateManyArgs} args - Arguments to create many MatchV2s.
     * @example
     * // Create many MatchV2s
     * const matchV2 = await prisma.matchV2.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchV2CreateManyArgs>(args?: SelectSubset<T, MatchV2CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MatchV2s and returns the data saved in the database.
     * @param {MatchV2CreateManyAndReturnArgs} args - Arguments to create many MatchV2s.
     * @example
     * // Create many MatchV2s
     * const matchV2 = await prisma.matchV2.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatchV2s and only return the `id`
     * const matchV2WithIdOnly = await prisma.matchV2.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchV2CreateManyAndReturnArgs>(args?: SelectSubset<T, MatchV2CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchV2Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MatchV2.
     * @param {MatchV2DeleteArgs} args - Arguments to delete one MatchV2.
     * @example
     * // Delete one MatchV2
     * const MatchV2 = await prisma.matchV2.delete({
     *   where: {
     *     // ... filter to delete one MatchV2
     *   }
     * })
     * 
     */
    delete<T extends MatchV2DeleteArgs>(args: SelectSubset<T, MatchV2DeleteArgs<ExtArgs>>): Prisma__MatchV2Client<$Result.GetResult<Prisma.$MatchV2Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MatchV2.
     * @param {MatchV2UpdateArgs} args - Arguments to update one MatchV2.
     * @example
     * // Update one MatchV2
     * const matchV2 = await prisma.matchV2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchV2UpdateArgs>(args: SelectSubset<T, MatchV2UpdateArgs<ExtArgs>>): Prisma__MatchV2Client<$Result.GetResult<Prisma.$MatchV2Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MatchV2s.
     * @param {MatchV2DeleteManyArgs} args - Arguments to filter MatchV2s to delete.
     * @example
     * // Delete a few MatchV2s
     * const { count } = await prisma.matchV2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchV2DeleteManyArgs>(args?: SelectSubset<T, MatchV2DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchV2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchV2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchV2s
     * const matchV2 = await prisma.matchV2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchV2UpdateManyArgs>(args: SelectSubset<T, MatchV2UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchV2s and returns the data updated in the database.
     * @param {MatchV2UpdateManyAndReturnArgs} args - Arguments to update many MatchV2s.
     * @example
     * // Update many MatchV2s
     * const matchV2 = await prisma.matchV2.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MatchV2s and only return the `id`
     * const matchV2WithIdOnly = await prisma.matchV2.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchV2UpdateManyAndReturnArgs>(args: SelectSubset<T, MatchV2UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchV2Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MatchV2.
     * @param {MatchV2UpsertArgs} args - Arguments to update or create a MatchV2.
     * @example
     * // Update or create a MatchV2
     * const matchV2 = await prisma.matchV2.upsert({
     *   create: {
     *     // ... data to create a MatchV2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchV2 we want to update
     *   }
     * })
     */
    upsert<T extends MatchV2UpsertArgs>(args: SelectSubset<T, MatchV2UpsertArgs<ExtArgs>>): Prisma__MatchV2Client<$Result.GetResult<Prisma.$MatchV2Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MatchV2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchV2CountArgs} args - Arguments to filter MatchV2s to count.
     * @example
     * // Count the number of MatchV2s
     * const count = await prisma.matchV2.count({
     *   where: {
     *     // ... the filter for the MatchV2s we want to count
     *   }
     * })
    **/
    count<T extends MatchV2CountArgs>(
      args?: Subset<T, MatchV2CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchV2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchV2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchV2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchV2AggregateArgs>(args: Subset<T, MatchV2AggregateArgs>): Prisma.PrismaPromise<GetMatchV2AggregateType<T>>

    /**
     * Group by MatchV2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchV2GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchV2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchV2GroupByArgs['orderBy'] }
        : { orderBy?: MatchV2GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchV2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchV2GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchV2 model
   */
  readonly fields: MatchV2FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchV2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchV2Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player1<T extends UserV2DefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserV2DefaultArgs<ExtArgs>>): Prisma__UserV2Client<$Result.GetResult<Prisma.$UserV2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player2<T extends UserV2DefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserV2DefaultArgs<ExtArgs>>): Prisma__UserV2Client<$Result.GetResult<Prisma.$UserV2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    winner<T extends UserV2DefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserV2DefaultArgs<ExtArgs>>): Prisma__UserV2Client<$Result.GetResult<Prisma.$UserV2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MatchV2 model
   */
  interface MatchV2FieldRefs {
    readonly id: FieldRef<"MatchV2", 'String'>
    readonly player1Id: FieldRef<"MatchV2", 'String'>
    readonly player2Id: FieldRef<"MatchV2", 'String'>
    readonly winnerId: FieldRef<"MatchV2", 'String'>
    readonly createdAt: FieldRef<"MatchV2", 'DateTime'>
    readonly player1RatingBefore: FieldRef<"MatchV2", 'Float'>
    readonly player2RatingBefore: FieldRef<"MatchV2", 'Float'>
    readonly player1RatingAfter: FieldRef<"MatchV2", 'Float'>
    readonly player2RatingAfter: FieldRef<"MatchV2", 'Float'>
    readonly player1RdBefore: FieldRef<"MatchV2", 'Float'>
    readonly player2RdBefore: FieldRef<"MatchV2", 'Float'>
    readonly player1RdAfter: FieldRef<"MatchV2", 'Float'>
    readonly player2RdAfter: FieldRef<"MatchV2", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * MatchV2 findUnique
   */
  export type MatchV2FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchV2
     */
    select?: MatchV2Select<ExtArgs> | null
    /**
     * Omit specific fields from the MatchV2
     */
    omit?: MatchV2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchV2Include<ExtArgs> | null
    /**
     * Filter, which MatchV2 to fetch.
     */
    where: MatchV2WhereUniqueInput
  }

  /**
   * MatchV2 findUniqueOrThrow
   */
  export type MatchV2FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchV2
     */
    select?: MatchV2Select<ExtArgs> | null
    /**
     * Omit specific fields from the MatchV2
     */
    omit?: MatchV2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchV2Include<ExtArgs> | null
    /**
     * Filter, which MatchV2 to fetch.
     */
    where: MatchV2WhereUniqueInput
  }

  /**
   * MatchV2 findFirst
   */
  export type MatchV2FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchV2
     */
    select?: MatchV2Select<ExtArgs> | null
    /**
     * Omit specific fields from the MatchV2
     */
    omit?: MatchV2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchV2Include<ExtArgs> | null
    /**
     * Filter, which MatchV2 to fetch.
     */
    where?: MatchV2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchV2s to fetch.
     */
    orderBy?: MatchV2OrderByWithRelationInput | MatchV2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchV2s.
     */
    cursor?: MatchV2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchV2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchV2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchV2s.
     */
    distinct?: MatchV2ScalarFieldEnum | MatchV2ScalarFieldEnum[]
  }

  /**
   * MatchV2 findFirstOrThrow
   */
  export type MatchV2FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchV2
     */
    select?: MatchV2Select<ExtArgs> | null
    /**
     * Omit specific fields from the MatchV2
     */
    omit?: MatchV2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchV2Include<ExtArgs> | null
    /**
     * Filter, which MatchV2 to fetch.
     */
    where?: MatchV2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchV2s to fetch.
     */
    orderBy?: MatchV2OrderByWithRelationInput | MatchV2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchV2s.
     */
    cursor?: MatchV2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchV2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchV2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchV2s.
     */
    distinct?: MatchV2ScalarFieldEnum | MatchV2ScalarFieldEnum[]
  }

  /**
   * MatchV2 findMany
   */
  export type MatchV2FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchV2
     */
    select?: MatchV2Select<ExtArgs> | null
    /**
     * Omit specific fields from the MatchV2
     */
    omit?: MatchV2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchV2Include<ExtArgs> | null
    /**
     * Filter, which MatchV2s to fetch.
     */
    where?: MatchV2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchV2s to fetch.
     */
    orderBy?: MatchV2OrderByWithRelationInput | MatchV2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchV2s.
     */
    cursor?: MatchV2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchV2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchV2s.
     */
    skip?: number
    distinct?: MatchV2ScalarFieldEnum | MatchV2ScalarFieldEnum[]
  }

  /**
   * MatchV2 create
   */
  export type MatchV2CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchV2
     */
    select?: MatchV2Select<ExtArgs> | null
    /**
     * Omit specific fields from the MatchV2
     */
    omit?: MatchV2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchV2Include<ExtArgs> | null
    /**
     * The data needed to create a MatchV2.
     */
    data: XOR<MatchV2CreateInput, MatchV2UncheckedCreateInput>
  }

  /**
   * MatchV2 createMany
   */
  export type MatchV2CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchV2s.
     */
    data: MatchV2CreateManyInput | MatchV2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MatchV2 createManyAndReturn
   */
  export type MatchV2CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchV2
     */
    select?: MatchV2SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchV2
     */
    omit?: MatchV2Omit<ExtArgs> | null
    /**
     * The data used to create many MatchV2s.
     */
    data: MatchV2CreateManyInput | MatchV2CreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchV2IncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchV2 update
   */
  export type MatchV2UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchV2
     */
    select?: MatchV2Select<ExtArgs> | null
    /**
     * Omit specific fields from the MatchV2
     */
    omit?: MatchV2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchV2Include<ExtArgs> | null
    /**
     * The data needed to update a MatchV2.
     */
    data: XOR<MatchV2UpdateInput, MatchV2UncheckedUpdateInput>
    /**
     * Choose, which MatchV2 to update.
     */
    where: MatchV2WhereUniqueInput
  }

  /**
   * MatchV2 updateMany
   */
  export type MatchV2UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchV2s.
     */
    data: XOR<MatchV2UpdateManyMutationInput, MatchV2UncheckedUpdateManyInput>
    /**
     * Filter which MatchV2s to update
     */
    where?: MatchV2WhereInput
    /**
     * Limit how many MatchV2s to update.
     */
    limit?: number
  }

  /**
   * MatchV2 updateManyAndReturn
   */
  export type MatchV2UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchV2
     */
    select?: MatchV2SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchV2
     */
    omit?: MatchV2Omit<ExtArgs> | null
    /**
     * The data used to update MatchV2s.
     */
    data: XOR<MatchV2UpdateManyMutationInput, MatchV2UncheckedUpdateManyInput>
    /**
     * Filter which MatchV2s to update
     */
    where?: MatchV2WhereInput
    /**
     * Limit how many MatchV2s to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchV2IncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchV2 upsert
   */
  export type MatchV2UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchV2
     */
    select?: MatchV2Select<ExtArgs> | null
    /**
     * Omit specific fields from the MatchV2
     */
    omit?: MatchV2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchV2Include<ExtArgs> | null
    /**
     * The filter to search for the MatchV2 to update in case it exists.
     */
    where: MatchV2WhereUniqueInput
    /**
     * In case the MatchV2 found by the `where` argument doesn't exist, create a new MatchV2 with this data.
     */
    create: XOR<MatchV2CreateInput, MatchV2UncheckedCreateInput>
    /**
     * In case the MatchV2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchV2UpdateInput, MatchV2UncheckedUpdateInput>
  }

  /**
   * MatchV2 delete
   */
  export type MatchV2DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchV2
     */
    select?: MatchV2Select<ExtArgs> | null
    /**
     * Omit specific fields from the MatchV2
     */
    omit?: MatchV2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchV2Include<ExtArgs> | null
    /**
     * Filter which MatchV2 to delete.
     */
    where: MatchV2WhereUniqueInput
  }

  /**
   * MatchV2 deleteMany
   */
  export type MatchV2DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchV2s to delete
     */
    where?: MatchV2WhereInput
    /**
     * Limit how many MatchV2s to delete.
     */
    limit?: number
  }

  /**
   * MatchV2 without action
   */
  export type MatchV2DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchV2
     */
    select?: MatchV2Select<ExtArgs> | null
    /**
     * Omit specific fields from the MatchV2
     */
    omit?: MatchV2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchV2Include<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password',
    elo: 'elo',
    k: 'k',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    id: 'id',
    player1Id: 'player1Id',
    player2Id: 'player2Id',
    winnerId: 'winnerId',
    createdAt: 'createdAt',
    player1eloChange: 'player1eloChange',
    player2eloChange: 'player2eloChange'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const UserV2ScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password',
    rating: 'rating',
    rd: 'rd',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserV2ScalarFieldEnum = (typeof UserV2ScalarFieldEnum)[keyof typeof UserV2ScalarFieldEnum]


  export const MatchV2ScalarFieldEnum: {
    id: 'id',
    player1Id: 'player1Id',
    player2Id: 'player2Id',
    winnerId: 'winnerId',
    createdAt: 'createdAt',
    player1RatingBefore: 'player1RatingBefore',
    player2RatingBefore: 'player2RatingBefore',
    player1RatingAfter: 'player1RatingAfter',
    player2RatingAfter: 'player2RatingAfter',
    player1RdBefore: 'player1RdBefore',
    player2RdBefore: 'player2RdBefore',
    player1RdAfter: 'player1RdAfter',
    player2RdAfter: 'player2RdAfter'
  };

  export type MatchV2ScalarFieldEnum = (typeof MatchV2ScalarFieldEnum)[keyof typeof MatchV2ScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    elo?: IntFilter<"User"> | number
    k?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    matches1?: MatchListRelationFilter
    matches2?: MatchListRelationFilter
    wins?: MatchListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    elo?: SortOrder
    k?: SortOrder
    createdAt?: SortOrder
    matches1?: MatchOrderByRelationAggregateInput
    matches2?: MatchOrderByRelationAggregateInput
    wins?: MatchOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    elo?: IntFilter<"User"> | number
    k?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    matches1?: MatchListRelationFilter
    matches2?: MatchListRelationFilter
    wins?: MatchListRelationFilter
  }, "id" | "name">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    elo?: SortOrder
    k?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    elo?: IntWithAggregatesFilter<"User"> | number
    k?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    id?: StringFilter<"Match"> | string
    player1Id?: StringFilter<"Match"> | string
    player2Id?: StringFilter<"Match"> | string
    winnerId?: StringFilter<"Match"> | string
    createdAt?: DateTimeFilter<"Match"> | Date | string
    player1eloChange?: IntFilter<"Match"> | number
    player2eloChange?: IntFilter<"Match"> | number
    player1?: XOR<UserScalarRelationFilter, UserWhereInput>
    player2?: XOR<UserScalarRelationFilter, UserWhereInput>
    winner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    winnerId?: SortOrder
    createdAt?: SortOrder
    player1eloChange?: SortOrder
    player2eloChange?: SortOrder
    player1?: UserOrderByWithRelationInput
    player2?: UserOrderByWithRelationInput
    winner?: UserOrderByWithRelationInput
  }

  export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    player1Id?: StringFilter<"Match"> | string
    player2Id?: StringFilter<"Match"> | string
    winnerId?: StringFilter<"Match"> | string
    createdAt?: DateTimeFilter<"Match"> | Date | string
    player1eloChange?: IntFilter<"Match"> | number
    player2eloChange?: IntFilter<"Match"> | number
    player1?: XOR<UserScalarRelationFilter, UserWhereInput>
    player2?: XOR<UserScalarRelationFilter, UserWhereInput>
    winner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    winnerId?: SortOrder
    createdAt?: SortOrder
    player1eloChange?: SortOrder
    player2eloChange?: SortOrder
    _count?: MatchCountOrderByAggregateInput
    _avg?: MatchAvgOrderByAggregateInput
    _max?: MatchMaxOrderByAggregateInput
    _min?: MatchMinOrderByAggregateInput
    _sum?: MatchSumOrderByAggregateInput
  }

  export type MatchScalarWhereWithAggregatesInput = {
    AND?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    OR?: MatchScalarWhereWithAggregatesInput[]
    NOT?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Match"> | string
    player1Id?: StringWithAggregatesFilter<"Match"> | string
    player2Id?: StringWithAggregatesFilter<"Match"> | string
    winnerId?: StringWithAggregatesFilter<"Match"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
    player1eloChange?: IntWithAggregatesFilter<"Match"> | number
    player2eloChange?: IntWithAggregatesFilter<"Match"> | number
  }

  export type UserV2WhereInput = {
    AND?: UserV2WhereInput | UserV2WhereInput[]
    OR?: UserV2WhereInput[]
    NOT?: UserV2WhereInput | UserV2WhereInput[]
    id?: StringFilter<"UserV2"> | string
    name?: StringFilter<"UserV2"> | string
    password?: StringFilter<"UserV2"> | string
    rating?: FloatFilter<"UserV2"> | number
    rd?: FloatFilter<"UserV2"> | number
    createdAt?: DateTimeFilter<"UserV2"> | Date | string
    updatedAt?: DateTimeFilter<"UserV2"> | Date | string
    matches1?: MatchV2ListRelationFilter
    matches2?: MatchV2ListRelationFilter
    wins?: MatchV2ListRelationFilter
  }

  export type UserV2OrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    rating?: SortOrder
    rd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    matches1?: MatchV2OrderByRelationAggregateInput
    matches2?: MatchV2OrderByRelationAggregateInput
    wins?: MatchV2OrderByRelationAggregateInput
  }

  export type UserV2WhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: UserV2WhereInput | UserV2WhereInput[]
    OR?: UserV2WhereInput[]
    NOT?: UserV2WhereInput | UserV2WhereInput[]
    password?: StringFilter<"UserV2"> | string
    rating?: FloatFilter<"UserV2"> | number
    rd?: FloatFilter<"UserV2"> | number
    createdAt?: DateTimeFilter<"UserV2"> | Date | string
    updatedAt?: DateTimeFilter<"UserV2"> | Date | string
    matches1?: MatchV2ListRelationFilter
    matches2?: MatchV2ListRelationFilter
    wins?: MatchV2ListRelationFilter
  }, "id" | "name">

  export type UserV2OrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    rating?: SortOrder
    rd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserV2CountOrderByAggregateInput
    _avg?: UserV2AvgOrderByAggregateInput
    _max?: UserV2MaxOrderByAggregateInput
    _min?: UserV2MinOrderByAggregateInput
    _sum?: UserV2SumOrderByAggregateInput
  }

  export type UserV2ScalarWhereWithAggregatesInput = {
    AND?: UserV2ScalarWhereWithAggregatesInput | UserV2ScalarWhereWithAggregatesInput[]
    OR?: UserV2ScalarWhereWithAggregatesInput[]
    NOT?: UserV2ScalarWhereWithAggregatesInput | UserV2ScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserV2"> | string
    name?: StringWithAggregatesFilter<"UserV2"> | string
    password?: StringWithAggregatesFilter<"UserV2"> | string
    rating?: FloatWithAggregatesFilter<"UserV2"> | number
    rd?: FloatWithAggregatesFilter<"UserV2"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserV2"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserV2"> | Date | string
  }

  export type MatchV2WhereInput = {
    AND?: MatchV2WhereInput | MatchV2WhereInput[]
    OR?: MatchV2WhereInput[]
    NOT?: MatchV2WhereInput | MatchV2WhereInput[]
    id?: StringFilter<"MatchV2"> | string
    player1Id?: StringFilter<"MatchV2"> | string
    player2Id?: StringFilter<"MatchV2"> | string
    winnerId?: StringFilter<"MatchV2"> | string
    createdAt?: DateTimeFilter<"MatchV2"> | Date | string
    player1RatingBefore?: FloatFilter<"MatchV2"> | number
    player2RatingBefore?: FloatFilter<"MatchV2"> | number
    player1RatingAfter?: FloatFilter<"MatchV2"> | number
    player2RatingAfter?: FloatFilter<"MatchV2"> | number
    player1RdBefore?: FloatFilter<"MatchV2"> | number
    player2RdBefore?: FloatFilter<"MatchV2"> | number
    player1RdAfter?: FloatFilter<"MatchV2"> | number
    player2RdAfter?: FloatFilter<"MatchV2"> | number
    player1?: XOR<UserV2ScalarRelationFilter, UserV2WhereInput>
    player2?: XOR<UserV2ScalarRelationFilter, UserV2WhereInput>
    winner?: XOR<UserV2ScalarRelationFilter, UserV2WhereInput>
  }

  export type MatchV2OrderByWithRelationInput = {
    id?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    winnerId?: SortOrder
    createdAt?: SortOrder
    player1RatingBefore?: SortOrder
    player2RatingBefore?: SortOrder
    player1RatingAfter?: SortOrder
    player2RatingAfter?: SortOrder
    player1RdBefore?: SortOrder
    player2RdBefore?: SortOrder
    player1RdAfter?: SortOrder
    player2RdAfter?: SortOrder
    player1?: UserV2OrderByWithRelationInput
    player2?: UserV2OrderByWithRelationInput
    winner?: UserV2OrderByWithRelationInput
  }

  export type MatchV2WhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchV2WhereInput | MatchV2WhereInput[]
    OR?: MatchV2WhereInput[]
    NOT?: MatchV2WhereInput | MatchV2WhereInput[]
    player1Id?: StringFilter<"MatchV2"> | string
    player2Id?: StringFilter<"MatchV2"> | string
    winnerId?: StringFilter<"MatchV2"> | string
    createdAt?: DateTimeFilter<"MatchV2"> | Date | string
    player1RatingBefore?: FloatFilter<"MatchV2"> | number
    player2RatingBefore?: FloatFilter<"MatchV2"> | number
    player1RatingAfter?: FloatFilter<"MatchV2"> | number
    player2RatingAfter?: FloatFilter<"MatchV2"> | number
    player1RdBefore?: FloatFilter<"MatchV2"> | number
    player2RdBefore?: FloatFilter<"MatchV2"> | number
    player1RdAfter?: FloatFilter<"MatchV2"> | number
    player2RdAfter?: FloatFilter<"MatchV2"> | number
    player1?: XOR<UserV2ScalarRelationFilter, UserV2WhereInput>
    player2?: XOR<UserV2ScalarRelationFilter, UserV2WhereInput>
    winner?: XOR<UserV2ScalarRelationFilter, UserV2WhereInput>
  }, "id">

  export type MatchV2OrderByWithAggregationInput = {
    id?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    winnerId?: SortOrder
    createdAt?: SortOrder
    player1RatingBefore?: SortOrder
    player2RatingBefore?: SortOrder
    player1RatingAfter?: SortOrder
    player2RatingAfter?: SortOrder
    player1RdBefore?: SortOrder
    player2RdBefore?: SortOrder
    player1RdAfter?: SortOrder
    player2RdAfter?: SortOrder
    _count?: MatchV2CountOrderByAggregateInput
    _avg?: MatchV2AvgOrderByAggregateInput
    _max?: MatchV2MaxOrderByAggregateInput
    _min?: MatchV2MinOrderByAggregateInput
    _sum?: MatchV2SumOrderByAggregateInput
  }

  export type MatchV2ScalarWhereWithAggregatesInput = {
    AND?: MatchV2ScalarWhereWithAggregatesInput | MatchV2ScalarWhereWithAggregatesInput[]
    OR?: MatchV2ScalarWhereWithAggregatesInput[]
    NOT?: MatchV2ScalarWhereWithAggregatesInput | MatchV2ScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MatchV2"> | string
    player1Id?: StringWithAggregatesFilter<"MatchV2"> | string
    player2Id?: StringWithAggregatesFilter<"MatchV2"> | string
    winnerId?: StringWithAggregatesFilter<"MatchV2"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MatchV2"> | Date | string
    player1RatingBefore?: FloatWithAggregatesFilter<"MatchV2"> | number
    player2RatingBefore?: FloatWithAggregatesFilter<"MatchV2"> | number
    player1RatingAfter?: FloatWithAggregatesFilter<"MatchV2"> | number
    player2RatingAfter?: FloatWithAggregatesFilter<"MatchV2"> | number
    player1RdBefore?: FloatWithAggregatesFilter<"MatchV2"> | number
    player2RdBefore?: FloatWithAggregatesFilter<"MatchV2"> | number
    player1RdAfter?: FloatWithAggregatesFilter<"MatchV2"> | number
    player2RdAfter?: FloatWithAggregatesFilter<"MatchV2"> | number
  }

  export type UserCreateInput = {
    id?: string
    name: string
    password: string
    elo?: number
    k?: number
    createdAt?: Date | string
    matches1?: MatchCreateNestedManyWithoutPlayer1Input
    matches2?: MatchCreateNestedManyWithoutPlayer2Input
    wins?: MatchCreateNestedManyWithoutWinnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    password: string
    elo?: number
    k?: number
    createdAt?: Date | string
    matches1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matches2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    wins?: MatchUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    elo?: IntFieldUpdateOperationsInput | number
    k?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches1?: MatchUpdateManyWithoutPlayer1NestedInput
    matches2?: MatchUpdateManyWithoutPlayer2NestedInput
    wins?: MatchUpdateManyWithoutWinnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    elo?: IntFieldUpdateOperationsInput | number
    k?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matches2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    wins?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    password: string
    elo?: number
    k?: number
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    elo?: IntFieldUpdateOperationsInput | number
    k?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    elo?: IntFieldUpdateOperationsInput | number
    k?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateInput = {
    id?: string
    createdAt?: Date | string
    player1eloChange: number
    player2eloChange: number
    player1: UserCreateNestedOneWithoutMatches1Input
    player2: UserCreateNestedOneWithoutMatches2Input
    winner: UserCreateNestedOneWithoutWinsInput
  }

  export type MatchUncheckedCreateInput = {
    id?: string
    player1Id: string
    player2Id: string
    winnerId: string
    createdAt?: Date | string
    player1eloChange: number
    player2eloChange: number
  }

  export type MatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1eloChange?: IntFieldUpdateOperationsInput | number
    player2eloChange?: IntFieldUpdateOperationsInput | number
    player1?: UserUpdateOneRequiredWithoutMatches1NestedInput
    player2?: UserUpdateOneRequiredWithoutMatches2NestedInput
    winner?: UserUpdateOneRequiredWithoutWinsNestedInput
  }

  export type MatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    winnerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1eloChange?: IntFieldUpdateOperationsInput | number
    player2eloChange?: IntFieldUpdateOperationsInput | number
  }

  export type MatchCreateManyInput = {
    id?: string
    player1Id: string
    player2Id: string
    winnerId: string
    createdAt?: Date | string
    player1eloChange: number
    player2eloChange: number
  }

  export type MatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1eloChange?: IntFieldUpdateOperationsInput | number
    player2eloChange?: IntFieldUpdateOperationsInput | number
  }

  export type MatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    winnerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1eloChange?: IntFieldUpdateOperationsInput | number
    player2eloChange?: IntFieldUpdateOperationsInput | number
  }

  export type UserV2CreateInput = {
    id?: string
    name: string
    password: string
    rating?: number
    rd?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    matches1?: MatchV2CreateNestedManyWithoutPlayer1Input
    matches2?: MatchV2CreateNestedManyWithoutPlayer2Input
    wins?: MatchV2CreateNestedManyWithoutWinnerInput
  }

  export type UserV2UncheckedCreateInput = {
    id?: string
    name: string
    password: string
    rating?: number
    rd?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    matches1?: MatchV2UncheckedCreateNestedManyWithoutPlayer1Input
    matches2?: MatchV2UncheckedCreateNestedManyWithoutPlayer2Input
    wins?: MatchV2UncheckedCreateNestedManyWithoutWinnerInput
  }

  export type UserV2UpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    rd?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches1?: MatchV2UpdateManyWithoutPlayer1NestedInput
    matches2?: MatchV2UpdateManyWithoutPlayer2NestedInput
    wins?: MatchV2UpdateManyWithoutWinnerNestedInput
  }

  export type UserV2UncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    rd?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches1?: MatchV2UncheckedUpdateManyWithoutPlayer1NestedInput
    matches2?: MatchV2UncheckedUpdateManyWithoutPlayer2NestedInput
    wins?: MatchV2UncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type UserV2CreateManyInput = {
    id?: string
    name: string
    password: string
    rating?: number
    rd?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserV2UpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    rd?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserV2UncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    rd?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchV2CreateInput = {
    id?: string
    createdAt?: Date | string
    player1RatingBefore: number
    player2RatingBefore: number
    player1RatingAfter: number
    player2RatingAfter: number
    player1RdBefore: number
    player2RdBefore: number
    player1RdAfter: number
    player2RdAfter: number
    player1: UserV2CreateNestedOneWithoutMatches1Input
    player2: UserV2CreateNestedOneWithoutMatches2Input
    winner: UserV2CreateNestedOneWithoutWinsInput
  }

  export type MatchV2UncheckedCreateInput = {
    id?: string
    player1Id: string
    player2Id: string
    winnerId: string
    createdAt?: Date | string
    player1RatingBefore: number
    player2RatingBefore: number
    player1RatingAfter: number
    player2RatingAfter: number
    player1RdBefore: number
    player2RdBefore: number
    player1RdAfter: number
    player2RdAfter: number
  }

  export type MatchV2UpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1RatingBefore?: FloatFieldUpdateOperationsInput | number
    player2RatingBefore?: FloatFieldUpdateOperationsInput | number
    player1RatingAfter?: FloatFieldUpdateOperationsInput | number
    player2RatingAfter?: FloatFieldUpdateOperationsInput | number
    player1RdBefore?: FloatFieldUpdateOperationsInput | number
    player2RdBefore?: FloatFieldUpdateOperationsInput | number
    player1RdAfter?: FloatFieldUpdateOperationsInput | number
    player2RdAfter?: FloatFieldUpdateOperationsInput | number
    player1?: UserV2UpdateOneRequiredWithoutMatches1NestedInput
    player2?: UserV2UpdateOneRequiredWithoutMatches2NestedInput
    winner?: UserV2UpdateOneRequiredWithoutWinsNestedInput
  }

  export type MatchV2UncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    winnerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1RatingBefore?: FloatFieldUpdateOperationsInput | number
    player2RatingBefore?: FloatFieldUpdateOperationsInput | number
    player1RatingAfter?: FloatFieldUpdateOperationsInput | number
    player2RatingAfter?: FloatFieldUpdateOperationsInput | number
    player1RdBefore?: FloatFieldUpdateOperationsInput | number
    player2RdBefore?: FloatFieldUpdateOperationsInput | number
    player1RdAfter?: FloatFieldUpdateOperationsInput | number
    player2RdAfter?: FloatFieldUpdateOperationsInput | number
  }

  export type MatchV2CreateManyInput = {
    id?: string
    player1Id: string
    player2Id: string
    winnerId: string
    createdAt?: Date | string
    player1RatingBefore: number
    player2RatingBefore: number
    player1RatingAfter: number
    player2RatingAfter: number
    player1RdBefore: number
    player2RdBefore: number
    player1RdAfter: number
    player2RdAfter: number
  }

  export type MatchV2UpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1RatingBefore?: FloatFieldUpdateOperationsInput | number
    player2RatingBefore?: FloatFieldUpdateOperationsInput | number
    player1RatingAfter?: FloatFieldUpdateOperationsInput | number
    player2RatingAfter?: FloatFieldUpdateOperationsInput | number
    player1RdBefore?: FloatFieldUpdateOperationsInput | number
    player2RdBefore?: FloatFieldUpdateOperationsInput | number
    player1RdAfter?: FloatFieldUpdateOperationsInput | number
    player2RdAfter?: FloatFieldUpdateOperationsInput | number
  }

  export type MatchV2UncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    winnerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1RatingBefore?: FloatFieldUpdateOperationsInput | number
    player2RatingBefore?: FloatFieldUpdateOperationsInput | number
    player1RatingAfter?: FloatFieldUpdateOperationsInput | number
    player2RatingAfter?: FloatFieldUpdateOperationsInput | number
    player1RdBefore?: FloatFieldUpdateOperationsInput | number
    player2RdBefore?: FloatFieldUpdateOperationsInput | number
    player1RdAfter?: FloatFieldUpdateOperationsInput | number
    player2RdAfter?: FloatFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MatchListRelationFilter = {
    every?: MatchWhereInput
    some?: MatchWhereInput
    none?: MatchWhereInput
  }

  export type MatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    elo?: SortOrder
    k?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    elo?: SortOrder
    k?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    elo?: SortOrder
    k?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    elo?: SortOrder
    k?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    elo?: SortOrder
    k?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    winnerId?: SortOrder
    createdAt?: SortOrder
    player1eloChange?: SortOrder
    player2eloChange?: SortOrder
  }

  export type MatchAvgOrderByAggregateInput = {
    player1eloChange?: SortOrder
    player2eloChange?: SortOrder
  }

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    winnerId?: SortOrder
    createdAt?: SortOrder
    player1eloChange?: SortOrder
    player2eloChange?: SortOrder
  }

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    winnerId?: SortOrder
    createdAt?: SortOrder
    player1eloChange?: SortOrder
    player2eloChange?: SortOrder
  }

  export type MatchSumOrderByAggregateInput = {
    player1eloChange?: SortOrder
    player2eloChange?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MatchV2ListRelationFilter = {
    every?: MatchV2WhereInput
    some?: MatchV2WhereInput
    none?: MatchV2WhereInput
  }

  export type MatchV2OrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserV2CountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    rating?: SortOrder
    rd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserV2AvgOrderByAggregateInput = {
    rating?: SortOrder
    rd?: SortOrder
  }

  export type UserV2MaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    rating?: SortOrder
    rd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserV2MinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    rating?: SortOrder
    rd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserV2SumOrderByAggregateInput = {
    rating?: SortOrder
    rd?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserV2ScalarRelationFilter = {
    is?: UserV2WhereInput
    isNot?: UserV2WhereInput
  }

  export type MatchV2CountOrderByAggregateInput = {
    id?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    winnerId?: SortOrder
    createdAt?: SortOrder
    player1RatingBefore?: SortOrder
    player2RatingBefore?: SortOrder
    player1RatingAfter?: SortOrder
    player2RatingAfter?: SortOrder
    player1RdBefore?: SortOrder
    player2RdBefore?: SortOrder
    player1RdAfter?: SortOrder
    player2RdAfter?: SortOrder
  }

  export type MatchV2AvgOrderByAggregateInput = {
    player1RatingBefore?: SortOrder
    player2RatingBefore?: SortOrder
    player1RatingAfter?: SortOrder
    player2RatingAfter?: SortOrder
    player1RdBefore?: SortOrder
    player2RdBefore?: SortOrder
    player1RdAfter?: SortOrder
    player2RdAfter?: SortOrder
  }

  export type MatchV2MaxOrderByAggregateInput = {
    id?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    winnerId?: SortOrder
    createdAt?: SortOrder
    player1RatingBefore?: SortOrder
    player2RatingBefore?: SortOrder
    player1RatingAfter?: SortOrder
    player2RatingAfter?: SortOrder
    player1RdBefore?: SortOrder
    player2RdBefore?: SortOrder
    player1RdAfter?: SortOrder
    player2RdAfter?: SortOrder
  }

  export type MatchV2MinOrderByAggregateInput = {
    id?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    winnerId?: SortOrder
    createdAt?: SortOrder
    player1RatingBefore?: SortOrder
    player2RatingBefore?: SortOrder
    player1RatingAfter?: SortOrder
    player2RatingAfter?: SortOrder
    player1RdBefore?: SortOrder
    player2RdBefore?: SortOrder
    player1RdAfter?: SortOrder
    player2RdAfter?: SortOrder
  }

  export type MatchV2SumOrderByAggregateInput = {
    player1RatingBefore?: SortOrder
    player2RatingBefore?: SortOrder
    player1RatingAfter?: SortOrder
    player2RatingAfter?: SortOrder
    player1RdBefore?: SortOrder
    player2RdBefore?: SortOrder
    player1RdAfter?: SortOrder
    player2RdAfter?: SortOrder
  }

  export type MatchCreateNestedManyWithoutPlayer1Input = {
    create?: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input> | MatchCreateWithoutPlayer1Input[] | MatchUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer1Input | MatchCreateOrConnectWithoutPlayer1Input[]
    createMany?: MatchCreateManyPlayer1InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutPlayer2Input = {
    create?: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input> | MatchCreateWithoutPlayer2Input[] | MatchUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer2Input | MatchCreateOrConnectWithoutPlayer2Input[]
    createMany?: MatchCreateManyPlayer2InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutWinnerInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutPlayer1Input = {
    create?: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input> | MatchCreateWithoutPlayer1Input[] | MatchUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer1Input | MatchCreateOrConnectWithoutPlayer1Input[]
    createMany?: MatchCreateManyPlayer1InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutPlayer2Input = {
    create?: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input> | MatchCreateWithoutPlayer2Input[] | MatchUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer2Input | MatchCreateOrConnectWithoutPlayer2Input[]
    createMany?: MatchCreateManyPlayer2InputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutWinnerInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MatchUpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input> | MatchCreateWithoutPlayer1Input[] | MatchUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer1Input | MatchCreateOrConnectWithoutPlayer1Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutPlayer1Input | MatchUpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: MatchCreateManyPlayer1InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutPlayer1Input | MatchUpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutPlayer1Input | MatchUpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input> | MatchCreateWithoutPlayer2Input[] | MatchUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer2Input | MatchCreateOrConnectWithoutPlayer2Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutPlayer2Input | MatchUpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: MatchCreateManyPlayer2InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutPlayer2Input | MatchUpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutPlayer2Input | MatchUpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutWinnerInput | MatchUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutWinnerInput | MatchUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutWinnerInput | MatchUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input> | MatchCreateWithoutPlayer1Input[] | MatchUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer1Input | MatchCreateOrConnectWithoutPlayer1Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutPlayer1Input | MatchUpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: MatchCreateManyPlayer1InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutPlayer1Input | MatchUpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutPlayer1Input | MatchUpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input> | MatchCreateWithoutPlayer2Input[] | MatchUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: MatchCreateOrConnectWithoutPlayer2Input | MatchCreateOrConnectWithoutPlayer2Input[]
    upsert?: MatchUpsertWithWhereUniqueWithoutPlayer2Input | MatchUpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: MatchCreateManyPlayer2InputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutPlayer2Input | MatchUpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: MatchUpdateManyWithWhereWithoutPlayer2Input | MatchUpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutWinnerInput | MatchUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutWinnerInput | MatchUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutWinnerInput | MatchUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMatches1Input = {
    create?: XOR<UserCreateWithoutMatches1Input, UserUncheckedCreateWithoutMatches1Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatches1Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMatches2Input = {
    create?: XOR<UserCreateWithoutMatches2Input, UserUncheckedCreateWithoutMatches2Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatches2Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWinsInput = {
    create?: XOR<UserCreateWithoutWinsInput, UserUncheckedCreateWithoutWinsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWinsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMatches1NestedInput = {
    create?: XOR<UserCreateWithoutMatches1Input, UserUncheckedCreateWithoutMatches1Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatches1Input
    upsert?: UserUpsertWithoutMatches1Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatches1Input, UserUpdateWithoutMatches1Input>, UserUncheckedUpdateWithoutMatches1Input>
  }

  export type UserUpdateOneRequiredWithoutMatches2NestedInput = {
    create?: XOR<UserCreateWithoutMatches2Input, UserUncheckedCreateWithoutMatches2Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatches2Input
    upsert?: UserUpsertWithoutMatches2Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatches2Input, UserUpdateWithoutMatches2Input>, UserUncheckedUpdateWithoutMatches2Input>
  }

  export type UserUpdateOneRequiredWithoutWinsNestedInput = {
    create?: XOR<UserCreateWithoutWinsInput, UserUncheckedCreateWithoutWinsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWinsInput
    upsert?: UserUpsertWithoutWinsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWinsInput, UserUpdateWithoutWinsInput>, UserUncheckedUpdateWithoutWinsInput>
  }

  export type MatchV2CreateNestedManyWithoutPlayer1Input = {
    create?: XOR<MatchV2CreateWithoutPlayer1Input, MatchV2UncheckedCreateWithoutPlayer1Input> | MatchV2CreateWithoutPlayer1Input[] | MatchV2UncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: MatchV2CreateOrConnectWithoutPlayer1Input | MatchV2CreateOrConnectWithoutPlayer1Input[]
    createMany?: MatchV2CreateManyPlayer1InputEnvelope
    connect?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
  }

  export type MatchV2CreateNestedManyWithoutPlayer2Input = {
    create?: XOR<MatchV2CreateWithoutPlayer2Input, MatchV2UncheckedCreateWithoutPlayer2Input> | MatchV2CreateWithoutPlayer2Input[] | MatchV2UncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: MatchV2CreateOrConnectWithoutPlayer2Input | MatchV2CreateOrConnectWithoutPlayer2Input[]
    createMany?: MatchV2CreateManyPlayer2InputEnvelope
    connect?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
  }

  export type MatchV2CreateNestedManyWithoutWinnerInput = {
    create?: XOR<MatchV2CreateWithoutWinnerInput, MatchV2UncheckedCreateWithoutWinnerInput> | MatchV2CreateWithoutWinnerInput[] | MatchV2UncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchV2CreateOrConnectWithoutWinnerInput | MatchV2CreateOrConnectWithoutWinnerInput[]
    createMany?: MatchV2CreateManyWinnerInputEnvelope
    connect?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
  }

  export type MatchV2UncheckedCreateNestedManyWithoutPlayer1Input = {
    create?: XOR<MatchV2CreateWithoutPlayer1Input, MatchV2UncheckedCreateWithoutPlayer1Input> | MatchV2CreateWithoutPlayer1Input[] | MatchV2UncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: MatchV2CreateOrConnectWithoutPlayer1Input | MatchV2CreateOrConnectWithoutPlayer1Input[]
    createMany?: MatchV2CreateManyPlayer1InputEnvelope
    connect?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
  }

  export type MatchV2UncheckedCreateNestedManyWithoutPlayer2Input = {
    create?: XOR<MatchV2CreateWithoutPlayer2Input, MatchV2UncheckedCreateWithoutPlayer2Input> | MatchV2CreateWithoutPlayer2Input[] | MatchV2UncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: MatchV2CreateOrConnectWithoutPlayer2Input | MatchV2CreateOrConnectWithoutPlayer2Input[]
    createMany?: MatchV2CreateManyPlayer2InputEnvelope
    connect?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
  }

  export type MatchV2UncheckedCreateNestedManyWithoutWinnerInput = {
    create?: XOR<MatchV2CreateWithoutWinnerInput, MatchV2UncheckedCreateWithoutWinnerInput> | MatchV2CreateWithoutWinnerInput[] | MatchV2UncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchV2CreateOrConnectWithoutWinnerInput | MatchV2CreateOrConnectWithoutWinnerInput[]
    createMany?: MatchV2CreateManyWinnerInputEnvelope
    connect?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MatchV2UpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<MatchV2CreateWithoutPlayer1Input, MatchV2UncheckedCreateWithoutPlayer1Input> | MatchV2CreateWithoutPlayer1Input[] | MatchV2UncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: MatchV2CreateOrConnectWithoutPlayer1Input | MatchV2CreateOrConnectWithoutPlayer1Input[]
    upsert?: MatchV2UpsertWithWhereUniqueWithoutPlayer1Input | MatchV2UpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: MatchV2CreateManyPlayer1InputEnvelope
    set?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
    disconnect?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
    delete?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
    connect?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
    update?: MatchV2UpdateWithWhereUniqueWithoutPlayer1Input | MatchV2UpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: MatchV2UpdateManyWithWhereWithoutPlayer1Input | MatchV2UpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: MatchV2ScalarWhereInput | MatchV2ScalarWhereInput[]
  }

  export type MatchV2UpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<MatchV2CreateWithoutPlayer2Input, MatchV2UncheckedCreateWithoutPlayer2Input> | MatchV2CreateWithoutPlayer2Input[] | MatchV2UncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: MatchV2CreateOrConnectWithoutPlayer2Input | MatchV2CreateOrConnectWithoutPlayer2Input[]
    upsert?: MatchV2UpsertWithWhereUniqueWithoutPlayer2Input | MatchV2UpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: MatchV2CreateManyPlayer2InputEnvelope
    set?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
    disconnect?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
    delete?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
    connect?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
    update?: MatchV2UpdateWithWhereUniqueWithoutPlayer2Input | MatchV2UpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: MatchV2UpdateManyWithWhereWithoutPlayer2Input | MatchV2UpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: MatchV2ScalarWhereInput | MatchV2ScalarWhereInput[]
  }

  export type MatchV2UpdateManyWithoutWinnerNestedInput = {
    create?: XOR<MatchV2CreateWithoutWinnerInput, MatchV2UncheckedCreateWithoutWinnerInput> | MatchV2CreateWithoutWinnerInput[] | MatchV2UncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchV2CreateOrConnectWithoutWinnerInput | MatchV2CreateOrConnectWithoutWinnerInput[]
    upsert?: MatchV2UpsertWithWhereUniqueWithoutWinnerInput | MatchV2UpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: MatchV2CreateManyWinnerInputEnvelope
    set?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
    disconnect?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
    delete?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
    connect?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
    update?: MatchV2UpdateWithWhereUniqueWithoutWinnerInput | MatchV2UpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: MatchV2UpdateManyWithWhereWithoutWinnerInput | MatchV2UpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: MatchV2ScalarWhereInput | MatchV2ScalarWhereInput[]
  }

  export type MatchV2UncheckedUpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<MatchV2CreateWithoutPlayer1Input, MatchV2UncheckedCreateWithoutPlayer1Input> | MatchV2CreateWithoutPlayer1Input[] | MatchV2UncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: MatchV2CreateOrConnectWithoutPlayer1Input | MatchV2CreateOrConnectWithoutPlayer1Input[]
    upsert?: MatchV2UpsertWithWhereUniqueWithoutPlayer1Input | MatchV2UpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: MatchV2CreateManyPlayer1InputEnvelope
    set?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
    disconnect?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
    delete?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
    connect?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
    update?: MatchV2UpdateWithWhereUniqueWithoutPlayer1Input | MatchV2UpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: MatchV2UpdateManyWithWhereWithoutPlayer1Input | MatchV2UpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: MatchV2ScalarWhereInput | MatchV2ScalarWhereInput[]
  }

  export type MatchV2UncheckedUpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<MatchV2CreateWithoutPlayer2Input, MatchV2UncheckedCreateWithoutPlayer2Input> | MatchV2CreateWithoutPlayer2Input[] | MatchV2UncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: MatchV2CreateOrConnectWithoutPlayer2Input | MatchV2CreateOrConnectWithoutPlayer2Input[]
    upsert?: MatchV2UpsertWithWhereUniqueWithoutPlayer2Input | MatchV2UpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: MatchV2CreateManyPlayer2InputEnvelope
    set?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
    disconnect?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
    delete?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
    connect?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
    update?: MatchV2UpdateWithWhereUniqueWithoutPlayer2Input | MatchV2UpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: MatchV2UpdateManyWithWhereWithoutPlayer2Input | MatchV2UpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: MatchV2ScalarWhereInput | MatchV2ScalarWhereInput[]
  }

  export type MatchV2UncheckedUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<MatchV2CreateWithoutWinnerInput, MatchV2UncheckedCreateWithoutWinnerInput> | MatchV2CreateWithoutWinnerInput[] | MatchV2UncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchV2CreateOrConnectWithoutWinnerInput | MatchV2CreateOrConnectWithoutWinnerInput[]
    upsert?: MatchV2UpsertWithWhereUniqueWithoutWinnerInput | MatchV2UpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: MatchV2CreateManyWinnerInputEnvelope
    set?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
    disconnect?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
    delete?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
    connect?: MatchV2WhereUniqueInput | MatchV2WhereUniqueInput[]
    update?: MatchV2UpdateWithWhereUniqueWithoutWinnerInput | MatchV2UpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: MatchV2UpdateManyWithWhereWithoutWinnerInput | MatchV2UpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: MatchV2ScalarWhereInput | MatchV2ScalarWhereInput[]
  }

  export type UserV2CreateNestedOneWithoutMatches1Input = {
    create?: XOR<UserV2CreateWithoutMatches1Input, UserV2UncheckedCreateWithoutMatches1Input>
    connectOrCreate?: UserV2CreateOrConnectWithoutMatches1Input
    connect?: UserV2WhereUniqueInput
  }

  export type UserV2CreateNestedOneWithoutMatches2Input = {
    create?: XOR<UserV2CreateWithoutMatches2Input, UserV2UncheckedCreateWithoutMatches2Input>
    connectOrCreate?: UserV2CreateOrConnectWithoutMatches2Input
    connect?: UserV2WhereUniqueInput
  }

  export type UserV2CreateNestedOneWithoutWinsInput = {
    create?: XOR<UserV2CreateWithoutWinsInput, UserV2UncheckedCreateWithoutWinsInput>
    connectOrCreate?: UserV2CreateOrConnectWithoutWinsInput
    connect?: UserV2WhereUniqueInput
  }

  export type UserV2UpdateOneRequiredWithoutMatches1NestedInput = {
    create?: XOR<UserV2CreateWithoutMatches1Input, UserV2UncheckedCreateWithoutMatches1Input>
    connectOrCreate?: UserV2CreateOrConnectWithoutMatches1Input
    upsert?: UserV2UpsertWithoutMatches1Input
    connect?: UserV2WhereUniqueInput
    update?: XOR<XOR<UserV2UpdateToOneWithWhereWithoutMatches1Input, UserV2UpdateWithoutMatches1Input>, UserV2UncheckedUpdateWithoutMatches1Input>
  }

  export type UserV2UpdateOneRequiredWithoutMatches2NestedInput = {
    create?: XOR<UserV2CreateWithoutMatches2Input, UserV2UncheckedCreateWithoutMatches2Input>
    connectOrCreate?: UserV2CreateOrConnectWithoutMatches2Input
    upsert?: UserV2UpsertWithoutMatches2Input
    connect?: UserV2WhereUniqueInput
    update?: XOR<XOR<UserV2UpdateToOneWithWhereWithoutMatches2Input, UserV2UpdateWithoutMatches2Input>, UserV2UncheckedUpdateWithoutMatches2Input>
  }

  export type UserV2UpdateOneRequiredWithoutWinsNestedInput = {
    create?: XOR<UserV2CreateWithoutWinsInput, UserV2UncheckedCreateWithoutWinsInput>
    connectOrCreate?: UserV2CreateOrConnectWithoutWinsInput
    upsert?: UserV2UpsertWithoutWinsInput
    connect?: UserV2WhereUniqueInput
    update?: XOR<XOR<UserV2UpdateToOneWithWhereWithoutWinsInput, UserV2UpdateWithoutWinsInput>, UserV2UncheckedUpdateWithoutWinsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type MatchCreateWithoutPlayer1Input = {
    id?: string
    createdAt?: Date | string
    player1eloChange: number
    player2eloChange: number
    player2: UserCreateNestedOneWithoutMatches2Input
    winner: UserCreateNestedOneWithoutWinsInput
  }

  export type MatchUncheckedCreateWithoutPlayer1Input = {
    id?: string
    player2Id: string
    winnerId: string
    createdAt?: Date | string
    player1eloChange: number
    player2eloChange: number
  }

  export type MatchCreateOrConnectWithoutPlayer1Input = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input>
  }

  export type MatchCreateManyPlayer1InputEnvelope = {
    data: MatchCreateManyPlayer1Input | MatchCreateManyPlayer1Input[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutPlayer2Input = {
    id?: string
    createdAt?: Date | string
    player1eloChange: number
    player2eloChange: number
    player1: UserCreateNestedOneWithoutMatches1Input
    winner: UserCreateNestedOneWithoutWinsInput
  }

  export type MatchUncheckedCreateWithoutPlayer2Input = {
    id?: string
    player1Id: string
    winnerId: string
    createdAt?: Date | string
    player1eloChange: number
    player2eloChange: number
  }

  export type MatchCreateOrConnectWithoutPlayer2Input = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input>
  }

  export type MatchCreateManyPlayer2InputEnvelope = {
    data: MatchCreateManyPlayer2Input | MatchCreateManyPlayer2Input[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutWinnerInput = {
    id?: string
    createdAt?: Date | string
    player1eloChange: number
    player2eloChange: number
    player1: UserCreateNestedOneWithoutMatches1Input
    player2: UserCreateNestedOneWithoutMatches2Input
  }

  export type MatchUncheckedCreateWithoutWinnerInput = {
    id?: string
    player1Id: string
    player2Id: string
    createdAt?: Date | string
    player1eloChange: number
    player2eloChange: number
  }

  export type MatchCreateOrConnectWithoutWinnerInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput>
  }

  export type MatchCreateManyWinnerInputEnvelope = {
    data: MatchCreateManyWinnerInput | MatchCreateManyWinnerInput[]
    skipDuplicates?: boolean
  }

  export type MatchUpsertWithWhereUniqueWithoutPlayer1Input = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutPlayer1Input, MatchUncheckedUpdateWithoutPlayer1Input>
    create: XOR<MatchCreateWithoutPlayer1Input, MatchUncheckedCreateWithoutPlayer1Input>
  }

  export type MatchUpdateWithWhereUniqueWithoutPlayer1Input = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutPlayer1Input, MatchUncheckedUpdateWithoutPlayer1Input>
  }

  export type MatchUpdateManyWithWhereWithoutPlayer1Input = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutPlayer1Input>
  }

  export type MatchScalarWhereInput = {
    AND?: MatchScalarWhereInput | MatchScalarWhereInput[]
    OR?: MatchScalarWhereInput[]
    NOT?: MatchScalarWhereInput | MatchScalarWhereInput[]
    id?: StringFilter<"Match"> | string
    player1Id?: StringFilter<"Match"> | string
    player2Id?: StringFilter<"Match"> | string
    winnerId?: StringFilter<"Match"> | string
    createdAt?: DateTimeFilter<"Match"> | Date | string
    player1eloChange?: IntFilter<"Match"> | number
    player2eloChange?: IntFilter<"Match"> | number
  }

  export type MatchUpsertWithWhereUniqueWithoutPlayer2Input = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutPlayer2Input, MatchUncheckedUpdateWithoutPlayer2Input>
    create: XOR<MatchCreateWithoutPlayer2Input, MatchUncheckedCreateWithoutPlayer2Input>
  }

  export type MatchUpdateWithWhereUniqueWithoutPlayer2Input = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutPlayer2Input, MatchUncheckedUpdateWithoutPlayer2Input>
  }

  export type MatchUpdateManyWithWhereWithoutPlayer2Input = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutPlayer2Input>
  }

  export type MatchUpsertWithWhereUniqueWithoutWinnerInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutWinnerInput, MatchUncheckedUpdateWithoutWinnerInput>
    create: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutWinnerInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutWinnerInput, MatchUncheckedUpdateWithoutWinnerInput>
  }

  export type MatchUpdateManyWithWhereWithoutWinnerInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutWinnerInput>
  }

  export type UserCreateWithoutMatches1Input = {
    id?: string
    name: string
    password: string
    elo?: number
    k?: number
    createdAt?: Date | string
    matches2?: MatchCreateNestedManyWithoutPlayer2Input
    wins?: MatchCreateNestedManyWithoutWinnerInput
  }

  export type UserUncheckedCreateWithoutMatches1Input = {
    id?: string
    name: string
    password: string
    elo?: number
    k?: number
    createdAt?: Date | string
    matches2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
    wins?: MatchUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type UserCreateOrConnectWithoutMatches1Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatches1Input, UserUncheckedCreateWithoutMatches1Input>
  }

  export type UserCreateWithoutMatches2Input = {
    id?: string
    name: string
    password: string
    elo?: number
    k?: number
    createdAt?: Date | string
    matches1?: MatchCreateNestedManyWithoutPlayer1Input
    wins?: MatchCreateNestedManyWithoutWinnerInput
  }

  export type UserUncheckedCreateWithoutMatches2Input = {
    id?: string
    name: string
    password: string
    elo?: number
    k?: number
    createdAt?: Date | string
    matches1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    wins?: MatchUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type UserCreateOrConnectWithoutMatches2Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatches2Input, UserUncheckedCreateWithoutMatches2Input>
  }

  export type UserCreateWithoutWinsInput = {
    id?: string
    name: string
    password: string
    elo?: number
    k?: number
    createdAt?: Date | string
    matches1?: MatchCreateNestedManyWithoutPlayer1Input
    matches2?: MatchCreateNestedManyWithoutPlayer2Input
  }

  export type UserUncheckedCreateWithoutWinsInput = {
    id?: string
    name: string
    password: string
    elo?: number
    k?: number
    createdAt?: Date | string
    matches1?: MatchUncheckedCreateNestedManyWithoutPlayer1Input
    matches2?: MatchUncheckedCreateNestedManyWithoutPlayer2Input
  }

  export type UserCreateOrConnectWithoutWinsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWinsInput, UserUncheckedCreateWithoutWinsInput>
  }

  export type UserUpsertWithoutMatches1Input = {
    update: XOR<UserUpdateWithoutMatches1Input, UserUncheckedUpdateWithoutMatches1Input>
    create: XOR<UserCreateWithoutMatches1Input, UserUncheckedCreateWithoutMatches1Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatches1Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatches1Input, UserUncheckedUpdateWithoutMatches1Input>
  }

  export type UserUpdateWithoutMatches1Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    elo?: IntFieldUpdateOperationsInput | number
    k?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches2?: MatchUpdateManyWithoutPlayer2NestedInput
    wins?: MatchUpdateManyWithoutWinnerNestedInput
  }

  export type UserUncheckedUpdateWithoutMatches1Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    elo?: IntFieldUpdateOperationsInput | number
    k?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
    wins?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type UserUpsertWithoutMatches2Input = {
    update: XOR<UserUpdateWithoutMatches2Input, UserUncheckedUpdateWithoutMatches2Input>
    create: XOR<UserCreateWithoutMatches2Input, UserUncheckedCreateWithoutMatches2Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatches2Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatches2Input, UserUncheckedUpdateWithoutMatches2Input>
  }

  export type UserUpdateWithoutMatches2Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    elo?: IntFieldUpdateOperationsInput | number
    k?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches1?: MatchUpdateManyWithoutPlayer1NestedInput
    wins?: MatchUpdateManyWithoutWinnerNestedInput
  }

  export type UserUncheckedUpdateWithoutMatches2Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    elo?: IntFieldUpdateOperationsInput | number
    k?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    wins?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type UserUpsertWithoutWinsInput = {
    update: XOR<UserUpdateWithoutWinsInput, UserUncheckedUpdateWithoutWinsInput>
    create: XOR<UserCreateWithoutWinsInput, UserUncheckedCreateWithoutWinsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWinsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWinsInput, UserUncheckedUpdateWithoutWinsInput>
  }

  export type UserUpdateWithoutWinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    elo?: IntFieldUpdateOperationsInput | number
    k?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches1?: MatchUpdateManyWithoutPlayer1NestedInput
    matches2?: MatchUpdateManyWithoutPlayer2NestedInput
  }

  export type UserUncheckedUpdateWithoutWinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    elo?: IntFieldUpdateOperationsInput | number
    k?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches1?: MatchUncheckedUpdateManyWithoutPlayer1NestedInput
    matches2?: MatchUncheckedUpdateManyWithoutPlayer2NestedInput
  }

  export type MatchV2CreateWithoutPlayer1Input = {
    id?: string
    createdAt?: Date | string
    player1RatingBefore: number
    player2RatingBefore: number
    player1RatingAfter: number
    player2RatingAfter: number
    player1RdBefore: number
    player2RdBefore: number
    player1RdAfter: number
    player2RdAfter: number
    player2: UserV2CreateNestedOneWithoutMatches2Input
    winner: UserV2CreateNestedOneWithoutWinsInput
  }

  export type MatchV2UncheckedCreateWithoutPlayer1Input = {
    id?: string
    player2Id: string
    winnerId: string
    createdAt?: Date | string
    player1RatingBefore: number
    player2RatingBefore: number
    player1RatingAfter: number
    player2RatingAfter: number
    player1RdBefore: number
    player2RdBefore: number
    player1RdAfter: number
    player2RdAfter: number
  }

  export type MatchV2CreateOrConnectWithoutPlayer1Input = {
    where: MatchV2WhereUniqueInput
    create: XOR<MatchV2CreateWithoutPlayer1Input, MatchV2UncheckedCreateWithoutPlayer1Input>
  }

  export type MatchV2CreateManyPlayer1InputEnvelope = {
    data: MatchV2CreateManyPlayer1Input | MatchV2CreateManyPlayer1Input[]
    skipDuplicates?: boolean
  }

  export type MatchV2CreateWithoutPlayer2Input = {
    id?: string
    createdAt?: Date | string
    player1RatingBefore: number
    player2RatingBefore: number
    player1RatingAfter: number
    player2RatingAfter: number
    player1RdBefore: number
    player2RdBefore: number
    player1RdAfter: number
    player2RdAfter: number
    player1: UserV2CreateNestedOneWithoutMatches1Input
    winner: UserV2CreateNestedOneWithoutWinsInput
  }

  export type MatchV2UncheckedCreateWithoutPlayer2Input = {
    id?: string
    player1Id: string
    winnerId: string
    createdAt?: Date | string
    player1RatingBefore: number
    player2RatingBefore: number
    player1RatingAfter: number
    player2RatingAfter: number
    player1RdBefore: number
    player2RdBefore: number
    player1RdAfter: number
    player2RdAfter: number
  }

  export type MatchV2CreateOrConnectWithoutPlayer2Input = {
    where: MatchV2WhereUniqueInput
    create: XOR<MatchV2CreateWithoutPlayer2Input, MatchV2UncheckedCreateWithoutPlayer2Input>
  }

  export type MatchV2CreateManyPlayer2InputEnvelope = {
    data: MatchV2CreateManyPlayer2Input | MatchV2CreateManyPlayer2Input[]
    skipDuplicates?: boolean
  }

  export type MatchV2CreateWithoutWinnerInput = {
    id?: string
    createdAt?: Date | string
    player1RatingBefore: number
    player2RatingBefore: number
    player1RatingAfter: number
    player2RatingAfter: number
    player1RdBefore: number
    player2RdBefore: number
    player1RdAfter: number
    player2RdAfter: number
    player1: UserV2CreateNestedOneWithoutMatches1Input
    player2: UserV2CreateNestedOneWithoutMatches2Input
  }

  export type MatchV2UncheckedCreateWithoutWinnerInput = {
    id?: string
    player1Id: string
    player2Id: string
    createdAt?: Date | string
    player1RatingBefore: number
    player2RatingBefore: number
    player1RatingAfter: number
    player2RatingAfter: number
    player1RdBefore: number
    player2RdBefore: number
    player1RdAfter: number
    player2RdAfter: number
  }

  export type MatchV2CreateOrConnectWithoutWinnerInput = {
    where: MatchV2WhereUniqueInput
    create: XOR<MatchV2CreateWithoutWinnerInput, MatchV2UncheckedCreateWithoutWinnerInput>
  }

  export type MatchV2CreateManyWinnerInputEnvelope = {
    data: MatchV2CreateManyWinnerInput | MatchV2CreateManyWinnerInput[]
    skipDuplicates?: boolean
  }

  export type MatchV2UpsertWithWhereUniqueWithoutPlayer1Input = {
    where: MatchV2WhereUniqueInput
    update: XOR<MatchV2UpdateWithoutPlayer1Input, MatchV2UncheckedUpdateWithoutPlayer1Input>
    create: XOR<MatchV2CreateWithoutPlayer1Input, MatchV2UncheckedCreateWithoutPlayer1Input>
  }

  export type MatchV2UpdateWithWhereUniqueWithoutPlayer1Input = {
    where: MatchV2WhereUniqueInput
    data: XOR<MatchV2UpdateWithoutPlayer1Input, MatchV2UncheckedUpdateWithoutPlayer1Input>
  }

  export type MatchV2UpdateManyWithWhereWithoutPlayer1Input = {
    where: MatchV2ScalarWhereInput
    data: XOR<MatchV2UpdateManyMutationInput, MatchV2UncheckedUpdateManyWithoutPlayer1Input>
  }

  export type MatchV2ScalarWhereInput = {
    AND?: MatchV2ScalarWhereInput | MatchV2ScalarWhereInput[]
    OR?: MatchV2ScalarWhereInput[]
    NOT?: MatchV2ScalarWhereInput | MatchV2ScalarWhereInput[]
    id?: StringFilter<"MatchV2"> | string
    player1Id?: StringFilter<"MatchV2"> | string
    player2Id?: StringFilter<"MatchV2"> | string
    winnerId?: StringFilter<"MatchV2"> | string
    createdAt?: DateTimeFilter<"MatchV2"> | Date | string
    player1RatingBefore?: FloatFilter<"MatchV2"> | number
    player2RatingBefore?: FloatFilter<"MatchV2"> | number
    player1RatingAfter?: FloatFilter<"MatchV2"> | number
    player2RatingAfter?: FloatFilter<"MatchV2"> | number
    player1RdBefore?: FloatFilter<"MatchV2"> | number
    player2RdBefore?: FloatFilter<"MatchV2"> | number
    player1RdAfter?: FloatFilter<"MatchV2"> | number
    player2RdAfter?: FloatFilter<"MatchV2"> | number
  }

  export type MatchV2UpsertWithWhereUniqueWithoutPlayer2Input = {
    where: MatchV2WhereUniqueInput
    update: XOR<MatchV2UpdateWithoutPlayer2Input, MatchV2UncheckedUpdateWithoutPlayer2Input>
    create: XOR<MatchV2CreateWithoutPlayer2Input, MatchV2UncheckedCreateWithoutPlayer2Input>
  }

  export type MatchV2UpdateWithWhereUniqueWithoutPlayer2Input = {
    where: MatchV2WhereUniqueInput
    data: XOR<MatchV2UpdateWithoutPlayer2Input, MatchV2UncheckedUpdateWithoutPlayer2Input>
  }

  export type MatchV2UpdateManyWithWhereWithoutPlayer2Input = {
    where: MatchV2ScalarWhereInput
    data: XOR<MatchV2UpdateManyMutationInput, MatchV2UncheckedUpdateManyWithoutPlayer2Input>
  }

  export type MatchV2UpsertWithWhereUniqueWithoutWinnerInput = {
    where: MatchV2WhereUniqueInput
    update: XOR<MatchV2UpdateWithoutWinnerInput, MatchV2UncheckedUpdateWithoutWinnerInput>
    create: XOR<MatchV2CreateWithoutWinnerInput, MatchV2UncheckedCreateWithoutWinnerInput>
  }

  export type MatchV2UpdateWithWhereUniqueWithoutWinnerInput = {
    where: MatchV2WhereUniqueInput
    data: XOR<MatchV2UpdateWithoutWinnerInput, MatchV2UncheckedUpdateWithoutWinnerInput>
  }

  export type MatchV2UpdateManyWithWhereWithoutWinnerInput = {
    where: MatchV2ScalarWhereInput
    data: XOR<MatchV2UpdateManyMutationInput, MatchV2UncheckedUpdateManyWithoutWinnerInput>
  }

  export type UserV2CreateWithoutMatches1Input = {
    id?: string
    name: string
    password: string
    rating?: number
    rd?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    matches2?: MatchV2CreateNestedManyWithoutPlayer2Input
    wins?: MatchV2CreateNestedManyWithoutWinnerInput
  }

  export type UserV2UncheckedCreateWithoutMatches1Input = {
    id?: string
    name: string
    password: string
    rating?: number
    rd?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    matches2?: MatchV2UncheckedCreateNestedManyWithoutPlayer2Input
    wins?: MatchV2UncheckedCreateNestedManyWithoutWinnerInput
  }

  export type UserV2CreateOrConnectWithoutMatches1Input = {
    where: UserV2WhereUniqueInput
    create: XOR<UserV2CreateWithoutMatches1Input, UserV2UncheckedCreateWithoutMatches1Input>
  }

  export type UserV2CreateWithoutMatches2Input = {
    id?: string
    name: string
    password: string
    rating?: number
    rd?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    matches1?: MatchV2CreateNestedManyWithoutPlayer1Input
    wins?: MatchV2CreateNestedManyWithoutWinnerInput
  }

  export type UserV2UncheckedCreateWithoutMatches2Input = {
    id?: string
    name: string
    password: string
    rating?: number
    rd?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    matches1?: MatchV2UncheckedCreateNestedManyWithoutPlayer1Input
    wins?: MatchV2UncheckedCreateNestedManyWithoutWinnerInput
  }

  export type UserV2CreateOrConnectWithoutMatches2Input = {
    where: UserV2WhereUniqueInput
    create: XOR<UserV2CreateWithoutMatches2Input, UserV2UncheckedCreateWithoutMatches2Input>
  }

  export type UserV2CreateWithoutWinsInput = {
    id?: string
    name: string
    password: string
    rating?: number
    rd?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    matches1?: MatchV2CreateNestedManyWithoutPlayer1Input
    matches2?: MatchV2CreateNestedManyWithoutPlayer2Input
  }

  export type UserV2UncheckedCreateWithoutWinsInput = {
    id?: string
    name: string
    password: string
    rating?: number
    rd?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    matches1?: MatchV2UncheckedCreateNestedManyWithoutPlayer1Input
    matches2?: MatchV2UncheckedCreateNestedManyWithoutPlayer2Input
  }

  export type UserV2CreateOrConnectWithoutWinsInput = {
    where: UserV2WhereUniqueInput
    create: XOR<UserV2CreateWithoutWinsInput, UserV2UncheckedCreateWithoutWinsInput>
  }

  export type UserV2UpsertWithoutMatches1Input = {
    update: XOR<UserV2UpdateWithoutMatches1Input, UserV2UncheckedUpdateWithoutMatches1Input>
    create: XOR<UserV2CreateWithoutMatches1Input, UserV2UncheckedCreateWithoutMatches1Input>
    where?: UserV2WhereInput
  }

  export type UserV2UpdateToOneWithWhereWithoutMatches1Input = {
    where?: UserV2WhereInput
    data: XOR<UserV2UpdateWithoutMatches1Input, UserV2UncheckedUpdateWithoutMatches1Input>
  }

  export type UserV2UpdateWithoutMatches1Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    rd?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches2?: MatchV2UpdateManyWithoutPlayer2NestedInput
    wins?: MatchV2UpdateManyWithoutWinnerNestedInput
  }

  export type UserV2UncheckedUpdateWithoutMatches1Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    rd?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches2?: MatchV2UncheckedUpdateManyWithoutPlayer2NestedInput
    wins?: MatchV2UncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type UserV2UpsertWithoutMatches2Input = {
    update: XOR<UserV2UpdateWithoutMatches2Input, UserV2UncheckedUpdateWithoutMatches2Input>
    create: XOR<UserV2CreateWithoutMatches2Input, UserV2UncheckedCreateWithoutMatches2Input>
    where?: UserV2WhereInput
  }

  export type UserV2UpdateToOneWithWhereWithoutMatches2Input = {
    where?: UserV2WhereInput
    data: XOR<UserV2UpdateWithoutMatches2Input, UserV2UncheckedUpdateWithoutMatches2Input>
  }

  export type UserV2UpdateWithoutMatches2Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    rd?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches1?: MatchV2UpdateManyWithoutPlayer1NestedInput
    wins?: MatchV2UpdateManyWithoutWinnerNestedInput
  }

  export type UserV2UncheckedUpdateWithoutMatches2Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    rd?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches1?: MatchV2UncheckedUpdateManyWithoutPlayer1NestedInput
    wins?: MatchV2UncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type UserV2UpsertWithoutWinsInput = {
    update: XOR<UserV2UpdateWithoutWinsInput, UserV2UncheckedUpdateWithoutWinsInput>
    create: XOR<UserV2CreateWithoutWinsInput, UserV2UncheckedCreateWithoutWinsInput>
    where?: UserV2WhereInput
  }

  export type UserV2UpdateToOneWithWhereWithoutWinsInput = {
    where?: UserV2WhereInput
    data: XOR<UserV2UpdateWithoutWinsInput, UserV2UncheckedUpdateWithoutWinsInput>
  }

  export type UserV2UpdateWithoutWinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    rd?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches1?: MatchV2UpdateManyWithoutPlayer1NestedInput
    matches2?: MatchV2UpdateManyWithoutPlayer2NestedInput
  }

  export type UserV2UncheckedUpdateWithoutWinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    rd?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches1?: MatchV2UncheckedUpdateManyWithoutPlayer1NestedInput
    matches2?: MatchV2UncheckedUpdateManyWithoutPlayer2NestedInput
  }

  export type MatchCreateManyPlayer1Input = {
    id?: string
    player2Id: string
    winnerId: string
    createdAt?: Date | string
    player1eloChange: number
    player2eloChange: number
  }

  export type MatchCreateManyPlayer2Input = {
    id?: string
    player1Id: string
    winnerId: string
    createdAt?: Date | string
    player1eloChange: number
    player2eloChange: number
  }

  export type MatchCreateManyWinnerInput = {
    id?: string
    player1Id: string
    player2Id: string
    createdAt?: Date | string
    player1eloChange: number
    player2eloChange: number
  }

  export type MatchUpdateWithoutPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1eloChange?: IntFieldUpdateOperationsInput | number
    player2eloChange?: IntFieldUpdateOperationsInput | number
    player2?: UserUpdateOneRequiredWithoutMatches2NestedInput
    winner?: UserUpdateOneRequiredWithoutWinsNestedInput
  }

  export type MatchUncheckedUpdateWithoutPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    winnerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1eloChange?: IntFieldUpdateOperationsInput | number
    player2eloChange?: IntFieldUpdateOperationsInput | number
  }

  export type MatchUncheckedUpdateManyWithoutPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    winnerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1eloChange?: IntFieldUpdateOperationsInput | number
    player2eloChange?: IntFieldUpdateOperationsInput | number
  }

  export type MatchUpdateWithoutPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1eloChange?: IntFieldUpdateOperationsInput | number
    player2eloChange?: IntFieldUpdateOperationsInput | number
    player1?: UserUpdateOneRequiredWithoutMatches1NestedInput
    winner?: UserUpdateOneRequiredWithoutWinsNestedInput
  }

  export type MatchUncheckedUpdateWithoutPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    winnerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1eloChange?: IntFieldUpdateOperationsInput | number
    player2eloChange?: IntFieldUpdateOperationsInput | number
  }

  export type MatchUncheckedUpdateManyWithoutPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    winnerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1eloChange?: IntFieldUpdateOperationsInput | number
    player2eloChange?: IntFieldUpdateOperationsInput | number
  }

  export type MatchUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1eloChange?: IntFieldUpdateOperationsInput | number
    player2eloChange?: IntFieldUpdateOperationsInput | number
    player1?: UserUpdateOneRequiredWithoutMatches1NestedInput
    player2?: UserUpdateOneRequiredWithoutMatches2NestedInput
  }

  export type MatchUncheckedUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1eloChange?: IntFieldUpdateOperationsInput | number
    player2eloChange?: IntFieldUpdateOperationsInput | number
  }

  export type MatchUncheckedUpdateManyWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1eloChange?: IntFieldUpdateOperationsInput | number
    player2eloChange?: IntFieldUpdateOperationsInput | number
  }

  export type MatchV2CreateManyPlayer1Input = {
    id?: string
    player2Id: string
    winnerId: string
    createdAt?: Date | string
    player1RatingBefore: number
    player2RatingBefore: number
    player1RatingAfter: number
    player2RatingAfter: number
    player1RdBefore: number
    player2RdBefore: number
    player1RdAfter: number
    player2RdAfter: number
  }

  export type MatchV2CreateManyPlayer2Input = {
    id?: string
    player1Id: string
    winnerId: string
    createdAt?: Date | string
    player1RatingBefore: number
    player2RatingBefore: number
    player1RatingAfter: number
    player2RatingAfter: number
    player1RdBefore: number
    player2RdBefore: number
    player1RdAfter: number
    player2RdAfter: number
  }

  export type MatchV2CreateManyWinnerInput = {
    id?: string
    player1Id: string
    player2Id: string
    createdAt?: Date | string
    player1RatingBefore: number
    player2RatingBefore: number
    player1RatingAfter: number
    player2RatingAfter: number
    player1RdBefore: number
    player2RdBefore: number
    player1RdAfter: number
    player2RdAfter: number
  }

  export type MatchV2UpdateWithoutPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1RatingBefore?: FloatFieldUpdateOperationsInput | number
    player2RatingBefore?: FloatFieldUpdateOperationsInput | number
    player1RatingAfter?: FloatFieldUpdateOperationsInput | number
    player2RatingAfter?: FloatFieldUpdateOperationsInput | number
    player1RdBefore?: FloatFieldUpdateOperationsInput | number
    player2RdBefore?: FloatFieldUpdateOperationsInput | number
    player1RdAfter?: FloatFieldUpdateOperationsInput | number
    player2RdAfter?: FloatFieldUpdateOperationsInput | number
    player2?: UserV2UpdateOneRequiredWithoutMatches2NestedInput
    winner?: UserV2UpdateOneRequiredWithoutWinsNestedInput
  }

  export type MatchV2UncheckedUpdateWithoutPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    winnerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1RatingBefore?: FloatFieldUpdateOperationsInput | number
    player2RatingBefore?: FloatFieldUpdateOperationsInput | number
    player1RatingAfter?: FloatFieldUpdateOperationsInput | number
    player2RatingAfter?: FloatFieldUpdateOperationsInput | number
    player1RdBefore?: FloatFieldUpdateOperationsInput | number
    player2RdBefore?: FloatFieldUpdateOperationsInput | number
    player1RdAfter?: FloatFieldUpdateOperationsInput | number
    player2RdAfter?: FloatFieldUpdateOperationsInput | number
  }

  export type MatchV2UncheckedUpdateManyWithoutPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    winnerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1RatingBefore?: FloatFieldUpdateOperationsInput | number
    player2RatingBefore?: FloatFieldUpdateOperationsInput | number
    player1RatingAfter?: FloatFieldUpdateOperationsInput | number
    player2RatingAfter?: FloatFieldUpdateOperationsInput | number
    player1RdBefore?: FloatFieldUpdateOperationsInput | number
    player2RdBefore?: FloatFieldUpdateOperationsInput | number
    player1RdAfter?: FloatFieldUpdateOperationsInput | number
    player2RdAfter?: FloatFieldUpdateOperationsInput | number
  }

  export type MatchV2UpdateWithoutPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1RatingBefore?: FloatFieldUpdateOperationsInput | number
    player2RatingBefore?: FloatFieldUpdateOperationsInput | number
    player1RatingAfter?: FloatFieldUpdateOperationsInput | number
    player2RatingAfter?: FloatFieldUpdateOperationsInput | number
    player1RdBefore?: FloatFieldUpdateOperationsInput | number
    player2RdBefore?: FloatFieldUpdateOperationsInput | number
    player1RdAfter?: FloatFieldUpdateOperationsInput | number
    player2RdAfter?: FloatFieldUpdateOperationsInput | number
    player1?: UserV2UpdateOneRequiredWithoutMatches1NestedInput
    winner?: UserV2UpdateOneRequiredWithoutWinsNestedInput
  }

  export type MatchV2UncheckedUpdateWithoutPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    winnerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1RatingBefore?: FloatFieldUpdateOperationsInput | number
    player2RatingBefore?: FloatFieldUpdateOperationsInput | number
    player1RatingAfter?: FloatFieldUpdateOperationsInput | number
    player2RatingAfter?: FloatFieldUpdateOperationsInput | number
    player1RdBefore?: FloatFieldUpdateOperationsInput | number
    player2RdBefore?: FloatFieldUpdateOperationsInput | number
    player1RdAfter?: FloatFieldUpdateOperationsInput | number
    player2RdAfter?: FloatFieldUpdateOperationsInput | number
  }

  export type MatchV2UncheckedUpdateManyWithoutPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    winnerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1RatingBefore?: FloatFieldUpdateOperationsInput | number
    player2RatingBefore?: FloatFieldUpdateOperationsInput | number
    player1RatingAfter?: FloatFieldUpdateOperationsInput | number
    player2RatingAfter?: FloatFieldUpdateOperationsInput | number
    player1RdBefore?: FloatFieldUpdateOperationsInput | number
    player2RdBefore?: FloatFieldUpdateOperationsInput | number
    player1RdAfter?: FloatFieldUpdateOperationsInput | number
    player2RdAfter?: FloatFieldUpdateOperationsInput | number
  }

  export type MatchV2UpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1RatingBefore?: FloatFieldUpdateOperationsInput | number
    player2RatingBefore?: FloatFieldUpdateOperationsInput | number
    player1RatingAfter?: FloatFieldUpdateOperationsInput | number
    player2RatingAfter?: FloatFieldUpdateOperationsInput | number
    player1RdBefore?: FloatFieldUpdateOperationsInput | number
    player2RdBefore?: FloatFieldUpdateOperationsInput | number
    player1RdAfter?: FloatFieldUpdateOperationsInput | number
    player2RdAfter?: FloatFieldUpdateOperationsInput | number
    player1?: UserV2UpdateOneRequiredWithoutMatches1NestedInput
    player2?: UserV2UpdateOneRequiredWithoutMatches2NestedInput
  }

  export type MatchV2UncheckedUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1RatingBefore?: FloatFieldUpdateOperationsInput | number
    player2RatingBefore?: FloatFieldUpdateOperationsInput | number
    player1RatingAfter?: FloatFieldUpdateOperationsInput | number
    player2RatingAfter?: FloatFieldUpdateOperationsInput | number
    player1RdBefore?: FloatFieldUpdateOperationsInput | number
    player2RdBefore?: FloatFieldUpdateOperationsInput | number
    player1RdAfter?: FloatFieldUpdateOperationsInput | number
    player2RdAfter?: FloatFieldUpdateOperationsInput | number
  }

  export type MatchV2UncheckedUpdateManyWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1RatingBefore?: FloatFieldUpdateOperationsInput | number
    player2RatingBefore?: FloatFieldUpdateOperationsInput | number
    player1RatingAfter?: FloatFieldUpdateOperationsInput | number
    player2RatingAfter?: FloatFieldUpdateOperationsInput | number
    player1RdBefore?: FloatFieldUpdateOperationsInput | number
    player2RdBefore?: FloatFieldUpdateOperationsInput | number
    player1RdAfter?: FloatFieldUpdateOperationsInput | number
    player2RdAfter?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}