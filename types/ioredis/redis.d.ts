import { Commander } from './commander';
import { RedisCommands } from './commands';

export interface Redis extends NodeJS.EventEmitter, Commander, RedisCommands {
  Promise: typeof Promise;
  status: string;
  connect(callback?: () => void): Promise<any>;
  disconnect(): void;
  duplicate(): Redis;

  send_command(command: string, ...args: any[]): any;
}
