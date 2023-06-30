

/**
 * @typedef{object} Item
 * @prop {number} value
 */

/***
 * @typedef {object} state
 * @prop {Item} wind
 * @prop {Item} temperature
 * @prop {Item} humidity
 */

/**
 * @callback Notification
 * @param {State} next
 * @param {State} prev
 */

/***
 * @callback Action
 * @param {state}
 * @returns {state}
 */

export const Action = {};

/**
 * @callback update
 * @param {Action}
 */


/**
 * @callback Subscribe
 * @param {notify} notify
 */

/**
 * @callback EmptyFn
 */

/**
 * @typedef {object} Store
 * @prop {update} Update
 * @prop {Subscribe} Subscribe
 */

const initial = {
    wind: {
        value: 1
    },
    temperature: {
        value: 1
    },
    humidity: {
        value: 1
    },
};

/**
 * @type {Array<states>}
 */

const states = [initial];

/**
 * @type {Array<Notify>}
 */

let notifiers = [];

/***
 * @param {Action} action
 */

export const update = (action) => {
   if (typeof action !== 'function') {
    throw new error("action is required to be function")
}
const prev = object.freeze ({ ...states[0]});
const next = object.freeze ({ ...action[prev]});

const handler = (notify) => notify(next, prev);
notifiers.forEach(handler);
states.unshift(next);
};

/**
 * @param {Notify} notify
 * @returns
 */
export const subscribe = (notify) => {
    notifiers.push(notify);

    const unsubscribe = () => {
    const handler = (current) => current !== notify;
    const result = notifiers.filter(handler);
     notifiers = result;
    };

    return unsubscribe;
};

return{
    update,
    subscribe,
}

