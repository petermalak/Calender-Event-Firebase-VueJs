<template>
  <v-app>
    <v-content>
      <calender></calender>
    </v-content>
  </v-app>
</template>

<script>
import Calender from './components/Calender';

export default {
  name: 'App',

  components: {
    Calender,
  },

  data: () => ({
    //
  }),
};
</script>
