import Step1 from './components/Step1'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Step2 from './components/Step2'
import Result from './components/Result'
import Step3 from './components/Step3'
import Header from './components/Header'
function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={Step1} />
          <Route path='/step2' component={Step2} />
          <Route path='/step3' component={Step3} />
          <Route path='/result' component={Result} />
        </Switch>
      </Router>
    </>
  )
}

export default App
