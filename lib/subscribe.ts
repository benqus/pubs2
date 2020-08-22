export default function<Context, Action, Subscription>(
  subs: Map<Context, Map<Action, Set<Subscription>>>
) {
  return function subscribe([ o, a ]: SubDescriptor<Context, Action>, fn: Subscription): Subscription {
    // create object-space
    if (!subs.has(o)) subs.set(o, new Map());
    const context = subs.get(o);
    if (!a) throw new Error('Action must be provided!');
    // crate action-space
    if (!context.has(a)) context.set(a, new Set());
    context.get(a).add(fn);
    return fn;
  }
}