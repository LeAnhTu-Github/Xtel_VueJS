<script>
import { provide } from 'vue'
import MessageReverser from './exercises/01-basic/exercise-1-1/MessageReverser.vue'
import DataBinding from './exercises/01-basic/exercise-1-2/DataBinding.vue'
import ForTable from './exercises/01-basic/exercise-1-3/ForTable.vue'
import FormLogin from './exercises/02-Directives/exercise-2-1/FormLogin.vue'
import CountNumber from './exercises/02-Directives/exercise-2-2/CountNumber.vue'
import TodoList from './exercises/02-Directives/exercise-2-3/TodoList.vue'
import ComputedProperties from './exercises/03-ComputedAndWatch/exercise-3-1/ComputedProperties.vue'
import Watchers from './exercises/03-ComputedAndWatch/exercise-3-2/Watchers.vue'
import Computed_Method from './exercises/03-ComputedAndWatch/exercise-3-3/Computed_Method.vue'
import singleFileComponent from './exercises/04-component/exercise-4-1/single-file-component.vue'
import ParentChildrenComponent from './exercises/04-component/exercise-4-2/parent-children-component.vue'
import DynamicComponent from './exercises/04-component/exercise-4-3/dynamic-component.vue'
import BasicLifeCycle from './exercises/05-lifecycle/exercise-5-1/basic-life-cycle.vue'
import DataFetching from './exercises/05-lifecycle/exercise-5-2/data-fetching.vue'
import DomManipulation from './exercises/05-lifecycle/exercise-5-3/dom-manipulation.vue'
import BasicRouter from './exercises/06-router/exercise-6-1/basic-router.vue'
import DynamicRoutes from './exercises/06-router/exercise-6-2/dynamic-routes.vue'
import ProtectRouter from './exercises/06-router/exercise-6-3/protect-router.vue'
import VuexBasic from './exercises/07-vuex/exercise-7-1/vuex-basic.vue'
import VuexModules from './exercises/07-vuex/exercise-7-2/vuex-modules.vue'
import ComplexState from './exercises/07-vuex/exercise-7-3/complex-state.vue'
import TeleportSuspense from './exercises/08-vue3feature/exercise-8-3/teleport-suspense.vue'
import CustomDirective from './exercises/09-directive/exercise-9-1/custom-directive.vue'
import provideInject from './exercises/09-directive/exercise-9-2/provide-inject.vue'
import ProvideInject from './exercises/09-directive/exercise-9-2/provide-inject.vue'
import TodoApplicationPro from './exercises/11-todo-app/todo-application-pro.vue'
export default {
  name: 'App',
  components: {
    MessageReverser,
    DataBinding,
    ForTable,
    FormLogin,
    CountNumber,
    TodoList,
    ComputedProperties,
    Watchers,
    Computed_Method,
    singleFileComponent,
    ParentChildrenComponent,
    DynamicComponent,
    BasicLifeCycle,
    DataFetching,
    DomManipulation,
    BasicRouter,
    DynamicRoutes,
    ProtectRouter,
    VuexBasic,
    VuexModules,
    ComplexState,
    TeleportSuspense,
    CustomDirective,
    ProvideInject,
    TodoApplicationPro
  },
  setup() {
    const message = 'Test provide';
    provide("message", message)
    return {};
  }
}
</script>

<template>
  <div>
    <!-- <router-view></router-view> -->
    <TodoApplicationPro />
  </div>
</template>

<style>
body {
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  color: #42b983;
}

h2 {
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
</style>
