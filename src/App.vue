<template>
  <v-app>
    <v-app-bar
      color="primary"
      dark
      app
      clipped
    >
      <v-app-bar-nav-icon color="primary" @click.stop="drawer=!drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Vuetify</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-menu>
        <!-- <template> -->
          <v-btn color="primary">For Enterprise</v-btn>
        <!-- </template> -->
        </v-menu>
        <!-- <v-menu offset-y> -->
          <!-- <template v-slot:activator="{ on, attrs }"> -->
          <v-btn v-on="on" color="primary" dark v-bind="attrs">Support<v-icon color="white">mdi-menu-down</v-icon></v-btn>
          <!-- </template> -->
          <!-- <v-list>
            <v-subheader color="black">Get help</v-subheader>
            <v-list-item v-for="(support, i) in supports" :key="i">
              <v-list-item-icon>
              <v-icon>{{ support.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title color="black">{{ support.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list> -->
        <!-- </v-menu> -->
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      clipped-left
      >
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Navigation Lists
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <v-list>
          <v-list-group v-model="group">
            <v-list-item v-for="(nav_list, i) in nav_lists" :key="i.name" :to="nav_list.link">
              <v-list-item-icon><v-icon>{{ nav_list.icon }}</v-icon></v-list-item-icon>
              <v-spacer></v-spacer>
              <v-list-item-content>
                <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-for="(nav_list, i) in nav_lists.lists" :key="i" :append-icon="nav_list.lists ? undefined : ''">
              <v-list-item-title>{{ nav_list.lists }}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-container>
    </v-navigation-drawer>
    <v-main>
      <v-container flueid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <!-- <v-footer
    dark
    padless
    app>
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <strong class="subheading">Get connected with us on social networks!</strong>
          <v-spacer></v-spacer>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            dark
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} - <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer> -->
  </v-app>
</template>

<script>

export default {
  data () {
    return {
      drawer: false,
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram'
      ],
      supports: [
        { name: 'Consulting and support', icon: 'mdi-vuetify' },
        { name: 'Discord community', icon: 'mdi-discord' },
        { name: 'Report a bug', icon: 'mdi-bug' },
        { name: 'Github issue board', icon: 'mdi-github' },
        { name: 'Stack overview', icon: 'mdi-stack-overflow' }
      ],
      offset: true,
      size: [
        { bar: 'number', bottom: 'number', footer: 'number', insetFooter: 'number', left: 'number', right: 'number', top: 'number' }
      ],
      nav_lists: [
        { name: 'Home', icon: 'mdi-home', link: '/Home' },
        { name: 'About', icon: 'mdi-speedometer', lists: ['Quick Start', 'Pre-made layouts'], link: '/About' },
        { name: 'Works', icon: 'mdi-cogs', link: '/Works' },
        { name: 'Styles & animations', icon: 'mdi-palette', lists: ['Colors', 'Content', 'Display'], link: '/Styles & animations' },
        { name: 'UI Components', icon: 'mdi-view-dashboard', lists: ['API explorer', 'Alerts'], link: '/UI Components' },
        { name: 'Directives', icon: 'mdi-function', link: '/Directives' },
        { name: 'Preminum themes', icon: 'mdi-vuetify', link: '/Preminum themes' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
