<template>
 <v-layout row wrap align-center>
          <v-flex xs12 md4>
            <div class="text-xs-center">
              <h4 class="inline"> Meetups</h4>
            </div>
          </v-flex>
          <v-flex xs12 md5 offset-md2>
            <div v-for="item in items" :key="item.title">
              <v-card class="my-3" hover>
                <v-card-media
                  class="white--text"
                  height="190px"
                  :src="item.imgUrl"
                >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs6 align-start flexbox>
                <v-chip label class="indigo white--text">
                  <v-avatar>
                     <v-icon>{{item.icon}}</v-icon>
                  </v-avatar>
                  {{item.type}}
                </v-chip>
              </v-flex>
              <v-flex xs6 align-end flexbox>
                <span class="headline mb-0 inline-block">{{item.event}}</span>
              </v-flex>
            </v-layout>
          </v-container>
                </v-card-media>
                <v-card-text>
                  {{ item.title }}
                </v-card-text>
                <v-card-actions>
                  <v-btn icon class="red--text" :href="'http://reddit.com/submit?url=https://bluecodersdev.github.io/meetups' + '&title=' + item.event +' '+ item.title">
                    <icon name="reddit-alien"></icon>
                  </v-btn>
                  <v-btn icon class="light-blue--text" :href="'https://twitter.com/share?url=https://bluecodersdev.github.io/meetups'+'&via=VidyasagarMSC&text='+ item.event +' '+ item.title">
                    <icon name="twitter"></icon>
                  </v-btn>
                  <v-btn icon class="blue--text text--darken-3" :href="'http://www.facebook.com/sharer.php?'+'u=https://bluecodersdev.github.io/meetups' +'&t=' + item.event +' '+ item.title">
                    <icon name="facebook-f"></icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn flat class="orange--text" :href="item.link" target="_blank">LINK</v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </v-flex>
        </v-layout>
</template>

<script>
  export default {
    name: 'meetups',
    data () {
      return {
        items: [
        { title: '11.11.2017', event: 'Above Serverless and Beyond Containers', link: 'https://www.meetup.com/BlueCoders/events/244683579', type: 'talk', icon: 'mic', imgUrl: '/static/images/cards/docks.jpg' },
        { title: '22.07.2017', event: 'Hands-on lab: Cognitive service chaining with Serverless Computing', link: 'https://www.meetup.com/BlueCoders/events/241194184', type: 'talk', icon: 'mic', imgUrl: '/static/images/cards/drop.jpg' },
        { title: 'Since 04.08.2016', event: 'Past Meetups', link: 'https://www.meetup.com/BlueCoders', type: 'talk', icon: 'mic' }
        ]
      }
    }
  }
</script>
<style>
.inline{
color: #66c0ec;
}
.inline-block{
background-color: #66c0ec;
display: inline-block;

}
</style>
