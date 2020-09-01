import React from 'react';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userdata: {
        username: 'TestUser',
        friends: [
          { name: 'John Smith',
            occasions: [
              {
                occasion: 'birthday',
                date: '10/26/1981',
                items: ['xbox', 'lawnmower', 'televsion',]
              },
              {
                occasion: 'anniversary',
                date: '07/15/2018',
                items: ['watch', 'cruise', 'vacation']
              }
            ]
          },
          { name: 'Sally Johnson',
            occasions: [
              {
                occasion: 'birthday',
                date: '12/28/1984',
                items: ['necklace', 'chair', 'dress',]
              },
              {
                occasion: 'anniversary',
                date: '07/15/2018',
                items: ['flowers', 'cruise', 'vacation']
              }
            ]
          },
          { name: 'George Robinson',
            occasions: [
              {
                occasion: 'birthday',
                date: '12/28/1984',
                items: ['necklace', 'chair', 'dress',]
              },
              {
                occasion: 'anniversary',
                date: '07/15/2018',
                items: ['flowers', 'cruise', 'vacation']
              }
            ]
          }
        ],
      }
    }
  }
  render(){
    const { userdata } = this.state;
    return(
      <div className="App">
        <Header username={userdata.username}/>
        <HomePage data={userdata} />
      </div>
    );

  }
}

export default App;
