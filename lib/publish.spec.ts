import { expect } from 'chai';
import publishFn from './publish';

let map;
let publish;

beforeEach(() => {
  map = new Map();
  publish = publishFn(map);
});

describe('publish', () => {

  it('publishes within object-action spaces', () => {
    let called = false;
    let args = null;
    const obj = {};
    const payload = {};
    const subscription = (o, a, p) => {
      called = true;
      args = [o, a, p];
    };
    const action = '*';
    const actions = new Map();
    const subsciptions = new Set();

    subsciptions.add(subscription);
    actions.set(action, subsciptions);
    map.set(obj, actions)

    publish([obj, action], payload);
    
    expect(called).to.be.true;
    expect(args).to.be.an('array');
    expect(args[0]).to.equal(obj);
    expect(args[1]).to.equal(action);
    expect(args[2]).to.equal(payload);
  });

});
