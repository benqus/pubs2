# pubs2

Minimalistic context and action based PubSub.

A quick code exercise about a random idea to subscribe to notifications related to an object and its actions without extending the event emitter.

It's like a reducer but for any object instance, not just for state management.

Cheers! 🍻

### Install

`npm install pubs2`

### Usage

```ts
import pubs from 'pubs2';

type Actions = "update";
const s = pubs<object, Actions, any>();

const anObject: object = {};

const onupdate = s.subscribe([anObject, "update"],
  (object: object, action: Actions, payload: any) => {
    // execute code ...
  });

// publish something
s.publish([anObject, "update"], "payload can be anything");

// unsubscribe
s.unsubscribe([anObject, "update"], onupdate));

// or if you remove the "observed" object
s.unsubscribe([anObject]);
```
