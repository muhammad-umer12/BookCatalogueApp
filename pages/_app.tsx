import '../styles/globals.css'

import { Provider } from 'react-redux'
import { useStore } from 'react-redux'
import React, { useState } from 'react'
import {AppContext, AppInitialProps, AppProps} from 'next/app'
import { createStore } from 'redux'
import rootReducer from '../redux/reducers'
import { wrapper } from "../redux/store"
import {NextComponentType} from 'next'

const  MyApp:NextComponentType<AppContext,AppInitialProps,AppProps>=({ Component, pageProps })=> {

  
  return(
    <React.Fragment>
   
      <Component {...pageProps} />
     ?
    </React.Fragment>
  ) 
}

export default wrapper.withRedux(MyApp);
