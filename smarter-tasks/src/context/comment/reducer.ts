interface Comment {
    id: number;
    desc: string;
    taskId: number;
  }
  // Now, I'll rename the interface in the `CommentList` component from `State`
  // to `CommentsState`. And I'll also export the interface. 
  interface User {
    id: number;
    name: string;
    email: string;
    organsation_id: number;
  }

  export interface CommentsState {
    comments: Comment[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
  } 

  export const initialState: CommentsState = {
    comments: [],
    isLoading: false,
    isError: false,
    errorMessage: ''
  };

  // Next, I'll comment the `Action` interface
  
  // interface Action {
  //   type: string;
  //   payload?: any;
  // }
  
  // Then I'll define a new type called `CommentsActions` 
  // for all possible combimations of action objects.
  
  export type CommentsActions = 
  | { type: 'FETCH_COMMENTS_REQUEST' }
  | { type: 'FETCH_COMMENTS_SUCCESS'; payload: Comment[] }
  | { type: 'FETCH_COMMENTS_FAILURE'; payload: string }
  | { type: 'ADD_COMMENTS_SUCCESS'; payload: Comment }
  | { type: 'FETCH_USER_SUCCESS'; payload: User}

  
  export const reducer = (state: CommentsState = initialState, action: CommentsActions): CommentsState => {
    switch (action.type) {
      case "FETCH_COMMENTS_REQUEST":
        return {
          ...state,
          isLoading: true
        };   
      case "FETCH_COMMENTS_SUCCESS":
        return {
          ...state,
          isLoading: false,
          comments: action.payload,
        };      
      case "FETCH_COMMENTS_FAILURE":
        return {
          ...state,
          isLoading: false,
          isError: true, 
          errorMessage: action.payload
        }; 
        case 'ADD_COMMENTS_SUCCESS':
      // Here I'll insert new new project object, which is coming in this 
      // `action.payload`, to the `comments` array present in state.
          console.log("prev state",state.comments);
          console.log(action.payload);
          
          
          return { ...state, comments: [...state.comments, action.payload] }; 
      case "FETCH_USER_SUCCESS":
        
        return{
          ...state,
          isLoading: false,
        }         
      default:
        return state;
    }
  }
