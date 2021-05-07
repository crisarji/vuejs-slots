import Vue from 'vue'
import Router from 'vue-router'
import Agent from './../views/Agent'
import Supervisor from './../views/Supervisor'
import Manager from './../views/Manager'

// Disclaimer: this is not a good practice, it is just for the sake of the example that this templates are added here
import { agents, supervisors, managers } from '../utils/employees'

const AgentComponent = { data() { return { agents } }, components: { Agent }, template: '<Agent :listElements="agents"></Agent>' }
const SupervisorComponent = { data() { return { supervisors } }, components: { Supervisor }, template: '<Supervisor :listElements="supervisors"></Supervisor>' }
const ManagerComponent = { data() { return { managers } }, components: { Manager }, template: '<Manager :listElements="managers"></Manager>' }

const routes = [
  { path: '/agent', component: AgentComponent },
  { path: '/supervisor', component: SupervisorComponent },
  { path: '/manager', component: ManagerComponent }
]

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})


export default router
