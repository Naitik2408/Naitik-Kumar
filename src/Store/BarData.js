import { createSlice } from "@reduxjs/toolkit";

const initialState={
    language:{
      name:'React(%)',
      months: ['26th Nov','5th Dec','10th Dec','15th Dec','Today'],
      value:[0,8,12,20,29],
      color:'#00D8FF',
      framwork: ['React Redux','React Hook Form', 'React Chart']
    }
}

const BarData=createSlice({
    name:'lang',
    initialState,
    reducers:{
        setHtml: (state, action) => {
            return {
              ...state,
              language: {
                ...state.language,
                name: 'HTML(%)',
                months: ['Jan(23)', 'April(23)', 'Jul(23)', 'Oct(23)', 'Today'],
                value: [10, 60, 70, 80, 99],
                color: '#E44C25',
                framwork: ['Bootstrap','Tilwind Css']
              }
            };
        },
        setCss: (state, action) => {
            return {
              ...state,
              language: {
                ...state.language,
                name:'Css(%)',
                months: ['Feb(23)','April(23)','Jul(23)','Oct(23)','Today'],
                value:[0,30,35,50,88],
                color:'#1B73BA',
                framwork: ['Tilwind Css','Bootstrap']
              }
            };
        },
        setJavascript: (state, action) => {
            return {
              ...state,
              language: {
                ...state.language,
                name:'Javascript(%)',
                months: ['Jun(23)','Aug(23)','Oct(23)','Today'],
                value:[10,45,48,56,60],
                color:'#F0D91C',
                framwork: ['ReactJs', 'GSAP']
              }
            };
        },
        setReact: (state, action) => {
            return {
              ...state,
              language: {
                ...state.language,
            name:'React(%)',
            months: ['26th Nov','5th Dec','10th Dec','15th Dec','Today'],
            value:[0,8,12,20,29],
            color:'#00D8FF',
            framwork: ['React Redux','React Hook Form', 'React Chart']
              }
            };
        },
        setGit: (state, action) => {
            return {
              ...state,
              language: {
                ...state.language,
            name:'Git(%)',
            months: ['26th Nov','5th Dec','10th Dec','15th Dec','Today'],
            value:[0,8,29,50,70],
            color:'#E44C25',
            framwork: []
              }
            };
        },
        setGithub: (state, action) => {
            return {
              ...state,
              language: {
                ...state.language,
            name:'Github(%)',
            months: ['26th Nov','5th Dec','10th Dec','15th Dec','Today'],
            value:[0,29,40,48,69],
            color:'rgb(183, 172, 255)',
            framwork: []
              }
            };
        },
        setTailwind: (state, action) => {
            return {
              ...state,
              language: {
                ...state.language,
            name:'Tailwind(%)',
            months: ['26th Nov','5th Dec','10th Dec','15th Dec','Today'],
            value:[0,33,54,69,84],
            color:'#F0D91C',
            framwork: []
              }
            };
        },

    }
})

export const {setHtml,setCss,setJavascript,setReact,setGit,setGithub,setTailwind}= BarData.actions;
export default BarData.reducer;