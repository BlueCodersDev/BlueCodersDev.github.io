<template>
  <v-container fluid class="pa-0">
    <v-layout row wrap>
      <v-flex md12 sm12>
        <div class="text-xs-center">
          <v-chip v-for="skill in skills" :key="skill.name">
            {{skill.name}}
          </v-chip>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'topics',
  data: () => {
    return {
      skills: [
        { name: 'Open Source' },
        { name: 'Cloud Computing' },
       { name: 'Machine Learning' },
       { name: 'Artificial Intelligence' },
        { name: 'Web Technology' },
       { name: 'Mobile Development' },
       { name: 'Data Science' },
        { name: 'Cognitive Computing' },
       { name: 'Computer Programming' },
       { name: 'IBM Cloud' }

      ]
    }
  }
}
</script>

<style scoped>
* {
  color: #2B3940;
}
h4 {
  font-weight: bold;
}
.language-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  flex-direction: column;
}
.blue{
  color: #66c0ec;
}
</style>