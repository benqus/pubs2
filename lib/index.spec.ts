import { expect } from 'chai';
import pubs from './index';

describe('Pubs2', () => {

  it('interface', () => {
    const pub = pubs();

    expect(pub.publish).to.be.a('function');
    expect(pub.subscribe).to.be.a('function');
    expect(pub.unsubscribe).to.be.a('function');
  });

  // it('subscribes to object-action', () => {
  //   const pub = pubs();
  //   const obj = {};

  //   pub.subscribe([obj, '*'], (): void => {});

  //   expect(pub.size(obj)).to.equal(1);
  // });

  // it('publishes', () => {
  //   const pub: Pub<object, Payload> = pubs<object, Payload>();
  //   const obj: object = {};
  //   const payload: object = {};

  //   pub.subscribe([obj], (obj, payload): void => {
  //     expect(obj).to.equal(obj);
  //     expect(payload).to.equal(payload);
  //   });
  //   pub.publish([obj], payload);
  // });

  // it('publishes - on same object', () => {
  //   const pub: Pub<object, Payload> = pubs<object, Payload>();
  //   const obj1: object = {};
  //   const obj2: object = {};
  //   let called: boolean = false;

  //   pub.subscribe([obj1], (obj, payload): void => {
  //     called = true;
  //   });
    
  //   pub.publish([obj2], {});

  //   expect(called).to.be.false;
  // });

  // it('unsubscribes all', () => {
  //   const pub: Pub<object, Payload> = pubs<object, Payload>();
  //   const obj: object = {};
  //   let called: boolean = false;

  //   pub.subscribe([obj], (obj, payload): void => {
  //     called = true;
  //   });
  //   pub.unsubscribe([obj]);
    
  //   pub.publish([obj], {});

  //   expect(pub.size([obj])).to.equal(0);
  //   expect(called).to.be.false;
  // });

  // it('unsubscribes one callback', () => {
  //   const pub: Pub<object, Payload> = pubs<object, Payload>();
  //   const obj: object = {};
  //   let calls: number = 0;
  //   const fn1 = (obj, path, payload): void => { calls++ };
  //   const fn2 = (obj, path, payload): void => { calls++ };

  //   pub.subscribe([obj], fn1);
  //   pub.subscribe([obj], fn2);
  //   pub.unsubscribe([obj], fn1);
  //   pub.publish([obj], {});

  //   expect(pub.size()).to.equal(1);
  //   expect(calls).to.equal(1);
  // });

});
