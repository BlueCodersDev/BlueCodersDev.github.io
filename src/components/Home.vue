<template>
  <div class="home">
  <img :src="require('@/assets/bluecoders.png')" />
   <h3 class="inline">User Group | Developer Community</h3>
    <p>{{ about }}</p>
    <p>{{ more }}</p>
    <v-divider></v-divider><br>
    <h3 class="inline">Our Mission</h3>

<p><ul>
     <li>DEVELOPERS with a passion to EXPLORE, CODE & SHARE.</li><br>
     <li>our MISSION is to enable DEVELOPERS on latest & hottest  technologies around CLOUD & AI.</li><br>
     <li>We SPEAK any PROGRAMMING LANGUAGE.</li>
</ul><p>
<v-divider></v-divider>
    <h3 class="inline">Topics</h3>
    <topics></topics>
    </div>
  </div>
</template>

<script>
import Topics from './Topics'
export default {
  name: 'home',
  components: { Topics },
  data () {
    return {
      msg: 'Vidyasagar Machupalli',
      about: 'BlueCoders is a society of energetic developers who are passionate in exploring mobile, cloud, and cognitive solutions. We provide a stage for developers and enthusiasts working on these technologies or curious in learning more about these technologies to collaborate and learn together.',
      more: 'Let\'s group together to talk what\'s happening in Cloud & AI.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
@import url('https://fonts.googleapis.com/css?family=Quattrocento+Sans:400,700');
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
color: #F0FFFF;
font-weight: bold;
-webkit-transition: color 0.2s ease-in-out;
-moz-transition: color 0.2s ease-in-out;
-o-transition: color 0.2s ease-in-out;
transition: color 0.2s
}
p{
font-family: 'Quattrocento Sans', sans-serif;
  position: relative;
  padding-left: 0.9375rem;
  padding-right: 0.9375rem;
  font-size: 18px;
 line-height: 2;
 color: #000;
 text-rendering: optimizeLegibility;

}

.home img{
padding: 1rem 0;
margin: 3rem 0;
width: 300px;
border-radius: 50%;
margin: 0 auto;
display: table
}

h4{
font-size:18px;
font-weight: bold;
}

.inline{
color:#66c0ec !important;
}
.background{
  background-color: #fff;
}
</style>
