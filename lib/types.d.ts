declare type Callback<Context = any, Action = any, Payload = any> = (o: Context, a: Action, payload: Payload) => void;

declare type SubDescriptor<Context = any, Action = any> = [ Context, Action];

declare interface Pub<Context = any, Payload = any, Action = any> {
  subscribe(
    d: SubDescriptor<Context, Action>,
    fn:Callback<Context, Action, Payload>
  ): Callback<Context, Action, Payload>;

  unsubscribe(
    d: SubDescriptor<Context, Action>,
    fn?: Callback<Context, Action, Payload>
  ): void;
  
  publish(
    d: SubDescriptor<Context, Action>,
    payload: Payload
  ): void;
}
