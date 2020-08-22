export default function<Context, Action, Subscription>(
  subs: Map<Context, Map<Action, Set<Subscription>>>
) {

  function _remove(o: Context): void {
    subs.get(o).forEach((set) => set.clear());
    subs.get(o).clear();
    subs.delete(o);
  }

  return function unsubscribe([ o, a ]: SubDescriptor<Context, Action>, fn?: Subscription): void {
    if (!subs.has(o)) return;
    // remove all object-space subscriptions
    if (!a) _remove(o);
    // remove action-space subscriptions
    const actions: Map<Action, Set<Subscription>> = subs.get(o);
    const subscriptions: Set<Subscription> = actions.get(a);
    // remove subscription from subscriptions
    if (subscriptions) subscriptions.delete(fn);
    // clean up action-space
    if (subscriptions.size === 0) actions.delete(a);
    // clean up object-space
    if (subs.get(o).size === 0) subs.delete(o);
  }
}