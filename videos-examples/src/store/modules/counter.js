import * as Types from '../types';

const state = {
   counter: 0
};

const getters ={
   [Types.DOUBLE_COUNTER]: state => {
      return state.counter *2;
   },
   [Types.CLICK_COUNTER]: state => {
      return state.counter + ' clicks!';
   }
};

const mutations = {
   [Types.MUTATE_INCREMENT_COUNTER]: (state,payload) => {
      return state.counter += payload;
   },
   [Types.MUTATE_DECREMENT_COUNTER]: (state,payload) => {
      return state.counter -= payload;
   }
};

const actions = {
   [Types.COUNTER_INCREMENT]: (context, payload) => {
      context.commit(Types.MUTATE_INCREMENT_COUNTER,payload);
   },
   [Types.COUNTER_DECREMENT]: ({commit},payload) => {
      commit(Types.MUTATE_DECREMENT_COUNTER,payload);
   },
   [Types.COUNTER_INCREMENT_ASYNC]: ({commit}, payload) => {
      setTimeout(()=>{
         commit(Types.MUTATE_INCREMENT_COUNTER, payload.by);
      },payload.duration)
   },
   [Types.COUNTER_DECREMENT_ASYNC]: ({commit}, payload) => {
      setTimeout(()=>{
         commit(Types.MUTATE_DECREMENT_COUNTER, payload.by);
      },payload.duration)
   }
};

export default {
   state,
   getters,
   mutations,
   actions
}