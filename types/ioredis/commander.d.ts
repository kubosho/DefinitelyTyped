export class Commander {
  getBuiltinCommands(): string[];
  createBuiltinCommand(commandName: string): {};
  defineCommand(
    name: string,
    definition: {
      numberOfKeys?: number;
      lua?: string;
    },
  ): any;
  sendCommand(): void;
}
