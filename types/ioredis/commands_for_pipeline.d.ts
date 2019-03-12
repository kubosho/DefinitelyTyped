import { KeyType } from './type_aliases/key_type';
import { Pipeline } from './pipeline';

export class RedisCommandsForPipeline {
  bitcount(key: KeyType, callback?: (err: Error, res: number) => void): Pipeline;
  bitcount(
    key: KeyType,
    start: number,
    end: number,
    callback?: (err: Error, res: number) => void,
  ): Pipeline;

  get(key: KeyType, callback?: (err: Error, res: string) => void): Pipeline;
  getBuffer(key: KeyType, callback?: (err: Error, res: Buffer) => void): Pipeline;

  set(key: KeyType, value: any, callback?: (err: Error, res: string) => void): Pipeline;
  set(
    key: KeyType,
    value: any,
    setMode: string,
    callback?: (err: Error, res: string) => void,
  ): Pipeline;
  set(
    key: KeyType,
    value: any,
    expiryMode: string,
    time: number,
    callback?: (err: Error, res: string) => void,
  ): Pipeline;
  set(
    key: KeyType,
    value: any,
    expiryMode: string,
    time: number,
    setMode: string,
    callback?: (err: Error, res: string) => void,
  ): Pipeline;

  setBuffer(key: KeyType, value: any, callback?: (err: Error, res: Buffer) => void): Pipeline;
  setBuffer(
    key: KeyType,
    value: any,
    setMode: string,
    callback?: (err: Error, res: Buffer) => void,
  ): Pipeline;
  setBuffer(
    key: KeyType,
    value: any,
    expiryMode: string,
    time: number,
    callback?: (err: Error, res: Buffer) => void,
  ): Pipeline;
  setBuffer(
    key: KeyType,
    value: any,
    expiryMode: string,
    time: number,
    setMode: string,
    callback?: (err: Error, res: Buffer) => void,
  ): Pipeline;

  setnx(key: KeyType, value: any, callback?: (err: Error, res: any) => void): Pipeline;

  setex(
    key: KeyType,
    seconds: number,
    value: any,
    callback?: (err: Error, res: any) => void,
  ): Pipeline;

  psetex(
    key: KeyType,
    milliseconds: number,
    value: any,
    callback?: (err: Error, res: any) => void,
  ): Pipeline;

  append(key: KeyType, value: any, callback?: (err: Error, res: number) => void): Pipeline;

  strlen(key: KeyType, callback?: (err: Error, res: number) => void): Pipeline;

  del(...keys: KeyType[]): Pipeline;

  exists(...keys: KeyType[]): Pipeline;

  setbit(
    key: KeyType,
    offset: number,
    value: any,
    callback?: (err: Error, res: number) => void,
  ): Pipeline;

  getbit(key: KeyType, offset: number, callback?: (err: Error, res: number) => void): Pipeline;

  setrange(
    key: KeyType,
    offset: number,
    value: any,
    callback?: (err: Error, res: number) => void,
  ): Pipeline;

  getrange(
    key: KeyType,
    start: number,
    end: number,
    callback?: (err: Error, res: string) => void,
  ): Pipeline;

  substr(
    key: KeyType,
    start: number,
    end: number,
    callback?: (err: Error, res: string) => void,
  ): Pipeline;

  incr(key: KeyType, callback?: (err: Error, res: number) => void): Pipeline;

  decr(key: KeyType, callback?: (err: Error, res: number) => void): Pipeline;

  mget(...keys: KeyType[]): Pipeline;

  rpush(key: KeyType, ...values: any[]): Pipeline;

  lpush(key: KeyType, ...values: any[]): Pipeline;

  rpushx(key: KeyType, value: any, callback?: (err: Error, res: number) => void): Pipeline;

  lpushx(key: KeyType, value: any, callback?: (err: Error, res: number) => void): Pipeline;

  linsert(
    key: KeyType,
    direction: 'BEFORE' | 'AFTER',
    pivot: string,
    value: any,
    callback?: (err: Error, res: number) => void,
  ): Pipeline;

  rpop(key: KeyType, callback?: (err: Error, res: string) => void): Pipeline;

  lpop(key: KeyType, callback?: (err: Error, res: string) => void): Pipeline;

  brpop(...keys: KeyType[]): Pipeline;

  blpop(...keys: KeyType[]): Pipeline;

  brpoplpush(
    source: string,
    destination: string,
    timeout: number,
    callback?: (err: Error, res: any) => void,
  ): Pipeline;

