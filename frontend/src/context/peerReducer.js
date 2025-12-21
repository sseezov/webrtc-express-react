import { ADD_PEER, REMOVE_PEER } from "./peerActions";

export const peersReducer = (action, state) => {
  switch(action.type){
    case ADD_PEER:
      return {
        ...state, [action.payload.peerId]: {
          stream: action.payload.stream
        }
      }
    case REMOVE_PEER:
        
    return {

      }
  }
}