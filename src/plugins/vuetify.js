import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          primary: '#ffffff',
          secondary: '#1a1a1a',
          accent: '#ffffff',
          background: '#000000',
          surface: '#0a0a0a',
          'on-surface': '#ffffff',
          'on-background': '#ffffff'
        }
      },
      light: {
        colors: {
          primary: '#000000',
          secondary: '#f5f5f5',
          accent: '#000000',
          background: '#ffffff',
          surface: '#fafafa',
          'on-surface': '#000000',
          'on-background': '#000000'
        }
      }
    }
  }
})
