
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Auditoria
 * 
 */
export type Auditoria = $Result.DefaultSelection<Prisma.$AuditoriaPayload>
/**
 * Model Seccion
 * 
 */
export type Seccion = $Result.DefaultSelection<Prisma.$SeccionPayload>
/**
 * Model SeccionAprobada
 * 
 */
export type SeccionAprobada = $Result.DefaultSelection<Prisma.$SeccionAprobadaPayload>
/**
 * Model Escenario
 * 
 */
export type Escenario = $Result.DefaultSelection<Prisma.$EscenarioPayload>
/**
 * Model Opcion
 * 
 */
export type Opcion = $Result.DefaultSelection<Prisma.$OpcionPayload>
/**
 * Model Recurso
 * 
 */
export type Recurso = $Result.DefaultSelection<Prisma.$RecursoPayload>
/**
 * Model Insignia
 * 
 */
export type Insignia = $Result.DefaultSelection<Prisma.$InsigniaPayload>
/**
 * Model Progreso
 * 
 */
export type Progreso = $Result.DefaultSelection<Prisma.$ProgresoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Rol: {
  usuario: 'usuario',
  admin: 'admin',
  superadmin: 'superadmin'
};

export type Rol = (typeof Rol)[keyof typeof Rol]

}

export type Rol = $Enums.Rol

