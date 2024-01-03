import {createSlice} from '@reduxjs/toolkit'
// import { projectCardData } from './ProjectCardData';

const initialState={
    projectCardDetails:{
        id:1,
        imageUrl:'https://images.unsplash.com/photo-1608434536950-d7d084398bf5?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        projectTitle:'HTML',
        prjectSubTitle:'This is my project subtitle.',
        hasTags:['#HTML','#Javascript','#Css','#React']
    }
}

export const projCardSlice= createSlice({
    name:"projectcard",
    initialState,
    reducers:{
        setProjectDetail:(state,action)=>{
            return {
                ...state,
                projectCardDetails: {
                  ...state.projectCardDetails,
                  id:action.payload.id,
                  imageUrl:action.payload.imageUrl,
                  projectTitle:action.payload.projectTitle,
                  prjectSubTitle:action.payload.projectSubTitle,
                  hasTags:action.payload.hasTags,
                }
            };
        }
    }
})

export const {setProjectDetail} = projCardSlice.actions;

export default projCardSlice.reducer