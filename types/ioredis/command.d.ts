export interface Command {
  setArgumentTransformer(name: string, fn: (args: any[]) => any[]): void;
  setReplyTransformer(name: string, fn: (result: any) => any): void;
}
