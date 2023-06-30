/**
 * @typedef {object}
 * @prop {string} id
 * @prop {string} title
 * @prop {Date} created 
 */

/**
 * @typedef {object} Filters
 * @prop {'A-Z' | 'Z-A'}
 */

/**
 * @type {state}
 * @prop {'idle' | 'adding'} phase
 * @prop {Record<string, Task>} tasks
 * @prop {Filter} filters
 */

/**
 * @callback getState
 * @returns {State}
 */

/**
 * @callback Dispatch
 * @param {Action} action
 */

/**
 * @callback EmptyFn
 */

/**
 * @callback Subscribe
 * @param {State} prev
 * @param {State} next
 * @return {EmptyFn}
 */

/**
 * @typedef {object} Store
 * @prop {GetState} getState
 * @prop {Subscribe} subscribe
 * @prop {Dispatch} dispatch
 */