/// <reference path="./types.d.ts" />

import publishFn from "./publish";
import subscribeFn from "./subscribe";
import unsubscribeFn from "./unsubscribe";

export default function <Context = any, Payload = any, Action = any>(): Pub<Context, Payload, Action> {
  const subs: Map<Context, Map<Action, Set<Callback>>> = new Map();
  return {
    subscribe: subscribeFn<Context, Action, Callback>(subs),
    unsubscribe: unsubscribeFn<Context, Action, Callback>(subs),
    publish: publishFn<Context, Action, Payload>(subs),
  };
}
