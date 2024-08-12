<template>
  <div id="app">
    <h1>Annictの情報</h1>
    <ul>
      <li v-for="work in works" :key="work.id">
        {{ work.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  data() {
    return {
      works: []
    };
  },
  apollo: {
    works: {
      query: gql`
        query {
          viewer {
            works {
              nodes {
                id
                title
              }
            }
          }
        }
      `,
      result({ data }) {
        this.works = data.viewer.works.nodes;
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