  llen(key: KeyType, callback?: (err: Error, res: number) => void): Pipeline;

  lindex(key: KeyType, index: number, callback?: (err: Error, res: string) => void): Pipeline;

  lset(
    key: KeyType,
    index: number,
    value: any,
    callback?: (err: Error, res: any) => void,
  ): Pipeline;

  lrange(
    key: KeyType,
    start: number,
    stop: number,
    callback?: (err: Error, res: any) => void,
  ): Pipeline;

  ltrim(
    key: KeyType,
    start: number,
    stop: number,
    callback?: (err: Error, res: any) => void,
  ): Pipeline;

  lrem(
    key: KeyType,
    count: number,
    value: any,
    callback?: (err: Error, res: number) => void,
  ): Pipeline;

  rpoplpush(
    source: string,
    destination: string,
    callback?: (err: Error, res: string) => void,
  ): Pipeline;

  sadd(key: KeyType, ...members: any[]): Pipeline;

  srem(key: KeyType, ...members: any[]): Pipeline;

  smove(
    source: string,
    destination: string,
    member: string,
    callback?: (err: Error, res: string) => void,
  ): Pipeline;

  sismember(key: KeyType, member: string, callback?: (err: Error, res: 1 | 0) => void): Pipeline;

  scard(key: KeyType, callback?: (err: Error, res: number) => void): Pipeline;

  spop(key: KeyType, callback?: (err: Error, res: any) => void): Pipeline;
  spop(key: KeyType, count: number, callback?: (err: Error, res: any) => void): Pipeline;

  srandmember(key: KeyType, callback?: (err: Error, res: any) => void): Pipeline;
  srandmember(key: KeyType, count: number, callback?: (err: Error, res: any) => void): Pipeline;

  sinter(...keys: KeyType[]): Pipeline;

  sinterstore(destination: string, ...keys: KeyType[]): Pipeline;

  sunion(...keys: KeyType[]): Pipeline;

  sunionstore(destination: string, ...keys: KeyType[]): Pipeline;

  sdiff(...keys: KeyType[]): Pipeline;

  sdiffstore(destination: string, ...keys: KeyType[]): Pipeline;

  smembers(key: KeyType, callback?: (err: Error, res: any) => void): Pipeline;

  zadd(key: KeyType, ...args: string[]): Pipeline;

  zincrby(
    key: KeyType,
    increment: number,
    member: string,
    callback?: (err: Error, res: any) => void,
  ): Pipeline;

  zrem(key: KeyType, ...members: any[]): Pipeline;

  zremrangebyscore(
    key: KeyType,
    min: number | string,
    max: number | string,
    callback?: (err: Error, res: any) => void,
  ): Pipeline;

  zremrangebyrank(
    key: KeyType,
    start: number,
    stop: number,
    callback?: (err: Error, res: any) => void,
  ): Pipeline;

  zunionstore(destination: string, numkeys: number, key: KeyType, ...args: string[]): Pipeline;

  zinterstore(destination: string, numkeys: number, key: KeyType, ...args: string[]): Pipeline;

  zrange(
    key: KeyType,
    start: number,
    stop: number,
    callback?: (err: Error, res: any) => void,
  ): Pipeline;
  zrange(
    key: KeyType,
    start: number,
    stop: number,
    withScores: 'WITHSCORES',
    callback?: (err: Error, res: any) => void,
  ): Pipeline;

  zrevrange(
    key: KeyType,
    start: number,
    stop: number,
    callback?: (err: Error, res: any) => void,
  ): Pipeline;
  zrevrange(
    key: KeyType,
    start: number,
    stop: number,
    withScores: 'WITHSCORES',
    callback?: (err: Error, res: any) => void,
  ): Pipeline;

  zrangebyscore(
    key: KeyType,
    min: number | string,
    max: number | string,
    ...args: string[]
  ): Pipeline;

  zrevrangebyscore(
    key: KeyType,
    max: number | string,
    min: number | string,
    ...args: string[]
  ): Pipeline;

  zcount(
    key: KeyType,
    min: number | string,
    max: number | string,
    callback?: (err: Error, res: number) => void,
  ): Pipeline;

  zcard(key: KeyType, callback?: (err: Error, res: number) => void): Pipeline;

  zscore(key: KeyType, member: string, callback?: (err: Error, res: number) => void): Pipeline;

  zrank(key: KeyType, member: string, callback?: (err: Error, res: number) => void): Pipeline;

  zrevrank(key: KeyType, member: string, callback?: (err: Error, res: number) => void): Pipeline;