export const Rol: typeof $Enums.Rol

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditoria`: Exposes CRUD operations for the **Auditoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auditorias
    * const auditorias = await prisma.auditoria.findMany()
    * ```
    */
  get auditoria(): Prisma.AuditoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seccion`: Exposes CRUD operations for the **Seccion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seccions
    * const seccions = await prisma.seccion.findMany()
    * ```
    */
  get seccion(): Prisma.SeccionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seccionAprobada`: Exposes CRUD operations for the **SeccionAprobada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeccionAprobadas
    * const seccionAprobadas = await prisma.seccionAprobada.findMany()
    * ```
    */
  get seccionAprobada(): Prisma.SeccionAprobadaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.escenario`: Exposes CRUD operations for the **Escenario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Escenarios
    * const escenarios = await prisma.escenario.findMany()
    * ```
    */
  get escenario(): Prisma.EscenarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.opcion`: Exposes CRUD operations for the **Opcion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Opcions
    * const opcions = await prisma.opcion.findMany()
    * ```
    */
  get opcion(): Prisma.OpcionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recurso`: Exposes CRUD operations for the **Recurso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recursos
    * const recursos = await prisma.recurso.findMany()
    * ```
    */
  get recurso(): Prisma.RecursoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.insignia`: Exposes CRUD operations for the **Insignia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Insignias
    * const insignias = await prisma.insignia.findMany()
    * ```
    */
  get insignia(): Prisma.InsigniaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progreso`: Exposes CRUD operations for the **Progreso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Progresos
    * const progresos = await prisma.progreso.findMany()
    * ```
    */
  get progreso(): Prisma.ProgresoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.4.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Usuario: 'Usuario',
    Auditoria: 'Auditoria',
    Seccion: 'Seccion',
    SeccionAprobada: 'SeccionAprobada',
    Escenario: 'Escenario',
    Opcion: 'Opcion',
    Recurso: 'Recurso',
    Insignia: 'Insignia',
    Progreso: 'Progreso'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "usuario" | "auditoria" | "seccion" | "seccionAprobada" | "escenario" | "opcion" | "recurso" | "insignia" | "progreso"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Auditoria: {
        payload: Prisma.$AuditoriaPayload<ExtArgs>
        fields: Prisma.AuditoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>
          }
          findFirst: {
            args: Prisma.AuditoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>
          }
          findMany: {
            args: Prisma.AuditoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>[]
          }
          create: {
            args: Prisma.AuditoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>
          }
          createMany: {
            args: Prisma.AuditoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>[]
          }
          delete: {
            args: Prisma.AuditoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>
          }
          update: {
            args: Prisma.AuditoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>
          }
          deleteMany: {
            args: Prisma.AuditoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>[]
          }
          upsert: {
            args: Prisma.AuditoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>
          }
          aggregate: {
            args: Prisma.AuditoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditoria>
          }
          groupBy: {
            args: Prisma.AuditoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditoriaCountArgs<ExtArgs>
            result: $Utils.Optional<AuditoriaCountAggregateOutputType> | number
          }
        }
      }
      Seccion: {
        payload: Prisma.$SeccionPayload<ExtArgs>
        fields: Prisma.SeccionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeccionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeccionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>
          }
          findFirst: {
            args: Prisma.SeccionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeccionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>
          }
          findMany: {
            args: Prisma.SeccionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>[]
          }
          create: {
            args: Prisma.SeccionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>
          }
          createMany: {
            args: Prisma.SeccionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeccionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>[]
          }
          delete: {
            args: Prisma.SeccionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>
          }
          update: {
            args: Prisma.SeccionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>
          }
          deleteMany: {
            args: Prisma.SeccionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeccionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeccionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>[]
          }
          upsert: {
            args: Prisma.SeccionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>
          }
          aggregate: {
            args: Prisma.SeccionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeccion>
          }
          groupBy: {
            args: Prisma.SeccionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeccionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeccionCountArgs<ExtArgs>
            result: $Utils.Optional<SeccionCountAggregateOutputType> | number
          }
        }
      }
      SeccionAprobada: {
        payload: Prisma.$SeccionAprobadaPayload<ExtArgs>
        fields: Prisma.SeccionAprobadaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeccionAprobadaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionAprobadaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeccionAprobadaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionAprobadaPayload>
          }
          findFirst: {
            args: Prisma.SeccionAprobadaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionAprobadaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeccionAprobadaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionAprobadaPayload>
          }
          findMany: {
            args: Prisma.SeccionAprobadaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionAprobadaPayload>[]
          }
          create: {
            args: Prisma.SeccionAprobadaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionAprobadaPayload>
          }
          createMany: {
            args: Prisma.SeccionAprobadaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeccionAprobadaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionAprobadaPayload>[]
          }
          delete: {
            args: Prisma.SeccionAprobadaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionAprobadaPayload>
          }
          update: {
            args: Prisma.SeccionAprobadaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionAprobadaPayload>
          }
          deleteMany: {
            args: Prisma.SeccionAprobadaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeccionAprobadaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeccionAprobadaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionAprobadaPayload>[]
          }
          upsert: {
            args: Prisma.SeccionAprobadaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionAprobadaPayload>
          }
          aggregate: {
            args: Prisma.SeccionAprobadaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeccionAprobada>
          }
          groupBy: {
            args: Prisma.SeccionAprobadaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeccionAprobadaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeccionAprobadaCountArgs<ExtArgs>
            result: $Utils.Optional<SeccionAprobadaCountAggregateOutputType> | number
          }
        }
      }
      Escenario: {
        payload: Prisma.$EscenarioPayload<ExtArgs>
        fields: Prisma.EscenarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EscenarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscenarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EscenarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscenarioPayload>
          }
          findFirst: {
            args: Prisma.EscenarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscenarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EscenarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscenarioPayload>
          }
          findMany: {
            args: Prisma.EscenarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscenarioPayload>[]
          }
          create: {
            args: Prisma.EscenarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscenarioPayload>
          }
          createMany: {
            args: Prisma.EscenarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EscenarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscenarioPayload>[]
          }
          delete: {
            args: Prisma.EscenarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscenarioPayload>
          }
          update: {
            args: Prisma.EscenarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscenarioPayload>
          }
          deleteMany: {
            args: Prisma.EscenarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EscenarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EscenarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscenarioPayload>[]
          }
          upsert: {
            args: Prisma.EscenarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscenarioPayload>
          }
          aggregate: {
            args: Prisma.EscenarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEscenario>
          }
          groupBy: {
            args: Prisma.EscenarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<EscenarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.EscenarioCountArgs<ExtArgs>
            result: $Utils.Optional<EscenarioCountAggregateOutputType> | number
          }
        }
      }
      Opcion: {
        payload: Prisma.$OpcionPayload<ExtArgs>
        fields: Prisma.OpcionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OpcionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OpcionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcionPayload>
          }
          findFirst: {
            args: Prisma.OpcionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OpcionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcionPayload>
          }
          findMany: {
            args: Prisma.OpcionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcionPayload>[]
          }
          create: {
            args: Prisma.OpcionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcionPayload>
          }
          createMany: {
            args: Prisma.OpcionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OpcionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcionPayload>[]
          }
          delete: {
            args: Prisma.OpcionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcionPayload>
          }
          update: {
            args: Prisma.OpcionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcionPayload>
          }
          deleteMany: {
            args: Prisma.OpcionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OpcionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OpcionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcionPayload>[]
          }
          upsert: {
            args: Prisma.OpcionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcionPayload>
          }
          aggregate: {
            args: Prisma.OpcionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpcion>
          }
          groupBy: {
            args: Prisma.OpcionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OpcionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OpcionCountArgs<ExtArgs>
            result: $Utils.Optional<OpcionCountAggregateOutputType> | number
          }
        }
      }
      Recurso: {
        payload: Prisma.$RecursoPayload<ExtArgs>
        fields: Prisma.RecursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecursoPayload>
          }
          findFirst: {
            args: Prisma.RecursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecursoPayload>
          }
          findMany: {
            args: Prisma.RecursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecursoPayload>[]
          }
          create: {
            args: Prisma.RecursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecursoPayload>
          }
          createMany: {
            args: Prisma.RecursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecursoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecursoPayload>[]
          }
          delete: {
            args: Prisma.RecursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecursoPayload>
          }
          update: {
            args: Prisma.RecursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecursoPayload>
          }
          deleteMany: {
            args: Prisma.RecursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecursoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecursoPayload>[]
          }
          upsert: {
            args: Prisma.RecursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecursoPayload>
          }
          aggregate: {
            args: Prisma.RecursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecurso>
          }
          groupBy: {
            args: Prisma.RecursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecursoCountArgs<ExtArgs>
            result: $Utils.Optional<RecursoCountAggregateOutputType> | number
          }
        }
      }
      Insignia: {
        payload: Prisma.$InsigniaPayload<ExtArgs>
        fields: Prisma.InsigniaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InsigniaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsigniaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InsigniaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsigniaPayload>
          }
          findFirst: {
            args: Prisma.InsigniaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsigniaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InsigniaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsigniaPayload>
          }
          findMany: {
            args: Prisma.InsigniaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsigniaPayload>[]
          }
          create: {
            args: Prisma.InsigniaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsigniaPayload>
          }
          createMany: {
            args: Prisma.InsigniaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InsigniaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsigniaPayload>[]
          }
          delete: {
            args: Prisma.InsigniaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsigniaPayload>
          }
          update: {
            args: Prisma.InsigniaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsigniaPayload>
          }
          deleteMany: {
            args: Prisma.InsigniaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InsigniaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InsigniaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsigniaPayload>[]
          }
          upsert: {
            args: Prisma.InsigniaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsigniaPayload>
          }
          aggregate: {
            args: Prisma.InsigniaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInsignia>
          }
          groupBy: {
            args: Prisma.InsigniaGroupByArgs<ExtArgs>
            result: $Utils.Optional<InsigniaGroupByOutputType>[]
          }
          count: {
            args: Prisma.InsigniaCountArgs<ExtArgs>
            result: $Utils.Optional<InsigniaCountAggregateOutputType> | number
          }
        }
      }
      Progreso: {
        payload: Prisma.$ProgresoPayload<ExtArgs>
        fields: Prisma.ProgresoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgresoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgresoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>
          }
          findFirst: {
            args: Prisma.ProgresoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgresoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>
          }
          findMany: {
            args: Prisma.ProgresoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>[]
          }
          create: {
            args: Prisma.ProgresoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>
          }
          createMany: {
            args: Prisma.ProgresoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgresoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>[]
          }
          delete: {
            args: Prisma.ProgresoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>
          }
          update: {
            args: Prisma.ProgresoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>
          }
          deleteMany: {
            args: Prisma.ProgresoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgresoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgresoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>[]
          }
          upsert: {
            args: Prisma.ProgresoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>
          }
          aggregate: {
            args: Prisma.ProgresoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgreso>
          }
          groupBy: {
            args: Prisma.ProgresoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgresoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgresoCountArgs<ExtArgs>
            result: $Utils.Optional<ProgresoCountAggregateOutputType> | number
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
    usuario?: UsuarioOmit
    auditoria?: AuditoriaOmit
    seccion?: SeccionOmit
    seccionAprobada?: SeccionAprobadaOmit
    escenario?: EscenarioOmit
    opcion?: OpcionOmit
    recurso?: RecursoOmit
    insignia?: InsigniaOmit
    progreso?: ProgresoOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    progreso: number
    seccionesAprobadas: number
    insignias: number
    recursos: number
    auditorias: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progreso?: boolean | UsuarioCountOutputTypeCountProgresoArgs
    seccionesAprobadas?: boolean | UsuarioCountOutputTypeCountSeccionesAprobadasArgs
    insignias?: boolean | UsuarioCountOutputTypeCountInsigniasArgs
    recursos?: boolean | UsuarioCountOutputTypeCountRecursosArgs
    auditorias?: boolean | UsuarioCountOutputTypeCountAuditoriasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountProgresoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgresoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountSeccionesAprobadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeccionAprobadaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountInsigniasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InsigniaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountRecursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecursoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAuditoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditoriaWhereInput
  }


  /**
   * Count Type SeccionCountOutputType
   */

  export type SeccionCountOutputType = {
    escenarios: number
    aprobadaPor: number
  }

  export type SeccionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escenarios?: boolean | SeccionCountOutputTypeCountEscenariosArgs
    aprobadaPor?: boolean | SeccionCountOutputTypeCountAprobadaPorArgs
  }

  // Custom InputTypes
  /**
   * SeccionCountOutputType without action
   */
  export type SeccionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeccionCountOutputType
     */
    select?: SeccionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeccionCountOutputType without action
   */
  export type SeccionCountOutputTypeCountEscenariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EscenarioWhereInput
  }

  /**
   * SeccionCountOutputType without action
   */
  export type SeccionCountOutputTypeCountAprobadaPorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeccionAprobadaWhereInput
  }


  /**
   * Count Type EscenarioCountOutputType
   */

  export type EscenarioCountOutputType = {
    opciones: number
    insignias: number
    progreso: number
  }

  export type EscenarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opciones?: boolean | EscenarioCountOutputTypeCountOpcionesArgs
    insignias?: boolean | EscenarioCountOutputTypeCountInsigniasArgs
    progreso?: boolean | EscenarioCountOutputTypeCountProgresoArgs
  }

  // Custom InputTypes
  /**
   * EscenarioCountOutputType without action
   */
  export type EscenarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscenarioCountOutputType
     */
    select?: EscenarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EscenarioCountOutputType without action
   */
  export type EscenarioCountOutputTypeCountOpcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpcionWhereInput
  }

  /**
   * EscenarioCountOutputType without action
   */
  export type EscenarioCountOutputTypeCountInsigniasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InsigniaWhereInput
  }

  /**
   * EscenarioCountOutputType without action
   */
  export type EscenarioCountOutputTypeCountProgresoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgresoWhereInput
  }


  /**
   * Count Type InsigniaCountOutputType
   */

  export type InsigniaCountOutputType = {
    usuarios: number
  }

  export type InsigniaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | InsigniaCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * InsigniaCountOutputType without action
   */
  export type InsigniaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsigniaCountOutputType
     */
    select?: InsigniaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InsigniaCountOutputType without action
   */
  export type InsigniaCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    puntos: number | null
    tokens: number | null
    racha: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    puntos: number | null
    tokens: number | null
    racha: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    email: string | null
    nombre: string | null
    puntos: number | null
    tokens: number | null
    rol: $Enums.Rol | null
    racha: number | null
    ultimaConexion: Date | null
    createdAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    email: string | null
    nombre: string | null
    puntos: number | null
    tokens: number | null
    rol: $Enums.Rol | null
    racha: number | null
    ultimaConexion: Date | null
    createdAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    email: number
    nombre: number
    puntos: number
    tokens: number
    rol: number
    racha: number
    ultimaConexion: number
    createdAt: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    puntos?: true
    tokens?: true
    racha?: true
  }

  export type UsuarioSumAggregateInputType = {
    puntos?: true
    tokens?: true
    racha?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    email?: true
    nombre?: true
    puntos?: true
    tokens?: true
    rol?: true
    racha?: true
    ultimaConexion?: true
    createdAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    email?: true
    nombre?: true
    puntos?: true
    tokens?: true
    rol?: true
    racha?: true
    ultimaConexion?: true
    createdAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    email?: true
    nombre?: true
    puntos?: true
    tokens?: true
    rol?: true
    racha?: true
    ultimaConexion?: true
    createdAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    email: string
    nombre: string | null
    puntos: number
    tokens: number
    rol: $Enums.Rol
    racha: number
    ultimaConexion: Date
    createdAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nombre?: boolean
    puntos?: boolean
    tokens?: boolean
    rol?: boolean
    racha?: boolean
    ultimaConexion?: boolean
    createdAt?: boolean
    progreso?: boolean | Usuario$progresoArgs<ExtArgs>
    seccionesAprobadas?: boolean | Usuario$seccionesAprobadasArgs<ExtArgs>
    insignias?: boolean | Usuario$insigniasArgs<ExtArgs>
    recursos?: boolean | Usuario$recursosArgs<ExtArgs>
    auditorias?: boolean | Usuario$auditoriasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nombre?: boolean
    puntos?: boolean
    tokens?: boolean
    rol?: boolean
    racha?: boolean
    ultimaConexion?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nombre?: boolean
    puntos?: boolean
    tokens?: boolean
    rol?: boolean
    racha?: boolean
    ultimaConexion?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    email?: boolean
    nombre?: boolean
    puntos?: boolean
    tokens?: boolean
    rol?: boolean
    racha?: boolean
    ultimaConexion?: boolean
    createdAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "nombre" | "puntos" | "tokens" | "rol" | "racha" | "ultimaConexion" | "createdAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progreso?: boolean | Usuario$progresoArgs<ExtArgs>
    seccionesAprobadas?: boolean | Usuario$seccionesAprobadasArgs<ExtArgs>
    insignias?: boolean | Usuario$insigniasArgs<ExtArgs>
    recursos?: boolean | Usuario$recursosArgs<ExtArgs>
    auditorias?: boolean | Usuario$auditoriasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      progreso: Prisma.$ProgresoPayload<ExtArgs>[]
      seccionesAprobadas: Prisma.$SeccionAprobadaPayload<ExtArgs>[]
      insignias: Prisma.$InsigniaPayload<ExtArgs>[]
      recursos: Prisma.$RecursoPayload<ExtArgs>[]
      auditorias: Prisma.$AuditoriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      nombre: string | null
      puntos: number
      tokens: number
      rol: $Enums.Rol
      racha: number
      ultimaConexion: Date
      createdAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    progreso<T extends Usuario$progresoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$progresoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    seccionesAprobadas<T extends Usuario$seccionesAprobadasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$seccionesAprobadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeccionAprobadaPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    insignias<T extends Usuario$insigniasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$insigniasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsigniaPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    recursos<T extends Usuario$recursosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$recursosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecursoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    auditorias<T extends Usuario$auditoriasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$auditoriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly puntos: FieldRef<"Usuario", 'Int'>
    readonly tokens: FieldRef<"Usuario", 'Int'>
    readonly rol: FieldRef<"Usuario", 'Rol'>
    readonly racha: FieldRef<"Usuario", 'Int'>
    readonly ultimaConexion: FieldRef<"Usuario", 'DateTime'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.progreso
   */
  export type Usuario$progresoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    where?: ProgresoWhereInput
    orderBy?: ProgresoOrderByWithRelationInput | ProgresoOrderByWithRelationInput[]
    cursor?: ProgresoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgresoScalarFieldEnum | ProgresoScalarFieldEnum[]
  }

  /**
   * Usuario.seccionesAprobadas
   */
  export type Usuario$seccionesAprobadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeccionAprobada
     */
    select?: SeccionAprobadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeccionAprobada
     */
    omit?: SeccionAprobadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionAprobadaInclude<ExtArgs> | null
    where?: SeccionAprobadaWhereInput
    orderBy?: SeccionAprobadaOrderByWithRelationInput | SeccionAprobadaOrderByWithRelationInput[]
    cursor?: SeccionAprobadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeccionAprobadaScalarFieldEnum | SeccionAprobadaScalarFieldEnum[]
  }

  /**
   * Usuario.insignias
   */
  export type Usuario$insigniasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insignia
     */
    select?: InsigniaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insignia
     */
    omit?: InsigniaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsigniaInclude<ExtArgs> | null
    where?: InsigniaWhereInput
    orderBy?: InsigniaOrderByWithRelationInput | InsigniaOrderByWithRelationInput[]
    cursor?: InsigniaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InsigniaScalarFieldEnum | InsigniaScalarFieldEnum[]
  }

  /**
   * Usuario.recursos
   */
  export type Usuario$recursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurso
     */
    select?: RecursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recurso
     */
    omit?: RecursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecursoInclude<ExtArgs> | null
    where?: RecursoWhereInput
    orderBy?: RecursoOrderByWithRelationInput | RecursoOrderByWithRelationInput[]
    cursor?: RecursoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecursoScalarFieldEnum | RecursoScalarFieldEnum[]
  }

  /**
   * Usuario.auditorias
   */
  export type Usuario$auditoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    where?: AuditoriaWhereInput
    orderBy?: AuditoriaOrderByWithRelationInput | AuditoriaOrderByWithRelationInput[]
    cursor?: AuditoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditoriaScalarFieldEnum | AuditoriaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Auditoria
   */

  export type AggregateAuditoria = {
    _count: AuditoriaCountAggregateOutputType | null
    _avg: AuditoriaAvgAggregateOutputType | null
    _sum: AuditoriaSumAggregateOutputType | null
    _min: AuditoriaMinAggregateOutputType | null
    _max: AuditoriaMaxAggregateOutputType | null
  }

  export type AuditoriaAvgAggregateOutputType = {
    id: number | null
  }

  export type AuditoriaSumAggregateOutputType = {
    id: number | null
  }

  export type AuditoriaMinAggregateOutputType = {
    id: number | null
    usuarioId: string | null
    accion: string | null
    entidad: string | null
    entidadId: string | null
    timestamp: Date | null
  }

  export type AuditoriaMaxAggregateOutputType = {
    id: number | null
    usuarioId: string | null
    accion: string | null
    entidad: string | null
    entidadId: string | null
    timestamp: Date | null
  }

  export type AuditoriaCountAggregateOutputType = {
    id: number
    usuarioId: number
    accion: number
    entidad: number
    entidadId: number
    detalles: number
    timestamp: number
    _all: number
  }


  export type AuditoriaAvgAggregateInputType = {
    id?: true
  }

  export type AuditoriaSumAggregateInputType = {
    id?: true
  }

  export type AuditoriaMinAggregateInputType = {
    id?: true
    usuarioId?: true
    accion?: true
    entidad?: true
    entidadId?: true
    timestamp?: true
  }

  export type AuditoriaMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    accion?: true
    entidad?: true
    entidadId?: true
    timestamp?: true
  }

  export type AuditoriaCountAggregateInputType = {
    id?: true
    usuarioId?: true
    accion?: true
    entidad?: true
    entidadId?: true
    detalles?: true
    timestamp?: true
    _all?: true
  }

  export type AuditoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auditoria to aggregate.
     */
    where?: AuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auditorias to fetch.
     */
    orderBy?: AuditoriaOrderByWithRelationInput | AuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Auditorias
    **/
    _count?: true | AuditoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditoriaMaxAggregateInputType
  }

  export type GetAuditoriaAggregateType<T extends AuditoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditoria[P]>
      : GetScalarType<T[P], AggregateAuditoria[P]>
  }




  export type AuditoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditoriaWhereInput
    orderBy?: AuditoriaOrderByWithAggregationInput | AuditoriaOrderByWithAggregationInput[]
    by: AuditoriaScalarFieldEnum[] | AuditoriaScalarFieldEnum
    having?: AuditoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditoriaCountAggregateInputType | true
    _avg?: AuditoriaAvgAggregateInputType
    _sum?: AuditoriaSumAggregateInputType
    _min?: AuditoriaMinAggregateInputType
    _max?: AuditoriaMaxAggregateInputType
  }

  export type AuditoriaGroupByOutputType = {
    id: number
    usuarioId: string
    accion: string
    entidad: string
    entidadId: string | null
    detalles: JsonValue | null
    timestamp: Date
    _count: AuditoriaCountAggregateOutputType | null
    _avg: AuditoriaAvgAggregateOutputType | null
    _sum: AuditoriaSumAggregateOutputType | null
    _min: AuditoriaMinAggregateOutputType | null
    _max: AuditoriaMaxAggregateOutputType | null
  }

  type GetAuditoriaGroupByPayload<T extends AuditoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditoriaGroupByOutputType[P]>
            : GetScalarType<T[P], AuditoriaGroupByOutputType[P]>
        }
      >
    >


  export type AuditoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    accion?: boolean
    entidad?: boolean
    entidadId?: boolean
    detalles?: boolean
    timestamp?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditoria"]>

  export type AuditoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    accion?: boolean
    entidad?: boolean
    entidadId?: boolean
    detalles?: boolean
    timestamp?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditoria"]>

  export type AuditoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    accion?: boolean
    entidad?: boolean
    entidadId?: boolean
    detalles?: boolean
    timestamp?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditoria"]>

  export type AuditoriaSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    accion?: boolean
    entidad?: boolean
    entidadId?: boolean
    detalles?: boolean
    timestamp?: boolean
  }

  export type AuditoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "accion" | "entidad" | "entidadId" | "detalles" | "timestamp", ExtArgs["result"]["auditoria"]>
  export type AuditoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type AuditoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type AuditoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $AuditoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Auditoria"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: string
      accion: string
      entidad: string
      entidadId: string | null
      detalles: Prisma.JsonValue | null
      timestamp: Date
    }, ExtArgs["result"]["auditoria"]>
    composites: {}
  }

  type AuditoriaGetPayload<S extends boolean | null | undefined | AuditoriaDefaultArgs> = $Result.GetResult<Prisma.$AuditoriaPayload, S>

  type AuditoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditoriaCountAggregateInputType | true
    }

  export interface AuditoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Auditoria'], meta: { name: 'Auditoria' } }
    /**
     * Find zero or one Auditoria that matches the filter.
     * @param {AuditoriaFindUniqueArgs} args - Arguments to find a Auditoria
     * @example
     * // Get one Auditoria
     * const auditoria = await prisma.auditoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditoriaFindUniqueArgs>(args: SelectSubset<T, AuditoriaFindUniqueArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Auditoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditoriaFindUniqueOrThrowArgs} args - Arguments to find a Auditoria
     * @example
     * // Get one Auditoria
     * const auditoria = await prisma.auditoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Auditoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaFindFirstArgs} args - Arguments to find a Auditoria
     * @example
     * // Get one Auditoria
     * const auditoria = await prisma.auditoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditoriaFindFirstArgs>(args?: SelectSubset<T, AuditoriaFindFirstArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Auditoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaFindFirstOrThrowArgs} args - Arguments to find a Auditoria
     * @example
     * // Get one Auditoria
     * const auditoria = await prisma.auditoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Auditorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auditorias
     * const auditorias = await prisma.auditoria.findMany()
     * 
     * // Get first 10 Auditorias
     * const auditorias = await prisma.auditoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditoriaWithIdOnly = await prisma.auditoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditoriaFindManyArgs>(args?: SelectSubset<T, AuditoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Auditoria.
     * @param {AuditoriaCreateArgs} args - Arguments to create a Auditoria.
     * @example
     * // Create one Auditoria
     * const Auditoria = await prisma.auditoria.create({
     *   data: {
     *     // ... data to create a Auditoria
     *   }
     * })
     * 
     */
    create<T extends AuditoriaCreateArgs>(args: SelectSubset<T, AuditoriaCreateArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Auditorias.
     * @param {AuditoriaCreateManyArgs} args - Arguments to create many Auditorias.
     * @example
     * // Create many Auditorias
     * const auditoria = await prisma.auditoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditoriaCreateManyArgs>(args?: SelectSubset<T, AuditoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auditorias and returns the data saved in the database.
     * @param {AuditoriaCreateManyAndReturnArgs} args - Arguments to create many Auditorias.
     * @example
     * // Create many Auditorias
     * const auditoria = await prisma.auditoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auditorias and only return the `id`
     * const auditoriaWithIdOnly = await prisma.auditoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Auditoria.
     * @param {AuditoriaDeleteArgs} args - Arguments to delete one Auditoria.
     * @example
     * // Delete one Auditoria
     * const Auditoria = await prisma.auditoria.delete({
     *   where: {
     *     // ... filter to delete one Auditoria
     *   }
     * })
     * 
     */
    delete<T extends AuditoriaDeleteArgs>(args: SelectSubset<T, AuditoriaDeleteArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Auditoria.
     * @param {AuditoriaUpdateArgs} args - Arguments to update one Auditoria.
     * @example
     * // Update one Auditoria
     * const auditoria = await prisma.auditoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditoriaUpdateArgs>(args: SelectSubset<T, AuditoriaUpdateArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Auditorias.
     * @param {AuditoriaDeleteManyArgs} args - Arguments to filter Auditorias to delete.
     * @example
     * // Delete a few Auditorias
     * const { count } = await prisma.auditoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditoriaDeleteManyArgs>(args?: SelectSubset<T, AuditoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auditorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auditorias
     * const auditoria = await prisma.auditoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditoriaUpdateManyArgs>(args: SelectSubset<T, AuditoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auditorias and returns the data updated in the database.
     * @param {AuditoriaUpdateManyAndReturnArgs} args - Arguments to update many Auditorias.
     * @example
     * // Update many Auditorias
     * const auditoria = await prisma.auditoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auditorias and only return the `id`
     * const auditoriaWithIdOnly = await prisma.auditoria.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuditoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Auditoria.
     * @param {AuditoriaUpsertArgs} args - Arguments to update or create a Auditoria.
     * @example
     * // Update or create a Auditoria
     * const auditoria = await prisma.auditoria.upsert({
     *   create: {
     *     // ... data to create a Auditoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auditoria we want to update
     *   }
     * })
     */
    upsert<T extends AuditoriaUpsertArgs>(args: SelectSubset<T, AuditoriaUpsertArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Auditorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaCountArgs} args - Arguments to filter Auditorias to count.
     * @example
     * // Count the number of Auditorias
     * const count = await prisma.auditoria.count({
     *   where: {
     *     // ... the filter for the Auditorias we want to count
     *   }
     * })
    **/
    count<T extends AuditoriaCountArgs>(
      args?: Subset<T, AuditoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auditoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditoriaAggregateArgs>(args: Subset<T, AuditoriaAggregateArgs>): Prisma.PrismaPromise<GetAuditoriaAggregateType<T>>

    /**
     * Group by Auditoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaGroupByArgs} args - Group by arguments.
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
      T extends AuditoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditoriaGroupByArgs['orderBy'] }
        : { orderBy?: AuditoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Auditoria model
   */
  readonly fields: AuditoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Auditoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the Auditoria model
   */ 
  interface AuditoriaFieldRefs {
    readonly id: FieldRef<"Auditoria", 'Int'>
    readonly usuarioId: FieldRef<"Auditoria", 'String'>
    readonly accion: FieldRef<"Auditoria", 'String'>
    readonly entidad: FieldRef<"Auditoria", 'String'>
    readonly entidadId: FieldRef<"Auditoria", 'String'>
    readonly detalles: FieldRef<"Auditoria", 'Json'>
    readonly timestamp: FieldRef<"Auditoria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Auditoria findUnique
   */
  export type AuditoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which Auditoria to fetch.
     */
    where: AuditoriaWhereUniqueInput
  }

  /**
   * Auditoria findUniqueOrThrow
   */
  export type AuditoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which Auditoria to fetch.
     */
    where: AuditoriaWhereUniqueInput
  }

  /**
   * Auditoria findFirst
   */
  export type AuditoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which Auditoria to fetch.
     */
    where?: AuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auditorias to fetch.
     */
    orderBy?: AuditoriaOrderByWithRelationInput | AuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auditorias.
     */
    cursor?: AuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auditorias.
     */
    distinct?: AuditoriaScalarFieldEnum | AuditoriaScalarFieldEnum[]
  }

  /**
   * Auditoria findFirstOrThrow
   */
  export type AuditoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which Auditoria to fetch.
     */
    where?: AuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auditorias to fetch.
     */
    orderBy?: AuditoriaOrderByWithRelationInput | AuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auditorias.
     */
    cursor?: AuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auditorias.
     */
    distinct?: AuditoriaScalarFieldEnum | AuditoriaScalarFieldEnum[]
  }

  /**
   * Auditoria findMany
   */
  export type AuditoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which Auditorias to fetch.
     */
    where?: AuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auditorias to fetch.
     */
    orderBy?: AuditoriaOrderByWithRelationInput | AuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Auditorias.
     */
    cursor?: AuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auditorias.
     */
    skip?: number
    distinct?: AuditoriaScalarFieldEnum | AuditoriaScalarFieldEnum[]
  }

  /**
   * Auditoria create
   */
  export type AuditoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Auditoria.
     */
    data: XOR<AuditoriaCreateInput, AuditoriaUncheckedCreateInput>
  }

  /**
   * Auditoria createMany
   */
  export type AuditoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Auditorias.
     */
    data: AuditoriaCreateManyInput | AuditoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auditoria createManyAndReturn
   */
  export type AuditoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Auditorias.
     */
    data: AuditoriaCreateManyInput | AuditoriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Auditoria update
   */
  export type AuditoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Auditoria.
     */
    data: XOR<AuditoriaUpdateInput, AuditoriaUncheckedUpdateInput>
    /**
     * Choose, which Auditoria to update.
     */
    where: AuditoriaWhereUniqueInput
  }

  /**
   * Auditoria updateMany
   */
  export type AuditoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Auditorias.
     */
    data: XOR<AuditoriaUpdateManyMutationInput, AuditoriaUncheckedUpdateManyInput>
    /**
     * Filter which Auditorias to update
     */
    where?: AuditoriaWhereInput
    /**
     * Limit how many Auditorias to update.
     */
    limit?: number
  }

  /**
   * Auditoria updateManyAndReturn
   */
  export type AuditoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * The data used to update Auditorias.
     */
    data: XOR<AuditoriaUpdateManyMutationInput, AuditoriaUncheckedUpdateManyInput>
    /**
     * Filter which Auditorias to update
     */
    where?: AuditoriaWhereInput
    /**
     * Limit how many Auditorias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Auditoria upsert
   */
  export type AuditoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Auditoria to update in case it exists.
     */
    where: AuditoriaWhereUniqueInput
    /**
     * In case the Auditoria found by the `where` argument doesn't exist, create a new Auditoria with this data.
     */
    create: XOR<AuditoriaCreateInput, AuditoriaUncheckedCreateInput>
    /**
     * In case the Auditoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditoriaUpdateInput, AuditoriaUncheckedUpdateInput>
  }

  /**
   * Auditoria delete
   */
  export type AuditoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    /**
     * Filter which Auditoria to delete.
     */
    where: AuditoriaWhereUniqueInput
  }

  /**
   * Auditoria deleteMany
   */
  export type AuditoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auditorias to delete
     */
    where?: AuditoriaWhereInput
    /**
     * Limit how many Auditorias to delete.
     */
    limit?: number
  }

  /**
   * Auditoria without action
   */
  export type AuditoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
  }


  /**
   * Model Seccion
   */

  export type AggregateSeccion = {
    _count: SeccionCountAggregateOutputType | null
    _avg: SeccionAvgAggregateOutputType | null
    _sum: SeccionSumAggregateOutputType | null
    _min: SeccionMinAggregateOutputType | null
    _max: SeccionMaxAggregateOutputType | null
  }

  export type SeccionAvgAggregateOutputType = {
    id: number | null
    grado: number | null
    puntosRequeridos: number | null
    puntosRecompensa: number | null
    umbralAprobacion: number | null
  }

  export type SeccionSumAggregateOutputType = {
    id: number | null
    grado: number | null
    puntosRequeridos: number | null
    puntosRecompensa: number | null
    umbralAprobacion: number | null
  }

  export type SeccionMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    grado: number | null
    puntosRequeridos: number | null
    puntosRecompensa: number | null
    umbralAprobacion: number | null
  }

  export type SeccionMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    grado: number | null
    puntosRequeridos: number | null
    puntosRecompensa: number | null
    umbralAprobacion: number | null
  }

  export type SeccionCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    grado: number
    puntosRequeridos: number
    puntosRecompensa: number
    umbralAprobacion: number
    _all: number
  }


  export type SeccionAvgAggregateInputType = {
    id?: true
    grado?: true
    puntosRequeridos?: true
    puntosRecompensa?: true
    umbralAprobacion?: true
  }

  export type SeccionSumAggregateInputType = {
    id?: true
    grado?: true
    puntosRequeridos?: true
    puntosRecompensa?: true
    umbralAprobacion?: true
  }

  export type SeccionMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    grado?: true
    puntosRequeridos?: true
    puntosRecompensa?: true
    umbralAprobacion?: true
  }

  export type SeccionMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    grado?: true
    puntosRequeridos?: true
    puntosRecompensa?: true
    umbralAprobacion?: true
  }

  export type SeccionCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    grado?: true
    puntosRequeridos?: true
    puntosRecompensa?: true
    umbralAprobacion?: true
    _all?: true
  }

  export type SeccionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seccion to aggregate.
     */
    where?: SeccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seccions to fetch.
     */
    orderBy?: SeccionOrderByWithRelationInput | SeccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seccions
    **/
    _count?: true | SeccionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeccionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeccionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeccionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeccionMaxAggregateInputType
  }

  export type GetSeccionAggregateType<T extends SeccionAggregateArgs> = {
        [P in keyof T & keyof AggregateSeccion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeccion[P]>
      : GetScalarType<T[P], AggregateSeccion[P]>
  }




  export type SeccionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeccionWhereInput
    orderBy?: SeccionOrderByWithAggregationInput | SeccionOrderByWithAggregationInput[]
    by: SeccionScalarFieldEnum[] | SeccionScalarFieldEnum
    having?: SeccionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeccionCountAggregateInputType | true
    _avg?: SeccionAvgAggregateInputType
    _sum?: SeccionSumAggregateInputType
    _min?: SeccionMinAggregateInputType
    _max?: SeccionMaxAggregateInputType
  }

  export type SeccionGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string
    grado: number
    puntosRequeridos: number
    puntosRecompensa: number
    umbralAprobacion: number
    _count: SeccionCountAggregateOutputType | null
    _avg: SeccionAvgAggregateOutputType | null
    _sum: SeccionSumAggregateOutputType | null
    _min: SeccionMinAggregateOutputType | null
    _max: SeccionMaxAggregateOutputType | null
  }

  type GetSeccionGroupByPayload<T extends SeccionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeccionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeccionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeccionGroupByOutputType[P]>
            : GetScalarType<T[P], SeccionGroupByOutputType[P]>
        }
      >
    >


  export type SeccionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    grado?: boolean
    puntosRequeridos?: boolean
    puntosRecompensa?: boolean
    umbralAprobacion?: boolean
    escenarios?: boolean | Seccion$escenariosArgs<ExtArgs>
    aprobadaPor?: boolean | Seccion$aprobadaPorArgs<ExtArgs>
    recursoOtorgado?: boolean | Seccion$recursoOtorgadoArgs<ExtArgs>
    _count?: boolean | SeccionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seccion"]>

  export type SeccionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    grado?: boolean
    puntosRequeridos?: boolean
    puntosRecompensa?: boolean
    umbralAprobacion?: boolean
  }, ExtArgs["result"]["seccion"]>

  export type SeccionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    grado?: boolean
    puntosRequeridos?: boolean
    puntosRecompensa?: boolean
    umbralAprobacion?: boolean
  }, ExtArgs["result"]["seccion"]>

  export type SeccionSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    grado?: boolean
    puntosRequeridos?: boolean
    puntosRecompensa?: boolean
    umbralAprobacion?: boolean
  }

  export type SeccionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "grado" | "puntosRequeridos" | "puntosRecompensa" | "umbralAprobacion", ExtArgs["result"]["seccion"]>
  export type SeccionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escenarios?: boolean | Seccion$escenariosArgs<ExtArgs>
    aprobadaPor?: boolean | Seccion$aprobadaPorArgs<ExtArgs>
    recursoOtorgado?: boolean | Seccion$recursoOtorgadoArgs<ExtArgs>
    _count?: boolean | SeccionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SeccionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SeccionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SeccionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seccion"
    objects: {
      escenarios: Prisma.$EscenarioPayload<ExtArgs>[]
      aprobadaPor: Prisma.$SeccionAprobadaPayload<ExtArgs>[]
      recursoOtorgado: Prisma.$RecursoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string
      grado: number
      puntosRequeridos: number
      puntosRecompensa: number
      umbralAprobacion: number
    }, ExtArgs["result"]["seccion"]>
    composites: {}
  }

  type SeccionGetPayload<S extends boolean | null | undefined | SeccionDefaultArgs> = $Result.GetResult<Prisma.$SeccionPayload, S>

  type SeccionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeccionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeccionCountAggregateInputType | true
    }

  export interface SeccionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seccion'], meta: { name: 'Seccion' } }
    /**
     * Find zero or one Seccion that matches the filter.
     * @param {SeccionFindUniqueArgs} args - Arguments to find a Seccion
     * @example
     * // Get one Seccion
     * const seccion = await prisma.seccion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeccionFindUniqueArgs>(args: SelectSubset<T, SeccionFindUniqueArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Seccion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeccionFindUniqueOrThrowArgs} args - Arguments to find a Seccion
     * @example
     * // Get one Seccion
     * const seccion = await prisma.seccion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeccionFindUniqueOrThrowArgs>(args: SelectSubset<T, SeccionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Seccion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionFindFirstArgs} args - Arguments to find a Seccion
     * @example
     * // Get one Seccion
     * const seccion = await prisma.seccion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeccionFindFirstArgs>(args?: SelectSubset<T, SeccionFindFirstArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Seccion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionFindFirstOrThrowArgs} args - Arguments to find a Seccion
     * @example
     * // Get one Seccion
     * const seccion = await prisma.seccion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeccionFindFirstOrThrowArgs>(args?: SelectSubset<T, SeccionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Seccions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seccions
     * const seccions = await prisma.seccion.findMany()
     * 
     * // Get first 10 Seccions
     * const seccions = await prisma.seccion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seccionWithIdOnly = await prisma.seccion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeccionFindManyArgs>(args?: SelectSubset<T, SeccionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Seccion.
     * @param {SeccionCreateArgs} args - Arguments to create a Seccion.
     * @example
     * // Create one Seccion
     * const Seccion = await prisma.seccion.create({
     *   data: {
     *     // ... data to create a Seccion
     *   }
     * })
     * 
     */
    create<T extends SeccionCreateArgs>(args: SelectSubset<T, SeccionCreateArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Seccions.
     * @param {SeccionCreateManyArgs} args - Arguments to create many Seccions.
     * @example
     * // Create many Seccions
     * const seccion = await prisma.seccion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeccionCreateManyArgs>(args?: SelectSubset<T, SeccionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Seccions and returns the data saved in the database.
     * @param {SeccionCreateManyAndReturnArgs} args - Arguments to create many Seccions.
     * @example
     * // Create many Seccions
     * const seccion = await prisma.seccion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Seccions and only return the `id`
     * const seccionWithIdOnly = await prisma.seccion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeccionCreateManyAndReturnArgs>(args?: SelectSubset<T, SeccionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Seccion.
     * @param {SeccionDeleteArgs} args - Arguments to delete one Seccion.
     * @example
     * // Delete one Seccion
     * const Seccion = await prisma.seccion.delete({
     *   where: {
     *     // ... filter to delete one Seccion
     *   }
     * })
     * 
     */
    delete<T extends SeccionDeleteArgs>(args: SelectSubset<T, SeccionDeleteArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Seccion.
     * @param {SeccionUpdateArgs} args - Arguments to update one Seccion.
     * @example
     * // Update one Seccion
     * const seccion = await prisma.seccion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeccionUpdateArgs>(args: SelectSubset<T, SeccionUpdateArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Seccions.
     * @param {SeccionDeleteManyArgs} args - Arguments to filter Seccions to delete.
     * @example
     * // Delete a few Seccions
     * const { count } = await prisma.seccion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeccionDeleteManyArgs>(args?: SelectSubset<T, SeccionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seccions
     * const seccion = await prisma.seccion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeccionUpdateManyArgs>(args: SelectSubset<T, SeccionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seccions and returns the data updated in the database.
     * @param {SeccionUpdateManyAndReturnArgs} args - Arguments to update many Seccions.
     * @example
     * // Update many Seccions
     * const seccion = await prisma.seccion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Seccions and only return the `id`
     * const seccionWithIdOnly = await prisma.seccion.updateManyAndReturn({
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
    updateManyAndReturn<T extends SeccionUpdateManyAndReturnArgs>(args: SelectSubset<T, SeccionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Seccion.
     * @param {SeccionUpsertArgs} args - Arguments to update or create a Seccion.
     * @example
     * // Update or create a Seccion
     * const seccion = await prisma.seccion.upsert({
     *   create: {
     *     // ... data to create a Seccion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seccion we want to update
     *   }
     * })
     */
    upsert<T extends SeccionUpsertArgs>(args: SelectSubset<T, SeccionUpsertArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Seccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionCountArgs} args - Arguments to filter Seccions to count.
     * @example
     * // Count the number of Seccions
     * const count = await prisma.seccion.count({
     *   where: {
     *     // ... the filter for the Seccions we want to count
     *   }
     * })
    **/
    count<T extends SeccionCountArgs>(
      args?: Subset<T, SeccionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeccionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeccionAggregateArgs>(args: Subset<T, SeccionAggregateArgs>): Prisma.PrismaPromise<GetSeccionAggregateType<T>>

    /**
     * Group by Seccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionGroupByArgs} args - Group by arguments.
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
      T extends SeccionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeccionGroupByArgs['orderBy'] }
        : { orderBy?: SeccionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeccionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeccionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seccion model
   */
  readonly fields: SeccionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seccion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeccionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    escenarios<T extends Seccion$escenariosArgs<ExtArgs> = {}>(args?: Subset<T, Seccion$escenariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscenarioPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    aprobadaPor<T extends Seccion$aprobadaPorArgs<ExtArgs> = {}>(args?: Subset<T, Seccion$aprobadaPorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeccionAprobadaPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    recursoOtorgado<T extends Seccion$recursoOtorgadoArgs<ExtArgs> = {}>(args?: Subset<T, Seccion$recursoOtorgadoArgs<ExtArgs>>): Prisma__RecursoClient<$Result.GetResult<Prisma.$RecursoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
   * Fields of the Seccion model
   */ 
  interface SeccionFieldRefs {
    readonly id: FieldRef<"Seccion", 'Int'>
    readonly nombre: FieldRef<"Seccion", 'String'>
    readonly descripcion: FieldRef<"Seccion", 'String'>
    readonly grado: FieldRef<"Seccion", 'Int'>
    readonly puntosRequeridos: FieldRef<"Seccion", 'Int'>
    readonly puntosRecompensa: FieldRef<"Seccion", 'Int'>
    readonly umbralAprobacion: FieldRef<"Seccion", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Seccion findUnique
   */
  export type SeccionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * Filter, which Seccion to fetch.
     */
    where: SeccionWhereUniqueInput
  }

  /**
   * Seccion findUniqueOrThrow
   */
  export type SeccionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * Filter, which Seccion to fetch.
     */
    where: SeccionWhereUniqueInput
  }

  /**
   * Seccion findFirst
   */
  export type SeccionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * Filter, which Seccion to fetch.
     */
    where?: SeccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seccions to fetch.
     */
    orderBy?: SeccionOrderByWithRelationInput | SeccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seccions.
     */
    cursor?: SeccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seccions.
     */
    distinct?: SeccionScalarFieldEnum | SeccionScalarFieldEnum[]
  }

  /**
   * Seccion findFirstOrThrow
   */
  export type SeccionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * Filter, which Seccion to fetch.
     */
    where?: SeccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seccions to fetch.
     */
    orderBy?: SeccionOrderByWithRelationInput | SeccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seccions.
     */
    cursor?: SeccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seccions.
     */
    distinct?: SeccionScalarFieldEnum | SeccionScalarFieldEnum[]
  }

  /**
   * Seccion findMany
   */
  export type SeccionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * Filter, which Seccions to fetch.
     */
    where?: SeccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seccions to fetch.
     */
    orderBy?: SeccionOrderByWithRelationInput | SeccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seccions.
     */
    cursor?: SeccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seccions.
     */
    skip?: number
    distinct?: SeccionScalarFieldEnum | SeccionScalarFieldEnum[]
  }

  /**
   * Seccion create
   */
  export type SeccionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * The data needed to create a Seccion.
     */
    data: XOR<SeccionCreateInput, SeccionUncheckedCreateInput>
  }

  /**
   * Seccion createMany
   */
  export type SeccionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seccions.
     */
    data: SeccionCreateManyInput | SeccionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seccion createManyAndReturn
   */
  export type SeccionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * The data used to create many Seccions.
     */
    data: SeccionCreateManyInput | SeccionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seccion update
   */
  export type SeccionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * The data needed to update a Seccion.
     */
    data: XOR<SeccionUpdateInput, SeccionUncheckedUpdateInput>
    /**
     * Choose, which Seccion to update.
     */
    where: SeccionWhereUniqueInput
  }

  /**
   * Seccion updateMany
   */
  export type SeccionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seccions.
     */
    data: XOR<SeccionUpdateManyMutationInput, SeccionUncheckedUpdateManyInput>
    /**
     * Filter which Seccions to update
     */
    where?: SeccionWhereInput
    /**
     * Limit how many Seccions to update.
     */
    limit?: number
  }

  /**
   * Seccion updateManyAndReturn
   */
  export type SeccionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * The data used to update Seccions.
     */
    data: XOR<SeccionUpdateManyMutationInput, SeccionUncheckedUpdateManyInput>
    /**
     * Filter which Seccions to update
     */
    where?: SeccionWhereInput
    /**
     * Limit how many Seccions to update.
     */
    limit?: number
  }

  /**
   * Seccion upsert
   */
  export type SeccionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * The filter to search for the Seccion to update in case it exists.
     */
    where: SeccionWhereUniqueInput
    /**
     * In case the Seccion found by the `where` argument doesn't exist, create a new Seccion with this data.
     */
    create: XOR<SeccionCreateInput, SeccionUncheckedCreateInput>
    /**
     * In case the Seccion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeccionUpdateInput, SeccionUncheckedUpdateInput>
  }

  /**
   * Seccion delete
   */
  export type SeccionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * Filter which Seccion to delete.
     */
    where: SeccionWhereUniqueInput
  }

  /**
   * Seccion deleteMany
   */
  export type SeccionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seccions to delete
     */
    where?: SeccionWhereInput
    /**
     * Limit how many Seccions to delete.
     */
    limit?: number
  }

  /**
   * Seccion.escenarios
   */
  export type Seccion$escenariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escenario
     */
    select?: EscenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escenario
     */
    omit?: EscenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscenarioInclude<ExtArgs> | null
    where?: EscenarioWhereInput
    orderBy?: EscenarioOrderByWithRelationInput | EscenarioOrderByWithRelationInput[]
    cursor?: EscenarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EscenarioScalarFieldEnum | EscenarioScalarFieldEnum[]
  }

  /**
   * Seccion.aprobadaPor
   */
  export type Seccion$aprobadaPorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeccionAprobada
     */
    select?: SeccionAprobadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeccionAprobada
     */
    omit?: SeccionAprobadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionAprobadaInclude<ExtArgs> | null
    where?: SeccionAprobadaWhereInput
    orderBy?: SeccionAprobadaOrderByWithRelationInput | SeccionAprobadaOrderByWithRelationInput[]
    cursor?: SeccionAprobadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeccionAprobadaScalarFieldEnum | SeccionAprobadaScalarFieldEnum[]
  }

  /**
   * Seccion.recursoOtorgado
   */
  export type Seccion$recursoOtorgadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurso
     */
    select?: RecursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recurso
     */
    omit?: RecursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecursoInclude<ExtArgs> | null
    where?: RecursoWhereInput
  }

  /**
   * Seccion without action
   */
  export type SeccionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
  }


  /**
   * Model SeccionAprobada
   */

  export type AggregateSeccionAprobada = {
    _count: SeccionAprobadaCountAggregateOutputType | null
    _avg: SeccionAprobadaAvgAggregateOutputType | null
    _sum: SeccionAprobadaSumAggregateOutputType | null
    _min: SeccionAprobadaMinAggregateOutputType | null
    _max: SeccionAprobadaMaxAggregateOutputType | null
  }

  export type SeccionAprobadaAvgAggregateOutputType = {
    seccionId: number | null
  }

  export type SeccionAprobadaSumAggregateOutputType = {
    seccionId: number | null
  }

  export type SeccionAprobadaMinAggregateOutputType = {
    usuarioId: string | null
    seccionId: number | null
  }

  export type SeccionAprobadaMaxAggregateOutputType = {
    usuarioId: string | null
    seccionId: number | null
  }

  export type SeccionAprobadaCountAggregateOutputType = {
    usuarioId: number
    seccionId: number
    _all: number
  }


  export type SeccionAprobadaAvgAggregateInputType = {
    seccionId?: true
  }

  export type SeccionAprobadaSumAggregateInputType = {
    seccionId?: true
  }

  export type SeccionAprobadaMinAggregateInputType = {
    usuarioId?: true
    seccionId?: true
  }

  export type SeccionAprobadaMaxAggregateInputType = {
    usuarioId?: true
    seccionId?: true
  }

  export type SeccionAprobadaCountAggregateInputType = {
    usuarioId?: true
    seccionId?: true
    _all?: true
  }

  export type SeccionAprobadaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeccionAprobada to aggregate.
     */
    where?: SeccionAprobadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeccionAprobadas to fetch.
     */
    orderBy?: SeccionAprobadaOrderByWithRelationInput | SeccionAprobadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeccionAprobadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeccionAprobadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeccionAprobadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeccionAprobadas
    **/
    _count?: true | SeccionAprobadaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeccionAprobadaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeccionAprobadaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeccionAprobadaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeccionAprobadaMaxAggregateInputType
  }

  export type GetSeccionAprobadaAggregateType<T extends SeccionAprobadaAggregateArgs> = {
        [P in keyof T & keyof AggregateSeccionAprobada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeccionAprobada[P]>
      : GetScalarType<T[P], AggregateSeccionAprobada[P]>
  }




  export type SeccionAprobadaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeccionAprobadaWhereInput
    orderBy?: SeccionAprobadaOrderByWithAggregationInput | SeccionAprobadaOrderByWithAggregationInput[]
    by: SeccionAprobadaScalarFieldEnum[] | SeccionAprobadaScalarFieldEnum
    having?: SeccionAprobadaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeccionAprobadaCountAggregateInputType | true
    _avg?: SeccionAprobadaAvgAggregateInputType
    _sum?: SeccionAprobadaSumAggregateInputType
    _min?: SeccionAprobadaMinAggregateInputType
    _max?: SeccionAprobadaMaxAggregateInputType
  }

  export type SeccionAprobadaGroupByOutputType = {
    usuarioId: string
    seccionId: number
    _count: SeccionAprobadaCountAggregateOutputType | null
    _avg: SeccionAprobadaAvgAggregateOutputType | null
    _sum: SeccionAprobadaSumAggregateOutputType | null
    _min: SeccionAprobadaMinAggregateOutputType | null
    _max: SeccionAprobadaMaxAggregateOutputType | null
  }

  type GetSeccionAprobadaGroupByPayload<T extends SeccionAprobadaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeccionAprobadaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeccionAprobadaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeccionAprobadaGroupByOutputType[P]>
            : GetScalarType<T[P], SeccionAprobadaGroupByOutputType[P]>
        }
      >
    >


  export type SeccionAprobadaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuarioId?: boolean
    seccionId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    seccion?: boolean | SeccionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seccionAprobada"]>

  export type SeccionAprobadaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuarioId?: boolean
    seccionId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    seccion?: boolean | SeccionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seccionAprobada"]>

  export type SeccionAprobadaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuarioId?: boolean
    seccionId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    seccion?: boolean | SeccionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seccionAprobada"]>

  export type SeccionAprobadaSelectScalar = {
    usuarioId?: boolean
    seccionId?: boolean
  }

  export type SeccionAprobadaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"usuarioId" | "seccionId", ExtArgs["result"]["seccionAprobada"]>
  export type SeccionAprobadaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    seccion?: boolean | SeccionDefaultArgs<ExtArgs>
  }
  export type SeccionAprobadaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    seccion?: boolean | SeccionDefaultArgs<ExtArgs>
  }
  export type SeccionAprobadaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    seccion?: boolean | SeccionDefaultArgs<ExtArgs>
  }

  export type $SeccionAprobadaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SeccionAprobada"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      seccion: Prisma.$SeccionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      usuarioId: string
      seccionId: number
    }, ExtArgs["result"]["seccionAprobada"]>
    composites: {}
  }

  type SeccionAprobadaGetPayload<S extends boolean | null | undefined | SeccionAprobadaDefaultArgs> = $Result.GetResult<Prisma.$SeccionAprobadaPayload, S>

  type SeccionAprobadaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeccionAprobadaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeccionAprobadaCountAggregateInputType | true
    }

  export interface SeccionAprobadaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SeccionAprobada'], meta: { name: 'SeccionAprobada' } }
    /**
     * Find zero or one SeccionAprobada that matches the filter.
     * @param {SeccionAprobadaFindUniqueArgs} args - Arguments to find a SeccionAprobada
     * @example
     * // Get one SeccionAprobada
     * const seccionAprobada = await prisma.seccionAprobada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeccionAprobadaFindUniqueArgs>(args: SelectSubset<T, SeccionAprobadaFindUniqueArgs<ExtArgs>>): Prisma__SeccionAprobadaClient<$Result.GetResult<Prisma.$SeccionAprobadaPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one SeccionAprobada that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeccionAprobadaFindUniqueOrThrowArgs} args - Arguments to find a SeccionAprobada
     * @example
     * // Get one SeccionAprobada
     * const seccionAprobada = await prisma.seccionAprobada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeccionAprobadaFindUniqueOrThrowArgs>(args: SelectSubset<T, SeccionAprobadaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeccionAprobadaClient<$Result.GetResult<Prisma.$SeccionAprobadaPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first SeccionAprobada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionAprobadaFindFirstArgs} args - Arguments to find a SeccionAprobada
     * @example
     * // Get one SeccionAprobada
     * const seccionAprobada = await prisma.seccionAprobada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeccionAprobadaFindFirstArgs>(args?: SelectSubset<T, SeccionAprobadaFindFirstArgs<ExtArgs>>): Prisma__SeccionAprobadaClient<$Result.GetResult<Prisma.$SeccionAprobadaPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first SeccionAprobada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionAprobadaFindFirstOrThrowArgs} args - Arguments to find a SeccionAprobada
     * @example
     * // Get one SeccionAprobada
     * const seccionAprobada = await prisma.seccionAprobada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeccionAprobadaFindFirstOrThrowArgs>(args?: SelectSubset<T, SeccionAprobadaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeccionAprobadaClient<$Result.GetResult<Prisma.$SeccionAprobadaPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more SeccionAprobadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionAprobadaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeccionAprobadas
     * const seccionAprobadas = await prisma.seccionAprobada.findMany()
     * 
     * // Get first 10 SeccionAprobadas
     * const seccionAprobadas = await prisma.seccionAprobada.findMany({ take: 10 })
     * 
     * // Only select the `usuarioId`
     * const seccionAprobadaWithUsuarioIdOnly = await prisma.seccionAprobada.findMany({ select: { usuarioId: true } })
     * 
     */
    findMany<T extends SeccionAprobadaFindManyArgs>(args?: SelectSubset<T, SeccionAprobadaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeccionAprobadaPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a SeccionAprobada.
     * @param {SeccionAprobadaCreateArgs} args - Arguments to create a SeccionAprobada.
     * @example
     * // Create one SeccionAprobada
     * const SeccionAprobada = await prisma.seccionAprobada.create({
     *   data: {
     *     // ... data to create a SeccionAprobada
     *   }
     * })
     * 
     */
    create<T extends SeccionAprobadaCreateArgs>(args: SelectSubset<T, SeccionAprobadaCreateArgs<ExtArgs>>): Prisma__SeccionAprobadaClient<$Result.GetResult<Prisma.$SeccionAprobadaPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many SeccionAprobadas.
     * @param {SeccionAprobadaCreateManyArgs} args - Arguments to create many SeccionAprobadas.
     * @example
     * // Create many SeccionAprobadas
     * const seccionAprobada = await prisma.seccionAprobada.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeccionAprobadaCreateManyArgs>(args?: SelectSubset<T, SeccionAprobadaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SeccionAprobadas and returns the data saved in the database.
     * @param {SeccionAprobadaCreateManyAndReturnArgs} args - Arguments to create many SeccionAprobadas.
     * @example
     * // Create many SeccionAprobadas
     * const seccionAprobada = await prisma.seccionAprobada.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SeccionAprobadas and only return the `usuarioId`
     * const seccionAprobadaWithUsuarioIdOnly = await prisma.seccionAprobada.createManyAndReturn({
     *   select: { usuarioId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeccionAprobadaCreateManyAndReturnArgs>(args?: SelectSubset<T, SeccionAprobadaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeccionAprobadaPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a SeccionAprobada.
     * @param {SeccionAprobadaDeleteArgs} args - Arguments to delete one SeccionAprobada.
     * @example
     * // Delete one SeccionAprobada
     * const SeccionAprobada = await prisma.seccionAprobada.delete({
     *   where: {
     *     // ... filter to delete one SeccionAprobada
     *   }
     * })
     * 
     */
    delete<T extends SeccionAprobadaDeleteArgs>(args: SelectSubset<T, SeccionAprobadaDeleteArgs<ExtArgs>>): Prisma__SeccionAprobadaClient<$Result.GetResult<Prisma.$SeccionAprobadaPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one SeccionAprobada.
     * @param {SeccionAprobadaUpdateArgs} args - Arguments to update one SeccionAprobada.
     * @example
     * // Update one SeccionAprobada
     * const seccionAprobada = await prisma.seccionAprobada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeccionAprobadaUpdateArgs>(args: SelectSubset<T, SeccionAprobadaUpdateArgs<ExtArgs>>): Prisma__SeccionAprobadaClient<$Result.GetResult<Prisma.$SeccionAprobadaPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more SeccionAprobadas.
     * @param {SeccionAprobadaDeleteManyArgs} args - Arguments to filter SeccionAprobadas to delete.
     * @example
     * // Delete a few SeccionAprobadas
     * const { count } = await prisma.seccionAprobada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeccionAprobadaDeleteManyArgs>(args?: SelectSubset<T, SeccionAprobadaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeccionAprobadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionAprobadaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeccionAprobadas
     * const seccionAprobada = await prisma.seccionAprobada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeccionAprobadaUpdateManyArgs>(args: SelectSubset<T, SeccionAprobadaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeccionAprobadas and returns the data updated in the database.
     * @param {SeccionAprobadaUpdateManyAndReturnArgs} args - Arguments to update many SeccionAprobadas.
     * @example
     * // Update many SeccionAprobadas
     * const seccionAprobada = await prisma.seccionAprobada.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SeccionAprobadas and only return the `usuarioId`
     * const seccionAprobadaWithUsuarioIdOnly = await prisma.seccionAprobada.updateManyAndReturn({
     *   select: { usuarioId: true },
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
    updateManyAndReturn<T extends SeccionAprobadaUpdateManyAndReturnArgs>(args: SelectSubset<T, SeccionAprobadaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeccionAprobadaPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one SeccionAprobada.
     * @param {SeccionAprobadaUpsertArgs} args - Arguments to update or create a SeccionAprobada.
     * @example
     * // Update or create a SeccionAprobada
     * const seccionAprobada = await prisma.seccionAprobada.upsert({
     *   create: {
     *     // ... data to create a SeccionAprobada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeccionAprobada we want to update
     *   }
     * })
     */
    upsert<T extends SeccionAprobadaUpsertArgs>(args: SelectSubset<T, SeccionAprobadaUpsertArgs<ExtArgs>>): Prisma__SeccionAprobadaClient<$Result.GetResult<Prisma.$SeccionAprobadaPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of SeccionAprobadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionAprobadaCountArgs} args - Arguments to filter SeccionAprobadas to count.
     * @example
     * // Count the number of SeccionAprobadas
     * const count = await prisma.seccionAprobada.count({
     *   where: {
     *     // ... the filter for the SeccionAprobadas we want to count
     *   }
     * })
    **/
    count<T extends SeccionAprobadaCountArgs>(
      args?: Subset<T, SeccionAprobadaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeccionAprobadaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeccionAprobada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionAprobadaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeccionAprobadaAggregateArgs>(args: Subset<T, SeccionAprobadaAggregateArgs>): Prisma.PrismaPromise<GetSeccionAprobadaAggregateType<T>>

    /**
     * Group by SeccionAprobada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionAprobadaGroupByArgs} args - Group by arguments.
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
      T extends SeccionAprobadaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeccionAprobadaGroupByArgs['orderBy'] }
        : { orderBy?: SeccionAprobadaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeccionAprobadaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeccionAprobadaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SeccionAprobada model
   */
  readonly fields: SeccionAprobadaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeccionAprobada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeccionAprobadaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    seccion<T extends SeccionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeccionDefaultArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the SeccionAprobada model
   */ 
  interface SeccionAprobadaFieldRefs {
    readonly usuarioId: FieldRef<"SeccionAprobada", 'String'>
    readonly seccionId: FieldRef<"SeccionAprobada", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SeccionAprobada findUnique
   */
  export type SeccionAprobadaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeccionAprobada
     */
    select?: SeccionAprobadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeccionAprobada
     */
    omit?: SeccionAprobadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionAprobadaInclude<ExtArgs> | null
    /**
     * Filter, which SeccionAprobada to fetch.
     */
    where: SeccionAprobadaWhereUniqueInput
  }

  /**
   * SeccionAprobada findUniqueOrThrow
   */
  export type SeccionAprobadaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeccionAprobada
     */
    select?: SeccionAprobadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeccionAprobada
     */
    omit?: SeccionAprobadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionAprobadaInclude<ExtArgs> | null
    /**
     * Filter, which SeccionAprobada to fetch.
     */
    where: SeccionAprobadaWhereUniqueInput
  }

  /**
   * SeccionAprobada findFirst
   */
  export type SeccionAprobadaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeccionAprobada
     */
    select?: SeccionAprobadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeccionAprobada
     */
    omit?: SeccionAprobadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionAprobadaInclude<ExtArgs> | null
    /**
     * Filter, which SeccionAprobada to fetch.
     */
    where?: SeccionAprobadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeccionAprobadas to fetch.
     */
    orderBy?: SeccionAprobadaOrderByWithRelationInput | SeccionAprobadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeccionAprobadas.
     */
    cursor?: SeccionAprobadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeccionAprobadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeccionAprobadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeccionAprobadas.
     */
    distinct?: SeccionAprobadaScalarFieldEnum | SeccionAprobadaScalarFieldEnum[]
  }

  /**
   * SeccionAprobada findFirstOrThrow
   */
  export type SeccionAprobadaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeccionAprobada
     */
    select?: SeccionAprobadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeccionAprobada
     */
    omit?: SeccionAprobadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionAprobadaInclude<ExtArgs> | null
    /**
     * Filter, which SeccionAprobada to fetch.
     */
    where?: SeccionAprobadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeccionAprobadas to fetch.
     */
    orderBy?: SeccionAprobadaOrderByWithRelationInput | SeccionAprobadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeccionAprobadas.
     */
    cursor?: SeccionAprobadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeccionAprobadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeccionAprobadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeccionAprobadas.
     */
    distinct?: SeccionAprobadaScalarFieldEnum | SeccionAprobadaScalarFieldEnum[]
  }

  /**
   * SeccionAprobada findMany
   */
  export type SeccionAprobadaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeccionAprobada
     */
    select?: SeccionAprobadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeccionAprobada
     */
    omit?: SeccionAprobadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionAprobadaInclude<ExtArgs> | null
    /**
     * Filter, which SeccionAprobadas to fetch.
     */
    where?: SeccionAprobadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeccionAprobadas to fetch.
     */
    orderBy?: SeccionAprobadaOrderByWithRelationInput | SeccionAprobadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeccionAprobadas.
     */
    cursor?: SeccionAprobadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeccionAprobadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeccionAprobadas.
     */
    skip?: number
    distinct?: SeccionAprobadaScalarFieldEnum | SeccionAprobadaScalarFieldEnum[]
  }

  /**
   * SeccionAprobada create
   */
  export type SeccionAprobadaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeccionAprobada
     */
    select?: SeccionAprobadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeccionAprobada
     */
    omit?: SeccionAprobadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionAprobadaInclude<ExtArgs> | null
    /**
     * The data needed to create a SeccionAprobada.
     */
    data: XOR<SeccionAprobadaCreateInput, SeccionAprobadaUncheckedCreateInput>
  }

  /**
   * SeccionAprobada createMany
   */
  export type SeccionAprobadaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeccionAprobadas.
     */
    data: SeccionAprobadaCreateManyInput | SeccionAprobadaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeccionAprobada createManyAndReturn
   */
  export type SeccionAprobadaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeccionAprobada
     */
    select?: SeccionAprobadaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeccionAprobada
     */
    omit?: SeccionAprobadaOmit<ExtArgs> | null
    /**
     * The data used to create many SeccionAprobadas.
     */
    data: SeccionAprobadaCreateManyInput | SeccionAprobadaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionAprobadaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeccionAprobada update
   */
  export type SeccionAprobadaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeccionAprobada
     */
    select?: SeccionAprobadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeccionAprobada
     */
    omit?: SeccionAprobadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionAprobadaInclude<ExtArgs> | null
    /**
     * The data needed to update a SeccionAprobada.
     */
    data: XOR<SeccionAprobadaUpdateInput, SeccionAprobadaUncheckedUpdateInput>
    /**
     * Choose, which SeccionAprobada to update.
     */
    where: SeccionAprobadaWhereUniqueInput
  }

  /**
   * SeccionAprobada updateMany
   */
  export type SeccionAprobadaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SeccionAprobadas.
     */
    data: XOR<SeccionAprobadaUpdateManyMutationInput, SeccionAprobadaUncheckedUpdateManyInput>
    /**
     * Filter which SeccionAprobadas to update
     */
    where?: SeccionAprobadaWhereInput
    /**
     * Limit how many SeccionAprobadas to update.
     */
    limit?: number
  }

  /**
   * SeccionAprobada updateManyAndReturn
   */
  export type SeccionAprobadaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeccionAprobada
     */
    select?: SeccionAprobadaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeccionAprobada
     */
    omit?: SeccionAprobadaOmit<ExtArgs> | null
    /**
     * The data used to update SeccionAprobadas.
     */
    data: XOR<SeccionAprobadaUpdateManyMutationInput, SeccionAprobadaUncheckedUpdateManyInput>
    /**
     * Filter which SeccionAprobadas to update
     */
    where?: SeccionAprobadaWhereInput
    /**
     * Limit how many SeccionAprobadas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionAprobadaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeccionAprobada upsert
   */
  export type SeccionAprobadaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeccionAprobada
     */
    select?: SeccionAprobadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeccionAprobada
     */
    omit?: SeccionAprobadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionAprobadaInclude<ExtArgs> | null
    /**
     * The filter to search for the SeccionAprobada to update in case it exists.
     */
    where: SeccionAprobadaWhereUniqueInput
    /**
     * In case the SeccionAprobada found by the `where` argument doesn't exist, create a new SeccionAprobada with this data.
     */
    create: XOR<SeccionAprobadaCreateInput, SeccionAprobadaUncheckedCreateInput>
    /**
     * In case the SeccionAprobada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeccionAprobadaUpdateInput, SeccionAprobadaUncheckedUpdateInput>
  }

  /**
   * SeccionAprobada delete
   */
  export type SeccionAprobadaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeccionAprobada
     */
    select?: SeccionAprobadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeccionAprobada
     */
    omit?: SeccionAprobadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionAprobadaInclude<ExtArgs> | null
    /**
     * Filter which SeccionAprobada to delete.
     */
    where: SeccionAprobadaWhereUniqueInput
  }

  /**
   * SeccionAprobada deleteMany
   */
  export type SeccionAprobadaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeccionAprobadas to delete
     */
    where?: SeccionAprobadaWhereInput
    /**
     * Limit how many SeccionAprobadas to delete.
     */
    limit?: number
  }

  /**
   * SeccionAprobada without action
   */
  export type SeccionAprobadaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeccionAprobada
     */
    select?: SeccionAprobadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeccionAprobada
     */
    omit?: SeccionAprobadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionAprobadaInclude<ExtArgs> | null
  }


  /**
   * Model Escenario
   */

  export type AggregateEscenario = {
    _count: EscenarioCountAggregateOutputType | null
    _avg: EscenarioAvgAggregateOutputType | null
    _sum: EscenarioSumAggregateOutputType | null
    _min: EscenarioMinAggregateOutputType | null
    _max: EscenarioMaxAggregateOutputType | null
  }

  export type EscenarioAvgAggregateOutputType = {
    id: number | null
    seccionId: number | null
  }

  export type EscenarioSumAggregateOutputType = {
    id: number | null
    seccionId: number | null
  }

  export type EscenarioMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    descripcion: string | null
    pregunta: string | null
    explicacion: string | null
    categoria: string | null
    seccionId: number | null
  }

  export type EscenarioMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    descripcion: string | null
    pregunta: string | null
    explicacion: string | null
    categoria: string | null
    seccionId: number | null
  }

  export type EscenarioCountAggregateOutputType = {
    id: number
    titulo: number
    descripcion: number
    pregunta: number
    explicacion: number
    categoria: number
    seccionId: number
    _all: number
  }


  export type EscenarioAvgAggregateInputType = {
    id?: true
    seccionId?: true
  }

  export type EscenarioSumAggregateInputType = {
    id?: true
    seccionId?: true
  }

  export type EscenarioMinAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    pregunta?: true
    explicacion?: true
    categoria?: true
    seccionId?: true
  }

  export type EscenarioMaxAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    pregunta?: true
    explicacion?: true
    categoria?: true
    seccionId?: true
  }

  export type EscenarioCountAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    pregunta?: true
    explicacion?: true
    categoria?: true
    seccionId?: true
    _all?: true
  }

  export type EscenarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Escenario to aggregate.
     */
    where?: EscenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escenarios to fetch.
     */
    orderBy?: EscenarioOrderByWithRelationInput | EscenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EscenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Escenarios
    **/
    _count?: true | EscenarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EscenarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EscenarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EscenarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EscenarioMaxAggregateInputType
  }

  export type GetEscenarioAggregateType<T extends EscenarioAggregateArgs> = {
        [P in keyof T & keyof AggregateEscenario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEscenario[P]>
      : GetScalarType<T[P], AggregateEscenario[P]>
  }




  export type EscenarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EscenarioWhereInput
    orderBy?: EscenarioOrderByWithAggregationInput | EscenarioOrderByWithAggregationInput[]
    by: EscenarioScalarFieldEnum[] | EscenarioScalarFieldEnum
    having?: EscenarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EscenarioCountAggregateInputType | true
    _avg?: EscenarioAvgAggregateInputType
    _sum?: EscenarioSumAggregateInputType
    _min?: EscenarioMinAggregateInputType
    _max?: EscenarioMaxAggregateInputType
  }

  export type EscenarioGroupByOutputType = {
    id: number
    titulo: string
    descripcion: string
    pregunta: string
    explicacion: string | null
    categoria: string
    seccionId: number
    _count: EscenarioCountAggregateOutputType | null
    _avg: EscenarioAvgAggregateOutputType | null
    _sum: EscenarioSumAggregateOutputType | null
    _min: EscenarioMinAggregateOutputType | null
    _max: EscenarioMaxAggregateOutputType | null
  }

  type GetEscenarioGroupByPayload<T extends EscenarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EscenarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EscenarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EscenarioGroupByOutputType[P]>
            : GetScalarType<T[P], EscenarioGroupByOutputType[P]>
        }
      >
    >


  export type EscenarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    pregunta?: boolean
    explicacion?: boolean
    categoria?: boolean
    seccionId?: boolean
    seccion?: boolean | SeccionDefaultArgs<ExtArgs>
    opciones?: boolean | Escenario$opcionesArgs<ExtArgs>
    insignias?: boolean | Escenario$insigniasArgs<ExtArgs>
    progreso?: boolean | Escenario$progresoArgs<ExtArgs>
    _count?: boolean | EscenarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["escenario"]>

  export type EscenarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    pregunta?: boolean
    explicacion?: boolean
    categoria?: boolean
    seccionId?: boolean
    seccion?: boolean | SeccionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["escenario"]>

  export type EscenarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    pregunta?: boolean
    explicacion?: boolean
    categoria?: boolean
    seccionId?: boolean
    seccion?: boolean | SeccionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["escenario"]>

  export type EscenarioSelectScalar = {
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    pregunta?: boolean
    explicacion?: boolean
    categoria?: boolean
    seccionId?: boolean
  }

  export type EscenarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descripcion" | "pregunta" | "explicacion" | "categoria" | "seccionId", ExtArgs["result"]["escenario"]>
  export type EscenarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seccion?: boolean | SeccionDefaultArgs<ExtArgs>
    opciones?: boolean | Escenario$opcionesArgs<ExtArgs>
    insignias?: boolean | Escenario$insigniasArgs<ExtArgs>
    progreso?: boolean | Escenario$progresoArgs<ExtArgs>
    _count?: boolean | EscenarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EscenarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seccion?: boolean | SeccionDefaultArgs<ExtArgs>
  }
  export type EscenarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seccion?: boolean | SeccionDefaultArgs<ExtArgs>
  }

  export type $EscenarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Escenario"
    objects: {
      seccion: Prisma.$SeccionPayload<ExtArgs>
      opciones: Prisma.$OpcionPayload<ExtArgs>[]
      insignias: Prisma.$InsigniaPayload<ExtArgs>[]
      progreso: Prisma.$ProgresoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      descripcion: string
      pregunta: string
      explicacion: string | null
      categoria: string
      seccionId: number
    }, ExtArgs["result"]["escenario"]>
    composites: {}
  }

  type EscenarioGetPayload<S extends boolean | null | undefined | EscenarioDefaultArgs> = $Result.GetResult<Prisma.$EscenarioPayload, S>

  type EscenarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EscenarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EscenarioCountAggregateInputType | true
    }

  export interface EscenarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Escenario'], meta: { name: 'Escenario' } }
    /**
     * Find zero or one Escenario that matches the filter.
     * @param {EscenarioFindUniqueArgs} args - Arguments to find a Escenario
     * @example
     * // Get one Escenario
     * const escenario = await prisma.escenario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EscenarioFindUniqueArgs>(args: SelectSubset<T, EscenarioFindUniqueArgs<ExtArgs>>): Prisma__EscenarioClient<$Result.GetResult<Prisma.$EscenarioPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Escenario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EscenarioFindUniqueOrThrowArgs} args - Arguments to find a Escenario
     * @example
     * // Get one Escenario
     * const escenario = await prisma.escenario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EscenarioFindUniqueOrThrowArgs>(args: SelectSubset<T, EscenarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EscenarioClient<$Result.GetResult<Prisma.$EscenarioPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Escenario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscenarioFindFirstArgs} args - Arguments to find a Escenario
     * @example
     * // Get one Escenario
     * const escenario = await prisma.escenario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EscenarioFindFirstArgs>(args?: SelectSubset<T, EscenarioFindFirstArgs<ExtArgs>>): Prisma__EscenarioClient<$Result.GetResult<Prisma.$EscenarioPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Escenario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscenarioFindFirstOrThrowArgs} args - Arguments to find a Escenario
     * @example
     * // Get one Escenario
     * const escenario = await prisma.escenario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EscenarioFindFirstOrThrowArgs>(args?: SelectSubset<T, EscenarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__EscenarioClient<$Result.GetResult<Prisma.$EscenarioPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Escenarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscenarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Escenarios
     * const escenarios = await prisma.escenario.findMany()
     * 
     * // Get first 10 Escenarios
     * const escenarios = await prisma.escenario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const escenarioWithIdOnly = await prisma.escenario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EscenarioFindManyArgs>(args?: SelectSubset<T, EscenarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscenarioPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Escenario.
     * @param {EscenarioCreateArgs} args - Arguments to create a Escenario.
     * @example
     * // Create one Escenario
     * const Escenario = await prisma.escenario.create({
     *   data: {
     *     // ... data to create a Escenario
     *   }
     * })
     * 
     */
    create<T extends EscenarioCreateArgs>(args: SelectSubset<T, EscenarioCreateArgs<ExtArgs>>): Prisma__EscenarioClient<$Result.GetResult<Prisma.$EscenarioPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Escenarios.
     * @param {EscenarioCreateManyArgs} args - Arguments to create many Escenarios.
     * @example
     * // Create many Escenarios
     * const escenario = await prisma.escenario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EscenarioCreateManyArgs>(args?: SelectSubset<T, EscenarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Escenarios and returns the data saved in the database.
     * @param {EscenarioCreateManyAndReturnArgs} args - Arguments to create many Escenarios.
     * @example
     * // Create many Escenarios
     * const escenario = await prisma.escenario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Escenarios and only return the `id`
     * const escenarioWithIdOnly = await prisma.escenario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EscenarioCreateManyAndReturnArgs>(args?: SelectSubset<T, EscenarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscenarioPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Escenario.
     * @param {EscenarioDeleteArgs} args - Arguments to delete one Escenario.
     * @example
     * // Delete one Escenario
     * const Escenario = await prisma.escenario.delete({
     *   where: {
     *     // ... filter to delete one Escenario
     *   }
     * })
     * 
     */
    delete<T extends EscenarioDeleteArgs>(args: SelectSubset<T, EscenarioDeleteArgs<ExtArgs>>): Prisma__EscenarioClient<$Result.GetResult<Prisma.$EscenarioPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Escenario.
     * @param {EscenarioUpdateArgs} args - Arguments to update one Escenario.
     * @example
     * // Update one Escenario
     * const escenario = await prisma.escenario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EscenarioUpdateArgs>(args: SelectSubset<T, EscenarioUpdateArgs<ExtArgs>>): Prisma__EscenarioClient<$Result.GetResult<Prisma.$EscenarioPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Escenarios.
     * @param {EscenarioDeleteManyArgs} args - Arguments to filter Escenarios to delete.
     * @example
     * // Delete a few Escenarios
     * const { count } = await prisma.escenario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EscenarioDeleteManyArgs>(args?: SelectSubset<T, EscenarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Escenarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscenarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Escenarios
     * const escenario = await prisma.escenario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EscenarioUpdateManyArgs>(args: SelectSubset<T, EscenarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Escenarios and returns the data updated in the database.
     * @param {EscenarioUpdateManyAndReturnArgs} args - Arguments to update many Escenarios.
     * @example
     * // Update many Escenarios
     * const escenario = await prisma.escenario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Escenarios and only return the `id`
     * const escenarioWithIdOnly = await prisma.escenario.updateManyAndReturn({
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
    updateManyAndReturn<T extends EscenarioUpdateManyAndReturnArgs>(args: SelectSubset<T, EscenarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscenarioPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Escenario.
     * @param {EscenarioUpsertArgs} args - Arguments to update or create a Escenario.
     * @example
     * // Update or create a Escenario
     * const escenario = await prisma.escenario.upsert({
     *   create: {
     *     // ... data to create a Escenario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Escenario we want to update
     *   }
     * })
     */
    upsert<T extends EscenarioUpsertArgs>(args: SelectSubset<T, EscenarioUpsertArgs<ExtArgs>>): Prisma__EscenarioClient<$Result.GetResult<Prisma.$EscenarioPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Escenarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscenarioCountArgs} args - Arguments to filter Escenarios to count.
     * @example
     * // Count the number of Escenarios
     * const count = await prisma.escenario.count({
     *   where: {
     *     // ... the filter for the Escenarios we want to count
     *   }
     * })
    **/
    count<T extends EscenarioCountArgs>(
      args?: Subset<T, EscenarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EscenarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Escenario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscenarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EscenarioAggregateArgs>(args: Subset<T, EscenarioAggregateArgs>): Prisma.PrismaPromise<GetEscenarioAggregateType<T>>

    /**
     * Group by Escenario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscenarioGroupByArgs} args - Group by arguments.
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
      T extends EscenarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EscenarioGroupByArgs['orderBy'] }
        : { orderBy?: EscenarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EscenarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEscenarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Escenario model
   */
  readonly fields: EscenarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Escenario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EscenarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seccion<T extends SeccionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeccionDefaultArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    opciones<T extends Escenario$opcionesArgs<ExtArgs> = {}>(args?: Subset<T, Escenario$opcionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpcionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    insignias<T extends Escenario$insigniasArgs<ExtArgs> = {}>(args?: Subset<T, Escenario$insigniasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsigniaPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    progreso<T extends Escenario$progresoArgs<ExtArgs> = {}>(args?: Subset<T, Escenario$progresoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Escenario model
   */ 
  interface EscenarioFieldRefs {
    readonly id: FieldRef<"Escenario", 'Int'>
    readonly titulo: FieldRef<"Escenario", 'String'>
    readonly descripcion: FieldRef<"Escenario", 'String'>
    readonly pregunta: FieldRef<"Escenario", 'String'>
    readonly explicacion: FieldRef<"Escenario", 'String'>
    readonly categoria: FieldRef<"Escenario", 'String'>
    readonly seccionId: FieldRef<"Escenario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Escenario findUnique
   */
  export type EscenarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escenario
     */
    select?: EscenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escenario
     */
    omit?: EscenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscenarioInclude<ExtArgs> | null
    /**
     * Filter, which Escenario to fetch.
     */
    where: EscenarioWhereUniqueInput
  }

  /**
   * Escenario findUniqueOrThrow
   */
  export type EscenarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escenario
     */
    select?: EscenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escenario
     */
    omit?: EscenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscenarioInclude<ExtArgs> | null
    /**
     * Filter, which Escenario to fetch.
     */
    where: EscenarioWhereUniqueInput
  }

  /**
   * Escenario findFirst
   */
  export type EscenarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escenario
     */
    select?: EscenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escenario
     */
    omit?: EscenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscenarioInclude<ExtArgs> | null
    /**
     * Filter, which Escenario to fetch.
     */
    where?: EscenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escenarios to fetch.
     */
    orderBy?: EscenarioOrderByWithRelationInput | EscenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Escenarios.
     */
    cursor?: EscenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Escenarios.
     */
    distinct?: EscenarioScalarFieldEnum | EscenarioScalarFieldEnum[]
  }

  /**
   * Escenario findFirstOrThrow
   */
  export type EscenarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escenario
     */
    select?: EscenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escenario
     */
    omit?: EscenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscenarioInclude<ExtArgs> | null
    /**
     * Filter, which Escenario to fetch.
     */
    where?: EscenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escenarios to fetch.
     */
    orderBy?: EscenarioOrderByWithRelationInput | EscenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Escenarios.
     */
    cursor?: EscenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Escenarios.
     */
    distinct?: EscenarioScalarFieldEnum | EscenarioScalarFieldEnum[]
  }

  /**
   * Escenario findMany
   */
  export type EscenarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escenario
     */
    select?: EscenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escenario
     */
    omit?: EscenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscenarioInclude<ExtArgs> | null
    /**
     * Filter, which Escenarios to fetch.
     */
    where?: EscenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escenarios to fetch.
     */
    orderBy?: EscenarioOrderByWithRelationInput | EscenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Escenarios.
     */
    cursor?: EscenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escenarios.
     */
    skip?: number
    distinct?: EscenarioScalarFieldEnum | EscenarioScalarFieldEnum[]
  }

  /**
   * Escenario create
   */
  export type EscenarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escenario
     */
    select?: EscenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escenario
     */
    omit?: EscenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscenarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Escenario.
     */
    data: XOR<EscenarioCreateInput, EscenarioUncheckedCreateInput>
  }

  /**
   * Escenario createMany
   */
  export type EscenarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Escenarios.
     */
    data: EscenarioCreateManyInput | EscenarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Escenario createManyAndReturn
   */
  export type EscenarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escenario
     */
    select?: EscenarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Escenario
     */
    omit?: EscenarioOmit<ExtArgs> | null
    /**
     * The data used to create many Escenarios.
     */
    data: EscenarioCreateManyInput | EscenarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscenarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Escenario update
   */
  export type EscenarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escenario
     */
    select?: EscenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escenario
     */
    omit?: EscenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscenarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Escenario.
     */
    data: XOR<EscenarioUpdateInput, EscenarioUncheckedUpdateInput>
    /**
     * Choose, which Escenario to update.
     */
    where: EscenarioWhereUniqueInput
  }

  /**
   * Escenario updateMany
   */
  export type EscenarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Escenarios.
     */
    data: XOR<EscenarioUpdateManyMutationInput, EscenarioUncheckedUpdateManyInput>
    /**
     * Filter which Escenarios to update
     */
    where?: EscenarioWhereInput
    /**
     * Limit how many Escenarios to update.
     */
    limit?: number
  }

  /**
   * Escenario updateManyAndReturn
   */
  export type EscenarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escenario
     */
    select?: EscenarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Escenario
     */
    omit?: EscenarioOmit<ExtArgs> | null
    /**
     * The data used to update Escenarios.
     */
    data: XOR<EscenarioUpdateManyMutationInput, EscenarioUncheckedUpdateManyInput>
    /**
     * Filter which Escenarios to update
     */
    where?: EscenarioWhereInput
    /**
     * Limit how many Escenarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscenarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Escenario upsert
   */
  export type EscenarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escenario
     */
    select?: EscenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escenario
     */
    omit?: EscenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscenarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Escenario to update in case it exists.
     */
    where: EscenarioWhereUniqueInput
    /**
     * In case the Escenario found by the `where` argument doesn't exist, create a new Escenario with this data.
     */
    create: XOR<EscenarioCreateInput, EscenarioUncheckedCreateInput>
    /**
     * In case the Escenario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EscenarioUpdateInput, EscenarioUncheckedUpdateInput>
  }

  /**
   * Escenario delete
   */
  export type EscenarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escenario
     */
    select?: EscenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escenario
     */
    omit?: EscenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscenarioInclude<ExtArgs> | null
    /**
     * Filter which Escenario to delete.
     */
    where: EscenarioWhereUniqueInput
  }

  /**
   * Escenario deleteMany
   */
  export type EscenarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Escenarios to delete
     */
    where?: EscenarioWhereInput
    /**
     * Limit how many Escenarios to delete.
     */
    limit?: number
  }

  /**
   * Escenario.opciones
   */
  export type Escenario$opcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opcion
     */
    select?: OpcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opcion
     */
    omit?: OpcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcionInclude<ExtArgs> | null
    where?: OpcionWhereInput
    orderBy?: OpcionOrderByWithRelationInput | OpcionOrderByWithRelationInput[]
    cursor?: OpcionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpcionScalarFieldEnum | OpcionScalarFieldEnum[]
  }

  /**
   * Escenario.insignias
   */
  export type Escenario$insigniasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insignia
     */
    select?: InsigniaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insignia
     */
    omit?: InsigniaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsigniaInclude<ExtArgs> | null
    where?: InsigniaWhereInput
    orderBy?: InsigniaOrderByWithRelationInput | InsigniaOrderByWithRelationInput[]
    cursor?: InsigniaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InsigniaScalarFieldEnum | InsigniaScalarFieldEnum[]
  }

  /**
   * Escenario.progreso
   */
  export type Escenario$progresoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    where?: ProgresoWhereInput
    orderBy?: ProgresoOrderByWithRelationInput | ProgresoOrderByWithRelationInput[]
    cursor?: ProgresoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgresoScalarFieldEnum | ProgresoScalarFieldEnum[]
  }

  /**
   * Escenario without action
   */
  export type EscenarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escenario
     */
    select?: EscenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escenario
     */
    omit?: EscenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscenarioInclude<ExtArgs> | null
  }


  /**
   * Model Opcion
   */

  export type AggregateOpcion = {
    _count: OpcionCountAggregateOutputType | null
    _avg: OpcionAvgAggregateOutputType | null
    _sum: OpcionSumAggregateOutputType | null
    _min: OpcionMinAggregateOutputType | null
    _max: OpcionMaxAggregateOutputType | null
  }

  export type OpcionAvgAggregateOutputType = {
    id: number | null
    puntos: number | null
    escenarioId: number | null
  }

  export type OpcionSumAggregateOutputType = {
    id: number | null
    puntos: number | null
    escenarioId: number | null
  }

  export type OpcionMinAggregateOutputType = {
    id: number | null
    texto: string | null
    puntos: number | null
    escenarioId: number | null
  }

  export type OpcionMaxAggregateOutputType = {
    id: number | null
    texto: string | null
    puntos: number | null
    escenarioId: number | null
  }

  export type OpcionCountAggregateOutputType = {
    id: number
    texto: number
    puntos: number
    escenarioId: number
    _all: number
  }


  export type OpcionAvgAggregateInputType = {
    id?: true
    puntos?: true
    escenarioId?: true
  }

  export type OpcionSumAggregateInputType = {
    id?: true
    puntos?: true
    escenarioId?: true
  }

  export type OpcionMinAggregateInputType = {
    id?: true
    texto?: true
    puntos?: true
    escenarioId?: true
  }

  export type OpcionMaxAggregateInputType = {
    id?: true
    texto?: true
    puntos?: true
    escenarioId?: true
  }

  export type OpcionCountAggregateInputType = {
    id?: true
    texto?: true
    puntos?: true
    escenarioId?: true
    _all?: true
  }

  export type OpcionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Opcion to aggregate.
     */
    where?: OpcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opcions to fetch.
     */
    orderBy?: OpcionOrderByWithRelationInput | OpcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Opcions
    **/
    _count?: true | OpcionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OpcionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OpcionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpcionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpcionMaxAggregateInputType
  }

  export type GetOpcionAggregateType<T extends OpcionAggregateArgs> = {
        [P in keyof T & keyof AggregateOpcion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpcion[P]>
      : GetScalarType<T[P], AggregateOpcion[P]>
  }




  export type OpcionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpcionWhereInput
    orderBy?: OpcionOrderByWithAggregationInput | OpcionOrderByWithAggregationInput[]
    by: OpcionScalarFieldEnum[] | OpcionScalarFieldEnum
    having?: OpcionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpcionCountAggregateInputType | true
    _avg?: OpcionAvgAggregateInputType
    _sum?: OpcionSumAggregateInputType
    _min?: OpcionMinAggregateInputType
    _max?: OpcionMaxAggregateInputType
  }

  export type OpcionGroupByOutputType = {
    id: number
    texto: string
    puntos: number
    escenarioId: number
    _count: OpcionCountAggregateOutputType | null
    _avg: OpcionAvgAggregateOutputType | null
    _sum: OpcionSumAggregateOutputType | null
    _min: OpcionMinAggregateOutputType | null
    _max: OpcionMaxAggregateOutputType | null
  }

  type GetOpcionGroupByPayload<T extends OpcionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OpcionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpcionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpcionGroupByOutputType[P]>
            : GetScalarType<T[P], OpcionGroupByOutputType[P]>
        }
      >
    >


  export type OpcionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    texto?: boolean
    puntos?: boolean
    escenarioId?: boolean
    escenario?: boolean | EscenarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opcion"]>

  export type OpcionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    texto?: boolean
    puntos?: boolean
    escenarioId?: boolean
    escenario?: boolean | EscenarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opcion"]>

  export type OpcionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    texto?: boolean
    puntos?: boolean
    escenarioId?: boolean
    escenario?: boolean | EscenarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opcion"]>

  export type OpcionSelectScalar = {
    id?: boolean
    texto?: boolean
    puntos?: boolean
    escenarioId?: boolean
  }

  export type OpcionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "texto" | "puntos" | "escenarioId", ExtArgs["result"]["opcion"]>
  export type OpcionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escenario?: boolean | EscenarioDefaultArgs<ExtArgs>
  }
  export type OpcionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escenario?: boolean | EscenarioDefaultArgs<ExtArgs>
  }
  export type OpcionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escenario?: boolean | EscenarioDefaultArgs<ExtArgs>
  }

  export type $OpcionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Opcion"
    objects: {
      escenario: Prisma.$EscenarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      texto: string
      puntos: number
      escenarioId: number
    }, ExtArgs["result"]["opcion"]>
    composites: {}
  }

  type OpcionGetPayload<S extends boolean | null | undefined | OpcionDefaultArgs> = $Result.GetResult<Prisma.$OpcionPayload, S>

  type OpcionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OpcionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OpcionCountAggregateInputType | true
    }

  export interface OpcionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Opcion'], meta: { name: 'Opcion' } }
    /**
     * Find zero or one Opcion that matches the filter.
     * @param {OpcionFindUniqueArgs} args - Arguments to find a Opcion
     * @example
     * // Get one Opcion
     * const opcion = await prisma.opcion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OpcionFindUniqueArgs>(args: SelectSubset<T, OpcionFindUniqueArgs<ExtArgs>>): Prisma__OpcionClient<$Result.GetResult<Prisma.$OpcionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Opcion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OpcionFindUniqueOrThrowArgs} args - Arguments to find a Opcion
     * @example
     * // Get one Opcion
     * const opcion = await prisma.opcion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OpcionFindUniqueOrThrowArgs>(args: SelectSubset<T, OpcionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OpcionClient<$Result.GetResult<Prisma.$OpcionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Opcion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpcionFindFirstArgs} args - Arguments to find a Opcion
     * @example
     * // Get one Opcion
     * const opcion = await prisma.opcion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OpcionFindFirstArgs>(args?: SelectSubset<T, OpcionFindFirstArgs<ExtArgs>>): Prisma__OpcionClient<$Result.GetResult<Prisma.$OpcionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Opcion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpcionFindFirstOrThrowArgs} args - Arguments to find a Opcion
     * @example
     * // Get one Opcion
     * const opcion = await prisma.opcion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OpcionFindFirstOrThrowArgs>(args?: SelectSubset<T, OpcionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OpcionClient<$Result.GetResult<Prisma.$OpcionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Opcions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpcionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Opcions
     * const opcions = await prisma.opcion.findMany()
     * 
     * // Get first 10 Opcions
     * const opcions = await prisma.opcion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const opcionWithIdOnly = await prisma.opcion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OpcionFindManyArgs>(args?: SelectSubset<T, OpcionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpcionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Opcion.
     * @param {OpcionCreateArgs} args - Arguments to create a Opcion.
     * @example
     * // Create one Opcion
     * const Opcion = await prisma.opcion.create({
     *   data: {
     *     // ... data to create a Opcion
     *   }
     * })
     * 
     */
    create<T extends OpcionCreateArgs>(args: SelectSubset<T, OpcionCreateArgs<ExtArgs>>): Prisma__OpcionClient<$Result.GetResult<Prisma.$OpcionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Opcions.
     * @param {OpcionCreateManyArgs} args - Arguments to create many Opcions.
     * @example
     * // Create many Opcions
     * const opcion = await prisma.opcion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OpcionCreateManyArgs>(args?: SelectSubset<T, OpcionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Opcions and returns the data saved in the database.
     * @param {OpcionCreateManyAndReturnArgs} args - Arguments to create many Opcions.
     * @example
     * // Create many Opcions
     * const opcion = await prisma.opcion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Opcions and only return the `id`
     * const opcionWithIdOnly = await prisma.opcion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OpcionCreateManyAndReturnArgs>(args?: SelectSubset<T, OpcionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpcionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Opcion.
     * @param {OpcionDeleteArgs} args - Arguments to delete one Opcion.
     * @example
     * // Delete one Opcion
     * const Opcion = await prisma.opcion.delete({
     *   where: {
     *     // ... filter to delete one Opcion
     *   }
     * })
     * 
     */
    delete<T extends OpcionDeleteArgs>(args: SelectSubset<T, OpcionDeleteArgs<ExtArgs>>): Prisma__OpcionClient<$Result.GetResult<Prisma.$OpcionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Opcion.
     * @param {OpcionUpdateArgs} args - Arguments to update one Opcion.
     * @example
     * // Update one Opcion
     * const opcion = await prisma.opcion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OpcionUpdateArgs>(args: SelectSubset<T, OpcionUpdateArgs<ExtArgs>>): Prisma__OpcionClient<$Result.GetResult<Prisma.$OpcionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Opcions.
     * @param {OpcionDeleteManyArgs} args - Arguments to filter Opcions to delete.
     * @example
     * // Delete a few Opcions
     * const { count } = await prisma.opcion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OpcionDeleteManyArgs>(args?: SelectSubset<T, OpcionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Opcions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpcionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Opcions
     * const opcion = await prisma.opcion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OpcionUpdateManyArgs>(args: SelectSubset<T, OpcionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Opcions and returns the data updated in the database.
     * @param {OpcionUpdateManyAndReturnArgs} args - Arguments to update many Opcions.
     * @example
     * // Update many Opcions
     * const opcion = await prisma.opcion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Opcions and only return the `id`
     * const opcionWithIdOnly = await prisma.opcion.updateManyAndReturn({
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
    updateManyAndReturn<T extends OpcionUpdateManyAndReturnArgs>(args: SelectSubset<T, OpcionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpcionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Opcion.
     * @param {OpcionUpsertArgs} args - Arguments to update or create a Opcion.
     * @example
     * // Update or create a Opcion
     * const opcion = await prisma.opcion.upsert({
     *   create: {
     *     // ... data to create a Opcion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Opcion we want to update
     *   }
     * })
     */
    upsert<T extends OpcionUpsertArgs>(args: SelectSubset<T, OpcionUpsertArgs<ExtArgs>>): Prisma__OpcionClient<$Result.GetResult<Prisma.$OpcionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Opcions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpcionCountArgs} args - Arguments to filter Opcions to count.
     * @example
     * // Count the number of Opcions
     * const count = await prisma.opcion.count({
     *   where: {
     *     // ... the filter for the Opcions we want to count
     *   }
     * })
    **/
    count<T extends OpcionCountArgs>(
      args?: Subset<T, OpcionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpcionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Opcion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpcionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OpcionAggregateArgs>(args: Subset<T, OpcionAggregateArgs>): Prisma.PrismaPromise<GetOpcionAggregateType<T>>

    /**
     * Group by Opcion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpcionGroupByArgs} args - Group by arguments.
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
      T extends OpcionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpcionGroupByArgs['orderBy'] }
        : { orderBy?: OpcionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OpcionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpcionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Opcion model
   */
  readonly fields: OpcionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Opcion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OpcionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    escenario<T extends EscenarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EscenarioDefaultArgs<ExtArgs>>): Prisma__EscenarioClient<$Result.GetResult<Prisma.$EscenarioPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the Opcion model
   */ 
  interface OpcionFieldRefs {
    readonly id: FieldRef<"Opcion", 'Int'>
    readonly texto: FieldRef<"Opcion", 'String'>
    readonly puntos: FieldRef<"Opcion", 'Int'>
    readonly escenarioId: FieldRef<"Opcion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Opcion findUnique
   */
  export type OpcionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opcion
     */
    select?: OpcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opcion
     */
    omit?: OpcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcionInclude<ExtArgs> | null
    /**
     * Filter, which Opcion to fetch.
     */
    where: OpcionWhereUniqueInput
  }

  /**
   * Opcion findUniqueOrThrow
   */
  export type OpcionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opcion
     */
    select?: OpcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opcion
     */
    omit?: OpcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcionInclude<ExtArgs> | null
    /**
     * Filter, which Opcion to fetch.
     */
    where: OpcionWhereUniqueInput
  }

  /**
   * Opcion findFirst
   */
  export type OpcionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opcion
     */
    select?: OpcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opcion
     */
    omit?: OpcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcionInclude<ExtArgs> | null
    /**
     * Filter, which Opcion to fetch.
     */
    where?: OpcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opcions to fetch.
     */
    orderBy?: OpcionOrderByWithRelationInput | OpcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Opcions.
     */
    cursor?: OpcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Opcions.
     */
    distinct?: OpcionScalarFieldEnum | OpcionScalarFieldEnum[]
  }

  /**
   * Opcion findFirstOrThrow
   */
  export type OpcionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opcion
     */
    select?: OpcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opcion
     */
    omit?: OpcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcionInclude<ExtArgs> | null
    /**
     * Filter, which Opcion to fetch.
     */
    where?: OpcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opcions to fetch.
     */
    orderBy?: OpcionOrderByWithRelationInput | OpcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Opcions.
     */
    cursor?: OpcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Opcions.
     */
    distinct?: OpcionScalarFieldEnum | OpcionScalarFieldEnum[]
  }

  /**
   * Opcion findMany
   */
  export type OpcionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opcion
     */
    select?: OpcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opcion
     */
    omit?: OpcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcionInclude<ExtArgs> | null
    /**
     * Filter, which Opcions to fetch.
     */
    where?: OpcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opcions to fetch.
     */
    orderBy?: OpcionOrderByWithRelationInput | OpcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Opcions.
     */
    cursor?: OpcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opcions.
     */
    skip?: number
    distinct?: OpcionScalarFieldEnum | OpcionScalarFieldEnum[]
  }

  /**
   * Opcion create
   */
  export type OpcionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opcion
     */
    select?: OpcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opcion
     */
    omit?: OpcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcionInclude<ExtArgs> | null
    /**
     * The data needed to create a Opcion.
     */
    data: XOR<OpcionCreateInput, OpcionUncheckedCreateInput>
  }

  /**
   * Opcion createMany
   */
  export type OpcionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Opcions.
     */
    data: OpcionCreateManyInput | OpcionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Opcion createManyAndReturn
   */
  export type OpcionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opcion
     */
    select?: OpcionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Opcion
     */
    omit?: OpcionOmit<ExtArgs> | null
    /**
     * The data used to create many Opcions.
     */
    data: OpcionCreateManyInput | OpcionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Opcion update
   */
  export type OpcionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opcion
     */
    select?: OpcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opcion
     */
    omit?: OpcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcionInclude<ExtArgs> | null
    /**
     * The data needed to update a Opcion.
     */
    data: XOR<OpcionUpdateInput, OpcionUncheckedUpdateInput>
    /**
     * Choose, which Opcion to update.
     */
    where: OpcionWhereUniqueInput
  }

  /**
   * Opcion updateMany
   */
  export type OpcionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Opcions.
     */
    data: XOR<OpcionUpdateManyMutationInput, OpcionUncheckedUpdateManyInput>
    /**
     * Filter which Opcions to update
     */
    where?: OpcionWhereInput
    /**
     * Limit how many Opcions to update.
     */
    limit?: number
  }

  /**
   * Opcion updateManyAndReturn
   */
  export type OpcionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opcion
     */
    select?: OpcionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Opcion
     */
    omit?: OpcionOmit<ExtArgs> | null
    /**
     * The data used to update Opcions.
     */
    data: XOR<OpcionUpdateManyMutationInput, OpcionUncheckedUpdateManyInput>
    /**
     * Filter which Opcions to update
     */
    where?: OpcionWhereInput
    /**
     * Limit how many Opcions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Opcion upsert
   */
  export type OpcionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opcion
     */
    select?: OpcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opcion
     */
    omit?: OpcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcionInclude<ExtArgs> | null
    /**
     * The filter to search for the Opcion to update in case it exists.
     */
    where: OpcionWhereUniqueInput
    /**
     * In case the Opcion found by the `where` argument doesn't exist, create a new Opcion with this data.
     */
    create: XOR<OpcionCreateInput, OpcionUncheckedCreateInput>
    /**
     * In case the Opcion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpcionUpdateInput, OpcionUncheckedUpdateInput>
  }

  /**
   * Opcion delete
   */
  export type OpcionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opcion
     */
    select?: OpcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opcion
     */
    omit?: OpcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcionInclude<ExtArgs> | null
    /**
     * Filter which Opcion to delete.
     */
    where: OpcionWhereUniqueInput
  }

  /**
   * Opcion deleteMany
   */
  export type OpcionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Opcions to delete
     */
    where?: OpcionWhereInput
    /**
     * Limit how many Opcions to delete.
     */
    limit?: number
  }

  /**
   * Opcion without action
   */
  export type OpcionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opcion
     */
    select?: OpcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opcion
     */
    omit?: OpcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcionInclude<ExtArgs> | null
  }


  /**
   * Model Recurso
   */

  export type AggregateRecurso = {
    _count: RecursoCountAggregateOutputType | null
    _avg: RecursoAvgAggregateOutputType | null
    _sum: RecursoSumAggregateOutputType | null
    _min: RecursoMinAggregateOutputType | null
    _max: RecursoMaxAggregateOutputType | null
  }

  export type RecursoAvgAggregateOutputType = {
    valor: number | null
    seccionId: number | null
  }

  export type RecursoSumAggregateOutputType = {
    valor: number | null
    seccionId: number | null
  }

  export type RecursoMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    valor: number | null
    usuarioId: string | null
    seccionId: number | null
    createdAt: Date | null
  }

  export type RecursoMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    valor: number | null
    usuarioId: string | null
    seccionId: number | null
    createdAt: Date | null
  }

  export type RecursoCountAggregateOutputType = {
    id: number
    nombre: number
    valor: number
    usuarioId: number
    seccionId: number
    createdAt: number
    _all: number
  }


  export type RecursoAvgAggregateInputType = {
    valor?: true
    seccionId?: true
  }

  export type RecursoSumAggregateInputType = {
    valor?: true
    seccionId?: true
  }

  export type RecursoMinAggregateInputType = {
    id?: true
    nombre?: true
    valor?: true
    usuarioId?: true
    seccionId?: true
    createdAt?: true
  }

  export type RecursoMaxAggregateInputType = {
    id?: true
    nombre?: true
    valor?: true
    usuarioId?: true
    seccionId?: true
    createdAt?: true
  }

  export type RecursoCountAggregateInputType = {
    id?: true
    nombre?: true
    valor?: true
    usuarioId?: true
    seccionId?: true
    createdAt?: true
    _all?: true
  }

  export type RecursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recurso to aggregate.
     */
    where?: RecursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recursos to fetch.
     */
    orderBy?: RecursoOrderByWithRelationInput | RecursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recursos
    **/
    _count?: true | RecursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecursoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecursoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecursoMaxAggregateInputType
  }

  export type GetRecursoAggregateType<T extends RecursoAggregateArgs> = {
        [P in keyof T & keyof AggregateRecurso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecurso[P]>
      : GetScalarType<T[P], AggregateRecurso[P]>
  }




  export type RecursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecursoWhereInput
    orderBy?: RecursoOrderByWithAggregationInput | RecursoOrderByWithAggregationInput[]
    by: RecursoScalarFieldEnum[] | RecursoScalarFieldEnum
    having?: RecursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecursoCountAggregateInputType | true
    _avg?: RecursoAvgAggregateInputType
    _sum?: RecursoSumAggregateInputType
    _min?: RecursoMinAggregateInputType
    _max?: RecursoMaxAggregateInputType
  }

  export type RecursoGroupByOutputType = {
    id: string
    nombre: string
    valor: number
    usuarioId: string
    seccionId: number
    createdAt: Date
    _count: RecursoCountAggregateOutputType | null
    _avg: RecursoAvgAggregateOutputType | null
    _sum: RecursoSumAggregateOutputType | null
    _min: RecursoMinAggregateOutputType | null
    _max: RecursoMaxAggregateOutputType | null
  }

  type GetRecursoGroupByPayload<T extends RecursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecursoGroupByOutputType[P]>
            : GetScalarType<T[P], RecursoGroupByOutputType[P]>
        }
      >
    >


  export type RecursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    valor?: boolean
    usuarioId?: boolean
    seccionId?: boolean
    createdAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    seccion?: boolean | SeccionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurso"]>

  export type RecursoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    valor?: boolean
    usuarioId?: boolean
    seccionId?: boolean
    createdAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    seccion?: boolean | SeccionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurso"]>

  export type RecursoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    valor?: boolean
    usuarioId?: boolean
    seccionId?: boolean
    createdAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    seccion?: boolean | SeccionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurso"]>

  export type RecursoSelectScalar = {
    id?: boolean
    nombre?: boolean
    valor?: boolean
    usuarioId?: boolean
    seccionId?: boolean
    createdAt?: boolean
  }

  export type RecursoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "valor" | "usuarioId" | "seccionId" | "createdAt", ExtArgs["result"]["recurso"]>
  export type RecursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    seccion?: boolean | SeccionDefaultArgs<ExtArgs>
  }
  export type RecursoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    seccion?: boolean | SeccionDefaultArgs<ExtArgs>
  }
  export type RecursoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    seccion?: boolean | SeccionDefaultArgs<ExtArgs>
  }

  export type $RecursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recurso"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      seccion: Prisma.$SeccionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      valor: number
      usuarioId: string
      seccionId: number
      createdAt: Date
    }, ExtArgs["result"]["recurso"]>
    composites: {}
  }

  type RecursoGetPayload<S extends boolean | null | undefined | RecursoDefaultArgs> = $Result.GetResult<Prisma.$RecursoPayload, S>

  type RecursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecursoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecursoCountAggregateInputType | true
    }

  export interface RecursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recurso'], meta: { name: 'Recurso' } }
    /**
     * Find zero or one Recurso that matches the filter.
     * @param {RecursoFindUniqueArgs} args - Arguments to find a Recurso
     * @example
     * // Get one Recurso
     * const recurso = await prisma.recurso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecursoFindUniqueArgs>(args: SelectSubset<T, RecursoFindUniqueArgs<ExtArgs>>): Prisma__RecursoClient<$Result.GetResult<Prisma.$RecursoPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Recurso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecursoFindUniqueOrThrowArgs} args - Arguments to find a Recurso
     * @example
     * // Get one Recurso
     * const recurso = await prisma.recurso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecursoFindUniqueOrThrowArgs>(args: SelectSubset<T, RecursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecursoClient<$Result.GetResult<Prisma.$RecursoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Recurso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecursoFindFirstArgs} args - Arguments to find a Recurso
     * @example
     * // Get one Recurso
     * const recurso = await prisma.recurso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecursoFindFirstArgs>(args?: SelectSubset<T, RecursoFindFirstArgs<ExtArgs>>): Prisma__RecursoClient<$Result.GetResult<Prisma.$RecursoPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Recurso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecursoFindFirstOrThrowArgs} args - Arguments to find a Recurso
     * @example
     * // Get one Recurso
     * const recurso = await prisma.recurso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecursoFindFirstOrThrowArgs>(args?: SelectSubset<T, RecursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecursoClient<$Result.GetResult<Prisma.$RecursoPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Recursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recursos
     * const recursos = await prisma.recurso.findMany()
     * 
     * // Get first 10 Recursos
     * const recursos = await prisma.recurso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recursoWithIdOnly = await prisma.recurso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecursoFindManyArgs>(args?: SelectSubset<T, RecursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecursoPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Recurso.
     * @param {RecursoCreateArgs} args - Arguments to create a Recurso.
     * @example
     * // Create one Recurso
     * const Recurso = await prisma.recurso.create({
     *   data: {
     *     // ... data to create a Recurso
     *   }
     * })
     * 
     */
    create<T extends RecursoCreateArgs>(args: SelectSubset<T, RecursoCreateArgs<ExtArgs>>): Prisma__RecursoClient<$Result.GetResult<Prisma.$RecursoPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Recursos.
     * @param {RecursoCreateManyArgs} args - Arguments to create many Recursos.
     * @example
     * // Create many Recursos
     * const recurso = await prisma.recurso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecursoCreateManyArgs>(args?: SelectSubset<T, RecursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recursos and returns the data saved in the database.
     * @param {RecursoCreateManyAndReturnArgs} args - Arguments to create many Recursos.
     * @example
     * // Create many Recursos
     * const recurso = await prisma.recurso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recursos and only return the `id`
     * const recursoWithIdOnly = await prisma.recurso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecursoCreateManyAndReturnArgs>(args?: SelectSubset<T, RecursoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecursoPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Recurso.
     * @param {RecursoDeleteArgs} args - Arguments to delete one Recurso.
     * @example
     * // Delete one Recurso
     * const Recurso = await prisma.recurso.delete({
     *   where: {
     *     // ... filter to delete one Recurso
     *   }
     * })
     * 
     */
    delete<T extends RecursoDeleteArgs>(args: SelectSubset<T, RecursoDeleteArgs<ExtArgs>>): Prisma__RecursoClient<$Result.GetResult<Prisma.$RecursoPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Recurso.
     * @param {RecursoUpdateArgs} args - Arguments to update one Recurso.
     * @example
     * // Update one Recurso
     * const recurso = await prisma.recurso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecursoUpdateArgs>(args: SelectSubset<T, RecursoUpdateArgs<ExtArgs>>): Prisma__RecursoClient<$Result.GetResult<Prisma.$RecursoPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Recursos.
     * @param {RecursoDeleteManyArgs} args - Arguments to filter Recursos to delete.
     * @example
     * // Delete a few Recursos
     * const { count } = await prisma.recurso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecursoDeleteManyArgs>(args?: SelectSubset<T, RecursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recursos
     * const recurso = await prisma.recurso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecursoUpdateManyArgs>(args: SelectSubset<T, RecursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recursos and returns the data updated in the database.
     * @param {RecursoUpdateManyAndReturnArgs} args - Arguments to update many Recursos.
     * @example
     * // Update many Recursos
     * const recurso = await prisma.recurso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recursos and only return the `id`
     * const recursoWithIdOnly = await prisma.recurso.updateManyAndReturn({
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
    updateManyAndReturn<T extends RecursoUpdateManyAndReturnArgs>(args: SelectSubset<T, RecursoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecursoPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Recurso.
     * @param {RecursoUpsertArgs} args - Arguments to update or create a Recurso.
     * @example
     * // Update or create a Recurso
     * const recurso = await prisma.recurso.upsert({
     *   create: {
     *     // ... data to create a Recurso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recurso we want to update
     *   }
     * })
     */
    upsert<T extends RecursoUpsertArgs>(args: SelectSubset<T, RecursoUpsertArgs<ExtArgs>>): Prisma__RecursoClient<$Result.GetResult<Prisma.$RecursoPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Recursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecursoCountArgs} args - Arguments to filter Recursos to count.
     * @example
     * // Count the number of Recursos
     * const count = await prisma.recurso.count({
     *   where: {
     *     // ... the filter for the Recursos we want to count
     *   }
     * })
    **/
    count<T extends RecursoCountArgs>(
      args?: Subset<T, RecursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recurso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecursoAggregateArgs>(args: Subset<T, RecursoAggregateArgs>): Prisma.PrismaPromise<GetRecursoAggregateType<T>>

    /**
     * Group by Recurso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecursoGroupByArgs} args - Group by arguments.
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
      T extends RecursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecursoGroupByArgs['orderBy'] }
        : { orderBy?: RecursoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recurso model
   */
  readonly fields: RecursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recurso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    seccion<T extends SeccionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeccionDefaultArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the Recurso model
   */ 
  interface RecursoFieldRefs {
    readonly id: FieldRef<"Recurso", 'String'>
    readonly nombre: FieldRef<"Recurso", 'String'>
    readonly valor: FieldRef<"Recurso", 'Int'>
    readonly usuarioId: FieldRef<"Recurso", 'String'>
    readonly seccionId: FieldRef<"Recurso", 'Int'>
    readonly createdAt: FieldRef<"Recurso", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Recurso findUnique
   */
  export type RecursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurso
     */
    select?: RecursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recurso
     */
    omit?: RecursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecursoInclude<ExtArgs> | null
    /**
     * Filter, which Recurso to fetch.
     */
    where: RecursoWhereUniqueInput
  }

  /**
   * Recurso findUniqueOrThrow
   */
  export type RecursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurso
     */
    select?: RecursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recurso
     */
    omit?: RecursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecursoInclude<ExtArgs> | null
    /**
     * Filter, which Recurso to fetch.
     */
    where: RecursoWhereUniqueInput
  }

  /**
   * Recurso findFirst
   */
  export type RecursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurso
     */
    select?: RecursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recurso
     */
    omit?: RecursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecursoInclude<ExtArgs> | null
    /**
     * Filter, which Recurso to fetch.
     */
    where?: RecursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recursos to fetch.
     */
    orderBy?: RecursoOrderByWithRelationInput | RecursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recursos.
     */
    cursor?: RecursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recursos.
     */
    distinct?: RecursoScalarFieldEnum | RecursoScalarFieldEnum[]
  }

  /**
   * Recurso findFirstOrThrow
   */
  export type RecursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurso
     */
    select?: RecursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recurso
     */
    omit?: RecursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecursoInclude<ExtArgs> | null
    /**
     * Filter, which Recurso to fetch.
     */
    where?: RecursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recursos to fetch.
     */
    orderBy?: RecursoOrderByWithRelationInput | RecursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recursos.
     */
    cursor?: RecursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recursos.
     */
    distinct?: RecursoScalarFieldEnum | RecursoScalarFieldEnum[]
  }

  /**
   * Recurso findMany
   */
  export type RecursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurso
     */
    select?: RecursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recurso
     */
    omit?: RecursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecursoInclude<ExtArgs> | null
    /**
     * Filter, which Recursos to fetch.
     */
    where?: RecursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recursos to fetch.
     */
    orderBy?: RecursoOrderByWithRelationInput | RecursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recursos.
     */
    cursor?: RecursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recursos.
     */
    skip?: number
    distinct?: RecursoScalarFieldEnum | RecursoScalarFieldEnum[]
  }

  /**
   * Recurso create
   */
  export type RecursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurso
     */
    select?: RecursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recurso
     */
    omit?: RecursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecursoInclude<ExtArgs> | null
    /**
     * The data needed to create a Recurso.
     */
    data: XOR<RecursoCreateInput, RecursoUncheckedCreateInput>
  }

  /**
   * Recurso createMany
   */
  export type RecursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recursos.
     */
    data: RecursoCreateManyInput | RecursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recurso createManyAndReturn
   */
  export type RecursoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurso
     */
    select?: RecursoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recurso
     */
    omit?: RecursoOmit<ExtArgs> | null
    /**
     * The data used to create many Recursos.
     */
    data: RecursoCreateManyInput | RecursoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecursoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recurso update
   */
  export type RecursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurso
     */
    select?: RecursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recurso
     */
    omit?: RecursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecursoInclude<ExtArgs> | null
    /**
     * The data needed to update a Recurso.
     */
    data: XOR<RecursoUpdateInput, RecursoUncheckedUpdateInput>
    /**
     * Choose, which Recurso to update.
     */
    where: RecursoWhereUniqueInput
  }

  /**
   * Recurso updateMany
   */
  export type RecursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recursos.
     */
    data: XOR<RecursoUpdateManyMutationInput, RecursoUncheckedUpdateManyInput>
    /**
     * Filter which Recursos to update
     */
    where?: RecursoWhereInput
    /**
     * Limit how many Recursos to update.
     */
    limit?: number
  }

  /**
   * Recurso updateManyAndReturn
   */
  export type RecursoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurso
     */
    select?: RecursoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recurso
     */
    omit?: RecursoOmit<ExtArgs> | null
    /**
     * The data used to update Recursos.
     */
    data: XOR<RecursoUpdateManyMutationInput, RecursoUncheckedUpdateManyInput>
    /**
     * Filter which Recursos to update
     */
    where?: RecursoWhereInput
    /**
     * Limit how many Recursos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecursoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recurso upsert
   */
  export type RecursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurso
     */
    select?: RecursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recurso
     */
    omit?: RecursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecursoInclude<ExtArgs> | null
    /**
     * The filter to search for the Recurso to update in case it exists.
     */
    where: RecursoWhereUniqueInput
    /**
     * In case the Recurso found by the `where` argument doesn't exist, create a new Recurso with this data.
     */
    create: XOR<RecursoCreateInput, RecursoUncheckedCreateInput>
    /**
     * In case the Recurso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecursoUpdateInput, RecursoUncheckedUpdateInput>
  }

  /**
   * Recurso delete
   */
  export type RecursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurso
     */
    select?: RecursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recurso
     */
    omit?: RecursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecursoInclude<ExtArgs> | null
    /**
     * Filter which Recurso to delete.
     */
    where: RecursoWhereUniqueInput
  }

  /**
   * Recurso deleteMany
   */
  export type RecursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recursos to delete
     */
    where?: RecursoWhereInput
    /**
     * Limit how many Recursos to delete.
     */
    limit?: number
  }

  /**
   * Recurso without action
   */
  export type RecursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurso
     */
    select?: RecursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recurso
     */
    omit?: RecursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecursoInclude<ExtArgs> | null
  }


  /**
   * Model Insignia
   */

  export type AggregateInsignia = {
    _count: InsigniaCountAggregateOutputType | null
    _avg: InsigniaAvgAggregateOutputType | null
    _sum: InsigniaSumAggregateOutputType | null
    _min: InsigniaMinAggregateOutputType | null
    _max: InsigniaMaxAggregateOutputType | null
  }

  export type InsigniaAvgAggregateOutputType = {
    puntosRequeridos: number | null
    escenarioId: number | null
  }

  export type InsigniaSumAggregateOutputType = {
    puntosRequeridos: number | null
    escenarioId: number | null
  }

  export type InsigniaMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    imagenUrl: string | null
    puntosRequeridos: number | null
    escenarioId: number | null
    createdAt: Date | null
  }

  export type InsigniaMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    imagenUrl: string | null
    puntosRequeridos: number | null
    escenarioId: number | null
    createdAt: Date | null
  }

  export type InsigniaCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    imagenUrl: number
    puntosRequeridos: number
    escenarioId: number
    createdAt: number
    _all: number
  }


  export type InsigniaAvgAggregateInputType = {
    puntosRequeridos?: true
    escenarioId?: true
  }

  export type InsigniaSumAggregateInputType = {
    puntosRequeridos?: true
    escenarioId?: true
  }

  export type InsigniaMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    imagenUrl?: true
    puntosRequeridos?: true
    escenarioId?: true
    createdAt?: true
  }

  export type InsigniaMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    imagenUrl?: true
    puntosRequeridos?: true
    escenarioId?: true
    createdAt?: true
  }

  export type InsigniaCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    imagenUrl?: true
    puntosRequeridos?: true
    escenarioId?: true
    createdAt?: true
    _all?: true
  }

  export type InsigniaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Insignia to aggregate.
     */
    where?: InsigniaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insignias to fetch.
     */
    orderBy?: InsigniaOrderByWithRelationInput | InsigniaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InsigniaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insignias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insignias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Insignias
    **/
    _count?: true | InsigniaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InsigniaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InsigniaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InsigniaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InsigniaMaxAggregateInputType
  }

  export type GetInsigniaAggregateType<T extends InsigniaAggregateArgs> = {
        [P in keyof T & keyof AggregateInsignia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInsignia[P]>
      : GetScalarType<T[P], AggregateInsignia[P]>
  }




  export type InsigniaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InsigniaWhereInput
    orderBy?: InsigniaOrderByWithAggregationInput | InsigniaOrderByWithAggregationInput[]
    by: InsigniaScalarFieldEnum[] | InsigniaScalarFieldEnum
    having?: InsigniaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InsigniaCountAggregateInputType | true
    _avg?: InsigniaAvgAggregateInputType
    _sum?: InsigniaSumAggregateInputType
    _min?: InsigniaMinAggregateInputType
    _max?: InsigniaMaxAggregateInputType
  }

  export type InsigniaGroupByOutputType = {
    id: string
    nombre: string
    descripcion: string
    imagenUrl: string | null
    puntosRequeridos: number
    escenarioId: number
    createdAt: Date
    _count: InsigniaCountAggregateOutputType | null
    _avg: InsigniaAvgAggregateOutputType | null
    _sum: InsigniaSumAggregateOutputType | null
    _min: InsigniaMinAggregateOutputType | null
    _max: InsigniaMaxAggregateOutputType | null
  }

  type GetInsigniaGroupByPayload<T extends InsigniaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InsigniaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InsigniaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InsigniaGroupByOutputType[P]>
            : GetScalarType<T[P], InsigniaGroupByOutputType[P]>
        }
      >
    >


  export type InsigniaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    imagenUrl?: boolean
    puntosRequeridos?: boolean
    escenarioId?: boolean
    createdAt?: boolean
    escenario?: boolean | EscenarioDefaultArgs<ExtArgs>
    usuarios?: boolean | Insignia$usuariosArgs<ExtArgs>
    _count?: boolean | InsigniaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insignia"]>

  export type InsigniaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    imagenUrl?: boolean
    puntosRequeridos?: boolean
    escenarioId?: boolean
    createdAt?: boolean
    escenario?: boolean | EscenarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insignia"]>

  export type InsigniaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    imagenUrl?: boolean
    puntosRequeridos?: boolean
    escenarioId?: boolean
    createdAt?: boolean
    escenario?: boolean | EscenarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insignia"]>

  export type InsigniaSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    imagenUrl?: boolean
    puntosRequeridos?: boolean
    escenarioId?: boolean
    createdAt?: boolean
  }

  export type InsigniaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "imagenUrl" | "puntosRequeridos" | "escenarioId" | "createdAt", ExtArgs["result"]["insignia"]>
  export type InsigniaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escenario?: boolean | EscenarioDefaultArgs<ExtArgs>
    usuarios?: boolean | Insignia$usuariosArgs<ExtArgs>
    _count?: boolean | InsigniaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InsigniaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escenario?: boolean | EscenarioDefaultArgs<ExtArgs>
  }
  export type InsigniaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    escenario?: boolean | EscenarioDefaultArgs<ExtArgs>
  }

  export type $InsigniaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Insignia"
    objects: {
      escenario: Prisma.$EscenarioPayload<ExtArgs>
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      descripcion: string
      imagenUrl: string | null
      puntosRequeridos: number
      escenarioId: number
      createdAt: Date
    }, ExtArgs["result"]["insignia"]>
    composites: {}
  }

  type InsigniaGetPayload<S extends boolean | null | undefined | InsigniaDefaultArgs> = $Result.GetResult<Prisma.$InsigniaPayload, S>

  type InsigniaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InsigniaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InsigniaCountAggregateInputType | true
    }

  export interface InsigniaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Insignia'], meta: { name: 'Insignia' } }
    /**
     * Find zero or one Insignia that matches the filter.
     * @param {InsigniaFindUniqueArgs} args - Arguments to find a Insignia
     * @example
     * // Get one Insignia
     * const insignia = await prisma.insignia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InsigniaFindUniqueArgs>(args: SelectSubset<T, InsigniaFindUniqueArgs<ExtArgs>>): Prisma__InsigniaClient<$Result.GetResult<Prisma.$InsigniaPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Insignia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InsigniaFindUniqueOrThrowArgs} args - Arguments to find a Insignia
     * @example
     * // Get one Insignia
     * const insignia = await prisma.insignia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InsigniaFindUniqueOrThrowArgs>(args: SelectSubset<T, InsigniaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InsigniaClient<$Result.GetResult<Prisma.$InsigniaPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Insignia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsigniaFindFirstArgs} args - Arguments to find a Insignia
     * @example
     * // Get one Insignia
     * const insignia = await prisma.insignia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InsigniaFindFirstArgs>(args?: SelectSubset<T, InsigniaFindFirstArgs<ExtArgs>>): Prisma__InsigniaClient<$Result.GetResult<Prisma.$InsigniaPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Insignia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsigniaFindFirstOrThrowArgs} args - Arguments to find a Insignia
     * @example
     * // Get one Insignia
     * const insignia = await prisma.insignia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InsigniaFindFirstOrThrowArgs>(args?: SelectSubset<T, InsigniaFindFirstOrThrowArgs<ExtArgs>>): Prisma__InsigniaClient<$Result.GetResult<Prisma.$InsigniaPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Insignias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsigniaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Insignias
     * const insignias = await prisma.insignia.findMany()
     * 
     * // Get first 10 Insignias
     * const insignias = await prisma.insignia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const insigniaWithIdOnly = await prisma.insignia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InsigniaFindManyArgs>(args?: SelectSubset<T, InsigniaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsigniaPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Insignia.
     * @param {InsigniaCreateArgs} args - Arguments to create a Insignia.
     * @example
     * // Create one Insignia
     * const Insignia = await prisma.insignia.create({
     *   data: {
     *     // ... data to create a Insignia
     *   }
     * })
     * 
     */
    create<T extends InsigniaCreateArgs>(args: SelectSubset<T, InsigniaCreateArgs<ExtArgs>>): Prisma__InsigniaClient<$Result.GetResult<Prisma.$InsigniaPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Insignias.
     * @param {InsigniaCreateManyArgs} args - Arguments to create many Insignias.
     * @example
     * // Create many Insignias
     * const insignia = await prisma.insignia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InsigniaCreateManyArgs>(args?: SelectSubset<T, InsigniaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Insignias and returns the data saved in the database.
     * @param {InsigniaCreateManyAndReturnArgs} args - Arguments to create many Insignias.
     * @example
     * // Create many Insignias
     * const insignia = await prisma.insignia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Insignias and only return the `id`
     * const insigniaWithIdOnly = await prisma.insignia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InsigniaCreateManyAndReturnArgs>(args?: SelectSubset<T, InsigniaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsigniaPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Insignia.
     * @param {InsigniaDeleteArgs} args - Arguments to delete one Insignia.
     * @example
     * // Delete one Insignia
     * const Insignia = await prisma.insignia.delete({
     *   where: {
     *     // ... filter to delete one Insignia
     *   }
     * })
     * 
     */
    delete<T extends InsigniaDeleteArgs>(args: SelectSubset<T, InsigniaDeleteArgs<ExtArgs>>): Prisma__InsigniaClient<$Result.GetResult<Prisma.$InsigniaPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Insignia.
     * @param {InsigniaUpdateArgs} args - Arguments to update one Insignia.
     * @example
     * // Update one Insignia
     * const insignia = await prisma.insignia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InsigniaUpdateArgs>(args: SelectSubset<T, InsigniaUpdateArgs<ExtArgs>>): Prisma__InsigniaClient<$Result.GetResult<Prisma.$InsigniaPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Insignias.
     * @param {InsigniaDeleteManyArgs} args - Arguments to filter Insignias to delete.
     * @example
     * // Delete a few Insignias
     * const { count } = await prisma.insignia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InsigniaDeleteManyArgs>(args?: SelectSubset<T, InsigniaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Insignias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsigniaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Insignias
     * const insignia = await prisma.insignia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InsigniaUpdateManyArgs>(args: SelectSubset<T, InsigniaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Insignias and returns the data updated in the database.
     * @param {InsigniaUpdateManyAndReturnArgs} args - Arguments to update many Insignias.
     * @example
     * // Update many Insignias
     * const insignia = await prisma.insignia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Insignias and only return the `id`
     * const insigniaWithIdOnly = await prisma.insignia.updateManyAndReturn({
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
    updateManyAndReturn<T extends InsigniaUpdateManyAndReturnArgs>(args: SelectSubset<T, InsigniaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsigniaPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Insignia.
     * @param {InsigniaUpsertArgs} args - Arguments to update or create a Insignia.
     * @example
     * // Update or create a Insignia
     * const insignia = await prisma.insignia.upsert({
     *   create: {
     *     // ... data to create a Insignia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Insignia we want to update
     *   }
     * })
     */
    upsert<T extends InsigniaUpsertArgs>(args: SelectSubset<T, InsigniaUpsertArgs<ExtArgs>>): Prisma__InsigniaClient<$Result.GetResult<Prisma.$InsigniaPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Insignias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsigniaCountArgs} args - Arguments to filter Insignias to count.
     * @example
     * // Count the number of Insignias
     * const count = await prisma.insignia.count({
     *   where: {
     *     // ... the filter for the Insignias we want to count
     *   }
     * })
    **/
    count<T extends InsigniaCountArgs>(
      args?: Subset<T, InsigniaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InsigniaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Insignia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsigniaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InsigniaAggregateArgs>(args: Subset<T, InsigniaAggregateArgs>): Prisma.PrismaPromise<GetInsigniaAggregateType<T>>

    /**
     * Group by Insignia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsigniaGroupByArgs} args - Group by arguments.
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
      T extends InsigniaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InsigniaGroupByArgs['orderBy'] }
        : { orderBy?: InsigniaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InsigniaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInsigniaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Insignia model
   */
  readonly fields: InsigniaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Insignia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InsigniaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    escenario<T extends EscenarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EscenarioDefaultArgs<ExtArgs>>): Prisma__EscenarioClient<$Result.GetResult<Prisma.$EscenarioPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    usuarios<T extends Insignia$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Insignia$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Insignia model
   */ 
  interface InsigniaFieldRefs {
    readonly id: FieldRef<"Insignia", 'String'>
    readonly nombre: FieldRef<"Insignia", 'String'>
    readonly descripcion: FieldRef<"Insignia", 'String'>
    readonly imagenUrl: FieldRef<"Insignia", 'String'>
    readonly puntosRequeridos: FieldRef<"Insignia", 'Int'>
    readonly escenarioId: FieldRef<"Insignia", 'Int'>
    readonly createdAt: FieldRef<"Insignia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Insignia findUnique
   */
  export type InsigniaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insignia
     */
    select?: InsigniaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insignia
     */
    omit?: InsigniaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsigniaInclude<ExtArgs> | null
    /**
     * Filter, which Insignia to fetch.
     */
    where: InsigniaWhereUniqueInput
  }

  /**
   * Insignia findUniqueOrThrow
   */
  export type InsigniaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insignia
     */
    select?: InsigniaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insignia
     */
    omit?: InsigniaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsigniaInclude<ExtArgs> | null
    /**
     * Filter, which Insignia to fetch.
     */
    where: InsigniaWhereUniqueInput
  }

  /**
   * Insignia findFirst
   */
  export type InsigniaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insignia
     */
    select?: InsigniaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insignia
     */
    omit?: InsigniaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsigniaInclude<ExtArgs> | null
    /**
     * Filter, which Insignia to fetch.
     */
    where?: InsigniaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insignias to fetch.
     */
    orderBy?: InsigniaOrderByWithRelationInput | InsigniaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Insignias.
     */
    cursor?: InsigniaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insignias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insignias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insignias.
     */
    distinct?: InsigniaScalarFieldEnum | InsigniaScalarFieldEnum[]
  }

  /**
   * Insignia findFirstOrThrow
   */
  export type InsigniaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insignia
     */
    select?: InsigniaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insignia
     */
    omit?: InsigniaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsigniaInclude<ExtArgs> | null
    /**
     * Filter, which Insignia to fetch.
     */
    where?: InsigniaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insignias to fetch.
     */
    orderBy?: InsigniaOrderByWithRelationInput | InsigniaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Insignias.
     */
    cursor?: InsigniaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insignias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insignias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insignias.
     */
    distinct?: InsigniaScalarFieldEnum | InsigniaScalarFieldEnum[]
  }

  /**
   * Insignia findMany
   */
  export type InsigniaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insignia
     */
    select?: InsigniaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insignia
     */
    omit?: InsigniaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsigniaInclude<ExtArgs> | null
    /**
     * Filter, which Insignias to fetch.
     */
    where?: InsigniaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insignias to fetch.
     */
    orderBy?: InsigniaOrderByWithRelationInput | InsigniaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Insignias.
     */
    cursor?: InsigniaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insignias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insignias.
     */
    skip?: number
    distinct?: InsigniaScalarFieldEnum | InsigniaScalarFieldEnum[]
  }

  /**
   * Insignia create
   */
  export type InsigniaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insignia
     */
    select?: InsigniaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insignia
     */
    omit?: InsigniaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsigniaInclude<ExtArgs> | null
    /**
     * The data needed to create a Insignia.
     */
    data: XOR<InsigniaCreateInput, InsigniaUncheckedCreateInput>
  }

  /**
   * Insignia createMany
   */
  export type InsigniaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Insignias.
     */
    data: InsigniaCreateManyInput | InsigniaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Insignia createManyAndReturn
   */
  export type InsigniaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insignia
     */
    select?: InsigniaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Insignia
     */
    omit?: InsigniaOmit<ExtArgs> | null
    /**
     * The data used to create many Insignias.
     */
    data: InsigniaCreateManyInput | InsigniaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsigniaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Insignia update
   */
  export type InsigniaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insignia
     */
    select?: InsigniaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insignia
     */
    omit?: InsigniaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsigniaInclude<ExtArgs> | null
    /**
     * The data needed to update a Insignia.
     */
    data: XOR<InsigniaUpdateInput, InsigniaUncheckedUpdateInput>
    /**
     * Choose, which Insignia to update.
     */
    where: InsigniaWhereUniqueInput
  }

  /**
   * Insignia updateMany
   */
  export type InsigniaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Insignias.
     */
    data: XOR<InsigniaUpdateManyMutationInput, InsigniaUncheckedUpdateManyInput>
    /**
     * Filter which Insignias to update
     */
    where?: InsigniaWhereInput
    /**
     * Limit how many Insignias to update.
     */
    limit?: number
  }

  /**
   * Insignia updateManyAndReturn
   */
  export type InsigniaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insignia
     */
    select?: InsigniaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Insignia
     */
    omit?: InsigniaOmit<ExtArgs> | null
    /**
     * The data used to update Insignias.
     */
    data: XOR<InsigniaUpdateManyMutationInput, InsigniaUncheckedUpdateManyInput>
    /**
     * Filter which Insignias to update
     */
    where?: InsigniaWhereInput
    /**
     * Limit how many Insignias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsigniaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Insignia upsert
   */
  export type InsigniaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insignia
     */
    select?: InsigniaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insignia
     */
    omit?: InsigniaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsigniaInclude<ExtArgs> | null
    /**
     * The filter to search for the Insignia to update in case it exists.
     */
    where: InsigniaWhereUniqueInput
    /**
     * In case the Insignia found by the `where` argument doesn't exist, create a new Insignia with this data.
     */
    create: XOR<InsigniaCreateInput, InsigniaUncheckedCreateInput>
    /**
     * In case the Insignia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InsigniaUpdateInput, InsigniaUncheckedUpdateInput>
  }

  /**
   * Insignia delete
   */
  export type InsigniaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insignia
     */
    select?: InsigniaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insignia
     */
    omit?: InsigniaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsigniaInclude<ExtArgs> | null
    /**
     * Filter which Insignia to delete.
     */
    where: InsigniaWhereUniqueInput
  }

  /**
   * Insignia deleteMany
   */
  export type InsigniaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Insignias to delete
     */
    where?: InsigniaWhereInput
    /**
     * Limit how many Insignias to delete.
     */
    limit?: number
  }

  /**
   * Insignia.usuarios
   */
  export type Insignia$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Insignia without action
   */
  export type InsigniaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insignia
     */
    select?: InsigniaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insignia
     */
    omit?: InsigniaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsigniaInclude<ExtArgs> | null
  }


  /**
   * Model Progreso
   */

  export type AggregateProgreso = {
    _count: ProgresoCountAggregateOutputType | null
    _avg: ProgresoAvgAggregateOutputType | null
    _sum: ProgresoSumAggregateOutputType | null
    _min: ProgresoMinAggregateOutputType | null
    _max: ProgresoMaxAggregateOutputType | null
  }

  export type ProgresoAvgAggregateOutputType = {
    id: number | null
    escenarioId: number | null
    puntosObtenidos: number | null
    intentosFallidos: number | null
  }

  export type ProgresoSumAggregateOutputType = {
    id: number | null
    escenarioId: number | null
    puntosObtenidos: number | null
    intentosFallidos: number | null
  }

  export type ProgresoMinAggregateOutputType = {
    id: number | null
    usuarioId: string | null
    escenarioId: number | null
    puntosObtenidos: number | null
    resuelto: boolean | null
    intentosFallidos: number | null
    updatedAt: Date | null
  }

  export type ProgresoMaxAggregateOutputType = {
    id: number | null
    usuarioId: string | null
    escenarioId: number | null
    puntosObtenidos: number | null
    resuelto: boolean | null
    intentosFallidos: number | null
    updatedAt: Date | null
  }

  export type ProgresoCountAggregateOutputType = {
    id: number
    usuarioId: number
    escenarioId: number
    puntosObtenidos: number
    resuelto: number
    intentosFallidos: number
    updatedAt: number
    _all: number
  }


  export type ProgresoAvgAggregateInputType = {
    id?: true
    escenarioId?: true
    puntosObtenidos?: true
    intentosFallidos?: true
  }

  export type ProgresoSumAggregateInputType = {
    id?: true
    escenarioId?: true
    puntosObtenidos?: true
    intentosFallidos?: true
  }

  export type ProgresoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    escenarioId?: true
    puntosObtenidos?: true
    resuelto?: true
    intentosFallidos?: true
    updatedAt?: true
  }

  export type ProgresoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    escenarioId?: true
    puntosObtenidos?: true
    resuelto?: true
    intentosFallidos?: true
    updatedAt?: true
  }

  export type ProgresoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    escenarioId?: true
    puntosObtenidos?: true
    resuelto?: true
    intentosFallidos?: true
    updatedAt?: true
    _all?: true
  }

  export type ProgresoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Progreso to aggregate.
     */
    where?: ProgresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresos to fetch.
     */
    orderBy?: ProgresoOrderByWithRelationInput | ProgresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Progresos
    **/
    _count?: true | ProgresoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgresoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgresoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgresoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgresoMaxAggregateInputType
  }

  export type GetProgresoAggregateType<T extends ProgresoAggregateArgs> = {
        [P in keyof T & keyof AggregateProgreso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgreso[P]>
      : GetScalarType<T[P], AggregateProgreso[P]>
  }




  export type ProgresoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgresoWhereInput
    orderBy?: ProgresoOrderByWithAggregationInput | ProgresoOrderByWithAggregationInput[]
    by: ProgresoScalarFieldEnum[] | ProgresoScalarFieldEnum
    having?: ProgresoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgresoCountAggregateInputType | true
    _avg?: ProgresoAvgAggregateInputType
    _sum?: ProgresoSumAggregateInputType
    _min?: ProgresoMinAggregateInputType
    _max?: ProgresoMaxAggregateInputType
  }

  export type ProgresoGroupByOutputType = {
    id: number
    usuarioId: string
    escenarioId: number
    puntosObtenidos: number
    resuelto: boolean
    intentosFallidos: number
    updatedAt: Date
    _count: ProgresoCountAggregateOutputType | null
    _avg: ProgresoAvgAggregateOutputType | null
    _sum: ProgresoSumAggregateOutputType | null
    _min: ProgresoMinAggregateOutputType | null
    _max: ProgresoMaxAggregateOutputType | null
  }

  type GetProgresoGroupByPayload<T extends ProgresoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgresoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgresoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgresoGroupByOutputType[P]>
            : GetScalarType<T[P], ProgresoGroupByOutputType[P]>
        }
      >
    >


  export type ProgresoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    escenarioId?: boolean
    puntosObtenidos?: boolean
    resuelto?: boolean
    intentosFallidos?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    escenario?: boolean | EscenarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progreso"]>

  export type ProgresoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    escenarioId?: boolean
    puntosObtenidos?: boolean
    resuelto?: boolean
    intentosFallidos?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    escenario?: boolean | EscenarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progreso"]>

  export type ProgresoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    escenarioId?: boolean
    puntosObtenidos?: boolean
    resuelto?: boolean
    intentosFallidos?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    escenario?: boolean | EscenarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progreso"]>

  export type ProgresoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    escenarioId?: boolean
    puntosObtenidos?: boolean
    resuelto?: boolean
    intentosFallidos?: boolean
    updatedAt?: boolean
  }

  export type ProgresoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "escenarioId" | "puntosObtenidos" | "resuelto" | "intentosFallidos" | "updatedAt", ExtArgs["result"]["progreso"]>
  export type ProgresoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    escenario?: boolean | EscenarioDefaultArgs<ExtArgs>
  }
  export type ProgresoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    escenario?: boolean | EscenarioDefaultArgs<ExtArgs>
  }
  export type ProgresoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    escenario?: boolean | EscenarioDefaultArgs<ExtArgs>
  }

  export type $ProgresoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Progreso"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      escenario: Prisma.$EscenarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: string
      escenarioId: number
      puntosObtenidos: number
      resuelto: boolean
      intentosFallidos: number
      updatedAt: Date
    }, ExtArgs["result"]["progreso"]>
    composites: {}
  }

  type ProgresoGetPayload<S extends boolean | null | undefined | ProgresoDefaultArgs> = $Result.GetResult<Prisma.$ProgresoPayload, S>

  type ProgresoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgresoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgresoCountAggregateInputType | true
    }

  export interface ProgresoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Progreso'], meta: { name: 'Progreso' } }
    /**
     * Find zero or one Progreso that matches the filter.
     * @param {ProgresoFindUniqueArgs} args - Arguments to find a Progreso
     * @example
     * // Get one Progreso
     * const progreso = await prisma.progreso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgresoFindUniqueArgs>(args: SelectSubset<T, ProgresoFindUniqueArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Progreso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgresoFindUniqueOrThrowArgs} args - Arguments to find a Progreso
     * @example
     * // Get one Progreso
     * const progreso = await prisma.progreso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgresoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgresoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Progreso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoFindFirstArgs} args - Arguments to find a Progreso
     * @example
     * // Get one Progreso
     * const progreso = await prisma.progreso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgresoFindFirstArgs>(args?: SelectSubset<T, ProgresoFindFirstArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Progreso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoFindFirstOrThrowArgs} args - Arguments to find a Progreso
     * @example
     * // Get one Progreso
     * const progreso = await prisma.progreso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgresoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgresoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Progresos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Progresos
     * const progresos = await prisma.progreso.findMany()
     * 
     * // Get first 10 Progresos
     * const progresos = await prisma.progreso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progresoWithIdOnly = await prisma.progreso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgresoFindManyArgs>(args?: SelectSubset<T, ProgresoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Progreso.
     * @param {ProgresoCreateArgs} args - Arguments to create a Progreso.
     * @example
     * // Create one Progreso
     * const Progreso = await prisma.progreso.create({
     *   data: {
     *     // ... data to create a Progreso
     *   }
     * })
     * 
     */
    create<T extends ProgresoCreateArgs>(args: SelectSubset<T, ProgresoCreateArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Progresos.
     * @param {ProgresoCreateManyArgs} args - Arguments to create many Progresos.
     * @example
     * // Create many Progresos
     * const progreso = await prisma.progreso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgresoCreateManyArgs>(args?: SelectSubset<T, ProgresoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Progresos and returns the data saved in the database.
     * @param {ProgresoCreateManyAndReturnArgs} args - Arguments to create many Progresos.
     * @example
     * // Create many Progresos
     * const progreso = await prisma.progreso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Progresos and only return the `id`
     * const progresoWithIdOnly = await prisma.progreso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgresoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgresoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Progreso.
     * @param {ProgresoDeleteArgs} args - Arguments to delete one Progreso.
     * @example
     * // Delete one Progreso
     * const Progreso = await prisma.progreso.delete({
     *   where: {
     *     // ... filter to delete one Progreso
     *   }
     * })
     * 
     */
    delete<T extends ProgresoDeleteArgs>(args: SelectSubset<T, ProgresoDeleteArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Progreso.
     * @param {ProgresoUpdateArgs} args - Arguments to update one Progreso.
     * @example
     * // Update one Progreso
     * const progreso = await prisma.progreso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgresoUpdateArgs>(args: SelectSubset<T, ProgresoUpdateArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Progresos.
     * @param {ProgresoDeleteManyArgs} args - Arguments to filter Progresos to delete.
     * @example
     * // Delete a few Progresos
     * const { count } = await prisma.progreso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgresoDeleteManyArgs>(args?: SelectSubset<T, ProgresoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Progresos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Progresos
     * const progreso = await prisma.progreso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgresoUpdateManyArgs>(args: SelectSubset<T, ProgresoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Progresos and returns the data updated in the database.
     * @param {ProgresoUpdateManyAndReturnArgs} args - Arguments to update many Progresos.
     * @example
     * // Update many Progresos
     * const progreso = await prisma.progreso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Progresos and only return the `id`
     * const progresoWithIdOnly = await prisma.progreso.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProgresoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgresoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Progreso.
     * @param {ProgresoUpsertArgs} args - Arguments to update or create a Progreso.
     * @example
     * // Update or create a Progreso
     * const progreso = await prisma.progreso.upsert({
     *   create: {
     *     // ... data to create a Progreso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Progreso we want to update
     *   }
     * })
     */
    upsert<T extends ProgresoUpsertArgs>(args: SelectSubset<T, ProgresoUpsertArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Progresos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoCountArgs} args - Arguments to filter Progresos to count.
     * @example
     * // Count the number of Progresos
     * const count = await prisma.progreso.count({
     *   where: {
     *     // ... the filter for the Progresos we want to count
     *   }
     * })
    **/
    count<T extends ProgresoCountArgs>(
      args?: Subset<T, ProgresoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgresoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Progreso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgresoAggregateArgs>(args: Subset<T, ProgresoAggregateArgs>): Prisma.PrismaPromise<GetProgresoAggregateType<T>>

    /**
     * Group by Progreso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoGroupByArgs} args - Group by arguments.
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
      T extends ProgresoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgresoGroupByArgs['orderBy'] }
        : { orderBy?: ProgresoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgresoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgresoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Progreso model
   */
  readonly fields: ProgresoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Progreso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgresoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    escenario<T extends EscenarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EscenarioDefaultArgs<ExtArgs>>): Prisma__EscenarioClient<$Result.GetResult<Prisma.$EscenarioPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the Progreso model
   */ 
  interface ProgresoFieldRefs {
    readonly id: FieldRef<"Progreso", 'Int'>
    readonly usuarioId: FieldRef<"Progreso", 'String'>
    readonly escenarioId: FieldRef<"Progreso", 'Int'>
    readonly puntosObtenidos: FieldRef<"Progreso", 'Int'>
    readonly resuelto: FieldRef<"Progreso", 'Boolean'>
    readonly intentosFallidos: FieldRef<"Progreso", 'Int'>
    readonly updatedAt: FieldRef<"Progreso", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Progreso findUnique
   */
  export type ProgresoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * Filter, which Progreso to fetch.
     */
    where: ProgresoWhereUniqueInput
  }

  /**
   * Progreso findUniqueOrThrow
   */
  export type ProgresoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * Filter, which Progreso to fetch.
     */
    where: ProgresoWhereUniqueInput
  }

  /**
   * Progreso findFirst
   */
  export type ProgresoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * Filter, which Progreso to fetch.
     */
    where?: ProgresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresos to fetch.
     */
    orderBy?: ProgresoOrderByWithRelationInput | ProgresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Progresos.
     */
    cursor?: ProgresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Progresos.
     */
    distinct?: ProgresoScalarFieldEnum | ProgresoScalarFieldEnum[]
  }

  /**
   * Progreso findFirstOrThrow
   */
  export type ProgresoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * Filter, which Progreso to fetch.
     */
    where?: ProgresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresos to fetch.
     */
    orderBy?: ProgresoOrderByWithRelationInput | ProgresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Progresos.
     */
    cursor?: ProgresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Progresos.
     */
    distinct?: ProgresoScalarFieldEnum | ProgresoScalarFieldEnum[]
  }

  /**
   * Progreso findMany
   */
  export type ProgresoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * Filter, which Progresos to fetch.
     */
    where?: ProgresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresos to fetch.
     */
    orderBy?: ProgresoOrderByWithRelationInput | ProgresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Progresos.
     */
    cursor?: ProgresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresos.
     */
    skip?: number
    distinct?: ProgresoScalarFieldEnum | ProgresoScalarFieldEnum[]
  }

  /**
   * Progreso create
   */
  export type ProgresoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * The data needed to create a Progreso.
     */
    data: XOR<ProgresoCreateInput, ProgresoUncheckedCreateInput>
  }

  /**
   * Progreso createMany
   */
  export type ProgresoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Progresos.
     */
    data: ProgresoCreateManyInput | ProgresoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Progreso createManyAndReturn
   */
  export type ProgresoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * The data used to create many Progresos.
     */
    data: ProgresoCreateManyInput | ProgresoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Progreso update
   */
  export type ProgresoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * The data needed to update a Progreso.
     */
    data: XOR<ProgresoUpdateInput, ProgresoUncheckedUpdateInput>
    /**
     * Choose, which Progreso to update.
     */
    where: ProgresoWhereUniqueInput
  }

  /**
   * Progreso updateMany
   */
  export type ProgresoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Progresos.
     */
    data: XOR<ProgresoUpdateManyMutationInput, ProgresoUncheckedUpdateManyInput>
    /**
     * Filter which Progresos to update
     */
    where?: ProgresoWhereInput
    /**
     * Limit how many Progresos to update.
     */
    limit?: number
  }

  /**
   * Progreso updateManyAndReturn
   */
  export type ProgresoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * The data used to update Progresos.
     */
    data: XOR<ProgresoUpdateManyMutationInput, ProgresoUncheckedUpdateManyInput>
    /**
     * Filter which Progresos to update
     */
    where?: ProgresoWhereInput
    /**
     * Limit how many Progresos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Progreso upsert
   */
  export type ProgresoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * The filter to search for the Progreso to update in case it exists.
     */
    where: ProgresoWhereUniqueInput
    /**
     * In case the Progreso found by the `where` argument doesn't exist, create a new Progreso with this data.
     */
    create: XOR<ProgresoCreateInput, ProgresoUncheckedCreateInput>
    /**
     * In case the Progreso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgresoUpdateInput, ProgresoUncheckedUpdateInput>
  }

  /**
   * Progreso delete
   */
  export type ProgresoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * Filter which Progreso to delete.
     */
    where: ProgresoWhereUniqueInput
  }

  /**
   * Progreso deleteMany
   */
  export type ProgresoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Progresos to delete
     */
    where?: ProgresoWhereInput
    /**
     * Limit how many Progresos to delete.
     */
    limit?: number
  }

  /**
   * Progreso without action
   */
  export type ProgresoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    email: 'email',
    nombre: 'nombre',
    puntos: 'puntos',
    tokens: 'tokens',
    rol: 'rol',
    racha: 'racha',
    ultimaConexion: 'ultimaConexion',
    createdAt: 'createdAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const AuditoriaScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    accion: 'accion',
    entidad: 'entidad',
    entidadId: 'entidadId',
    detalles: 'detalles',
    timestamp: 'timestamp'
  };

  export type AuditoriaScalarFieldEnum = (typeof AuditoriaScalarFieldEnum)[keyof typeof AuditoriaScalarFieldEnum]


  export const SeccionScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    grado: 'grado',
    puntosRequeridos: 'puntosRequeridos',
    puntosRecompensa: 'puntosRecompensa',
    umbralAprobacion: 'umbralAprobacion'
  };

  export type SeccionScalarFieldEnum = (typeof SeccionScalarFieldEnum)[keyof typeof SeccionScalarFieldEnum]


  export const SeccionAprobadaScalarFieldEnum: {
    usuarioId: 'usuarioId',
    seccionId: 'seccionId'
  };

  export type SeccionAprobadaScalarFieldEnum = (typeof SeccionAprobadaScalarFieldEnum)[keyof typeof SeccionAprobadaScalarFieldEnum]


  export const EscenarioScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descripcion: 'descripcion',
    pregunta: 'pregunta',
    explicacion: 'explicacion',
    categoria: 'categoria',
    seccionId: 'seccionId'
  };

  export type EscenarioScalarFieldEnum = (typeof EscenarioScalarFieldEnum)[keyof typeof EscenarioScalarFieldEnum]


  export const OpcionScalarFieldEnum: {
    id: 'id',
    texto: 'texto',
    puntos: 'puntos',
    escenarioId: 'escenarioId'
  };

  export type OpcionScalarFieldEnum = (typeof OpcionScalarFieldEnum)[keyof typeof OpcionScalarFieldEnum]


  export const RecursoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    valor: 'valor',
    usuarioId: 'usuarioId',
    seccionId: 'seccionId',
    createdAt: 'createdAt'
  };

  export type RecursoScalarFieldEnum = (typeof RecursoScalarFieldEnum)[keyof typeof RecursoScalarFieldEnum]


  export const InsigniaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    imagenUrl: 'imagenUrl',
    puntosRequeridos: 'puntosRequeridos',
    escenarioId: 'escenarioId',
    createdAt: 'createdAt'
  };

  export type InsigniaScalarFieldEnum = (typeof InsigniaScalarFieldEnum)[keyof typeof InsigniaScalarFieldEnum]


  export const ProgresoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    escenarioId: 'escenarioId',
    puntosObtenidos: 'puntosObtenidos',
    resuelto: 'resuelto',
    intentosFallidos: 'intentosFallidos',
    updatedAt: 'updatedAt'
  };

  export type ProgresoScalarFieldEnum = (typeof ProgresoScalarFieldEnum)[keyof typeof ProgresoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Rol'
   */
  export type EnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol'>
    


  /**
   * Reference to a field of type 'Rol[]'
   */
  export type ListEnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    nombre?: StringNullableFilter<"Usuario"> | string | null
    puntos?: IntFilter<"Usuario"> | number
    tokens?: IntFilter<"Usuario"> | number
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    racha?: IntFilter<"Usuario"> | number
    ultimaConexion?: DateTimeFilter<"Usuario"> | Date | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    progreso?: ProgresoListRelationFilter
    seccionesAprobadas?: SeccionAprobadaListRelationFilter
    insignias?: InsigniaListRelationFilter
    recursos?: RecursoListRelationFilter
    auditorias?: AuditoriaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrderInput | SortOrder
    puntos?: SortOrder
    tokens?: SortOrder
    rol?: SortOrder
    racha?: SortOrder
    ultimaConexion?: SortOrder
    createdAt?: SortOrder
    progreso?: ProgresoOrderByRelationAggregateInput
    seccionesAprobadas?: SeccionAprobadaOrderByRelationAggregateInput
    insignias?: InsigniaOrderByRelationAggregateInput
    recursos?: RecursoOrderByRelationAggregateInput
    auditorias?: AuditoriaOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringNullableFilter<"Usuario"> | string | null
    puntos?: IntFilter<"Usuario"> | number
    tokens?: IntFilter<"Usuario"> | number
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    racha?: IntFilter<"Usuario"> | number
    ultimaConexion?: DateTimeFilter<"Usuario"> | Date | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    progreso?: ProgresoListRelationFilter
    seccionesAprobadas?: SeccionAprobadaListRelationFilter
    insignias?: InsigniaListRelationFilter
    recursos?: RecursoListRelationFilter
    auditorias?: AuditoriaListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrderInput | SortOrder
    puntos?: SortOrder
    tokens?: SortOrder
    rol?: SortOrder
    racha?: SortOrder
    ultimaConexion?: SortOrder
    createdAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    nombre?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    puntos?: IntWithAggregatesFilter<"Usuario"> | number
    tokens?: IntWithAggregatesFilter<"Usuario"> | number
    rol?: EnumRolWithAggregatesFilter<"Usuario"> | $Enums.Rol
    racha?: IntWithAggregatesFilter<"Usuario"> | number
    ultimaConexion?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type AuditoriaWhereInput = {
    AND?: AuditoriaWhereInput | AuditoriaWhereInput[]
    OR?: AuditoriaWhereInput[]
    NOT?: AuditoriaWhereInput | AuditoriaWhereInput[]
    id?: IntFilter<"Auditoria"> | number
    usuarioId?: StringFilter<"Auditoria"> | string
    accion?: StringFilter<"Auditoria"> | string
    entidad?: StringFilter<"Auditoria"> | string
    entidadId?: StringNullableFilter<"Auditoria"> | string | null
    detalles?: JsonNullableFilter<"Auditoria">
    timestamp?: DateTimeFilter<"Auditoria"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type AuditoriaOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    accion?: SortOrder
    entidad?: SortOrder
    entidadId?: SortOrderInput | SortOrder
    detalles?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type AuditoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuditoriaWhereInput | AuditoriaWhereInput[]
    OR?: AuditoriaWhereInput[]
    NOT?: AuditoriaWhereInput | AuditoriaWhereInput[]
    usuarioId?: StringFilter<"Auditoria"> | string
    accion?: StringFilter<"Auditoria"> | string
    entidad?: StringFilter<"Auditoria"> | string
    entidadId?: StringNullableFilter<"Auditoria"> | string | null
    detalles?: JsonNullableFilter<"Auditoria">
    timestamp?: DateTimeFilter<"Auditoria"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type AuditoriaOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    accion?: SortOrder
    entidad?: SortOrder
    entidadId?: SortOrderInput | SortOrder
    detalles?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: AuditoriaCountOrderByAggregateInput
    _avg?: AuditoriaAvgOrderByAggregateInput
    _max?: AuditoriaMaxOrderByAggregateInput
    _min?: AuditoriaMinOrderByAggregateInput
    _sum?: AuditoriaSumOrderByAggregateInput
  }

  export type AuditoriaScalarWhereWithAggregatesInput = {
    AND?: AuditoriaScalarWhereWithAggregatesInput | AuditoriaScalarWhereWithAggregatesInput[]
    OR?: AuditoriaScalarWhereWithAggregatesInput[]
    NOT?: AuditoriaScalarWhereWithAggregatesInput | AuditoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Auditoria"> | number
    usuarioId?: StringWithAggregatesFilter<"Auditoria"> | string
    accion?: StringWithAggregatesFilter<"Auditoria"> | string
    entidad?: StringWithAggregatesFilter<"Auditoria"> | string
    entidadId?: StringNullableWithAggregatesFilter<"Auditoria"> | string | null
    detalles?: JsonNullableWithAggregatesFilter<"Auditoria">
    timestamp?: DateTimeWithAggregatesFilter<"Auditoria"> | Date | string
  }

  export type SeccionWhereInput = {
    AND?: SeccionWhereInput | SeccionWhereInput[]
    OR?: SeccionWhereInput[]
    NOT?: SeccionWhereInput | SeccionWhereInput[]
    id?: IntFilter<"Seccion"> | number
    nombre?: StringFilter<"Seccion"> | string
    descripcion?: StringFilter<"Seccion"> | string
    grado?: IntFilter<"Seccion"> | number
    puntosRequeridos?: IntFilter<"Seccion"> | number
    puntosRecompensa?: IntFilter<"Seccion"> | number
    umbralAprobacion?: FloatFilter<"Seccion"> | number
    escenarios?: EscenarioListRelationFilter
    aprobadaPor?: SeccionAprobadaListRelationFilter
    recursoOtorgado?: XOR<RecursoNullableScalarRelationFilter, RecursoWhereInput> | null
  }

  export type SeccionOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    grado?: SortOrder
    puntosRequeridos?: SortOrder
    puntosRecompensa?: SortOrder
    umbralAprobacion?: SortOrder
    escenarios?: EscenarioOrderByRelationAggregateInput
    aprobadaPor?: SeccionAprobadaOrderByRelationAggregateInput
    recursoOtorgado?: RecursoOrderByWithRelationInput
  }

  export type SeccionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SeccionWhereInput | SeccionWhereInput[]
    OR?: SeccionWhereInput[]
    NOT?: SeccionWhereInput | SeccionWhereInput[]
    nombre?: StringFilter<"Seccion"> | string
    descripcion?: StringFilter<"Seccion"> | string
    grado?: IntFilter<"Seccion"> | number
    puntosRequeridos?: IntFilter<"Seccion"> | number
    puntosRecompensa?: IntFilter<"Seccion"> | number
    umbralAprobacion?: FloatFilter<"Seccion"> | number
    escenarios?: EscenarioListRelationFilter
    aprobadaPor?: SeccionAprobadaListRelationFilter
    recursoOtorgado?: XOR<RecursoNullableScalarRelationFilter, RecursoWhereInput> | null
  }, "id">

  export type SeccionOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    grado?: SortOrder
    puntosRequeridos?: SortOrder
    puntosRecompensa?: SortOrder
    umbralAprobacion?: SortOrder
    _count?: SeccionCountOrderByAggregateInput
    _avg?: SeccionAvgOrderByAggregateInput
    _max?: SeccionMaxOrderByAggregateInput
    _min?: SeccionMinOrderByAggregateInput
    _sum?: SeccionSumOrderByAggregateInput
  }

  export type SeccionScalarWhereWithAggregatesInput = {
    AND?: SeccionScalarWhereWithAggregatesInput | SeccionScalarWhereWithAggregatesInput[]
    OR?: SeccionScalarWhereWithAggregatesInput[]
    NOT?: SeccionScalarWhereWithAggregatesInput | SeccionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Seccion"> | number
    nombre?: StringWithAggregatesFilter<"Seccion"> | string
    descripcion?: StringWithAggregatesFilter<"Seccion"> | string
    grado?: IntWithAggregatesFilter<"Seccion"> | number
    puntosRequeridos?: IntWithAggregatesFilter<"Seccion"> | number
    puntosRecompensa?: IntWithAggregatesFilter<"Seccion"> | number
    umbralAprobacion?: FloatWithAggregatesFilter<"Seccion"> | number
  }

  export type SeccionAprobadaWhereInput = {
    AND?: SeccionAprobadaWhereInput | SeccionAprobadaWhereInput[]
    OR?: SeccionAprobadaWhereInput[]
    NOT?: SeccionAprobadaWhereInput | SeccionAprobadaWhereInput[]
    usuarioId?: StringFilter<"SeccionAprobada"> | string
    seccionId?: IntFilter<"SeccionAprobada"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    seccion?: XOR<SeccionScalarRelationFilter, SeccionWhereInput>
  }

  export type SeccionAprobadaOrderByWithRelationInput = {
    usuarioId?: SortOrder
    seccionId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    seccion?: SeccionOrderByWithRelationInput
  }

  export type SeccionAprobadaWhereUniqueInput = Prisma.AtLeast<{
    usuarioId_seccionId?: SeccionAprobadaUsuarioIdSeccionIdCompoundUniqueInput
    AND?: SeccionAprobadaWhereInput | SeccionAprobadaWhereInput[]
    OR?: SeccionAprobadaWhereInput[]
    NOT?: SeccionAprobadaWhereInput | SeccionAprobadaWhereInput[]
    usuarioId?: StringFilter<"SeccionAprobada"> | string
    seccionId?: IntFilter<"SeccionAprobada"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    seccion?: XOR<SeccionScalarRelationFilter, SeccionWhereInput>
  }, "usuarioId_seccionId">

  export type SeccionAprobadaOrderByWithAggregationInput = {
    usuarioId?: SortOrder
    seccionId?: SortOrder
    _count?: SeccionAprobadaCountOrderByAggregateInput
    _avg?: SeccionAprobadaAvgOrderByAggregateInput
    _max?: SeccionAprobadaMaxOrderByAggregateInput
    _min?: SeccionAprobadaMinOrderByAggregateInput
    _sum?: SeccionAprobadaSumOrderByAggregateInput
  }

  export type SeccionAprobadaScalarWhereWithAggregatesInput = {
    AND?: SeccionAprobadaScalarWhereWithAggregatesInput | SeccionAprobadaScalarWhereWithAggregatesInput[]
    OR?: SeccionAprobadaScalarWhereWithAggregatesInput[]
    NOT?: SeccionAprobadaScalarWhereWithAggregatesInput | SeccionAprobadaScalarWhereWithAggregatesInput[]
    usuarioId?: StringWithAggregatesFilter<"SeccionAprobada"> | string
    seccionId?: IntWithAggregatesFilter<"SeccionAprobada"> | number
  }

  export type EscenarioWhereInput = {
    AND?: EscenarioWhereInput | EscenarioWhereInput[]
    OR?: EscenarioWhereInput[]
    NOT?: EscenarioWhereInput | EscenarioWhereInput[]
    id?: IntFilter<"Escenario"> | number
    titulo?: StringFilter<"Escenario"> | string
    descripcion?: StringFilter<"Escenario"> | string
    pregunta?: StringFilter<"Escenario"> | string
    explicacion?: StringNullableFilter<"Escenario"> | string | null
    categoria?: StringFilter<"Escenario"> | string
    seccionId?: IntFilter<"Escenario"> | number
    seccion?: XOR<SeccionScalarRelationFilter, SeccionWhereInput>
    opciones?: OpcionListRelationFilter
    insignias?: InsigniaListRelationFilter
    progreso?: ProgresoListRelationFilter
  }

  export type EscenarioOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    pregunta?: SortOrder
    explicacion?: SortOrderInput | SortOrder
    categoria?: SortOrder
    seccionId?: SortOrder
    seccion?: SeccionOrderByWithRelationInput
    opciones?: OpcionOrderByRelationAggregateInput
    insignias?: InsigniaOrderByRelationAggregateInput
    progreso?: ProgresoOrderByRelationAggregateInput
  }

  export type EscenarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EscenarioWhereInput | EscenarioWhereInput[]
    OR?: EscenarioWhereInput[]
    NOT?: EscenarioWhereInput | EscenarioWhereInput[]
    titulo?: StringFilter<"Escenario"> | string
    descripcion?: StringFilter<"Escenario"> | string
    pregunta?: StringFilter<"Escenario"> | string
    explicacion?: StringNullableFilter<"Escenario"> | string | null
    categoria?: StringFilter<"Escenario"> | string
    seccionId?: IntFilter<"Escenario"> | number
    seccion?: XOR<SeccionScalarRelationFilter, SeccionWhereInput>
    opciones?: OpcionListRelationFilter
    insignias?: InsigniaListRelationFilter
    progreso?: ProgresoListRelationFilter
  }, "id">

  export type EscenarioOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    pregunta?: SortOrder
    explicacion?: SortOrderInput | SortOrder
    categoria?: SortOrder
    seccionId?: SortOrder
    _count?: EscenarioCountOrderByAggregateInput
    _avg?: EscenarioAvgOrderByAggregateInput
    _max?: EscenarioMaxOrderByAggregateInput
    _min?: EscenarioMinOrderByAggregateInput
    _sum?: EscenarioSumOrderByAggregateInput
  }

  export type EscenarioScalarWhereWithAggregatesInput = {
    AND?: EscenarioScalarWhereWithAggregatesInput | EscenarioScalarWhereWithAggregatesInput[]
    OR?: EscenarioScalarWhereWithAggregatesInput[]
    NOT?: EscenarioScalarWhereWithAggregatesInput | EscenarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Escenario"> | number
    titulo?: StringWithAggregatesFilter<"Escenario"> | string
    descripcion?: StringWithAggregatesFilter<"Escenario"> | string
    pregunta?: StringWithAggregatesFilter<"Escenario"> | string
    explicacion?: StringNullableWithAggregatesFilter<"Escenario"> | string | null
    categoria?: StringWithAggregatesFilter<"Escenario"> | string
    seccionId?: IntWithAggregatesFilter<"Escenario"> | number
  }

  export type OpcionWhereInput = {
    AND?: OpcionWhereInput | OpcionWhereInput[]
    OR?: OpcionWhereInput[]
    NOT?: OpcionWhereInput | OpcionWhereInput[]
    id?: IntFilter<"Opcion"> | number
    texto?: StringFilter<"Opcion"> | string
    puntos?: IntFilter<"Opcion"> | number
    escenarioId?: IntFilter<"Opcion"> | number
    escenario?: XOR<EscenarioScalarRelationFilter, EscenarioWhereInput>
  }

  export type OpcionOrderByWithRelationInput = {
    id?: SortOrder
    texto?: SortOrder
    puntos?: SortOrder
    escenarioId?: SortOrder
    escenario?: EscenarioOrderByWithRelationInput
  }

  export type OpcionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OpcionWhereInput | OpcionWhereInput[]
    OR?: OpcionWhereInput[]
    NOT?: OpcionWhereInput | OpcionWhereInput[]
    texto?: StringFilter<"Opcion"> | string
    puntos?: IntFilter<"Opcion"> | number
    escenarioId?: IntFilter<"Opcion"> | number
    escenario?: XOR<EscenarioScalarRelationFilter, EscenarioWhereInput>
  }, "id">

  export type OpcionOrderByWithAggregationInput = {
    id?: SortOrder
    texto?: SortOrder
    puntos?: SortOrder
    escenarioId?: SortOrder
    _count?: OpcionCountOrderByAggregateInput
    _avg?: OpcionAvgOrderByAggregateInput
    _max?: OpcionMaxOrderByAggregateInput
    _min?: OpcionMinOrderByAggregateInput
    _sum?: OpcionSumOrderByAggregateInput
  }

  export type OpcionScalarWhereWithAggregatesInput = {
    AND?: OpcionScalarWhereWithAggregatesInput | OpcionScalarWhereWithAggregatesInput[]
    OR?: OpcionScalarWhereWithAggregatesInput[]
    NOT?: OpcionScalarWhereWithAggregatesInput | OpcionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Opcion"> | number
    texto?: StringWithAggregatesFilter<"Opcion"> | string
    puntos?: IntWithAggregatesFilter<"Opcion"> | number
    escenarioId?: IntWithAggregatesFilter<"Opcion"> | number
  }

  export type RecursoWhereInput = {
    AND?: RecursoWhereInput | RecursoWhereInput[]
    OR?: RecursoWhereInput[]
    NOT?: RecursoWhereInput | RecursoWhereInput[]
    id?: StringFilter<"Recurso"> | string
    nombre?: StringFilter<"Recurso"> | string
    valor?: IntFilter<"Recurso"> | number
    usuarioId?: StringFilter<"Recurso"> | string
    seccionId?: IntFilter<"Recurso"> | number
    createdAt?: DateTimeFilter<"Recurso"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    seccion?: XOR<SeccionScalarRelationFilter, SeccionWhereInput>
  }

  export type RecursoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    valor?: SortOrder
    usuarioId?: SortOrder
    seccionId?: SortOrder
    createdAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    seccion?: SeccionOrderByWithRelationInput
  }

  export type RecursoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    seccionId?: number
    AND?: RecursoWhereInput | RecursoWhereInput[]
    OR?: RecursoWhereInput[]
    NOT?: RecursoWhereInput | RecursoWhereInput[]
    nombre?: StringFilter<"Recurso"> | string
    valor?: IntFilter<"Recurso"> | number
    usuarioId?: StringFilter<"Recurso"> | string
    createdAt?: DateTimeFilter<"Recurso"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    seccion?: XOR<SeccionScalarRelationFilter, SeccionWhereInput>
  }, "id" | "seccionId">

  export type RecursoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    valor?: SortOrder
    usuarioId?: SortOrder
    seccionId?: SortOrder
    createdAt?: SortOrder
    _count?: RecursoCountOrderByAggregateInput
    _avg?: RecursoAvgOrderByAggregateInput
    _max?: RecursoMaxOrderByAggregateInput
    _min?: RecursoMinOrderByAggregateInput
    _sum?: RecursoSumOrderByAggregateInput
  }

  export type RecursoScalarWhereWithAggregatesInput = {
    AND?: RecursoScalarWhereWithAggregatesInput | RecursoScalarWhereWithAggregatesInput[]
    OR?: RecursoScalarWhereWithAggregatesInput[]
    NOT?: RecursoScalarWhereWithAggregatesInput | RecursoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Recurso"> | string
    nombre?: StringWithAggregatesFilter<"Recurso"> | string
    valor?: IntWithAggregatesFilter<"Recurso"> | number
    usuarioId?: StringWithAggregatesFilter<"Recurso"> | string
    seccionId?: IntWithAggregatesFilter<"Recurso"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Recurso"> | Date | string
  }

  export type InsigniaWhereInput = {
    AND?: InsigniaWhereInput | InsigniaWhereInput[]
    OR?: InsigniaWhereInput[]
    NOT?: InsigniaWhereInput | InsigniaWhereInput[]
    id?: StringFilter<"Insignia"> | string
    nombre?: StringFilter<"Insignia"> | string
    descripcion?: StringFilter<"Insignia"> | string
    imagenUrl?: StringNullableFilter<"Insignia"> | string | null
    puntosRequeridos?: IntFilter<"Insignia"> | number
    escenarioId?: IntFilter<"Insignia"> | number
    createdAt?: DateTimeFilter<"Insignia"> | Date | string
    escenario?: XOR<EscenarioScalarRelationFilter, EscenarioWhereInput>
    usuarios?: UsuarioListRelationFilter
  }

  export type InsigniaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    imagenUrl?: SortOrderInput | SortOrder
    puntosRequeridos?: SortOrder
    escenarioId?: SortOrder
    createdAt?: SortOrder
    escenario?: EscenarioOrderByWithRelationInput
    usuarios?: UsuarioOrderByRelationAggregateInput
  }

  export type InsigniaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InsigniaWhereInput | InsigniaWhereInput[]
    OR?: InsigniaWhereInput[]
    NOT?: InsigniaWhereInput | InsigniaWhereInput[]
    nombre?: StringFilter<"Insignia"> | string
    descripcion?: StringFilter<"Insignia"> | string
    imagenUrl?: StringNullableFilter<"Insignia"> | string | null
    puntosRequeridos?: IntFilter<"Insignia"> | number
    escenarioId?: IntFilter<"Insignia"> | number
    createdAt?: DateTimeFilter<"Insignia"> | Date | string
    escenario?: XOR<EscenarioScalarRelationFilter, EscenarioWhereInput>
    usuarios?: UsuarioListRelationFilter
  }, "id">

  export type InsigniaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    imagenUrl?: SortOrderInput | SortOrder
    puntosRequeridos?: SortOrder
    escenarioId?: SortOrder
    createdAt?: SortOrder
    _count?: InsigniaCountOrderByAggregateInput
    _avg?: InsigniaAvgOrderByAggregateInput
    _max?: InsigniaMaxOrderByAggregateInput
    _min?: InsigniaMinOrderByAggregateInput
    _sum?: InsigniaSumOrderByAggregateInput
  }

  export type InsigniaScalarWhereWithAggregatesInput = {
    AND?: InsigniaScalarWhereWithAggregatesInput | InsigniaScalarWhereWithAggregatesInput[]
    OR?: InsigniaScalarWhereWithAggregatesInput[]
    NOT?: InsigniaScalarWhereWithAggregatesInput | InsigniaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Insignia"> | string
    nombre?: StringWithAggregatesFilter<"Insignia"> | string
    descripcion?: StringWithAggregatesFilter<"Insignia"> | string
    imagenUrl?: StringNullableWithAggregatesFilter<"Insignia"> | string | null
    puntosRequeridos?: IntWithAggregatesFilter<"Insignia"> | number
    escenarioId?: IntWithAggregatesFilter<"Insignia"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Insignia"> | Date | string
  }

  export type ProgresoWhereInput = {
    AND?: ProgresoWhereInput | ProgresoWhereInput[]
    OR?: ProgresoWhereInput[]
    NOT?: ProgresoWhereInput | ProgresoWhereInput[]
    id?: IntFilter<"Progreso"> | number
    usuarioId?: StringFilter<"Progreso"> | string
    escenarioId?: IntFilter<"Progreso"> | number
    puntosObtenidos?: IntFilter<"Progreso"> | number
    resuelto?: BoolFilter<"Progreso"> | boolean
    intentosFallidos?: IntFilter<"Progreso"> | number
    updatedAt?: DateTimeFilter<"Progreso"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    escenario?: XOR<EscenarioScalarRelationFilter, EscenarioWhereInput>
  }

  export type ProgresoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    escenarioId?: SortOrder
    puntosObtenidos?: SortOrder
    resuelto?: SortOrder
    intentosFallidos?: SortOrder
    updatedAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    escenario?: EscenarioOrderByWithRelationInput
  }

  export type ProgresoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProgresoWhereInput | ProgresoWhereInput[]
    OR?: ProgresoWhereInput[]
    NOT?: ProgresoWhereInput | ProgresoWhereInput[]
    usuarioId?: StringFilter<"Progreso"> | string
    escenarioId?: IntFilter<"Progreso"> | number
    puntosObtenidos?: IntFilter<"Progreso"> | number
    resuelto?: BoolFilter<"Progreso"> | boolean
    intentosFallidos?: IntFilter<"Progreso"> | number
    updatedAt?: DateTimeFilter<"Progreso"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    escenario?: XOR<EscenarioScalarRelationFilter, EscenarioWhereInput>
  }, "id">

  export type ProgresoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    escenarioId?: SortOrder
    puntosObtenidos?: SortOrder
    resuelto?: SortOrder
    intentosFallidos?: SortOrder
    updatedAt?: SortOrder
    _count?: ProgresoCountOrderByAggregateInput
    _avg?: ProgresoAvgOrderByAggregateInput
    _max?: ProgresoMaxOrderByAggregateInput
    _min?: ProgresoMinOrderByAggregateInput
    _sum?: ProgresoSumOrderByAggregateInput
  }

  export type ProgresoScalarWhereWithAggregatesInput = {
    AND?: ProgresoScalarWhereWithAggregatesInput | ProgresoScalarWhereWithAggregatesInput[]
    OR?: ProgresoScalarWhereWithAggregatesInput[]
    NOT?: ProgresoScalarWhereWithAggregatesInput | ProgresoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Progreso"> | number
    usuarioId?: StringWithAggregatesFilter<"Progreso"> | string
    escenarioId?: IntWithAggregatesFilter<"Progreso"> | number
    puntosObtenidos?: IntWithAggregatesFilter<"Progreso"> | number
    resuelto?: BoolWithAggregatesFilter<"Progreso"> | boolean
    intentosFallidos?: IntWithAggregatesFilter<"Progreso"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Progreso"> | Date | string
  }

  export type UsuarioCreateInput = {
    id: string
    email: string
    nombre?: string | null
    puntos?: number
    tokens?: number
    rol?: $Enums.Rol
    racha?: number
    ultimaConexion?: Date | string
    createdAt?: Date | string
    progreso?: ProgresoCreateNestedManyWithoutUsuarioInput
    seccionesAprobadas?: SeccionAprobadaCreateNestedManyWithoutUsuarioInput
    insignias?: InsigniaCreateNestedManyWithoutUsuariosInput
    recursos?: RecursoCreateNestedManyWithoutUsuarioInput
    auditorias?: AuditoriaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id: string
    email: string
    nombre?: string | null
    puntos?: number
    tokens?: number
    rol?: $Enums.Rol
    racha?: number
    ultimaConexion?: Date | string
    createdAt?: Date | string
    progreso?: ProgresoUncheckedCreateNestedManyWithoutUsuarioInput
    seccionesAprobadas?: SeccionAprobadaUncheckedCreateNestedManyWithoutUsuarioInput
    insignias?: InsigniaUncheckedCreateNestedManyWithoutUsuariosInput
    recursos?: RecursoUncheckedCreateNestedManyWithoutUsuarioInput
    auditorias?: AuditoriaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    puntos?: IntFieldUpdateOperationsInput | number
    tokens?: IntFieldUpdateOperationsInput | number
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    racha?: IntFieldUpdateOperationsInput | number
    ultimaConexion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progreso?: ProgresoUpdateManyWithoutUsuarioNestedInput
    seccionesAprobadas?: SeccionAprobadaUpdateManyWithoutUsuarioNestedInput
    insignias?: InsigniaUpdateManyWithoutUsuariosNestedInput
    recursos?: RecursoUpdateManyWithoutUsuarioNestedInput
    auditorias?: AuditoriaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    puntos?: IntFieldUpdateOperationsInput | number
    tokens?: IntFieldUpdateOperationsInput | number
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    racha?: IntFieldUpdateOperationsInput | number
    ultimaConexion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progreso?: ProgresoUncheckedUpdateManyWithoutUsuarioNestedInput
    seccionesAprobadas?: SeccionAprobadaUncheckedUpdateManyWithoutUsuarioNestedInput
    insignias?: InsigniaUncheckedUpdateManyWithoutUsuariosNestedInput
    recursos?: RecursoUncheckedUpdateManyWithoutUsuarioNestedInput
    auditorias?: AuditoriaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id: string
    email: string
    nombre?: string | null
    puntos?: number
    tokens?: number
    rol?: $Enums.Rol
    racha?: number
    ultimaConexion?: Date | string
    createdAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    puntos?: IntFieldUpdateOperationsInput | number
    tokens?: IntFieldUpdateOperationsInput | number
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    racha?: IntFieldUpdateOperationsInput | number
    ultimaConexion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    puntos?: IntFieldUpdateOperationsInput | number
    tokens?: IntFieldUpdateOperationsInput | number
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    racha?: IntFieldUpdateOperationsInput | number
    ultimaConexion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditoriaCreateInput = {
    accion: string
    entidad: string
    entidadId?: string | null
    detalles?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    usuario: UsuarioCreateNestedOneWithoutAuditoriasInput
  }

  export type AuditoriaUncheckedCreateInput = {
    id?: number
    usuarioId: string
    accion: string
    entidad: string
    entidadId?: string | null
    detalles?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }

  export type AuditoriaUpdateInput = {
    accion?: StringFieldUpdateOperationsInput | string
    entidad?: StringFieldUpdateOperationsInput | string
    entidadId?: NullableStringFieldUpdateOperationsInput | string | null
    detalles?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutAuditoriasNestedInput
  }

  export type AuditoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    entidad?: StringFieldUpdateOperationsInput | string
    entidadId?: NullableStringFieldUpdateOperationsInput | string | null
    detalles?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditoriaCreateManyInput = {
    id?: number
    usuarioId: string
    accion: string
    entidad: string
    entidadId?: string | null
    detalles?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }

  export type AuditoriaUpdateManyMutationInput = {
    accion?: StringFieldUpdateOperationsInput | string
    entidad?: StringFieldUpdateOperationsInput | string
    entidadId?: NullableStringFieldUpdateOperationsInput | string | null
    detalles?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    entidad?: StringFieldUpdateOperationsInput | string
    entidadId?: NullableStringFieldUpdateOperationsInput | string | null
    detalles?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeccionCreateInput = {
    nombre: string
    descripcion: string
    grado?: number
    puntosRequeridos?: number
    puntosRecompensa?: number
    umbralAprobacion?: number
    escenarios?: EscenarioCreateNestedManyWithoutSeccionInput
    aprobadaPor?: SeccionAprobadaCreateNestedManyWithoutSeccionInput
    recursoOtorgado?: RecursoCreateNestedOneWithoutSeccionInput
  }

  export type SeccionUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion: string
    grado?: number
    puntosRequeridos?: number
    puntosRecompensa?: number
    umbralAprobacion?: number
    escenarios?: EscenarioUncheckedCreateNestedManyWithoutSeccionInput
    aprobadaPor?: SeccionAprobadaUncheckedCreateNestedManyWithoutSeccionInput
    recursoOtorgado?: RecursoUncheckedCreateNestedOneWithoutSeccionInput
  }

  export type SeccionUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    grado?: IntFieldUpdateOperationsInput | number
    puntosRequeridos?: IntFieldUpdateOperationsInput | number
    puntosRecompensa?: IntFieldUpdateOperationsInput | number
    umbralAprobacion?: FloatFieldUpdateOperationsInput | number
    escenarios?: EscenarioUpdateManyWithoutSeccionNestedInput
    aprobadaPor?: SeccionAprobadaUpdateManyWithoutSeccionNestedInput
    recursoOtorgado?: RecursoUpdateOneWithoutSeccionNestedInput
  }

  export type SeccionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    grado?: IntFieldUpdateOperationsInput | number
    puntosRequeridos?: IntFieldUpdateOperationsInput | number
    puntosRecompensa?: IntFieldUpdateOperationsInput | number
    umbralAprobacion?: FloatFieldUpdateOperationsInput | number
    escenarios?: EscenarioUncheckedUpdateManyWithoutSeccionNestedInput
    aprobadaPor?: SeccionAprobadaUncheckedUpdateManyWithoutSeccionNestedInput
    recursoOtorgado?: RecursoUncheckedUpdateOneWithoutSeccionNestedInput
  }

  export type SeccionCreateManyInput = {
    id?: number
    nombre: string
    descripcion: string
    grado?: number
    puntosRequeridos?: number
    puntosRecompensa?: number
    umbralAprobacion?: number
  }

  export type SeccionUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    grado?: IntFieldUpdateOperationsInput | number
    puntosRequeridos?: IntFieldUpdateOperationsInput | number
    puntosRecompensa?: IntFieldUpdateOperationsInput | number
    umbralAprobacion?: FloatFieldUpdateOperationsInput | number
  }

  export type SeccionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    grado?: IntFieldUpdateOperationsInput | number
    puntosRequeridos?: IntFieldUpdateOperationsInput | number
    puntosRecompensa?: IntFieldUpdateOperationsInput | number
    umbralAprobacion?: FloatFieldUpdateOperationsInput | number
  }

  export type SeccionAprobadaCreateInput = {
    usuario: UsuarioCreateNestedOneWithoutSeccionesAprobadasInput
    seccion: SeccionCreateNestedOneWithoutAprobadaPorInput
  }

  export type SeccionAprobadaUncheckedCreateInput = {
    usuarioId: string
    seccionId: number
  }

  export type SeccionAprobadaUpdateInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutSeccionesAprobadasNestedInput
    seccion?: SeccionUpdateOneRequiredWithoutAprobadaPorNestedInput
  }

  export type SeccionAprobadaUncheckedUpdateInput = {
    usuarioId?: StringFieldUpdateOperationsInput | string
    seccionId?: IntFieldUpdateOperationsInput | number
  }

  export type SeccionAprobadaCreateManyInput = {
    usuarioId: string
    seccionId: number
  }

  export type SeccionAprobadaUpdateManyMutationInput = {

  }

  export type SeccionAprobadaUncheckedUpdateManyInput = {
    usuarioId?: StringFieldUpdateOperationsInput | string
    seccionId?: IntFieldUpdateOperationsInput | number
  }

  export type EscenarioCreateInput = {
    titulo: string
    descripcion: string
    pregunta: string
    explicacion?: string | null
    categoria: string
    seccion: SeccionCreateNestedOneWithoutEscenariosInput
    opciones?: OpcionCreateNestedManyWithoutEscenarioInput
    insignias?: InsigniaCreateNestedManyWithoutEscenarioInput
    progreso?: ProgresoCreateNestedManyWithoutEscenarioInput
  }

  export type EscenarioUncheckedCreateInput = {
    id?: number
    titulo: string
    descripcion: string
    pregunta: string
    explicacion?: string | null
    categoria: string
    seccionId: number
    opciones?: OpcionUncheckedCreateNestedManyWithoutEscenarioInput
    insignias?: InsigniaUncheckedCreateNestedManyWithoutEscenarioInput
    progreso?: ProgresoUncheckedCreateNestedManyWithoutEscenarioInput
  }

  export type EscenarioUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pregunta?: StringFieldUpdateOperationsInput | string
    explicacion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    seccion?: SeccionUpdateOneRequiredWithoutEscenariosNestedInput
    opciones?: OpcionUpdateManyWithoutEscenarioNestedInput
    insignias?: InsigniaUpdateManyWithoutEscenarioNestedInput
    progreso?: ProgresoUpdateManyWithoutEscenarioNestedInput
  }

  export type EscenarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pregunta?: StringFieldUpdateOperationsInput | string
    explicacion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    seccionId?: IntFieldUpdateOperationsInput | number
    opciones?: OpcionUncheckedUpdateManyWithoutEscenarioNestedInput
    insignias?: InsigniaUncheckedUpdateManyWithoutEscenarioNestedInput
    progreso?: ProgresoUncheckedUpdateManyWithoutEscenarioNestedInput
  }

  export type EscenarioCreateManyInput = {
    id?: number
    titulo: string
    descripcion: string
    pregunta: string
    explicacion?: string | null
    categoria: string
    seccionId: number
  }

  export type EscenarioUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pregunta?: StringFieldUpdateOperationsInput | string
    explicacion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
  }

  export type EscenarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pregunta?: StringFieldUpdateOperationsInput | string
    explicacion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    seccionId?: IntFieldUpdateOperationsInput | number
  }

  export type OpcionCreateInput = {
    texto: string
    puntos?: number
    escenario: EscenarioCreateNestedOneWithoutOpcionesInput
  }

  export type OpcionUncheckedCreateInput = {
    id?: number
    texto: string
    puntos?: number
    escenarioId: number
  }

  export type OpcionUpdateInput = {
    texto?: StringFieldUpdateOperationsInput | string
    puntos?: IntFieldUpdateOperationsInput | number
    escenario?: EscenarioUpdateOneRequiredWithoutOpcionesNestedInput
  }

  export type OpcionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    puntos?: IntFieldUpdateOperationsInput | number
    escenarioId?: IntFieldUpdateOperationsInput | number
  }

  export type OpcionCreateManyInput = {
    id?: number
    texto: string
    puntos?: number
    escenarioId: number
  }

  export type OpcionUpdateManyMutationInput = {
    texto?: StringFieldUpdateOperationsInput | string
    puntos?: IntFieldUpdateOperationsInput | number
  }

  export type OpcionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    puntos?: IntFieldUpdateOperationsInput | number
    escenarioId?: IntFieldUpdateOperationsInput | number
  }

  export type RecursoCreateInput = {
    id?: string
    nombre: string
    valor?: number
    createdAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutRecursosInput
    seccion: SeccionCreateNestedOneWithoutRecursoOtorgadoInput
  }

  export type RecursoUncheckedCreateInput = {
    id?: string
    nombre: string
    valor?: number
    usuarioId: string
    seccionId: number
    createdAt?: Date | string
  }

  export type RecursoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutRecursosNestedInput
    seccion?: SeccionUpdateOneRequiredWithoutRecursoOtorgadoNestedInput
  }

  export type RecursoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    seccionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecursoCreateManyInput = {
    id?: string
    nombre: string
    valor?: number
    usuarioId: string
    seccionId: number
    createdAt?: Date | string
  }

  export type RecursoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecursoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    seccionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsigniaCreateInput = {
    id?: string
    nombre: string
    descripcion: string
    imagenUrl?: string | null
    puntosRequeridos?: number
    createdAt?: Date | string
    escenario: EscenarioCreateNestedOneWithoutInsigniasInput
    usuarios?: UsuarioCreateNestedManyWithoutInsigniasInput
  }

  export type InsigniaUncheckedCreateInput = {
    id?: string
    nombre: string
    descripcion: string
    imagenUrl?: string | null
    puntosRequeridos?: number
    escenarioId: number
    createdAt?: Date | string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutInsigniasInput
  }

  export type InsigniaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    puntosRequeridos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    escenario?: EscenarioUpdateOneRequiredWithoutInsigniasNestedInput
    usuarios?: UsuarioUpdateManyWithoutInsigniasNestedInput
  }

  export type InsigniaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    puntosRequeridos?: IntFieldUpdateOperationsInput | number
    escenarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutInsigniasNestedInput
  }

  export type InsigniaCreateManyInput = {
    id?: string
    nombre: string
    descripcion: string
    imagenUrl?: string | null
    puntosRequeridos?: number
    escenarioId: number
    createdAt?: Date | string
  }

  export type InsigniaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    puntosRequeridos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsigniaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    puntosRequeridos?: IntFieldUpdateOperationsInput | number
    escenarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgresoCreateInput = {
    puntosObtenidos?: number
    resuelto?: boolean
    intentosFallidos?: number
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutProgresoInput
    escenario: EscenarioCreateNestedOneWithoutProgresoInput
  }

  export type ProgresoUncheckedCreateInput = {
    id?: number
    usuarioId: string
    escenarioId: number
    puntosObtenidos?: number
    resuelto?: boolean
    intentosFallidos?: number
    updatedAt?: Date | string
  }

  export type ProgresoUpdateInput = {
    puntosObtenidos?: IntFieldUpdateOperationsInput | number
    resuelto?: BoolFieldUpdateOperationsInput | boolean
    intentosFallidos?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutProgresoNestedInput
    escenario?: EscenarioUpdateOneRequiredWithoutProgresoNestedInput
  }

  export type ProgresoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    escenarioId?: IntFieldUpdateOperationsInput | number
    puntosObtenidos?: IntFieldUpdateOperationsInput | number
    resuelto?: BoolFieldUpdateOperationsInput | boolean
    intentosFallidos?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgresoCreateManyInput = {
    id?: number
    usuarioId: string
    escenarioId: number
    puntosObtenidos?: number
    resuelto?: boolean
    intentosFallidos?: number
    updatedAt?: Date | string
  }

  export type ProgresoUpdateManyMutationInput = {
    puntosObtenidos?: IntFieldUpdateOperationsInput | number
    resuelto?: BoolFieldUpdateOperationsInput | boolean
    intentosFallidos?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgresoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    escenarioId?: IntFieldUpdateOperationsInput | number
    puntosObtenidos?: IntFieldUpdateOperationsInput | number
    resuelto?: BoolFieldUpdateOperationsInput | boolean
    intentosFallidos?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type EnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
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

  export type ProgresoListRelationFilter = {
    every?: ProgresoWhereInput
    some?: ProgresoWhereInput
    none?: ProgresoWhereInput
  }

  export type SeccionAprobadaListRelationFilter = {
    every?: SeccionAprobadaWhereInput
    some?: SeccionAprobadaWhereInput
    none?: SeccionAprobadaWhereInput
  }

  export type InsigniaListRelationFilter = {
    every?: InsigniaWhereInput
    some?: InsigniaWhereInput
    none?: InsigniaWhereInput
  }

  export type RecursoListRelationFilter = {
    every?: RecursoWhereInput
    some?: RecursoWhereInput
    none?: RecursoWhereInput
  }

  export type AuditoriaListRelationFilter = {
    every?: AuditoriaWhereInput
    some?: AuditoriaWhereInput
    none?: AuditoriaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProgresoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeccionAprobadaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InsigniaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecursoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditoriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    puntos?: SortOrder
    tokens?: SortOrder
    rol?: SortOrder
    racha?: SortOrder
    ultimaConexion?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    puntos?: SortOrder
    tokens?: SortOrder
    racha?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    puntos?: SortOrder
    tokens?: SortOrder
    rol?: SortOrder
    racha?: SortOrder
    ultimaConexion?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    puntos?: SortOrder
    tokens?: SortOrder
    rol?: SortOrder
    racha?: SortOrder
    ultimaConexion?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    puntos?: SortOrder
    tokens?: SortOrder
    racha?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type EnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
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
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type AuditoriaCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    accion?: SortOrder
    entidad?: SortOrder
    entidadId?: SortOrder
    detalles?: SortOrder
    timestamp?: SortOrder
  }

  export type AuditoriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuditoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    accion?: SortOrder
    entidad?: SortOrder
    entidadId?: SortOrder
    timestamp?: SortOrder
  }

  export type AuditoriaMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    accion?: SortOrder
    entidad?: SortOrder
    entidadId?: SortOrder
    timestamp?: SortOrder
  }

  export type AuditoriaSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type EscenarioListRelationFilter = {
    every?: EscenarioWhereInput
    some?: EscenarioWhereInput
    none?: EscenarioWhereInput
  }

  export type RecursoNullableScalarRelationFilter = {
    is?: RecursoWhereInput | null
    isNot?: RecursoWhereInput | null
  }

  export type EscenarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeccionCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    grado?: SortOrder
    puntosRequeridos?: SortOrder
    puntosRecompensa?: SortOrder
    umbralAprobacion?: SortOrder
  }

  export type SeccionAvgOrderByAggregateInput = {
    id?: SortOrder
    grado?: SortOrder
    puntosRequeridos?: SortOrder
    puntosRecompensa?: SortOrder
    umbralAprobacion?: SortOrder
  }

  export type SeccionMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    grado?: SortOrder
    puntosRequeridos?: SortOrder
    puntosRecompensa?: SortOrder
    umbralAprobacion?: SortOrder
  }

  export type SeccionMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    grado?: SortOrder
    puntosRequeridos?: SortOrder
    puntosRecompensa?: SortOrder
    umbralAprobacion?: SortOrder
  }

  export type SeccionSumOrderByAggregateInput = {
    id?: SortOrder
    grado?: SortOrder
    puntosRequeridos?: SortOrder
    puntosRecompensa?: SortOrder
    umbralAprobacion?: SortOrder
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

  export type SeccionScalarRelationFilter = {
    is?: SeccionWhereInput
    isNot?: SeccionWhereInput
  }

  export type SeccionAprobadaUsuarioIdSeccionIdCompoundUniqueInput = {
    usuarioId: string
    seccionId: number
  }

  export type SeccionAprobadaCountOrderByAggregateInput = {
    usuarioId?: SortOrder
    seccionId?: SortOrder
  }

  export type SeccionAprobadaAvgOrderByAggregateInput = {
    seccionId?: SortOrder
  }

  export type SeccionAprobadaMaxOrderByAggregateInput = {
    usuarioId?: SortOrder
    seccionId?: SortOrder
  }

  export type SeccionAprobadaMinOrderByAggregateInput = {
    usuarioId?: SortOrder
    seccionId?: SortOrder
  }

  export type SeccionAprobadaSumOrderByAggregateInput = {
    seccionId?: SortOrder
  }

  export type OpcionListRelationFilter = {
    every?: OpcionWhereInput
    some?: OpcionWhereInput
    none?: OpcionWhereInput
  }

  export type OpcionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EscenarioCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    pregunta?: SortOrder
    explicacion?: SortOrder
    categoria?: SortOrder
    seccionId?: SortOrder
  }

  export type EscenarioAvgOrderByAggregateInput = {
    id?: SortOrder
    seccionId?: SortOrder
  }

  export type EscenarioMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    pregunta?: SortOrder
    explicacion?: SortOrder
    categoria?: SortOrder
    seccionId?: SortOrder
  }

  export type EscenarioMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    pregunta?: SortOrder
    explicacion?: SortOrder
    categoria?: SortOrder
    seccionId?: SortOrder
  }

  export type EscenarioSumOrderByAggregateInput = {
    id?: SortOrder
    seccionId?: SortOrder
  }

  export type EscenarioScalarRelationFilter = {
    is?: EscenarioWhereInput
    isNot?: EscenarioWhereInput
  }

  export type OpcionCountOrderByAggregateInput = {
    id?: SortOrder
    texto?: SortOrder
    puntos?: SortOrder
    escenarioId?: SortOrder
  }

  export type OpcionAvgOrderByAggregateInput = {
    id?: SortOrder
    puntos?: SortOrder
    escenarioId?: SortOrder
  }

  export type OpcionMaxOrderByAggregateInput = {
    id?: SortOrder
    texto?: SortOrder
    puntos?: SortOrder
    escenarioId?: SortOrder
  }

  export type OpcionMinOrderByAggregateInput = {
    id?: SortOrder
    texto?: SortOrder
    puntos?: SortOrder
    escenarioId?: SortOrder
  }

  export type OpcionSumOrderByAggregateInput = {
    id?: SortOrder
    puntos?: SortOrder
    escenarioId?: SortOrder
  }

  export type RecursoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    valor?: SortOrder
    usuarioId?: SortOrder
    seccionId?: SortOrder
    createdAt?: SortOrder
  }

  export type RecursoAvgOrderByAggregateInput = {
    valor?: SortOrder
    seccionId?: SortOrder
  }

  export type RecursoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    valor?: SortOrder
    usuarioId?: SortOrder
    seccionId?: SortOrder
    createdAt?: SortOrder
  }

  export type RecursoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    valor?: SortOrder
    usuarioId?: SortOrder
    seccionId?: SortOrder
    createdAt?: SortOrder
  }

  export type RecursoSumOrderByAggregateInput = {
    valor?: SortOrder
    seccionId?: SortOrder
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InsigniaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    imagenUrl?: SortOrder
    puntosRequeridos?: SortOrder
    escenarioId?: SortOrder
    createdAt?: SortOrder
  }

  export type InsigniaAvgOrderByAggregateInput = {
    puntosRequeridos?: SortOrder
    escenarioId?: SortOrder
  }

  export type InsigniaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    imagenUrl?: SortOrder
    puntosRequeridos?: SortOrder
    escenarioId?: SortOrder
    createdAt?: SortOrder
  }

  export type InsigniaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    imagenUrl?: SortOrder
    puntosRequeridos?: SortOrder
    escenarioId?: SortOrder
    createdAt?: SortOrder
  }

  export type InsigniaSumOrderByAggregateInput = {
    puntosRequeridos?: SortOrder
    escenarioId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProgresoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    escenarioId?: SortOrder
    puntosObtenidos?: SortOrder
    resuelto?: SortOrder
    intentosFallidos?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgresoAvgOrderByAggregateInput = {
    id?: SortOrder
    escenarioId?: SortOrder
    puntosObtenidos?: SortOrder
    intentosFallidos?: SortOrder
  }

  export type ProgresoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    escenarioId?: SortOrder
    puntosObtenidos?: SortOrder
    resuelto?: SortOrder
    intentosFallidos?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgresoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    escenarioId?: SortOrder
    puntosObtenidos?: SortOrder
    resuelto?: SortOrder
    intentosFallidos?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgresoSumOrderByAggregateInput = {
    id?: SortOrder
    escenarioId?: SortOrder
    puntosObtenidos?: SortOrder
    intentosFallidos?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProgresoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ProgresoCreateWithoutUsuarioInput, ProgresoUncheckedCreateWithoutUsuarioInput> | ProgresoCreateWithoutUsuarioInput[] | ProgresoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProgresoCreateOrConnectWithoutUsuarioInput | ProgresoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ProgresoCreateManyUsuarioInputEnvelope
    connect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
  }

  export type SeccionAprobadaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<SeccionAprobadaCreateWithoutUsuarioInput, SeccionAprobadaUncheckedCreateWithoutUsuarioInput> | SeccionAprobadaCreateWithoutUsuarioInput[] | SeccionAprobadaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SeccionAprobadaCreateOrConnectWithoutUsuarioInput | SeccionAprobadaCreateOrConnectWithoutUsuarioInput[]
    createMany?: SeccionAprobadaCreateManyUsuarioInputEnvelope
    connect?: SeccionAprobadaWhereUniqueInput | SeccionAprobadaWhereUniqueInput[]
  }

  export type InsigniaCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<InsigniaCreateWithoutUsuariosInput, InsigniaUncheckedCreateWithoutUsuariosInput> | InsigniaCreateWithoutUsuariosInput[] | InsigniaUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: InsigniaCreateOrConnectWithoutUsuariosInput | InsigniaCreateOrConnectWithoutUsuariosInput[]
    connect?: InsigniaWhereUniqueInput | InsigniaWhereUniqueInput[]
  }

  export type RecursoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RecursoCreateWithoutUsuarioInput, RecursoUncheckedCreateWithoutUsuarioInput> | RecursoCreateWithoutUsuarioInput[] | RecursoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RecursoCreateOrConnectWithoutUsuarioInput | RecursoCreateOrConnectWithoutUsuarioInput[]
    createMany?: RecursoCreateManyUsuarioInputEnvelope
    connect?: RecursoWhereUniqueInput | RecursoWhereUniqueInput[]
  }

  export type AuditoriaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AuditoriaCreateWithoutUsuarioInput, AuditoriaUncheckedCreateWithoutUsuarioInput> | AuditoriaCreateWithoutUsuarioInput[] | AuditoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AuditoriaCreateOrConnectWithoutUsuarioInput | AuditoriaCreateOrConnectWithoutUsuarioInput[]
    createMany?: AuditoriaCreateManyUsuarioInputEnvelope
    connect?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
  }

  export type ProgresoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ProgresoCreateWithoutUsuarioInput, ProgresoUncheckedCreateWithoutUsuarioInput> | ProgresoCreateWithoutUsuarioInput[] | ProgresoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProgresoCreateOrConnectWithoutUsuarioInput | ProgresoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ProgresoCreateManyUsuarioInputEnvelope
    connect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
  }

  export type SeccionAprobadaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<SeccionAprobadaCreateWithoutUsuarioInput, SeccionAprobadaUncheckedCreateWithoutUsuarioInput> | SeccionAprobadaCreateWithoutUsuarioInput[] | SeccionAprobadaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SeccionAprobadaCreateOrConnectWithoutUsuarioInput | SeccionAprobadaCreateOrConnectWithoutUsuarioInput[]
    createMany?: SeccionAprobadaCreateManyUsuarioInputEnvelope
    connect?: SeccionAprobadaWhereUniqueInput | SeccionAprobadaWhereUniqueInput[]
  }

  export type InsigniaUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<InsigniaCreateWithoutUsuariosInput, InsigniaUncheckedCreateWithoutUsuariosInput> | InsigniaCreateWithoutUsuariosInput[] | InsigniaUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: InsigniaCreateOrConnectWithoutUsuariosInput | InsigniaCreateOrConnectWithoutUsuariosInput[]
    connect?: InsigniaWhereUniqueInput | InsigniaWhereUniqueInput[]
  }

  export type RecursoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RecursoCreateWithoutUsuarioInput, RecursoUncheckedCreateWithoutUsuarioInput> | RecursoCreateWithoutUsuarioInput[] | RecursoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RecursoCreateOrConnectWithoutUsuarioInput | RecursoCreateOrConnectWithoutUsuarioInput[]
    createMany?: RecursoCreateManyUsuarioInputEnvelope
    connect?: RecursoWhereUniqueInput | RecursoWhereUniqueInput[]
  }

  export type AuditoriaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AuditoriaCreateWithoutUsuarioInput, AuditoriaUncheckedCreateWithoutUsuarioInput> | AuditoriaCreateWithoutUsuarioInput[] | AuditoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AuditoriaCreateOrConnectWithoutUsuarioInput | AuditoriaCreateOrConnectWithoutUsuarioInput[]
    createMany?: AuditoriaCreateManyUsuarioInputEnvelope
    connect?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRolFieldUpdateOperationsInput = {
    set?: $Enums.Rol
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProgresoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ProgresoCreateWithoutUsuarioInput, ProgresoUncheckedCreateWithoutUsuarioInput> | ProgresoCreateWithoutUsuarioInput[] | ProgresoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProgresoCreateOrConnectWithoutUsuarioInput | ProgresoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ProgresoUpsertWithWhereUniqueWithoutUsuarioInput | ProgresoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ProgresoCreateManyUsuarioInputEnvelope
    set?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    disconnect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    delete?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    connect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    update?: ProgresoUpdateWithWhereUniqueWithoutUsuarioInput | ProgresoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ProgresoUpdateManyWithWhereWithoutUsuarioInput | ProgresoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ProgresoScalarWhereInput | ProgresoScalarWhereInput[]
  }

  export type SeccionAprobadaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<SeccionAprobadaCreateWithoutUsuarioInput, SeccionAprobadaUncheckedCreateWithoutUsuarioInput> | SeccionAprobadaCreateWithoutUsuarioInput[] | SeccionAprobadaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SeccionAprobadaCreateOrConnectWithoutUsuarioInput | SeccionAprobadaCreateOrConnectWithoutUsuarioInput[]
    upsert?: SeccionAprobadaUpsertWithWhereUniqueWithoutUsuarioInput | SeccionAprobadaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: SeccionAprobadaCreateManyUsuarioInputEnvelope
    set?: SeccionAprobadaWhereUniqueInput | SeccionAprobadaWhereUniqueInput[]
    disconnect?: SeccionAprobadaWhereUniqueInput | SeccionAprobadaWhereUniqueInput[]
    delete?: SeccionAprobadaWhereUniqueInput | SeccionAprobadaWhereUniqueInput[]
    connect?: SeccionAprobadaWhereUniqueInput | SeccionAprobadaWhereUniqueInput[]
    update?: SeccionAprobadaUpdateWithWhereUniqueWithoutUsuarioInput | SeccionAprobadaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: SeccionAprobadaUpdateManyWithWhereWithoutUsuarioInput | SeccionAprobadaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: SeccionAprobadaScalarWhereInput | SeccionAprobadaScalarWhereInput[]
  }

  export type InsigniaUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<InsigniaCreateWithoutUsuariosInput, InsigniaUncheckedCreateWithoutUsuariosInput> | InsigniaCreateWithoutUsuariosInput[] | InsigniaUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: InsigniaCreateOrConnectWithoutUsuariosInput | InsigniaCreateOrConnectWithoutUsuariosInput[]
    upsert?: InsigniaUpsertWithWhereUniqueWithoutUsuariosInput | InsigniaUpsertWithWhereUniqueWithoutUsuariosInput[]
    set?: InsigniaWhereUniqueInput | InsigniaWhereUniqueInput[]
    disconnect?: InsigniaWhereUniqueInput | InsigniaWhereUniqueInput[]
    delete?: InsigniaWhereUniqueInput | InsigniaWhereUniqueInput[]
    connect?: InsigniaWhereUniqueInput | InsigniaWhereUniqueInput[]
    update?: InsigniaUpdateWithWhereUniqueWithoutUsuariosInput | InsigniaUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: InsigniaUpdateManyWithWhereWithoutUsuariosInput | InsigniaUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: InsigniaScalarWhereInput | InsigniaScalarWhereInput[]
  }

  export type RecursoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RecursoCreateWithoutUsuarioInput, RecursoUncheckedCreateWithoutUsuarioInput> | RecursoCreateWithoutUsuarioInput[] | RecursoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RecursoCreateOrConnectWithoutUsuarioInput | RecursoCreateOrConnectWithoutUsuarioInput[]
    upsert?: RecursoUpsertWithWhereUniqueWithoutUsuarioInput | RecursoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RecursoCreateManyUsuarioInputEnvelope
    set?: RecursoWhereUniqueInput | RecursoWhereUniqueInput[]
    disconnect?: RecursoWhereUniqueInput | RecursoWhereUniqueInput[]
    delete?: RecursoWhereUniqueInput | RecursoWhereUniqueInput[]
    connect?: RecursoWhereUniqueInput | RecursoWhereUniqueInput[]
    update?: RecursoUpdateWithWhereUniqueWithoutUsuarioInput | RecursoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RecursoUpdateManyWithWhereWithoutUsuarioInput | RecursoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RecursoScalarWhereInput | RecursoScalarWhereInput[]
  }

  export type AuditoriaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AuditoriaCreateWithoutUsuarioInput, AuditoriaUncheckedCreateWithoutUsuarioInput> | AuditoriaCreateWithoutUsuarioInput[] | AuditoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AuditoriaCreateOrConnectWithoutUsuarioInput | AuditoriaCreateOrConnectWithoutUsuarioInput[]
    upsert?: AuditoriaUpsertWithWhereUniqueWithoutUsuarioInput | AuditoriaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AuditoriaCreateManyUsuarioInputEnvelope
    set?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
    disconnect?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
    delete?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
    connect?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
    update?: AuditoriaUpdateWithWhereUniqueWithoutUsuarioInput | AuditoriaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AuditoriaUpdateManyWithWhereWithoutUsuarioInput | AuditoriaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AuditoriaScalarWhereInput | AuditoriaScalarWhereInput[]
  }

  export type ProgresoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ProgresoCreateWithoutUsuarioInput, ProgresoUncheckedCreateWithoutUsuarioInput> | ProgresoCreateWithoutUsuarioInput[] | ProgresoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProgresoCreateOrConnectWithoutUsuarioInput | ProgresoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ProgresoUpsertWithWhereUniqueWithoutUsuarioInput | ProgresoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ProgresoCreateManyUsuarioInputEnvelope
    set?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    disconnect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    delete?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    connect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    update?: ProgresoUpdateWithWhereUniqueWithoutUsuarioInput | ProgresoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ProgresoUpdateManyWithWhereWithoutUsuarioInput | ProgresoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ProgresoScalarWhereInput | ProgresoScalarWhereInput[]
  }

  export type SeccionAprobadaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<SeccionAprobadaCreateWithoutUsuarioInput, SeccionAprobadaUncheckedCreateWithoutUsuarioInput> | SeccionAprobadaCreateWithoutUsuarioInput[] | SeccionAprobadaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SeccionAprobadaCreateOrConnectWithoutUsuarioInput | SeccionAprobadaCreateOrConnectWithoutUsuarioInput[]
    upsert?: SeccionAprobadaUpsertWithWhereUniqueWithoutUsuarioInput | SeccionAprobadaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: SeccionAprobadaCreateManyUsuarioInputEnvelope
    set?: SeccionAprobadaWhereUniqueInput | SeccionAprobadaWhereUniqueInput[]
    disconnect?: SeccionAprobadaWhereUniqueInput | SeccionAprobadaWhereUniqueInput[]
    delete?: SeccionAprobadaWhereUniqueInput | SeccionAprobadaWhereUniqueInput[]
    connect?: SeccionAprobadaWhereUniqueInput | SeccionAprobadaWhereUniqueInput[]
    update?: SeccionAprobadaUpdateWithWhereUniqueWithoutUsuarioInput | SeccionAprobadaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: SeccionAprobadaUpdateManyWithWhereWithoutUsuarioInput | SeccionAprobadaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: SeccionAprobadaScalarWhereInput | SeccionAprobadaScalarWhereInput[]
  }

  export type InsigniaUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<InsigniaCreateWithoutUsuariosInput, InsigniaUncheckedCreateWithoutUsuariosInput> | InsigniaCreateWithoutUsuariosInput[] | InsigniaUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: InsigniaCreateOrConnectWithoutUsuariosInput | InsigniaCreateOrConnectWithoutUsuariosInput[]
    upsert?: InsigniaUpsertWithWhereUniqueWithoutUsuariosInput | InsigniaUpsertWithWhereUniqueWithoutUsuariosInput[]
    set?: InsigniaWhereUniqueInput | InsigniaWhereUniqueInput[]
    disconnect?: InsigniaWhereUniqueInput | InsigniaWhereUniqueInput[]
    delete?: InsigniaWhereUniqueInput | InsigniaWhereUniqueInput[]
    connect?: InsigniaWhereUniqueInput | InsigniaWhereUniqueInput[]
    update?: InsigniaUpdateWithWhereUniqueWithoutUsuariosInput | InsigniaUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: InsigniaUpdateManyWithWhereWithoutUsuariosInput | InsigniaUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: InsigniaScalarWhereInput | InsigniaScalarWhereInput[]
  }

  export type RecursoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RecursoCreateWithoutUsuarioInput, RecursoUncheckedCreateWithoutUsuarioInput> | RecursoCreateWithoutUsuarioInput[] | RecursoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RecursoCreateOrConnectWithoutUsuarioInput | RecursoCreateOrConnectWithoutUsuarioInput[]
    upsert?: RecursoUpsertWithWhereUniqueWithoutUsuarioInput | RecursoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RecursoCreateManyUsuarioInputEnvelope
    set?: RecursoWhereUniqueInput | RecursoWhereUniqueInput[]
    disconnect?: RecursoWhereUniqueInput | RecursoWhereUniqueInput[]
    delete?: RecursoWhereUniqueInput | RecursoWhereUniqueInput[]
    connect?: RecursoWhereUniqueInput | RecursoWhereUniqueInput[]
    update?: RecursoUpdateWithWhereUniqueWithoutUsuarioInput | RecursoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RecursoUpdateManyWithWhereWithoutUsuarioInput | RecursoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RecursoScalarWhereInput | RecursoScalarWhereInput[]
  }

  export type AuditoriaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AuditoriaCreateWithoutUsuarioInput, AuditoriaUncheckedCreateWithoutUsuarioInput> | AuditoriaCreateWithoutUsuarioInput[] | AuditoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AuditoriaCreateOrConnectWithoutUsuarioInput | AuditoriaCreateOrConnectWithoutUsuarioInput[]
    upsert?: AuditoriaUpsertWithWhereUniqueWithoutUsuarioInput | AuditoriaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AuditoriaCreateManyUsuarioInputEnvelope
    set?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
    disconnect?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
    delete?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
    connect?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
    update?: AuditoriaUpdateWithWhereUniqueWithoutUsuarioInput | AuditoriaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AuditoriaUpdateManyWithWhereWithoutUsuarioInput | AuditoriaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AuditoriaScalarWhereInput | AuditoriaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutAuditoriasInput = {
    create?: XOR<UsuarioCreateWithoutAuditoriasInput, UsuarioUncheckedCreateWithoutAuditoriasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAuditoriasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutAuditoriasNestedInput = {
    create?: XOR<UsuarioCreateWithoutAuditoriasInput, UsuarioUncheckedCreateWithoutAuditoriasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAuditoriasInput
    upsert?: UsuarioUpsertWithoutAuditoriasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAuditoriasInput, UsuarioUpdateWithoutAuditoriasInput>, UsuarioUncheckedUpdateWithoutAuditoriasInput>
  }

  export type EscenarioCreateNestedManyWithoutSeccionInput = {
    create?: XOR<EscenarioCreateWithoutSeccionInput, EscenarioUncheckedCreateWithoutSeccionInput> | EscenarioCreateWithoutSeccionInput[] | EscenarioUncheckedCreateWithoutSeccionInput[]
    connectOrCreate?: EscenarioCreateOrConnectWithoutSeccionInput | EscenarioCreateOrConnectWithoutSeccionInput[]
    createMany?: EscenarioCreateManySeccionInputEnvelope
    connect?: EscenarioWhereUniqueInput | EscenarioWhereUniqueInput[]
  }

  export type SeccionAprobadaCreateNestedManyWithoutSeccionInput = {
    create?: XOR<SeccionAprobadaCreateWithoutSeccionInput, SeccionAprobadaUncheckedCreateWithoutSeccionInput> | SeccionAprobadaCreateWithoutSeccionInput[] | SeccionAprobadaUncheckedCreateWithoutSeccionInput[]
    connectOrCreate?: SeccionAprobadaCreateOrConnectWithoutSeccionInput | SeccionAprobadaCreateOrConnectWithoutSeccionInput[]
    createMany?: SeccionAprobadaCreateManySeccionInputEnvelope
    connect?: SeccionAprobadaWhereUniqueInput | SeccionAprobadaWhereUniqueInput[]
  }

  export type RecursoCreateNestedOneWithoutSeccionInput = {
    create?: XOR<RecursoCreateWithoutSeccionInput, RecursoUncheckedCreateWithoutSeccionInput>
    connectOrCreate?: RecursoCreateOrConnectWithoutSeccionInput
    connect?: RecursoWhereUniqueInput
  }

  export type EscenarioUncheckedCreateNestedManyWithoutSeccionInput = {
    create?: XOR<EscenarioCreateWithoutSeccionInput, EscenarioUncheckedCreateWithoutSeccionInput> | EscenarioCreateWithoutSeccionInput[] | EscenarioUncheckedCreateWithoutSeccionInput[]
    connectOrCreate?: EscenarioCreateOrConnectWithoutSeccionInput | EscenarioCreateOrConnectWithoutSeccionInput[]
    createMany?: EscenarioCreateManySeccionInputEnvelope
    connect?: EscenarioWhereUniqueInput | EscenarioWhereUniqueInput[]
  }

  export type SeccionAprobadaUncheckedCreateNestedManyWithoutSeccionInput = {
    create?: XOR<SeccionAprobadaCreateWithoutSeccionInput, SeccionAprobadaUncheckedCreateWithoutSeccionInput> | SeccionAprobadaCreateWithoutSeccionInput[] | SeccionAprobadaUncheckedCreateWithoutSeccionInput[]
    connectOrCreate?: SeccionAprobadaCreateOrConnectWithoutSeccionInput | SeccionAprobadaCreateOrConnectWithoutSeccionInput[]
    createMany?: SeccionAprobadaCreateManySeccionInputEnvelope
    connect?: SeccionAprobadaWhereUniqueInput | SeccionAprobadaWhereUniqueInput[]
  }

  export type RecursoUncheckedCreateNestedOneWithoutSeccionInput = {
    create?: XOR<RecursoCreateWithoutSeccionInput, RecursoUncheckedCreateWithoutSeccionInput>
    connectOrCreate?: RecursoCreateOrConnectWithoutSeccionInput
    connect?: RecursoWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EscenarioUpdateManyWithoutSeccionNestedInput = {
    create?: XOR<EscenarioCreateWithoutSeccionInput, EscenarioUncheckedCreateWithoutSeccionInput> | EscenarioCreateWithoutSeccionInput[] | EscenarioUncheckedCreateWithoutSeccionInput[]
    connectOrCreate?: EscenarioCreateOrConnectWithoutSeccionInput | EscenarioCreateOrConnectWithoutSeccionInput[]
    upsert?: EscenarioUpsertWithWhereUniqueWithoutSeccionInput | EscenarioUpsertWithWhereUniqueWithoutSeccionInput[]
    createMany?: EscenarioCreateManySeccionInputEnvelope
    set?: EscenarioWhereUniqueInput | EscenarioWhereUniqueInput[]
    disconnect?: EscenarioWhereUniqueInput | EscenarioWhereUniqueInput[]
    delete?: EscenarioWhereUniqueInput | EscenarioWhereUniqueInput[]
    connect?: EscenarioWhereUniqueInput | EscenarioWhereUniqueInput[]
    update?: EscenarioUpdateWithWhereUniqueWithoutSeccionInput | EscenarioUpdateWithWhereUniqueWithoutSeccionInput[]
    updateMany?: EscenarioUpdateManyWithWhereWithoutSeccionInput | EscenarioUpdateManyWithWhereWithoutSeccionInput[]
    deleteMany?: EscenarioScalarWhereInput | EscenarioScalarWhereInput[]
  }

  export type SeccionAprobadaUpdateManyWithoutSeccionNestedInput = {
    create?: XOR<SeccionAprobadaCreateWithoutSeccionInput, SeccionAprobadaUncheckedCreateWithoutSeccionInput> | SeccionAprobadaCreateWithoutSeccionInput[] | SeccionAprobadaUncheckedCreateWithoutSeccionInput[]
    connectOrCreate?: SeccionAprobadaCreateOrConnectWithoutSeccionInput | SeccionAprobadaCreateOrConnectWithoutSeccionInput[]
    upsert?: SeccionAprobadaUpsertWithWhereUniqueWithoutSeccionInput | SeccionAprobadaUpsertWithWhereUniqueWithoutSeccionInput[]
    createMany?: SeccionAprobadaCreateManySeccionInputEnvelope
    set?: SeccionAprobadaWhereUniqueInput | SeccionAprobadaWhereUniqueInput[]
    disconnect?: SeccionAprobadaWhereUniqueInput | SeccionAprobadaWhereUniqueInput[]
    delete?: SeccionAprobadaWhereUniqueInput | SeccionAprobadaWhereUniqueInput[]
    connect?: SeccionAprobadaWhereUniqueInput | SeccionAprobadaWhereUniqueInput[]
    update?: SeccionAprobadaUpdateWithWhereUniqueWithoutSeccionInput | SeccionAprobadaUpdateWithWhereUniqueWithoutSeccionInput[]
    updateMany?: SeccionAprobadaUpdateManyWithWhereWithoutSeccionInput | SeccionAprobadaUpdateManyWithWhereWithoutSeccionInput[]
    deleteMany?: SeccionAprobadaScalarWhereInput | SeccionAprobadaScalarWhereInput[]
  }

  export type RecursoUpdateOneWithoutSeccionNestedInput = {
    create?: XOR<RecursoCreateWithoutSeccionInput, RecursoUncheckedCreateWithoutSeccionInput>
    connectOrCreate?: RecursoCreateOrConnectWithoutSeccionInput
    upsert?: RecursoUpsertWithoutSeccionInput
    disconnect?: RecursoWhereInput | boolean
    delete?: RecursoWhereInput | boolean
    connect?: RecursoWhereUniqueInput
    update?: XOR<XOR<RecursoUpdateToOneWithWhereWithoutSeccionInput, RecursoUpdateWithoutSeccionInput>, RecursoUncheckedUpdateWithoutSeccionInput>
  }

  export type EscenarioUncheckedUpdateManyWithoutSeccionNestedInput = {
    create?: XOR<EscenarioCreateWithoutSeccionInput, EscenarioUncheckedCreateWithoutSeccionInput> | EscenarioCreateWithoutSeccionInput[] | EscenarioUncheckedCreateWithoutSeccionInput[]
    connectOrCreate?: EscenarioCreateOrConnectWithoutSeccionInput | EscenarioCreateOrConnectWithoutSeccionInput[]
    upsert?: EscenarioUpsertWithWhereUniqueWithoutSeccionInput | EscenarioUpsertWithWhereUniqueWithoutSeccionInput[]
    createMany?: EscenarioCreateManySeccionInputEnvelope
    set?: EscenarioWhereUniqueInput | EscenarioWhereUniqueInput[]
    disconnect?: EscenarioWhereUniqueInput | EscenarioWhereUniqueInput[]
    delete?: EscenarioWhereUniqueInput | EscenarioWhereUniqueInput[]
    connect?: EscenarioWhereUniqueInput | EscenarioWhereUniqueInput[]
    update?: EscenarioUpdateWithWhereUniqueWithoutSeccionInput | EscenarioUpdateWithWhereUniqueWithoutSeccionInput[]
    updateMany?: EscenarioUpdateManyWithWhereWithoutSeccionInput | EscenarioUpdateManyWithWhereWithoutSeccionInput[]
    deleteMany?: EscenarioScalarWhereInput | EscenarioScalarWhereInput[]
  }

  export type SeccionAprobadaUncheckedUpdateManyWithoutSeccionNestedInput = {
    create?: XOR<SeccionAprobadaCreateWithoutSeccionInput, SeccionAprobadaUncheckedCreateWithoutSeccionInput> | SeccionAprobadaCreateWithoutSeccionInput[] | SeccionAprobadaUncheckedCreateWithoutSeccionInput[]
    connectOrCreate?: SeccionAprobadaCreateOrConnectWithoutSeccionInput | SeccionAprobadaCreateOrConnectWithoutSeccionInput[]
    upsert?: SeccionAprobadaUpsertWithWhereUniqueWithoutSeccionInput | SeccionAprobadaUpsertWithWhereUniqueWithoutSeccionInput[]
    createMany?: SeccionAprobadaCreateManySeccionInputEnvelope
    set?: SeccionAprobadaWhereUniqueInput | SeccionAprobadaWhereUniqueInput[]
    disconnect?: SeccionAprobadaWhereUniqueInput | SeccionAprobadaWhereUniqueInput[]
    delete?: SeccionAprobadaWhereUniqueInput | SeccionAprobadaWhereUniqueInput[]
    connect?: SeccionAprobadaWhereUniqueInput | SeccionAprobadaWhereUniqueInput[]
    update?: SeccionAprobadaUpdateWithWhereUniqueWithoutSeccionInput | SeccionAprobadaUpdateWithWhereUniqueWithoutSeccionInput[]
    updateMany?: SeccionAprobadaUpdateManyWithWhereWithoutSeccionInput | SeccionAprobadaUpdateManyWithWhereWithoutSeccionInput[]
    deleteMany?: SeccionAprobadaScalarWhereInput | SeccionAprobadaScalarWhereInput[]
  }

  export type RecursoUncheckedUpdateOneWithoutSeccionNestedInput = {
    create?: XOR<RecursoCreateWithoutSeccionInput, RecursoUncheckedCreateWithoutSeccionInput>
    connectOrCreate?: RecursoCreateOrConnectWithoutSeccionInput
    upsert?: RecursoUpsertWithoutSeccionInput
    disconnect?: RecursoWhereInput | boolean
    delete?: RecursoWhereInput | boolean
    connect?: RecursoWhereUniqueInput
    update?: XOR<XOR<RecursoUpdateToOneWithWhereWithoutSeccionInput, RecursoUpdateWithoutSeccionInput>, RecursoUncheckedUpdateWithoutSeccionInput>
  }

  export type UsuarioCreateNestedOneWithoutSeccionesAprobadasInput = {
    create?: XOR<UsuarioCreateWithoutSeccionesAprobadasInput, UsuarioUncheckedCreateWithoutSeccionesAprobadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSeccionesAprobadasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type SeccionCreateNestedOneWithoutAprobadaPorInput = {
    create?: XOR<SeccionCreateWithoutAprobadaPorInput, SeccionUncheckedCreateWithoutAprobadaPorInput>
    connectOrCreate?: SeccionCreateOrConnectWithoutAprobadaPorInput
    connect?: SeccionWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutSeccionesAprobadasNestedInput = {
    create?: XOR<UsuarioCreateWithoutSeccionesAprobadasInput, UsuarioUncheckedCreateWithoutSeccionesAprobadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSeccionesAprobadasInput
    upsert?: UsuarioUpsertWithoutSeccionesAprobadasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutSeccionesAprobadasInput, UsuarioUpdateWithoutSeccionesAprobadasInput>, UsuarioUncheckedUpdateWithoutSeccionesAprobadasInput>
  }

  export type SeccionUpdateOneRequiredWithoutAprobadaPorNestedInput = {
    create?: XOR<SeccionCreateWithoutAprobadaPorInput, SeccionUncheckedCreateWithoutAprobadaPorInput>
    connectOrCreate?: SeccionCreateOrConnectWithoutAprobadaPorInput
    upsert?: SeccionUpsertWithoutAprobadaPorInput
    connect?: SeccionWhereUniqueInput
    update?: XOR<XOR<SeccionUpdateToOneWithWhereWithoutAprobadaPorInput, SeccionUpdateWithoutAprobadaPorInput>, SeccionUncheckedUpdateWithoutAprobadaPorInput>
  }

  export type SeccionCreateNestedOneWithoutEscenariosInput = {
    create?: XOR<SeccionCreateWithoutEscenariosInput, SeccionUncheckedCreateWithoutEscenariosInput>
    connectOrCreate?: SeccionCreateOrConnectWithoutEscenariosInput
    connect?: SeccionWhereUniqueInput
  }

  export type OpcionCreateNestedManyWithoutEscenarioInput = {
    create?: XOR<OpcionCreateWithoutEscenarioInput, OpcionUncheckedCreateWithoutEscenarioInput> | OpcionCreateWithoutEscenarioInput[] | OpcionUncheckedCreateWithoutEscenarioInput[]
    connectOrCreate?: OpcionCreateOrConnectWithoutEscenarioInput | OpcionCreateOrConnectWithoutEscenarioInput[]
    createMany?: OpcionCreateManyEscenarioInputEnvelope
    connect?: OpcionWhereUniqueInput | OpcionWhereUniqueInput[]
  }

  export type InsigniaCreateNestedManyWithoutEscenarioInput = {
    create?: XOR<InsigniaCreateWithoutEscenarioInput, InsigniaUncheckedCreateWithoutEscenarioInput> | InsigniaCreateWithoutEscenarioInput[] | InsigniaUncheckedCreateWithoutEscenarioInput[]
    connectOrCreate?: InsigniaCreateOrConnectWithoutEscenarioInput | InsigniaCreateOrConnectWithoutEscenarioInput[]
    createMany?: InsigniaCreateManyEscenarioInputEnvelope
    connect?: InsigniaWhereUniqueInput | InsigniaWhereUniqueInput[]
  }

  export type ProgresoCreateNestedManyWithoutEscenarioInput = {
    create?: XOR<ProgresoCreateWithoutEscenarioInput, ProgresoUncheckedCreateWithoutEscenarioInput> | ProgresoCreateWithoutEscenarioInput[] | ProgresoUncheckedCreateWithoutEscenarioInput[]
    connectOrCreate?: ProgresoCreateOrConnectWithoutEscenarioInput | ProgresoCreateOrConnectWithoutEscenarioInput[]
    createMany?: ProgresoCreateManyEscenarioInputEnvelope
    connect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
  }

  export type OpcionUncheckedCreateNestedManyWithoutEscenarioInput = {
    create?: XOR<OpcionCreateWithoutEscenarioInput, OpcionUncheckedCreateWithoutEscenarioInput> | OpcionCreateWithoutEscenarioInput[] | OpcionUncheckedCreateWithoutEscenarioInput[]
    connectOrCreate?: OpcionCreateOrConnectWithoutEscenarioInput | OpcionCreateOrConnectWithoutEscenarioInput[]
    createMany?: OpcionCreateManyEscenarioInputEnvelope
    connect?: OpcionWhereUniqueInput | OpcionWhereUniqueInput[]
  }

  export type InsigniaUncheckedCreateNestedManyWithoutEscenarioInput = {
    create?: XOR<InsigniaCreateWithoutEscenarioInput, InsigniaUncheckedCreateWithoutEscenarioInput> | InsigniaCreateWithoutEscenarioInput[] | InsigniaUncheckedCreateWithoutEscenarioInput[]
    connectOrCreate?: InsigniaCreateOrConnectWithoutEscenarioInput | InsigniaCreateOrConnectWithoutEscenarioInput[]
    createMany?: InsigniaCreateManyEscenarioInputEnvelope
    connect?: InsigniaWhereUniqueInput | InsigniaWhereUniqueInput[]
  }

  export type ProgresoUncheckedCreateNestedManyWithoutEscenarioInput = {
    create?: XOR<ProgresoCreateWithoutEscenarioInput, ProgresoUncheckedCreateWithoutEscenarioInput> | ProgresoCreateWithoutEscenarioInput[] | ProgresoUncheckedCreateWithoutEscenarioInput[]
    connectOrCreate?: ProgresoCreateOrConnectWithoutEscenarioInput | ProgresoCreateOrConnectWithoutEscenarioInput[]
    createMany?: ProgresoCreateManyEscenarioInputEnvelope
    connect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
  }

  export type SeccionUpdateOneRequiredWithoutEscenariosNestedInput = {
    create?: XOR<SeccionCreateWithoutEscenariosInput, SeccionUncheckedCreateWithoutEscenariosInput>
    connectOrCreate?: SeccionCreateOrConnectWithoutEscenariosInput
    upsert?: SeccionUpsertWithoutEscenariosInput
    connect?: SeccionWhereUniqueInput
    update?: XOR<XOR<SeccionUpdateToOneWithWhereWithoutEscenariosInput, SeccionUpdateWithoutEscenariosInput>, SeccionUncheckedUpdateWithoutEscenariosInput>
  }

  export type OpcionUpdateManyWithoutEscenarioNestedInput = {
    create?: XOR<OpcionCreateWithoutEscenarioInput, OpcionUncheckedCreateWithoutEscenarioInput> | OpcionCreateWithoutEscenarioInput[] | OpcionUncheckedCreateWithoutEscenarioInput[]
    connectOrCreate?: OpcionCreateOrConnectWithoutEscenarioInput | OpcionCreateOrConnectWithoutEscenarioInput[]
    upsert?: OpcionUpsertWithWhereUniqueWithoutEscenarioInput | OpcionUpsertWithWhereUniqueWithoutEscenarioInput[]
    createMany?: OpcionCreateManyEscenarioInputEnvelope
    set?: OpcionWhereUniqueInput | OpcionWhereUniqueInput[]
    disconnect?: OpcionWhereUniqueInput | OpcionWhereUniqueInput[]
    delete?: OpcionWhereUniqueInput | OpcionWhereUniqueInput[]
    connect?: OpcionWhereUniqueInput | OpcionWhereUniqueInput[]
    update?: OpcionUpdateWithWhereUniqueWithoutEscenarioInput | OpcionUpdateWithWhereUniqueWithoutEscenarioInput[]
    updateMany?: OpcionUpdateManyWithWhereWithoutEscenarioInput | OpcionUpdateManyWithWhereWithoutEscenarioInput[]
    deleteMany?: OpcionScalarWhereInput | OpcionScalarWhereInput[]
  }

  export type InsigniaUpdateManyWithoutEscenarioNestedInput = {
    create?: XOR<InsigniaCreateWithoutEscenarioInput, InsigniaUncheckedCreateWithoutEscenarioInput> | InsigniaCreateWithoutEscenarioInput[] | InsigniaUncheckedCreateWithoutEscenarioInput[]
    connectOrCreate?: InsigniaCreateOrConnectWithoutEscenarioInput | InsigniaCreateOrConnectWithoutEscenarioInput[]
    upsert?: InsigniaUpsertWithWhereUniqueWithoutEscenarioInput | InsigniaUpsertWithWhereUniqueWithoutEscenarioInput[]
    createMany?: InsigniaCreateManyEscenarioInputEnvelope
    set?: InsigniaWhereUniqueInput | InsigniaWhereUniqueInput[]
    disconnect?: InsigniaWhereUniqueInput | InsigniaWhereUniqueInput[]
    delete?: InsigniaWhereUniqueInput | InsigniaWhereUniqueInput[]
    connect?: InsigniaWhereUniqueInput | InsigniaWhereUniqueInput[]
    update?: InsigniaUpdateWithWhereUniqueWithoutEscenarioInput | InsigniaUpdateWithWhereUniqueWithoutEscenarioInput[]
    updateMany?: InsigniaUpdateManyWithWhereWithoutEscenarioInput | InsigniaUpdateManyWithWhereWithoutEscenarioInput[]
    deleteMany?: InsigniaScalarWhereInput | InsigniaScalarWhereInput[]
  }

  export type ProgresoUpdateManyWithoutEscenarioNestedInput = {
    create?: XOR<ProgresoCreateWithoutEscenarioInput, ProgresoUncheckedCreateWithoutEscenarioInput> | ProgresoCreateWithoutEscenarioInput[] | ProgresoUncheckedCreateWithoutEscenarioInput[]
    connectOrCreate?: ProgresoCreateOrConnectWithoutEscenarioInput | ProgresoCreateOrConnectWithoutEscenarioInput[]
    upsert?: ProgresoUpsertWithWhereUniqueWithoutEscenarioInput | ProgresoUpsertWithWhereUniqueWithoutEscenarioInput[]
    createMany?: ProgresoCreateManyEscenarioInputEnvelope
    set?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    disconnect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    delete?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    connect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    update?: ProgresoUpdateWithWhereUniqueWithoutEscenarioInput | ProgresoUpdateWithWhereUniqueWithoutEscenarioInput[]
    updateMany?: ProgresoUpdateManyWithWhereWithoutEscenarioInput | ProgresoUpdateManyWithWhereWithoutEscenarioInput[]
    deleteMany?: ProgresoScalarWhereInput | ProgresoScalarWhereInput[]
  }

  export type OpcionUncheckedUpdateManyWithoutEscenarioNestedInput = {
    create?: XOR<OpcionCreateWithoutEscenarioInput, OpcionUncheckedCreateWithoutEscenarioInput> | OpcionCreateWithoutEscenarioInput[] | OpcionUncheckedCreateWithoutEscenarioInput[]
    connectOrCreate?: OpcionCreateOrConnectWithoutEscenarioInput | OpcionCreateOrConnectWithoutEscenarioInput[]
    upsert?: OpcionUpsertWithWhereUniqueWithoutEscenarioInput | OpcionUpsertWithWhereUniqueWithoutEscenarioInput[]
    createMany?: OpcionCreateManyEscenarioInputEnvelope
    set?: OpcionWhereUniqueInput | OpcionWhereUniqueInput[]
    disconnect?: OpcionWhereUniqueInput | OpcionWhereUniqueInput[]
    delete?: OpcionWhereUniqueInput | OpcionWhereUniqueInput[]
    connect?: OpcionWhereUniqueInput | OpcionWhereUniqueInput[]
    update?: OpcionUpdateWithWhereUniqueWithoutEscenarioInput | OpcionUpdateWithWhereUniqueWithoutEscenarioInput[]
    updateMany?: OpcionUpdateManyWithWhereWithoutEscenarioInput | OpcionUpdateManyWithWhereWithoutEscenarioInput[]
    deleteMany?: OpcionScalarWhereInput | OpcionScalarWhereInput[]
  }

  export type InsigniaUncheckedUpdateManyWithoutEscenarioNestedInput = {
    create?: XOR<InsigniaCreateWithoutEscenarioInput, InsigniaUncheckedCreateWithoutEscenarioInput> | InsigniaCreateWithoutEscenarioInput[] | InsigniaUncheckedCreateWithoutEscenarioInput[]
    connectOrCreate?: InsigniaCreateOrConnectWithoutEscenarioInput | InsigniaCreateOrConnectWithoutEscenarioInput[]
    upsert?: InsigniaUpsertWithWhereUniqueWithoutEscenarioInput | InsigniaUpsertWithWhereUniqueWithoutEscenarioInput[]
    createMany?: InsigniaCreateManyEscenarioInputEnvelope
    set?: InsigniaWhereUniqueInput | InsigniaWhereUniqueInput[]
    disconnect?: InsigniaWhereUniqueInput | InsigniaWhereUniqueInput[]
    delete?: InsigniaWhereUniqueInput | InsigniaWhereUniqueInput[]
    connect?: InsigniaWhereUniqueInput | InsigniaWhereUniqueInput[]
    update?: InsigniaUpdateWithWhereUniqueWithoutEscenarioInput | InsigniaUpdateWithWhereUniqueWithoutEscenarioInput[]
    updateMany?: InsigniaUpdateManyWithWhereWithoutEscenarioInput | InsigniaUpdateManyWithWhereWithoutEscenarioInput[]
    deleteMany?: InsigniaScalarWhereInput | InsigniaScalarWhereInput[]
  }

  export type ProgresoUncheckedUpdateManyWithoutEscenarioNestedInput = {
    create?: XOR<ProgresoCreateWithoutEscenarioInput, ProgresoUncheckedCreateWithoutEscenarioInput> | ProgresoCreateWithoutEscenarioInput[] | ProgresoUncheckedCreateWithoutEscenarioInput[]
    connectOrCreate?: ProgresoCreateOrConnectWithoutEscenarioInput | ProgresoCreateOrConnectWithoutEscenarioInput[]
    upsert?: ProgresoUpsertWithWhereUniqueWithoutEscenarioInput | ProgresoUpsertWithWhereUniqueWithoutEscenarioInput[]
    createMany?: ProgresoCreateManyEscenarioInputEnvelope
    set?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    disconnect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    delete?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    connect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    update?: ProgresoUpdateWithWhereUniqueWithoutEscenarioInput | ProgresoUpdateWithWhereUniqueWithoutEscenarioInput[]
    updateMany?: ProgresoUpdateManyWithWhereWithoutEscenarioInput | ProgresoUpdateManyWithWhereWithoutEscenarioInput[]
    deleteMany?: ProgresoScalarWhereInput | ProgresoScalarWhereInput[]
  }

  export type EscenarioCreateNestedOneWithoutOpcionesInput = {
    create?: XOR<EscenarioCreateWithoutOpcionesInput, EscenarioUncheckedCreateWithoutOpcionesInput>
    connectOrCreate?: EscenarioCreateOrConnectWithoutOpcionesInput
    connect?: EscenarioWhereUniqueInput
  }

  export type EscenarioUpdateOneRequiredWithoutOpcionesNestedInput = {
    create?: XOR<EscenarioCreateWithoutOpcionesInput, EscenarioUncheckedCreateWithoutOpcionesInput>
    connectOrCreate?: EscenarioCreateOrConnectWithoutOpcionesInput
    upsert?: EscenarioUpsertWithoutOpcionesInput
    connect?: EscenarioWhereUniqueInput
    update?: XOR<XOR<EscenarioUpdateToOneWithWhereWithoutOpcionesInput, EscenarioUpdateWithoutOpcionesInput>, EscenarioUncheckedUpdateWithoutOpcionesInput>
  }

  export type UsuarioCreateNestedOneWithoutRecursosInput = {
    create?: XOR<UsuarioCreateWithoutRecursosInput, UsuarioUncheckedCreateWithoutRecursosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRecursosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type SeccionCreateNestedOneWithoutRecursoOtorgadoInput = {
    create?: XOR<SeccionCreateWithoutRecursoOtorgadoInput, SeccionUncheckedCreateWithoutRecursoOtorgadoInput>
    connectOrCreate?: SeccionCreateOrConnectWithoutRecursoOtorgadoInput
    connect?: SeccionWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutRecursosNestedInput = {
    create?: XOR<UsuarioCreateWithoutRecursosInput, UsuarioUncheckedCreateWithoutRecursosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRecursosInput
    upsert?: UsuarioUpsertWithoutRecursosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutRecursosInput, UsuarioUpdateWithoutRecursosInput>, UsuarioUncheckedUpdateWithoutRecursosInput>
  }

  export type SeccionUpdateOneRequiredWithoutRecursoOtorgadoNestedInput = {
    create?: XOR<SeccionCreateWithoutRecursoOtorgadoInput, SeccionUncheckedCreateWithoutRecursoOtorgadoInput>
    connectOrCreate?: SeccionCreateOrConnectWithoutRecursoOtorgadoInput
    upsert?: SeccionUpsertWithoutRecursoOtorgadoInput
    connect?: SeccionWhereUniqueInput
    update?: XOR<XOR<SeccionUpdateToOneWithWhereWithoutRecursoOtorgadoInput, SeccionUpdateWithoutRecursoOtorgadoInput>, SeccionUncheckedUpdateWithoutRecursoOtorgadoInput>
  }

  export type EscenarioCreateNestedOneWithoutInsigniasInput = {
    create?: XOR<EscenarioCreateWithoutInsigniasInput, EscenarioUncheckedCreateWithoutInsigniasInput>
    connectOrCreate?: EscenarioCreateOrConnectWithoutInsigniasInput
    connect?: EscenarioWhereUniqueInput
  }

  export type UsuarioCreateNestedManyWithoutInsigniasInput = {
    create?: XOR<UsuarioCreateWithoutInsigniasInput, UsuarioUncheckedCreateWithoutInsigniasInput> | UsuarioCreateWithoutInsigniasInput[] | UsuarioUncheckedCreateWithoutInsigniasInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutInsigniasInput | UsuarioCreateOrConnectWithoutInsigniasInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutInsigniasInput = {
    create?: XOR<UsuarioCreateWithoutInsigniasInput, UsuarioUncheckedCreateWithoutInsigniasInput> | UsuarioCreateWithoutInsigniasInput[] | UsuarioUncheckedCreateWithoutInsigniasInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutInsigniasInput | UsuarioCreateOrConnectWithoutInsigniasInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type EscenarioUpdateOneRequiredWithoutInsigniasNestedInput = {
    create?: XOR<EscenarioCreateWithoutInsigniasInput, EscenarioUncheckedCreateWithoutInsigniasInput>
    connectOrCreate?: EscenarioCreateOrConnectWithoutInsigniasInput
    upsert?: EscenarioUpsertWithoutInsigniasInput
    connect?: EscenarioWhereUniqueInput
    update?: XOR<XOR<EscenarioUpdateToOneWithWhereWithoutInsigniasInput, EscenarioUpdateWithoutInsigniasInput>, EscenarioUncheckedUpdateWithoutInsigniasInput>
  }

  export type UsuarioUpdateManyWithoutInsigniasNestedInput = {
    create?: XOR<UsuarioCreateWithoutInsigniasInput, UsuarioUncheckedCreateWithoutInsigniasInput> | UsuarioCreateWithoutInsigniasInput[] | UsuarioUncheckedCreateWithoutInsigniasInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutInsigniasInput | UsuarioCreateOrConnectWithoutInsigniasInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutInsigniasInput | UsuarioUpsertWithWhereUniqueWithoutInsigniasInput[]
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutInsigniasInput | UsuarioUpdateWithWhereUniqueWithoutInsigniasInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutInsigniasInput | UsuarioUpdateManyWithWhereWithoutInsigniasInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutInsigniasNestedInput = {
    create?: XOR<UsuarioCreateWithoutInsigniasInput, UsuarioUncheckedCreateWithoutInsigniasInput> | UsuarioCreateWithoutInsigniasInput[] | UsuarioUncheckedCreateWithoutInsigniasInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutInsigniasInput | UsuarioCreateOrConnectWithoutInsigniasInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutInsigniasInput | UsuarioUpsertWithWhereUniqueWithoutInsigniasInput[]
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutInsigniasInput | UsuarioUpdateWithWhereUniqueWithoutInsigniasInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutInsigniasInput | UsuarioUpdateManyWithWhereWithoutInsigniasInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutProgresoInput = {
    create?: XOR<UsuarioCreateWithoutProgresoInput, UsuarioUncheckedCreateWithoutProgresoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProgresoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EscenarioCreateNestedOneWithoutProgresoInput = {
    create?: XOR<EscenarioCreateWithoutProgresoInput, EscenarioUncheckedCreateWithoutProgresoInput>
    connectOrCreate?: EscenarioCreateOrConnectWithoutProgresoInput
    connect?: EscenarioWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsuarioUpdateOneRequiredWithoutProgresoNestedInput = {
    create?: XOR<UsuarioCreateWithoutProgresoInput, UsuarioUncheckedCreateWithoutProgresoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProgresoInput
    upsert?: UsuarioUpsertWithoutProgresoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutProgresoInput, UsuarioUpdateWithoutProgresoInput>, UsuarioUncheckedUpdateWithoutProgresoInput>
  }

  export type EscenarioUpdateOneRequiredWithoutProgresoNestedInput = {
    create?: XOR<EscenarioCreateWithoutProgresoInput, EscenarioUncheckedCreateWithoutProgresoInput>
    connectOrCreate?: EscenarioCreateOrConnectWithoutProgresoInput
    upsert?: EscenarioUpsertWithoutProgresoInput
    connect?: EscenarioWhereUniqueInput
    update?: XOR<XOR<EscenarioUpdateToOneWithWhereWithoutProgresoInput, EscenarioUpdateWithoutProgresoInput>, EscenarioUncheckedUpdateWithoutProgresoInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedEnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProgresoCreateWithoutUsuarioInput = {
    puntosObtenidos?: number
    resuelto?: boolean
    intentosFallidos?: number
    updatedAt?: Date | string
    escenario: EscenarioCreateNestedOneWithoutProgresoInput
  }

  export type ProgresoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    escenarioId: number
    puntosObtenidos?: number
    resuelto?: boolean
    intentosFallidos?: number
    updatedAt?: Date | string
  }

  export type ProgresoCreateOrConnectWithoutUsuarioInput = {
    where: ProgresoWhereUniqueInput
    create: XOR<ProgresoCreateWithoutUsuarioInput, ProgresoUncheckedCreateWithoutUsuarioInput>
  }

  export type ProgresoCreateManyUsuarioInputEnvelope = {
    data: ProgresoCreateManyUsuarioInput | ProgresoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type SeccionAprobadaCreateWithoutUsuarioInput = {
    seccion: SeccionCreateNestedOneWithoutAprobadaPorInput
  }

  export type SeccionAprobadaUncheckedCreateWithoutUsuarioInput = {
    seccionId: number
  }

  export type SeccionAprobadaCreateOrConnectWithoutUsuarioInput = {
    where: SeccionAprobadaWhereUniqueInput
    create: XOR<SeccionAprobadaCreateWithoutUsuarioInput, SeccionAprobadaUncheckedCreateWithoutUsuarioInput>
  }

  export type SeccionAprobadaCreateManyUsuarioInputEnvelope = {
    data: SeccionAprobadaCreateManyUsuarioInput | SeccionAprobadaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type InsigniaCreateWithoutUsuariosInput = {
    id?: string
    nombre: string
    descripcion: string
    imagenUrl?: string | null
    puntosRequeridos?: number
    createdAt?: Date | string
    escenario: EscenarioCreateNestedOneWithoutInsigniasInput
  }

  export type InsigniaUncheckedCreateWithoutUsuariosInput = {
    id?: string
    nombre: string
    descripcion: string
    imagenUrl?: string | null
    puntosRequeridos?: number
    escenarioId: number
    createdAt?: Date | string
  }

  export type InsigniaCreateOrConnectWithoutUsuariosInput = {
    where: InsigniaWhereUniqueInput
    create: XOR<InsigniaCreateWithoutUsuariosInput, InsigniaUncheckedCreateWithoutUsuariosInput>
  }

  export type RecursoCreateWithoutUsuarioInput = {
    id?: string
    nombre: string
    valor?: number
    createdAt?: Date | string
    seccion: SeccionCreateNestedOneWithoutRecursoOtorgadoInput
  }

  export type RecursoUncheckedCreateWithoutUsuarioInput = {
    id?: string
    nombre: string
    valor?: number
    seccionId: number
    createdAt?: Date | string
  }

  export type RecursoCreateOrConnectWithoutUsuarioInput = {
    where: RecursoWhereUniqueInput
    create: XOR<RecursoCreateWithoutUsuarioInput, RecursoUncheckedCreateWithoutUsuarioInput>
  }

  export type RecursoCreateManyUsuarioInputEnvelope = {
    data: RecursoCreateManyUsuarioInput | RecursoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type AuditoriaCreateWithoutUsuarioInput = {
    accion: string
    entidad: string
    entidadId?: string | null
    detalles?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }

  export type AuditoriaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    accion: string
    entidad: string
    entidadId?: string | null
    detalles?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }

  export type AuditoriaCreateOrConnectWithoutUsuarioInput = {
    where: AuditoriaWhereUniqueInput
    create: XOR<AuditoriaCreateWithoutUsuarioInput, AuditoriaUncheckedCreateWithoutUsuarioInput>
  }

  export type AuditoriaCreateManyUsuarioInputEnvelope = {
    data: AuditoriaCreateManyUsuarioInput | AuditoriaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ProgresoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ProgresoWhereUniqueInput
    update: XOR<ProgresoUpdateWithoutUsuarioInput, ProgresoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ProgresoCreateWithoutUsuarioInput, ProgresoUncheckedCreateWithoutUsuarioInput>
  }

  export type ProgresoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ProgresoWhereUniqueInput
    data: XOR<ProgresoUpdateWithoutUsuarioInput, ProgresoUncheckedUpdateWithoutUsuarioInput>
  }

  export type ProgresoUpdateManyWithWhereWithoutUsuarioInput = {
    where: ProgresoScalarWhereInput
    data: XOR<ProgresoUpdateManyMutationInput, ProgresoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ProgresoScalarWhereInput = {
    AND?: ProgresoScalarWhereInput | ProgresoScalarWhereInput[]
    OR?: ProgresoScalarWhereInput[]
    NOT?: ProgresoScalarWhereInput | ProgresoScalarWhereInput[]
    id?: IntFilter<"Progreso"> | number
    usuarioId?: StringFilter<"Progreso"> | string
    escenarioId?: IntFilter<"Progreso"> | number
    puntosObtenidos?: IntFilter<"Progreso"> | number
    resuelto?: BoolFilter<"Progreso"> | boolean
    intentosFallidos?: IntFilter<"Progreso"> | number
    updatedAt?: DateTimeFilter<"Progreso"> | Date | string
  }

  export type SeccionAprobadaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: SeccionAprobadaWhereUniqueInput
    update: XOR<SeccionAprobadaUpdateWithoutUsuarioInput, SeccionAprobadaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<SeccionAprobadaCreateWithoutUsuarioInput, SeccionAprobadaUncheckedCreateWithoutUsuarioInput>
  }

  export type SeccionAprobadaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: SeccionAprobadaWhereUniqueInput
    data: XOR<SeccionAprobadaUpdateWithoutUsuarioInput, SeccionAprobadaUncheckedUpdateWithoutUsuarioInput>
  }

  export type SeccionAprobadaUpdateManyWithWhereWithoutUsuarioInput = {
    where: SeccionAprobadaScalarWhereInput
    data: XOR<SeccionAprobadaUpdateManyMutationInput, SeccionAprobadaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type SeccionAprobadaScalarWhereInput = {
    AND?: SeccionAprobadaScalarWhereInput | SeccionAprobadaScalarWhereInput[]
    OR?: SeccionAprobadaScalarWhereInput[]
    NOT?: SeccionAprobadaScalarWhereInput | SeccionAprobadaScalarWhereInput[]
    usuarioId?: StringFilter<"SeccionAprobada"> | string
    seccionId?: IntFilter<"SeccionAprobada"> | number
  }

  export type InsigniaUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: InsigniaWhereUniqueInput
    update: XOR<InsigniaUpdateWithoutUsuariosInput, InsigniaUncheckedUpdateWithoutUsuariosInput>
    create: XOR<InsigniaCreateWithoutUsuariosInput, InsigniaUncheckedCreateWithoutUsuariosInput>
  }

  export type InsigniaUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: InsigniaWhereUniqueInput
    data: XOR<InsigniaUpdateWithoutUsuariosInput, InsigniaUncheckedUpdateWithoutUsuariosInput>
  }

  export type InsigniaUpdateManyWithWhereWithoutUsuariosInput = {
    where: InsigniaScalarWhereInput
    data: XOR<InsigniaUpdateManyMutationInput, InsigniaUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type InsigniaScalarWhereInput = {
    AND?: InsigniaScalarWhereInput | InsigniaScalarWhereInput[]
    OR?: InsigniaScalarWhereInput[]
    NOT?: InsigniaScalarWhereInput | InsigniaScalarWhereInput[]
    id?: StringFilter<"Insignia"> | string
    nombre?: StringFilter<"Insignia"> | string
    descripcion?: StringFilter<"Insignia"> | string
    imagenUrl?: StringNullableFilter<"Insignia"> | string | null
    puntosRequeridos?: IntFilter<"Insignia"> | number
    escenarioId?: IntFilter<"Insignia"> | number
    createdAt?: DateTimeFilter<"Insignia"> | Date | string
  }

  export type RecursoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: RecursoWhereUniqueInput
    update: XOR<RecursoUpdateWithoutUsuarioInput, RecursoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<RecursoCreateWithoutUsuarioInput, RecursoUncheckedCreateWithoutUsuarioInput>
  }

  export type RecursoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: RecursoWhereUniqueInput
    data: XOR<RecursoUpdateWithoutUsuarioInput, RecursoUncheckedUpdateWithoutUsuarioInput>
  }

  export type RecursoUpdateManyWithWhereWithoutUsuarioInput = {
    where: RecursoScalarWhereInput
    data: XOR<RecursoUpdateManyMutationInput, RecursoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type RecursoScalarWhereInput = {
    AND?: RecursoScalarWhereInput | RecursoScalarWhereInput[]
    OR?: RecursoScalarWhereInput[]
    NOT?: RecursoScalarWhereInput | RecursoScalarWhereInput[]
    id?: StringFilter<"Recurso"> | string
    nombre?: StringFilter<"Recurso"> | string
    valor?: IntFilter<"Recurso"> | number
    usuarioId?: StringFilter<"Recurso"> | string
    seccionId?: IntFilter<"Recurso"> | number
    createdAt?: DateTimeFilter<"Recurso"> | Date | string
  }

  export type AuditoriaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: AuditoriaWhereUniqueInput
    update: XOR<AuditoriaUpdateWithoutUsuarioInput, AuditoriaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<AuditoriaCreateWithoutUsuarioInput, AuditoriaUncheckedCreateWithoutUsuarioInput>
  }

  export type AuditoriaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: AuditoriaWhereUniqueInput
    data: XOR<AuditoriaUpdateWithoutUsuarioInput, AuditoriaUncheckedUpdateWithoutUsuarioInput>
  }

  export type AuditoriaUpdateManyWithWhereWithoutUsuarioInput = {
    where: AuditoriaScalarWhereInput
    data: XOR<AuditoriaUpdateManyMutationInput, AuditoriaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type AuditoriaScalarWhereInput = {
    AND?: AuditoriaScalarWhereInput | AuditoriaScalarWhereInput[]
    OR?: AuditoriaScalarWhereInput[]
    NOT?: AuditoriaScalarWhereInput | AuditoriaScalarWhereInput[]
    id?: IntFilter<"Auditoria"> | number
    usuarioId?: StringFilter<"Auditoria"> | string
    accion?: StringFilter<"Auditoria"> | string
    entidad?: StringFilter<"Auditoria"> | string
    entidadId?: StringNullableFilter<"Auditoria"> | string | null
    detalles?: JsonNullableFilter<"Auditoria">
    timestamp?: DateTimeFilter<"Auditoria"> | Date | string
  }

  export type UsuarioCreateWithoutAuditoriasInput = {
    id: string
    email: string
    nombre?: string | null
    puntos?: number
    tokens?: number
    rol?: $Enums.Rol
    racha?: number
    ultimaConexion?: Date | string
    createdAt?: Date | string
    progreso?: ProgresoCreateNestedManyWithoutUsuarioInput
    seccionesAprobadas?: SeccionAprobadaCreateNestedManyWithoutUsuarioInput
    insignias?: InsigniaCreateNestedManyWithoutUsuariosInput
    recursos?: RecursoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutAuditoriasInput = {
    id: string
    email: string
    nombre?: string | null
    puntos?: number
    tokens?: number
    rol?: $Enums.Rol
    racha?: number
    ultimaConexion?: Date | string
    createdAt?: Date | string
    progreso?: ProgresoUncheckedCreateNestedManyWithoutUsuarioInput
    seccionesAprobadas?: SeccionAprobadaUncheckedCreateNestedManyWithoutUsuarioInput
    insignias?: InsigniaUncheckedCreateNestedManyWithoutUsuariosInput
    recursos?: RecursoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutAuditoriasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAuditoriasInput, UsuarioUncheckedCreateWithoutAuditoriasInput>
  }

  export type UsuarioUpsertWithoutAuditoriasInput = {
    update: XOR<UsuarioUpdateWithoutAuditoriasInput, UsuarioUncheckedUpdateWithoutAuditoriasInput>
    create: XOR<UsuarioCreateWithoutAuditoriasInput, UsuarioUncheckedCreateWithoutAuditoriasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAuditoriasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAuditoriasInput, UsuarioUncheckedUpdateWithoutAuditoriasInput>
  }

  export type UsuarioUpdateWithoutAuditoriasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    puntos?: IntFieldUpdateOperationsInput | number
    tokens?: IntFieldUpdateOperationsInput | number
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    racha?: IntFieldUpdateOperationsInput | number
    ultimaConexion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progreso?: ProgresoUpdateManyWithoutUsuarioNestedInput
    seccionesAprobadas?: SeccionAprobadaUpdateManyWithoutUsuarioNestedInput
    insignias?: InsigniaUpdateManyWithoutUsuariosNestedInput
    recursos?: RecursoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAuditoriasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    puntos?: IntFieldUpdateOperationsInput | number
    tokens?: IntFieldUpdateOperationsInput | number
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    racha?: IntFieldUpdateOperationsInput | number
    ultimaConexion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progreso?: ProgresoUncheckedUpdateManyWithoutUsuarioNestedInput
    seccionesAprobadas?: SeccionAprobadaUncheckedUpdateManyWithoutUsuarioNestedInput
    insignias?: InsigniaUncheckedUpdateManyWithoutUsuariosNestedInput
    recursos?: RecursoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type EscenarioCreateWithoutSeccionInput = {
    titulo: string
    descripcion: string
    pregunta: string
    explicacion?: string | null
    categoria: string
    opciones?: OpcionCreateNestedManyWithoutEscenarioInput
    insignias?: InsigniaCreateNestedManyWithoutEscenarioInput
    progreso?: ProgresoCreateNestedManyWithoutEscenarioInput
  }

  export type EscenarioUncheckedCreateWithoutSeccionInput = {
    id?: number
    titulo: string
    descripcion: string
    pregunta: string
    explicacion?: string | null
    categoria: string
    opciones?: OpcionUncheckedCreateNestedManyWithoutEscenarioInput
    insignias?: InsigniaUncheckedCreateNestedManyWithoutEscenarioInput
    progreso?: ProgresoUncheckedCreateNestedManyWithoutEscenarioInput
  }

  export type EscenarioCreateOrConnectWithoutSeccionInput = {
    where: EscenarioWhereUniqueInput
    create: XOR<EscenarioCreateWithoutSeccionInput, EscenarioUncheckedCreateWithoutSeccionInput>
  }

  export type EscenarioCreateManySeccionInputEnvelope = {
    data: EscenarioCreateManySeccionInput | EscenarioCreateManySeccionInput[]
    skipDuplicates?: boolean
  }

  export type SeccionAprobadaCreateWithoutSeccionInput = {
    usuario: UsuarioCreateNestedOneWithoutSeccionesAprobadasInput
  }

  export type SeccionAprobadaUncheckedCreateWithoutSeccionInput = {
    usuarioId: string
  }

  export type SeccionAprobadaCreateOrConnectWithoutSeccionInput = {
    where: SeccionAprobadaWhereUniqueInput
    create: XOR<SeccionAprobadaCreateWithoutSeccionInput, SeccionAprobadaUncheckedCreateWithoutSeccionInput>
  }

  export type SeccionAprobadaCreateManySeccionInputEnvelope = {
    data: SeccionAprobadaCreateManySeccionInput | SeccionAprobadaCreateManySeccionInput[]
    skipDuplicates?: boolean
  }

  export type RecursoCreateWithoutSeccionInput = {
    id?: string
    nombre: string
    valor?: number
    createdAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutRecursosInput
  }

  export type RecursoUncheckedCreateWithoutSeccionInput = {
    id?: string
    nombre: string
    valor?: number
    usuarioId: string
    createdAt?: Date | string
  }

  export type RecursoCreateOrConnectWithoutSeccionInput = {
    where: RecursoWhereUniqueInput
    create: XOR<RecursoCreateWithoutSeccionInput, RecursoUncheckedCreateWithoutSeccionInput>
  }

  export type EscenarioUpsertWithWhereUniqueWithoutSeccionInput = {
    where: EscenarioWhereUniqueInput
    update: XOR<EscenarioUpdateWithoutSeccionInput, EscenarioUncheckedUpdateWithoutSeccionInput>
    create: XOR<EscenarioCreateWithoutSeccionInput, EscenarioUncheckedCreateWithoutSeccionInput>
  }

  export type EscenarioUpdateWithWhereUniqueWithoutSeccionInput = {
    where: EscenarioWhereUniqueInput
    data: XOR<EscenarioUpdateWithoutSeccionInput, EscenarioUncheckedUpdateWithoutSeccionInput>
  }

  export type EscenarioUpdateManyWithWhereWithoutSeccionInput = {
    where: EscenarioScalarWhereInput
    data: XOR<EscenarioUpdateManyMutationInput, EscenarioUncheckedUpdateManyWithoutSeccionInput>
  }

  export type EscenarioScalarWhereInput = {
    AND?: EscenarioScalarWhereInput | EscenarioScalarWhereInput[]
    OR?: EscenarioScalarWhereInput[]
    NOT?: EscenarioScalarWhereInput | EscenarioScalarWhereInput[]
    id?: IntFilter<"Escenario"> | number
    titulo?: StringFilter<"Escenario"> | string
    descripcion?: StringFilter<"Escenario"> | string
    pregunta?: StringFilter<"Escenario"> | string
    explicacion?: StringNullableFilter<"Escenario"> | string | null
    categoria?: StringFilter<"Escenario"> | string
    seccionId?: IntFilter<"Escenario"> | number
  }

  export type SeccionAprobadaUpsertWithWhereUniqueWithoutSeccionInput = {
    where: SeccionAprobadaWhereUniqueInput
    update: XOR<SeccionAprobadaUpdateWithoutSeccionInput, SeccionAprobadaUncheckedUpdateWithoutSeccionInput>
    create: XOR<SeccionAprobadaCreateWithoutSeccionInput, SeccionAprobadaUncheckedCreateWithoutSeccionInput>
  }

  export type SeccionAprobadaUpdateWithWhereUniqueWithoutSeccionInput = {
    where: SeccionAprobadaWhereUniqueInput
    data: XOR<SeccionAprobadaUpdateWithoutSeccionInput, SeccionAprobadaUncheckedUpdateWithoutSeccionInput>
  }

  export type SeccionAprobadaUpdateManyWithWhereWithoutSeccionInput = {
    where: SeccionAprobadaScalarWhereInput
    data: XOR<SeccionAprobadaUpdateManyMutationInput, SeccionAprobadaUncheckedUpdateManyWithoutSeccionInput>
  }

  export type RecursoUpsertWithoutSeccionInput = {
    update: XOR<RecursoUpdateWithoutSeccionInput, RecursoUncheckedUpdateWithoutSeccionInput>
    create: XOR<RecursoCreateWithoutSeccionInput, RecursoUncheckedCreateWithoutSeccionInput>
    where?: RecursoWhereInput
  }

  export type RecursoUpdateToOneWithWhereWithoutSeccionInput = {
    where?: RecursoWhereInput
    data: XOR<RecursoUpdateWithoutSeccionInput, RecursoUncheckedUpdateWithoutSeccionInput>
  }

  export type RecursoUpdateWithoutSeccionInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutRecursosNestedInput
  }

  export type RecursoUncheckedUpdateWithoutSeccionInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateWithoutSeccionesAprobadasInput = {
    id: string
    email: string
    nombre?: string | null
    puntos?: number
    tokens?: number
    rol?: $Enums.Rol
    racha?: number
    ultimaConexion?: Date | string
    createdAt?: Date | string
    progreso?: ProgresoCreateNestedManyWithoutUsuarioInput
    insignias?: InsigniaCreateNestedManyWithoutUsuariosInput
    recursos?: RecursoCreateNestedManyWithoutUsuarioInput
    auditorias?: AuditoriaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutSeccionesAprobadasInput = {
    id: string
    email: string
    nombre?: string | null
    puntos?: number
    tokens?: number
    rol?: $Enums.Rol
    racha?: number
    ultimaConexion?: Date | string
    createdAt?: Date | string
    progreso?: ProgresoUncheckedCreateNestedManyWithoutUsuarioInput
    insignias?: InsigniaUncheckedCreateNestedManyWithoutUsuariosInput
    recursos?: RecursoUncheckedCreateNestedManyWithoutUsuarioInput
    auditorias?: AuditoriaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutSeccionesAprobadasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutSeccionesAprobadasInput, UsuarioUncheckedCreateWithoutSeccionesAprobadasInput>
  }

  export type SeccionCreateWithoutAprobadaPorInput = {
    nombre: string
    descripcion: string
    grado?: number
    puntosRequeridos?: number
    puntosRecompensa?: number
    umbralAprobacion?: number
    escenarios?: EscenarioCreateNestedManyWithoutSeccionInput
    recursoOtorgado?: RecursoCreateNestedOneWithoutSeccionInput
  }

  export type SeccionUncheckedCreateWithoutAprobadaPorInput = {
    id?: number
    nombre: string
    descripcion: string
    grado?: number
    puntosRequeridos?: number
    puntosRecompensa?: number
    umbralAprobacion?: number
    escenarios?: EscenarioUncheckedCreateNestedManyWithoutSeccionInput
    recursoOtorgado?: RecursoUncheckedCreateNestedOneWithoutSeccionInput
  }

  export type SeccionCreateOrConnectWithoutAprobadaPorInput = {
    where: SeccionWhereUniqueInput
    create: XOR<SeccionCreateWithoutAprobadaPorInput, SeccionUncheckedCreateWithoutAprobadaPorInput>
  }

  export type UsuarioUpsertWithoutSeccionesAprobadasInput = {
    update: XOR<UsuarioUpdateWithoutSeccionesAprobadasInput, UsuarioUncheckedUpdateWithoutSeccionesAprobadasInput>
    create: XOR<UsuarioCreateWithoutSeccionesAprobadasInput, UsuarioUncheckedCreateWithoutSeccionesAprobadasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutSeccionesAprobadasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutSeccionesAprobadasInput, UsuarioUncheckedUpdateWithoutSeccionesAprobadasInput>
  }

  export type UsuarioUpdateWithoutSeccionesAprobadasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    puntos?: IntFieldUpdateOperationsInput | number
    tokens?: IntFieldUpdateOperationsInput | number
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    racha?: IntFieldUpdateOperationsInput | number
    ultimaConexion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progreso?: ProgresoUpdateManyWithoutUsuarioNestedInput
    insignias?: InsigniaUpdateManyWithoutUsuariosNestedInput
    recursos?: RecursoUpdateManyWithoutUsuarioNestedInput
    auditorias?: AuditoriaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutSeccionesAprobadasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    puntos?: IntFieldUpdateOperationsInput | number
    tokens?: IntFieldUpdateOperationsInput | number
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    racha?: IntFieldUpdateOperationsInput | number
    ultimaConexion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progreso?: ProgresoUncheckedUpdateManyWithoutUsuarioNestedInput
    insignias?: InsigniaUncheckedUpdateManyWithoutUsuariosNestedInput
    recursos?: RecursoUncheckedUpdateManyWithoutUsuarioNestedInput
    auditorias?: AuditoriaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type SeccionUpsertWithoutAprobadaPorInput = {
    update: XOR<SeccionUpdateWithoutAprobadaPorInput, SeccionUncheckedUpdateWithoutAprobadaPorInput>
    create: XOR<SeccionCreateWithoutAprobadaPorInput, SeccionUncheckedCreateWithoutAprobadaPorInput>
    where?: SeccionWhereInput
  }

  export type SeccionUpdateToOneWithWhereWithoutAprobadaPorInput = {
    where?: SeccionWhereInput
    data: XOR<SeccionUpdateWithoutAprobadaPorInput, SeccionUncheckedUpdateWithoutAprobadaPorInput>
  }

  export type SeccionUpdateWithoutAprobadaPorInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    grado?: IntFieldUpdateOperationsInput | number
    puntosRequeridos?: IntFieldUpdateOperationsInput | number
    puntosRecompensa?: IntFieldUpdateOperationsInput | number
    umbralAprobacion?: FloatFieldUpdateOperationsInput | number
    escenarios?: EscenarioUpdateManyWithoutSeccionNestedInput
    recursoOtorgado?: RecursoUpdateOneWithoutSeccionNestedInput
  }

  export type SeccionUncheckedUpdateWithoutAprobadaPorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    grado?: IntFieldUpdateOperationsInput | number
    puntosRequeridos?: IntFieldUpdateOperationsInput | number
    puntosRecompensa?: IntFieldUpdateOperationsInput | number
    umbralAprobacion?: FloatFieldUpdateOperationsInput | number
    escenarios?: EscenarioUncheckedUpdateManyWithoutSeccionNestedInput
    recursoOtorgado?: RecursoUncheckedUpdateOneWithoutSeccionNestedInput
  }

  export type SeccionCreateWithoutEscenariosInput = {
    nombre: string
    descripcion: string
    grado?: number
    puntosRequeridos?: number
    puntosRecompensa?: number
    umbralAprobacion?: number
    aprobadaPor?: SeccionAprobadaCreateNestedManyWithoutSeccionInput
    recursoOtorgado?: RecursoCreateNestedOneWithoutSeccionInput
  }

  export type SeccionUncheckedCreateWithoutEscenariosInput = {
    id?: number
    nombre: string
    descripcion: string
    grado?: number
    puntosRequeridos?: number
    puntosRecompensa?: number
    umbralAprobacion?: number
    aprobadaPor?: SeccionAprobadaUncheckedCreateNestedManyWithoutSeccionInput
    recursoOtorgado?: RecursoUncheckedCreateNestedOneWithoutSeccionInput
  }

  export type SeccionCreateOrConnectWithoutEscenariosInput = {
    where: SeccionWhereUniqueInput
    create: XOR<SeccionCreateWithoutEscenariosInput, SeccionUncheckedCreateWithoutEscenariosInput>
  }

  export type OpcionCreateWithoutEscenarioInput = {
    texto: string
    puntos?: number
  }

  export type OpcionUncheckedCreateWithoutEscenarioInput = {
    id?: number
    texto: string
    puntos?: number
  }

  export type OpcionCreateOrConnectWithoutEscenarioInput = {
    where: OpcionWhereUniqueInput
    create: XOR<OpcionCreateWithoutEscenarioInput, OpcionUncheckedCreateWithoutEscenarioInput>
  }

  export type OpcionCreateManyEscenarioInputEnvelope = {
    data: OpcionCreateManyEscenarioInput | OpcionCreateManyEscenarioInput[]
    skipDuplicates?: boolean
  }

  export type InsigniaCreateWithoutEscenarioInput = {
    id?: string
    nombre: string
    descripcion: string
    imagenUrl?: string | null
    puntosRequeridos?: number
    createdAt?: Date | string
    usuarios?: UsuarioCreateNestedManyWithoutInsigniasInput
  }

  export type InsigniaUncheckedCreateWithoutEscenarioInput = {
    id?: string
    nombre: string
    descripcion: string
    imagenUrl?: string | null
    puntosRequeridos?: number
    createdAt?: Date | string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutInsigniasInput
  }

  export type InsigniaCreateOrConnectWithoutEscenarioInput = {
    where: InsigniaWhereUniqueInput
    create: XOR<InsigniaCreateWithoutEscenarioInput, InsigniaUncheckedCreateWithoutEscenarioInput>
  }

  export type InsigniaCreateManyEscenarioInputEnvelope = {
    data: InsigniaCreateManyEscenarioInput | InsigniaCreateManyEscenarioInput[]
    skipDuplicates?: boolean
  }

  export type ProgresoCreateWithoutEscenarioInput = {
    puntosObtenidos?: number
    resuelto?: boolean
    intentosFallidos?: number
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutProgresoInput
  }

  export type ProgresoUncheckedCreateWithoutEscenarioInput = {
    id?: number
    usuarioId: string
    puntosObtenidos?: number
    resuelto?: boolean
    intentosFallidos?: number
    updatedAt?: Date | string
  }

  export type ProgresoCreateOrConnectWithoutEscenarioInput = {
    where: ProgresoWhereUniqueInput
    create: XOR<ProgresoCreateWithoutEscenarioInput, ProgresoUncheckedCreateWithoutEscenarioInput>
  }

  export type ProgresoCreateManyEscenarioInputEnvelope = {
    data: ProgresoCreateManyEscenarioInput | ProgresoCreateManyEscenarioInput[]
    skipDuplicates?: boolean
  }

  export type SeccionUpsertWithoutEscenariosInput = {
    update: XOR<SeccionUpdateWithoutEscenariosInput, SeccionUncheckedUpdateWithoutEscenariosInput>
    create: XOR<SeccionCreateWithoutEscenariosInput, SeccionUncheckedCreateWithoutEscenariosInput>
    where?: SeccionWhereInput
  }

  export type SeccionUpdateToOneWithWhereWithoutEscenariosInput = {
    where?: SeccionWhereInput
    data: XOR<SeccionUpdateWithoutEscenariosInput, SeccionUncheckedUpdateWithoutEscenariosInput>
  }

  export type SeccionUpdateWithoutEscenariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    grado?: IntFieldUpdateOperationsInput | number
    puntosRequeridos?: IntFieldUpdateOperationsInput | number
    puntosRecompensa?: IntFieldUpdateOperationsInput | number
    umbralAprobacion?: FloatFieldUpdateOperationsInput | number
    aprobadaPor?: SeccionAprobadaUpdateManyWithoutSeccionNestedInput
    recursoOtorgado?: RecursoUpdateOneWithoutSeccionNestedInput
  }

  export type SeccionUncheckedUpdateWithoutEscenariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    grado?: IntFieldUpdateOperationsInput | number
    puntosRequeridos?: IntFieldUpdateOperationsInput | number
    puntosRecompensa?: IntFieldUpdateOperationsInput | number
    umbralAprobacion?: FloatFieldUpdateOperationsInput | number
    aprobadaPor?: SeccionAprobadaUncheckedUpdateManyWithoutSeccionNestedInput
    recursoOtorgado?: RecursoUncheckedUpdateOneWithoutSeccionNestedInput
  }

  export type OpcionUpsertWithWhereUniqueWithoutEscenarioInput = {
    where: OpcionWhereUniqueInput
    update: XOR<OpcionUpdateWithoutEscenarioInput, OpcionUncheckedUpdateWithoutEscenarioInput>
    create: XOR<OpcionCreateWithoutEscenarioInput, OpcionUncheckedCreateWithoutEscenarioInput>
  }

  export type OpcionUpdateWithWhereUniqueWithoutEscenarioInput = {
    where: OpcionWhereUniqueInput
    data: XOR<OpcionUpdateWithoutEscenarioInput, OpcionUncheckedUpdateWithoutEscenarioInput>
  }

  export type OpcionUpdateManyWithWhereWithoutEscenarioInput = {
    where: OpcionScalarWhereInput
    data: XOR<OpcionUpdateManyMutationInput, OpcionUncheckedUpdateManyWithoutEscenarioInput>
  }

  export type OpcionScalarWhereInput = {
    AND?: OpcionScalarWhereInput | OpcionScalarWhereInput[]
    OR?: OpcionScalarWhereInput[]
    NOT?: OpcionScalarWhereInput | OpcionScalarWhereInput[]
    id?: IntFilter<"Opcion"> | number
    texto?: StringFilter<"Opcion"> | string
    puntos?: IntFilter<"Opcion"> | number
    escenarioId?: IntFilter<"Opcion"> | number
  }

  export type InsigniaUpsertWithWhereUniqueWithoutEscenarioInput = {
    where: InsigniaWhereUniqueInput
    update: XOR<InsigniaUpdateWithoutEscenarioInput, InsigniaUncheckedUpdateWithoutEscenarioInput>
    create: XOR<InsigniaCreateWithoutEscenarioInput, InsigniaUncheckedCreateWithoutEscenarioInput>
  }

  export type InsigniaUpdateWithWhereUniqueWithoutEscenarioInput = {
    where: InsigniaWhereUniqueInput
    data: XOR<InsigniaUpdateWithoutEscenarioInput, InsigniaUncheckedUpdateWithoutEscenarioInput>
  }

  export type InsigniaUpdateManyWithWhereWithoutEscenarioInput = {
    where: InsigniaScalarWhereInput
    data: XOR<InsigniaUpdateManyMutationInput, InsigniaUncheckedUpdateManyWithoutEscenarioInput>
  }

  export type ProgresoUpsertWithWhereUniqueWithoutEscenarioInput = {
    where: ProgresoWhereUniqueInput
    update: XOR<ProgresoUpdateWithoutEscenarioInput, ProgresoUncheckedUpdateWithoutEscenarioInput>
    create: XOR<ProgresoCreateWithoutEscenarioInput, ProgresoUncheckedCreateWithoutEscenarioInput>
  }

  export type ProgresoUpdateWithWhereUniqueWithoutEscenarioInput = {
    where: ProgresoWhereUniqueInput
    data: XOR<ProgresoUpdateWithoutEscenarioInput, ProgresoUncheckedUpdateWithoutEscenarioInput>
  }

  export type ProgresoUpdateManyWithWhereWithoutEscenarioInput = {
    where: ProgresoScalarWhereInput
    data: XOR<ProgresoUpdateManyMutationInput, ProgresoUncheckedUpdateManyWithoutEscenarioInput>
  }

  export type EscenarioCreateWithoutOpcionesInput = {
    titulo: string
    descripcion: string
    pregunta: string
    explicacion?: string | null
    categoria: string
    seccion: SeccionCreateNestedOneWithoutEscenariosInput
    insignias?: InsigniaCreateNestedManyWithoutEscenarioInput
    progreso?: ProgresoCreateNestedManyWithoutEscenarioInput
  }

  export type EscenarioUncheckedCreateWithoutOpcionesInput = {
    id?: number
    titulo: string
    descripcion: string
    pregunta: string
    explicacion?: string | null
    categoria: string
    seccionId: number
    insignias?: InsigniaUncheckedCreateNestedManyWithoutEscenarioInput
    progreso?: ProgresoUncheckedCreateNestedManyWithoutEscenarioInput
  }

  export type EscenarioCreateOrConnectWithoutOpcionesInput = {
    where: EscenarioWhereUniqueInput
    create: XOR<EscenarioCreateWithoutOpcionesInput, EscenarioUncheckedCreateWithoutOpcionesInput>
  }

  export type EscenarioUpsertWithoutOpcionesInput = {
    update: XOR<EscenarioUpdateWithoutOpcionesInput, EscenarioUncheckedUpdateWithoutOpcionesInput>
    create: XOR<EscenarioCreateWithoutOpcionesInput, EscenarioUncheckedCreateWithoutOpcionesInput>
    where?: EscenarioWhereInput
  }

  export type EscenarioUpdateToOneWithWhereWithoutOpcionesInput = {
    where?: EscenarioWhereInput
    data: XOR<EscenarioUpdateWithoutOpcionesInput, EscenarioUncheckedUpdateWithoutOpcionesInput>
  }

  export type EscenarioUpdateWithoutOpcionesInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pregunta?: StringFieldUpdateOperationsInput | string
    explicacion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    seccion?: SeccionUpdateOneRequiredWithoutEscenariosNestedInput
    insignias?: InsigniaUpdateManyWithoutEscenarioNestedInput
    progreso?: ProgresoUpdateManyWithoutEscenarioNestedInput
  }

  export type EscenarioUncheckedUpdateWithoutOpcionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pregunta?: StringFieldUpdateOperationsInput | string
    explicacion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    seccionId?: IntFieldUpdateOperationsInput | number
    insignias?: InsigniaUncheckedUpdateManyWithoutEscenarioNestedInput
    progreso?: ProgresoUncheckedUpdateManyWithoutEscenarioNestedInput
  }

  export type UsuarioCreateWithoutRecursosInput = {
    id: string
    email: string
    nombre?: string | null
    puntos?: number
    tokens?: number
    rol?: $Enums.Rol
    racha?: number
    ultimaConexion?: Date | string
    createdAt?: Date | string
    progreso?: ProgresoCreateNestedManyWithoutUsuarioInput
    seccionesAprobadas?: SeccionAprobadaCreateNestedManyWithoutUsuarioInput
    insignias?: InsigniaCreateNestedManyWithoutUsuariosInput
    auditorias?: AuditoriaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutRecursosInput = {
    id: string
    email: string
    nombre?: string | null
    puntos?: number
    tokens?: number
    rol?: $Enums.Rol
    racha?: number
    ultimaConexion?: Date | string
    createdAt?: Date | string
    progreso?: ProgresoUncheckedCreateNestedManyWithoutUsuarioInput
    seccionesAprobadas?: SeccionAprobadaUncheckedCreateNestedManyWithoutUsuarioInput
    insignias?: InsigniaUncheckedCreateNestedManyWithoutUsuariosInput
    auditorias?: AuditoriaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutRecursosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRecursosInput, UsuarioUncheckedCreateWithoutRecursosInput>
  }

  export type SeccionCreateWithoutRecursoOtorgadoInput = {
    nombre: string
    descripcion: string
    grado?: number
    puntosRequeridos?: number
    puntosRecompensa?: number
    umbralAprobacion?: number
    escenarios?: EscenarioCreateNestedManyWithoutSeccionInput
    aprobadaPor?: SeccionAprobadaCreateNestedManyWithoutSeccionInput
  }

  export type SeccionUncheckedCreateWithoutRecursoOtorgadoInput = {
    id?: number
    nombre: string
    descripcion: string
    grado?: number
    puntosRequeridos?: number
    puntosRecompensa?: number
    umbralAprobacion?: number
    escenarios?: EscenarioUncheckedCreateNestedManyWithoutSeccionInput
    aprobadaPor?: SeccionAprobadaUncheckedCreateNestedManyWithoutSeccionInput
  }

  export type SeccionCreateOrConnectWithoutRecursoOtorgadoInput = {
    where: SeccionWhereUniqueInput
    create: XOR<SeccionCreateWithoutRecursoOtorgadoInput, SeccionUncheckedCreateWithoutRecursoOtorgadoInput>
  }

  export type UsuarioUpsertWithoutRecursosInput = {
    update: XOR<UsuarioUpdateWithoutRecursosInput, UsuarioUncheckedUpdateWithoutRecursosInput>
    create: XOR<UsuarioCreateWithoutRecursosInput, UsuarioUncheckedCreateWithoutRecursosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutRecursosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutRecursosInput, UsuarioUncheckedUpdateWithoutRecursosInput>
  }

  export type UsuarioUpdateWithoutRecursosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    puntos?: IntFieldUpdateOperationsInput | number
    tokens?: IntFieldUpdateOperationsInput | number
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    racha?: IntFieldUpdateOperationsInput | number
    ultimaConexion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progreso?: ProgresoUpdateManyWithoutUsuarioNestedInput
    seccionesAprobadas?: SeccionAprobadaUpdateManyWithoutUsuarioNestedInput
    insignias?: InsigniaUpdateManyWithoutUsuariosNestedInput
    auditorias?: AuditoriaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRecursosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    puntos?: IntFieldUpdateOperationsInput | number
    tokens?: IntFieldUpdateOperationsInput | number
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    racha?: IntFieldUpdateOperationsInput | number
    ultimaConexion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progreso?: ProgresoUncheckedUpdateManyWithoutUsuarioNestedInput
    seccionesAprobadas?: SeccionAprobadaUncheckedUpdateManyWithoutUsuarioNestedInput
    insignias?: InsigniaUncheckedUpdateManyWithoutUsuariosNestedInput
    auditorias?: AuditoriaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type SeccionUpsertWithoutRecursoOtorgadoInput = {
    update: XOR<SeccionUpdateWithoutRecursoOtorgadoInput, SeccionUncheckedUpdateWithoutRecursoOtorgadoInput>
    create: XOR<SeccionCreateWithoutRecursoOtorgadoInput, SeccionUncheckedCreateWithoutRecursoOtorgadoInput>
    where?: SeccionWhereInput
  }

  export type SeccionUpdateToOneWithWhereWithoutRecursoOtorgadoInput = {
    where?: SeccionWhereInput
    data: XOR<SeccionUpdateWithoutRecursoOtorgadoInput, SeccionUncheckedUpdateWithoutRecursoOtorgadoInput>
  }

  export type SeccionUpdateWithoutRecursoOtorgadoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    grado?: IntFieldUpdateOperationsInput | number
    puntosRequeridos?: IntFieldUpdateOperationsInput | number
    puntosRecompensa?: IntFieldUpdateOperationsInput | number
    umbralAprobacion?: FloatFieldUpdateOperationsInput | number
    escenarios?: EscenarioUpdateManyWithoutSeccionNestedInput
    aprobadaPor?: SeccionAprobadaUpdateManyWithoutSeccionNestedInput
  }

  export type SeccionUncheckedUpdateWithoutRecursoOtorgadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    grado?: IntFieldUpdateOperationsInput | number
    puntosRequeridos?: IntFieldUpdateOperationsInput | number
    puntosRecompensa?: IntFieldUpdateOperationsInput | number
    umbralAprobacion?: FloatFieldUpdateOperationsInput | number
    escenarios?: EscenarioUncheckedUpdateManyWithoutSeccionNestedInput
    aprobadaPor?: SeccionAprobadaUncheckedUpdateManyWithoutSeccionNestedInput
  }

  export type EscenarioCreateWithoutInsigniasInput = {
    titulo: string
    descripcion: string
    pregunta: string
    explicacion?: string | null
    categoria: string
    seccion: SeccionCreateNestedOneWithoutEscenariosInput
    opciones?: OpcionCreateNestedManyWithoutEscenarioInput
    progreso?: ProgresoCreateNestedManyWithoutEscenarioInput
  }

  export type EscenarioUncheckedCreateWithoutInsigniasInput = {
    id?: number
    titulo: string
    descripcion: string
    pregunta: string
    explicacion?: string | null
    categoria: string
    seccionId: number
    opciones?: OpcionUncheckedCreateNestedManyWithoutEscenarioInput
    progreso?: ProgresoUncheckedCreateNestedManyWithoutEscenarioInput
  }

  export type EscenarioCreateOrConnectWithoutInsigniasInput = {
    where: EscenarioWhereUniqueInput
    create: XOR<EscenarioCreateWithoutInsigniasInput, EscenarioUncheckedCreateWithoutInsigniasInput>
  }

  export type UsuarioCreateWithoutInsigniasInput = {
    id: string
    email: string
    nombre?: string | null
    puntos?: number
    tokens?: number
    rol?: $Enums.Rol
    racha?: number
    ultimaConexion?: Date | string
    createdAt?: Date | string
    progreso?: ProgresoCreateNestedManyWithoutUsuarioInput
    seccionesAprobadas?: SeccionAprobadaCreateNestedManyWithoutUsuarioInput
    recursos?: RecursoCreateNestedManyWithoutUsuarioInput
    auditorias?: AuditoriaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutInsigniasInput = {
    id: string
    email: string
    nombre?: string | null
    puntos?: number
    tokens?: number
    rol?: $Enums.Rol
    racha?: number
    ultimaConexion?: Date | string
    createdAt?: Date | string
    progreso?: ProgresoUncheckedCreateNestedManyWithoutUsuarioInput
    seccionesAprobadas?: SeccionAprobadaUncheckedCreateNestedManyWithoutUsuarioInput
    recursos?: RecursoUncheckedCreateNestedManyWithoutUsuarioInput
    auditorias?: AuditoriaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutInsigniasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutInsigniasInput, UsuarioUncheckedCreateWithoutInsigniasInput>
  }

  export type EscenarioUpsertWithoutInsigniasInput = {
    update: XOR<EscenarioUpdateWithoutInsigniasInput, EscenarioUncheckedUpdateWithoutInsigniasInput>
    create: XOR<EscenarioCreateWithoutInsigniasInput, EscenarioUncheckedCreateWithoutInsigniasInput>
    where?: EscenarioWhereInput
  }

  export type EscenarioUpdateToOneWithWhereWithoutInsigniasInput = {
    where?: EscenarioWhereInput
    data: XOR<EscenarioUpdateWithoutInsigniasInput, EscenarioUncheckedUpdateWithoutInsigniasInput>
  }

  export type EscenarioUpdateWithoutInsigniasInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pregunta?: StringFieldUpdateOperationsInput | string
    explicacion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    seccion?: SeccionUpdateOneRequiredWithoutEscenariosNestedInput
    opciones?: OpcionUpdateManyWithoutEscenarioNestedInput
    progreso?: ProgresoUpdateManyWithoutEscenarioNestedInput
  }

  export type EscenarioUncheckedUpdateWithoutInsigniasInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pregunta?: StringFieldUpdateOperationsInput | string
    explicacion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    seccionId?: IntFieldUpdateOperationsInput | number
    opciones?: OpcionUncheckedUpdateManyWithoutEscenarioNestedInput
    progreso?: ProgresoUncheckedUpdateManyWithoutEscenarioNestedInput
  }

  export type UsuarioUpsertWithWhereUniqueWithoutInsigniasInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutInsigniasInput, UsuarioUncheckedUpdateWithoutInsigniasInput>
    create: XOR<UsuarioCreateWithoutInsigniasInput, UsuarioUncheckedCreateWithoutInsigniasInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutInsigniasInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutInsigniasInput, UsuarioUncheckedUpdateWithoutInsigniasInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutInsigniasInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutInsigniasInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    nombre?: StringNullableFilter<"Usuario"> | string | null
    puntos?: IntFilter<"Usuario"> | number
    tokens?: IntFilter<"Usuario"> | number
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    racha?: IntFilter<"Usuario"> | number
    ultimaConexion?: DateTimeFilter<"Usuario"> | Date | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
  }

  export type UsuarioCreateWithoutProgresoInput = {
    id: string
    email: string
    nombre?: string | null
    puntos?: number
    tokens?: number
    rol?: $Enums.Rol
    racha?: number
    ultimaConexion?: Date | string
    createdAt?: Date | string
    seccionesAprobadas?: SeccionAprobadaCreateNestedManyWithoutUsuarioInput
    insignias?: InsigniaCreateNestedManyWithoutUsuariosInput
    recursos?: RecursoCreateNestedManyWithoutUsuarioInput
    auditorias?: AuditoriaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutProgresoInput = {
    id: string
    email: string
    nombre?: string | null
    puntos?: number
    tokens?: number
    rol?: $Enums.Rol
    racha?: number
    ultimaConexion?: Date | string
    createdAt?: Date | string
    seccionesAprobadas?: SeccionAprobadaUncheckedCreateNestedManyWithoutUsuarioInput
    insignias?: InsigniaUncheckedCreateNestedManyWithoutUsuariosInput
    recursos?: RecursoUncheckedCreateNestedManyWithoutUsuarioInput
    auditorias?: AuditoriaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutProgresoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutProgresoInput, UsuarioUncheckedCreateWithoutProgresoInput>
  }

  export type EscenarioCreateWithoutProgresoInput = {
    titulo: string
    descripcion: string
    pregunta: string
    explicacion?: string | null
    categoria: string
    seccion: SeccionCreateNestedOneWithoutEscenariosInput
    opciones?: OpcionCreateNestedManyWithoutEscenarioInput
    insignias?: InsigniaCreateNestedManyWithoutEscenarioInput
  }

  export type EscenarioUncheckedCreateWithoutProgresoInput = {
    id?: number
    titulo: string
    descripcion: string
    pregunta: string
    explicacion?: string | null
    categoria: string
    seccionId: number
    opciones?: OpcionUncheckedCreateNestedManyWithoutEscenarioInput
    insignias?: InsigniaUncheckedCreateNestedManyWithoutEscenarioInput
  }

  export type EscenarioCreateOrConnectWithoutProgresoInput = {
    where: EscenarioWhereUniqueInput
    create: XOR<EscenarioCreateWithoutProgresoInput, EscenarioUncheckedCreateWithoutProgresoInput>
  }

  export type UsuarioUpsertWithoutProgresoInput = {
    update: XOR<UsuarioUpdateWithoutProgresoInput, UsuarioUncheckedUpdateWithoutProgresoInput>
    create: XOR<UsuarioCreateWithoutProgresoInput, UsuarioUncheckedCreateWithoutProgresoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutProgresoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutProgresoInput, UsuarioUncheckedUpdateWithoutProgresoInput>
  }

  export type UsuarioUpdateWithoutProgresoInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    puntos?: IntFieldUpdateOperationsInput | number
    tokens?: IntFieldUpdateOperationsInput | number
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    racha?: IntFieldUpdateOperationsInput | number
    ultimaConexion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seccionesAprobadas?: SeccionAprobadaUpdateManyWithoutUsuarioNestedInput
    insignias?: InsigniaUpdateManyWithoutUsuariosNestedInput
    recursos?: RecursoUpdateManyWithoutUsuarioNestedInput
    auditorias?: AuditoriaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutProgresoInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    puntos?: IntFieldUpdateOperationsInput | number
    tokens?: IntFieldUpdateOperationsInput | number
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    racha?: IntFieldUpdateOperationsInput | number
    ultimaConexion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seccionesAprobadas?: SeccionAprobadaUncheckedUpdateManyWithoutUsuarioNestedInput
    insignias?: InsigniaUncheckedUpdateManyWithoutUsuariosNestedInput
    recursos?: RecursoUncheckedUpdateManyWithoutUsuarioNestedInput
    auditorias?: AuditoriaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type EscenarioUpsertWithoutProgresoInput = {
    update: XOR<EscenarioUpdateWithoutProgresoInput, EscenarioUncheckedUpdateWithoutProgresoInput>
    create: XOR<EscenarioCreateWithoutProgresoInput, EscenarioUncheckedCreateWithoutProgresoInput>
    where?: EscenarioWhereInput
  }

  export type EscenarioUpdateToOneWithWhereWithoutProgresoInput = {
    where?: EscenarioWhereInput
    data: XOR<EscenarioUpdateWithoutProgresoInput, EscenarioUncheckedUpdateWithoutProgresoInput>
  }

  export type EscenarioUpdateWithoutProgresoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pregunta?: StringFieldUpdateOperationsInput | string
    explicacion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    seccion?: SeccionUpdateOneRequiredWithoutEscenariosNestedInput
    opciones?: OpcionUpdateManyWithoutEscenarioNestedInput
    insignias?: InsigniaUpdateManyWithoutEscenarioNestedInput
  }

  export type EscenarioUncheckedUpdateWithoutProgresoInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pregunta?: StringFieldUpdateOperationsInput | string
    explicacion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    seccionId?: IntFieldUpdateOperationsInput | number
    opciones?: OpcionUncheckedUpdateManyWithoutEscenarioNestedInput
    insignias?: InsigniaUncheckedUpdateManyWithoutEscenarioNestedInput
  }

  export type ProgresoCreateManyUsuarioInput = {
    id?: number
    escenarioId: number
    puntosObtenidos?: number
    resuelto?: boolean
    intentosFallidos?: number
    updatedAt?: Date | string
  }

  export type SeccionAprobadaCreateManyUsuarioInput = {
    seccionId: number
  }

  export type RecursoCreateManyUsuarioInput = {
    id?: string
    nombre: string
    valor?: number
    seccionId: number
    createdAt?: Date | string
  }

  export type AuditoriaCreateManyUsuarioInput = {
    id?: number
    accion: string
    entidad: string
    entidadId?: string | null
    detalles?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }

  export type ProgresoUpdateWithoutUsuarioInput = {
    puntosObtenidos?: IntFieldUpdateOperationsInput | number
    resuelto?: BoolFieldUpdateOperationsInput | boolean
    intentosFallidos?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    escenario?: EscenarioUpdateOneRequiredWithoutProgresoNestedInput
  }

  export type ProgresoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    escenarioId?: IntFieldUpdateOperationsInput | number
    puntosObtenidos?: IntFieldUpdateOperationsInput | number
    resuelto?: BoolFieldUpdateOperationsInput | boolean
    intentosFallidos?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgresoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    escenarioId?: IntFieldUpdateOperationsInput | number
    puntosObtenidos?: IntFieldUpdateOperationsInput | number
    resuelto?: BoolFieldUpdateOperationsInput | boolean
    intentosFallidos?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeccionAprobadaUpdateWithoutUsuarioInput = {
    seccion?: SeccionUpdateOneRequiredWithoutAprobadaPorNestedInput
  }

  export type SeccionAprobadaUncheckedUpdateWithoutUsuarioInput = {
    seccionId?: IntFieldUpdateOperationsInput | number
  }

  export type SeccionAprobadaUncheckedUpdateManyWithoutUsuarioInput = {
    seccionId?: IntFieldUpdateOperationsInput | number
  }

  export type InsigniaUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    puntosRequeridos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    escenario?: EscenarioUpdateOneRequiredWithoutInsigniasNestedInput
  }

  export type InsigniaUncheckedUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    puntosRequeridos?: IntFieldUpdateOperationsInput | number
    escenarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsigniaUncheckedUpdateManyWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    puntosRequeridos?: IntFieldUpdateOperationsInput | number
    escenarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecursoUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seccion?: SeccionUpdateOneRequiredWithoutRecursoOtorgadoNestedInput
  }

  export type RecursoUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
    seccionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecursoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
    seccionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditoriaUpdateWithoutUsuarioInput = {
    accion?: StringFieldUpdateOperationsInput | string
    entidad?: StringFieldUpdateOperationsInput | string
    entidadId?: NullableStringFieldUpdateOperationsInput | string | null
    detalles?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditoriaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    accion?: StringFieldUpdateOperationsInput | string
    entidad?: StringFieldUpdateOperationsInput | string
    entidadId?: NullableStringFieldUpdateOperationsInput | string | null
    detalles?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditoriaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    accion?: StringFieldUpdateOperationsInput | string
    entidad?: StringFieldUpdateOperationsInput | string
    entidadId?: NullableStringFieldUpdateOperationsInput | string | null
    detalles?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EscenarioCreateManySeccionInput = {
    id?: number
    titulo: string
    descripcion: string
    pregunta: string
    explicacion?: string | null
    categoria: string
  }

  export type SeccionAprobadaCreateManySeccionInput = {
    usuarioId: string
  }

  export type EscenarioUpdateWithoutSeccionInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pregunta?: StringFieldUpdateOperationsInput | string
    explicacion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    opciones?: OpcionUpdateManyWithoutEscenarioNestedInput
    insignias?: InsigniaUpdateManyWithoutEscenarioNestedInput
    progreso?: ProgresoUpdateManyWithoutEscenarioNestedInput
  }

  export type EscenarioUncheckedUpdateWithoutSeccionInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pregunta?: StringFieldUpdateOperationsInput | string
    explicacion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    opciones?: OpcionUncheckedUpdateManyWithoutEscenarioNestedInput
    insignias?: InsigniaUncheckedUpdateManyWithoutEscenarioNestedInput
    progreso?: ProgresoUncheckedUpdateManyWithoutEscenarioNestedInput
  }

  export type EscenarioUncheckedUpdateManyWithoutSeccionInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pregunta?: StringFieldUpdateOperationsInput | string
    explicacion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
  }

  export type SeccionAprobadaUpdateWithoutSeccionInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutSeccionesAprobadasNestedInput
  }

  export type SeccionAprobadaUncheckedUpdateWithoutSeccionInput = {
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type SeccionAprobadaUncheckedUpdateManyWithoutSeccionInput = {
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type OpcionCreateManyEscenarioInput = {
    id?: number
    texto: string
    puntos?: number
  }

  export type InsigniaCreateManyEscenarioInput = {
    id?: string
    nombre: string
    descripcion: string
    imagenUrl?: string | null
    puntosRequeridos?: number
    createdAt?: Date | string
  }

  export type ProgresoCreateManyEscenarioInput = {
    id?: number
    usuarioId: string
    puntosObtenidos?: number
    resuelto?: boolean
    intentosFallidos?: number
    updatedAt?: Date | string
  }

  export type OpcionUpdateWithoutEscenarioInput = {
    texto?: StringFieldUpdateOperationsInput | string
    puntos?: IntFieldUpdateOperationsInput | number
  }

  export type OpcionUncheckedUpdateWithoutEscenarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    puntos?: IntFieldUpdateOperationsInput | number
  }

  export type OpcionUncheckedUpdateManyWithoutEscenarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    puntos?: IntFieldUpdateOperationsInput | number
  }

  export type InsigniaUpdateWithoutEscenarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    puntosRequeridos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUpdateManyWithoutInsigniasNestedInput
  }

  export type InsigniaUncheckedUpdateWithoutEscenarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    puntosRequeridos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutInsigniasNestedInput
  }

  export type InsigniaUncheckedUpdateManyWithoutEscenarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    puntosRequeridos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgresoUpdateWithoutEscenarioInput = {
    puntosObtenidos?: IntFieldUpdateOperationsInput | number
    resuelto?: BoolFieldUpdateOperationsInput | boolean
    intentosFallidos?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutProgresoNestedInput
  }

  export type ProgresoUncheckedUpdateWithoutEscenarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    puntosObtenidos?: IntFieldUpdateOperationsInput | number
    resuelto?: BoolFieldUpdateOperationsInput | boolean
    intentosFallidos?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgresoUncheckedUpdateManyWithoutEscenarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    puntosObtenidos?: IntFieldUpdateOperationsInput | number
    resuelto?: BoolFieldUpdateOperationsInput | boolean
    intentosFallidos?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUpdateWithoutInsigniasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    puntos?: IntFieldUpdateOperationsInput | number
    tokens?: IntFieldUpdateOperationsInput | number
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    racha?: IntFieldUpdateOperationsInput | number
    ultimaConexion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progreso?: ProgresoUpdateManyWithoutUsuarioNestedInput
    seccionesAprobadas?: SeccionAprobadaUpdateManyWithoutUsuarioNestedInput
    recursos?: RecursoUpdateManyWithoutUsuarioNestedInput
    auditorias?: AuditoriaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutInsigniasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    puntos?: IntFieldUpdateOperationsInput | number
    tokens?: IntFieldUpdateOperationsInput | number
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    racha?: IntFieldUpdateOperationsInput | number
    ultimaConexion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progreso?: ProgresoUncheckedUpdateManyWithoutUsuarioNestedInput
    seccionesAprobadas?: SeccionAprobadaUncheckedUpdateManyWithoutUsuarioNestedInput
    recursos?: RecursoUncheckedUpdateManyWithoutUsuarioNestedInput
    auditorias?: AuditoriaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutInsigniasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    puntos?: IntFieldUpdateOperationsInput | number
    tokens?: IntFieldUpdateOperationsInput | number
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    racha?: IntFieldUpdateOperationsInput | number
    ultimaConexion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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