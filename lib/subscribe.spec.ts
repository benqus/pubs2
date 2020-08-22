import { expect } from 'chai';
import subscribefn from './subscribe';

let map;
let subscribe;

beforeEach(() => {
  map = new Map();
  subscribe = subscribefn(map);
});

describe('subscribe', () => {

  it('subscribes to object-action', () => {
    const obj = {};
    const action = '*';
    subscribe([obj, action], (): void => {});
    expect(map.size).to.equal(1);
    expect(map.get(obj)).to.be.ok;
    expect(map.get(obj).get(action)).to.be.ok;
  });
  
  it('subscribe throws error without action', () => {
    const obj = {};
    expect(() => subscribe([obj], (): void => {})).to.throw;
    expect(map.size).to.equal(0);
  });
  
});
