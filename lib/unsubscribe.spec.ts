import { expect } from 'chai';
import unsubscribefn from './unsubscribe';

let map;
let unsubscribe;

beforeEach(() => {
  map = new Map();
  unsubscribe = unsubscribefn(map);
});

describe('unsubscribe', () => {

  it('unsibscribes and cleans up empty object-action spaces', () => {
    const obj = {};
    const subscription = (): void => {};
    const action = '*';
    const actions = new Map();
    const subsciptions = new Set();

    subsciptions.add(subscription);
    actions.set(action, subsciptions);
    map.set(obj, actions)

    unsubscribe([obj, action], subscription);
    
    expect(subsciptions.size).to.equal(0);
    expect(actions.has(action)).to.be.false;
    expect(map.size).to.equal(0);
  });

});
