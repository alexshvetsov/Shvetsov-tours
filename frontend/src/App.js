import React from 'react'
import './app.scss'
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginScreen from './screens/loginScreen/LoginScreen';
import RegisterScreen from './screens/registerScreen/RegisterScreen';
import { HotelsScreen } from './screens/hotelsScreen/HotelsScreen';
import { HotelScreen } from './screens/hotelScreen/HotelScreen';
import NewHotelForm from './screens/NewHotelForm/NewHotelForm';


const App = () => {
  return (
    <Router>
      <div className='app'>
        <Header />
        <main >
          <Sidebar />
          <section className='main-area'>
          <Route path='/' component={HotelsScreen} exact/>
          <Route path='/hotels/new' component={NewHotelForm} exact />
          <Route path='/hotel/:id' component={HotelScreen} exact/>
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          </section>
        </main>
      </div>
    </Router> 
  )
}

export default App