  hset(
    key: KeyType,
    field: string,
    value: any,
    callback?: (err: Error, res: 0 | 1) => void,
  ): Pipeline;
  hsetBuffer(
    key: KeyType,
    field: string,
    value: any,
    callback?: (err: Error, res: Buffer) => void,
  ): Pipeline;

  hsetnx(
    key: KeyType,
    field: string,
    value: any,
    callback?: (err: Error, res: 0 | 1) => void,
  ): Pipeline;

  hget(
    key: KeyType,
    field: string,
    callback?: (err: Error, res: string | string) => void,
  ): Pipeline;
  hgetBuffer(key: KeyType, field: string, callback?: (err: Error, res: Buffer) => void): Pipeline;

  hmset(key: KeyType, ...args: any[]): Pipeline;
  hmset(key: KeyType, data: any, callback?: (err: Error, res: 0 | 1) => void): Pipeline;

  hmget(key: KeyType, ...fields: string[]): Pipeline;

  hincrby(
    key: KeyType,
    field: string,
    increment: number,
    callback?: (err: Error, res: number) => void,
  ): Pipeline;

  hincrbyfloat(
    key: KeyType,
    field: string,
    increment: number,
    callback?: (err: Error, res: number) => void,
  ): Pipeline;

  hdel(key: KeyType, ...fields: string[]): Pipeline;

  hlen(key: KeyType, callback?: (err: Error, res: number) => void): Pipeline;

  hkeys(key: KeyType, callback?: (err: Error, res: any) => void): Pipeline;

  hvals(key: KeyType, callback?: (err: Error, res: any) => void): Pipeline;

  hgetall(key: KeyType, callback?: (err: Error, res: any) => void): Pipeline;

  hexists(key: KeyType, field: string, callback?: (err: Error, res: 0 | 1) => void): Pipeline;

  incrby(key: KeyType, increment: number, callback?: (err: Error, res: number) => void): Pipeline;

  incrbyfloat(
    key: KeyType,
    increment: number,
    callback?: (err: Error, res: number) => void,
  ): Pipeline;

  decrby(key: KeyType, decrement: number, callback?: (err: Error, res: number) => void): Pipeline;

  getset(key: KeyType, value: any, callback?: (err: Error, res: string) => void): Pipeline;

  mset(...args: any[]): Pipeline;
  mset(data: any, callback?: (err: Error, res: string) => void): Pipeline;

  msetnx(...args: any[]): Pipeline;
  msetnx(data: any, callback?: (err: Error, res: 0 | 1) => void): Pipeline;

  randomkey(callback?: (err: Error, res: string) => void): Pipeline;

  select(index: number, callback?: (err: Error, res: string) => void): Pipeline;

  move(key: KeyType, db: string, callback?: (err: Error, res: 0 | 1) => void): Pipeline;

  rename(key: KeyType, newkey: KeyType, callback?: (err: Error, res: string) => void): Pipeline;

  renamenx(key: KeyType, newkey: KeyType, callback?: (err: Error, res: 0 | 1) => void): Pipeline;

  expire(key: KeyType, seconds: number, callback?: (err: Error, res: 0 | 1) => void): Pipeline;

  pexpire(
    key: KeyType,
    milliseconds: number,
    callback?: (err: Error, res: 0 | 1) => void,
  ): Pipeline;

  expireat(key: KeyType, timestamp: number, callback?: (err: Error, res: 0 | 1) => void): Pipeline;

  pexpireat(
    key: KeyType,
    millisecondsTimestamp: number,
    callback?: (err: Error, res: 0 | 1) => void,
  ): Pipeline;

  keys(pattern: string, callback?: (err: Error, res: string[]) => void): Pipeline;

  dbsize(callback?: (err: Error, res: number) => void): Pipeline;

  auth(password: string, callback?: (err: Error, res: string) => void): Pipeline;

  ping(callback?: (err: Error, res: string) => void): Pipeline;
  ping(message: string, callback?: (err: Error, res: string) => void): Pipeline;

  echo(message: string, callback?: (err: Error, res: string) => void): Pipeline;

  save(callback?: (err: Error, res: string) => void): Pipeline;

  bgsave(callback?: (err: Error, res: string) => void): Pipeline;

  bgrewriteaof(callback?: (err: Error, res: string) => void): Pipeline;

  shutdown(save: 'SAVE' | 'NOSAVE', callback?: (err: Error, res: any) => void): Pipeline;

