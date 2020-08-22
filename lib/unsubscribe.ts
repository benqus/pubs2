export default function<Context, Action, Subscription>(
  subs: Map<Context, Map<Action, Set<Subscription>>>
) {

  function _removeContext(o: Context): void {
    const actions: Map<Action, Set<Subscription>> = subs.get(o);
    actions.forEach((set: Set<Subscription>) => set.clear());
    actions.clear();
    subs.delete(o);
  }

  return function unsubscribe([ o, a ]: SubDescriptor<Context, Action>, fn?: Subscription): void {
    if (!subs.has(o)) return;
    // remove all object-space subscriptions
    if (!a) _removeContext(o);
    // remove action-space subscriptions
    const actions: Map<Action, Set<Subscription>> = subs.get(o);
    const subscriptions: Set<Subscription> = actions.get(a);
    // remove subscription from subscriptions
    if (subscriptions) subscriptions.delete(fn);
    // clean up action-space
    if (subscriptions.size === 0) actions.delete(a);
    // clean up object-space
    if (actions.size === 0) subs.delete(o);
  }
}