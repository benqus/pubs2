import { expect } from 'chai';
import pubs from './index';

describe('Pubs2', () => {

  it('interface', () => {
    const pub = pubs();

    expect(pub.publish).to.be.a('function');
    expect(pub.subscribe).to.be.a('function');
    expect(pub.unsubscribe).to.be.a('function');
  });

});