  lastsave(callback?: (err: Error, res: number) => void): Pipeline;

  type(key: KeyType, callback?: (err: Error, res: string) => void): Pipeline;

  multi(callback?: (err: Error, res: string) => void): Pipeline;

  exec(callback?: (err: Error, res: any) => void): Promise<any>;

  discard(callback?: (err: Error, res: any) => void): Pipeline;

  sync(callback?: (err: Error, res: any) => void): Pipeline;

  flushdb(callback?: (err: Error, res: string) => void): Pipeline;

  flushall(callback?: (err: Error, res: string) => void): Pipeline;

  sort(key: KeyType, ...args: string[]): Pipeline;

  info(callback?: (err: Error, res: any) => void): Pipeline;
  info(section: string, callback?: (err: Error, res: any) => void): Pipeline;

  time(callback?: (err: Error, res: any) => void): Pipeline;

  monitor(callback?: (err: Error, res: NodeJS.EventEmitter) => void): Pipeline;

  ttl(key: KeyType, callback?: (err: Error, res: number) => void): Pipeline;

  persist(key: KeyType, callback?: (err: Error, res: 0 | 1) => void): Pipeline;

  slaveof(host: string, port: number, callback?: (err: Error, res: string) => void): Pipeline;

  debug(...args: any[]): Pipeline;

  config(...args: any[]): Pipeline;

  subscribe(...channels: any[]): Pipeline;

  unsubscribe(...channels: string[]): Pipeline;

  psubscribe(...patterns: string[]): Pipeline;

  punsubscribe(...patterns: string[]): Pipeline;

  publish(channel: string, message: string, callback?: (err: Error, res: number) => void): Pipeline;

  watch(...keys: KeyType[]): Pipeline;

  unwatch(callback?: (err: Error, res: string) => void): Pipeline;

  cluster(...args: any[]): Pipeline;

  restore(...args: any[]): Pipeline;

  migrate(...args: any[]): Pipeline;

  dump(key: KeyType, callback?: (err: Error, res: string) => void): Pipeline;

  object(subcommand: string, ...args: any[]): Pipeline;

  client(...args: any[]): Pipeline;

  eval(...args: any[]): Pipeline;

  evalsha(...args: any[]): Pipeline;

  script(...args: any[]): Pipeline;

  quit(callback?: (err: Error, res: string) => void): Pipeline;

  scan(cursor: number): Pipeline;

  scan(cursor: number, matchOption: 'match' | 'MATCH', pattern: string): Pipeline;
  scan(cursor: number, countOption: 'count' | 'COUNT', count: number): Pipeline;

  scan(
    cursor: number,
    matchOption: 'match' | 'MATCH',
    pattern: string,
    countOption: 'count' | 'COUNT',
    count: number,
  ): Pipeline;
  scan(
    cursor: number,
    countOption: 'count' | 'COUNT',
    count: number,
    matchOption: 'match' | 'MATCH',
    pattern: string,
  ): Pipeline;
  sscan(key: KeyType, cursor: number, ...args: any[]): Pipeline;

  hscan(key: KeyType, cursor: number, ...args: any[]): Pipeline;

  zscan(key: KeyType, cursor: number, ...args: any[]): Pipeline;

  pfmerge(destkey: KeyType, ...sourcekeys: KeyType[]): Pipeline;

  pfadd(key: KeyType, ...elements: string[]): Pipeline;

  pfcount(...keys: KeyType[]): Pipeline;

  xack(key: KeyType, group: string, ...ids: string[]): Pipeline;

  xadd(key: KeyType, id: string, ...args: string[]): Pipeline;

  xclaim(
    key: KeyType,
    group: string,
    consumer: string,
    minIdleTime: number,
    id: string,
    ...args: any[]
  ): Pipeline;

  xdel(key: KeyType, ...ids: string[]): Pipeline;

  xgroup(...args: any[]): Pipeline;

  xinfo(...args: any[]): Pipeline;

  xlen(key: KeyType): Pipeline;

  xpending(key: KeyType, group: string, ...args: any[]): Pipeline;

  xrange(key: KeyType, start: string, end: string, ...args: any[]): Pipeline;

  xread(...args: any[]): Pipeline;

  xreadgroup(command: 'GROUP' | 'group', group: string, consumer: string, ...args: any[]): Pipeline;

  xrevrange(key: KeyType, end: string, start: string, ...args: any[]): Pipeline;

  xtrim(key: KeyType, strategy: 'MAXLEN' | 'maxlen', ...args: any[]): Pipeline;
}
