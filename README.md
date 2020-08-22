# pubs2

Minimalistic context and action based PubSub.

A quick code exercise about a random idea to subscribe to notifications related to an object and its actions without extending the event emitter.

It's like a reducer but for any object instance, not just for state management.

Cheers! 🍻

### Usage

```ts
import pubs from 'pubs';

type Actions = "update";
const s = pubs<object, Actions, any>();

const anObject: object = {};

const onupdate = s.subscribe([anObject, "update"],
  (object: object, action: Actions, payload: any) => {
    // execute code ...
  });

// publish something
s.publish([object, "update"], "payload can be anything");

// unsubscribe
s.unsubscribe([object, "update"], onupdate));

// or if you remove the "observed" object
s.unsubscribe([object]);
```
