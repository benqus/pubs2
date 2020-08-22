export default function<Context, Action, Payload>(
  subs: Map<Context, Map<Action, Set<Callback>>>
) {
  return function publish([ o, a ]: SubDescriptor<Context, Action>, payload: Payload): void {
    if (!subs.has(o)) return;
    const actions: Map<Action, Set<Callback>> = subs.get(o);
    if (!actions.get(a)) return;
    const subscriptions: Set<Callback> = actions.get(a);
    if (subscriptions) subscriptions.forEach((fn): void => fn(o, a, payload));
  }
}