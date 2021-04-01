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
import FollowedHotels from './screens/followedHotels/FollowedHotels';
import ContactUs from './screens/contactUs/ContactUs';


const App = () => {
  return (
    <Router>
      <div className='app'>
        <Header />
        <main >
          <Route render={({ history }) => <Sidebar history={history} />} />

          <section className='main-area'>
          <Route path='/hotels/followed' component={FollowedHotels} exact/>
          <Route path='/hotels/new' component={NewHotelForm} exact />
          <Route path='/hotel/:id' component={HotelScreen} exact/>
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/contact' component={ContactUs} />
          <Route path='/search/:keyword' component={HotelsScreen} exact />
          <Route path='/page/:pageNumber' component={HotelsScreen} exact />
          <Route path='/search/:keyword/page/:pageNumber' component={HotelsScreen} exact />
          <Route path='/' component={HotelsScreen} exact/>
          </section>
        </main>
      </div>
    </Router> 
  )
}

export default App
