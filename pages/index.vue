<template>
  <section class="section">
    <div class="container content">
      <div class="columns is-centered">
        <div class="column is-half">
          <br>
          <br>
          <h1 class="title has-text-warning has-text-centered">
            தமிழ் வேர்ட்ஸ் ⚛
          </h1>
          <p class="has-text-success has-text-weight-medium has-text-centered">
            Click Random Button to Get Random Tamil Words - Commonly spoken Tamil words with English Meaning.
          </p>
          <div class="buttons is-centered">
            <button id="installPWA" class="button is-info read-random" @click.prevent="showInstallPrompt()">
              🍪 Install App
            </button>
          </div>
          <div class="table is-bordered is-striped is-narrow">
            <table>
              <tbody>
                <tr>
                  <th>📕 Tamil:</th>
                  <td>{{ loading ? "Generate Tamil Word" : results.tamilword }}</td>
                </tr>
                <tr>
                  <th>📓 in English:</th>
                  <td>{{ loading ? "Generate Word Meaning" : results.englishmeaning }}</td>
                </tr>
                <tr>
                  <th>🗣 Pronunciation:</th>
                  <td>{{ loading ? "Generate Word Meaning" : results.tamilpronounce }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br>
          <div class="buttons is-centered">
            <button class="button is-warning read-random" @click.prevent="getResult">
              {{ loading ? "🔄 Generating" : "🔄 Random" }}
            </button>
            <button
              v-clipboard:copy="'📕 Tamil Word: ' + results.tamilword + '\n\n 📓 English Meaning: ' + results.englishmeaning + '\n\n 🗣 Pronunciation: ' + results.tamilpronounce"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
              class="btn button is-link read-random"
              type="button"
            >
              📝 Copy Word
            </button>
          </div>
          <br>
          <br>
          <div class="subscribe-form">
            <p class="has-text-weight-medium has-text-centered">
              Join with me (Telegram Group) 🙌 - Help me to Provide the More Tamil Words with Tanglish Pronunciation 🗣
            </p>
            <a href="https://telegram.me/tamilwords" class="button-link" target="_blank" rel="nofollow noopener"><span>Join Now</span></a>
          </div>
          <br>
          <div class="notification is-warning">
            <br>
            <p class="has-text-weight-medium has-text-centered">
              Words are manually Translated using Google Translate - we just add the Commonly used Tamil Words with English meaning.<br>
              if you Find any Mistakes in Tamil words and English Meaning just Email me at -  <a href="mailto:me@santhoshveer.com">me@santhoshveer.com</a>
            </p>
            <br>
            <div class="buttons is-centered">
              <a href="https://github.com/mskian/vue-tamil-words" class="button is-success read-random" target="_blank" rel="nofollow noopener">📦 Souce Code</a>
              <a href="https://github.com/mskian/tamil-words" class="btn button is-link read-random" target="_blank" rel="nofollow noopener">🗃 API Data</a>
            </div>
            <br>
          </div>
          <br>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import { debounce } from 'lodash'
import intializePwa from '~/helpers/pwa'
export default {
  data () {
    return {
      showInstallPrompt: null,
      results: {}
    }
  },
  head () {
    return {
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://tamilwords.net' + this.$route.path
        }
      ]
    }
  },
  async mounted () {
    this.showInstallPrompt = await intializePwa()
  },
  beforeMount () {
    this.getResult()
  },
  created () {
    this.debounceName = debounce(this.getResult)
  },
  methods: {
    getResult () {
      this.loading = true
      axios.get('https://api.tamilwords.net/').then((response) => { this.results = response.data[0]; this.loading = false })
      this.$toast.success('New Word Updated', {
        duration: 500
      }
      )
    },
    onCopy (e) {
      this.$toast.info('Word Copied', {
        duration: 500
      }
      )
    },
    onError (e) {
      alert('Failed to copy texts')
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mukta+Malar:wght@300;400;500;600;700;800&display=swap');
body {
  font-size: 16px;
  background-color: #1d3557;
  height: 100vh;
  color: rgba(0, 0, 0, 0.6);
  font-family: 'Mukta Malar', sans-serif;
  font-weight: 600;
  line-height: 1.618;
	-webkit-font-smoothing: antialiased;
	-moz-font-smoothing: grayscale;
	overflow-x: hidden;
}
::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(175, 180, 247, 0.302);
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(97, 245, 78, 0.5);
}
h1{font-weight:700;font-size:23px;}
h2{font-weight:700;font-size:21px;}
h3{font-weight:700;font-size:20px;}
h4{font-weight:700;font-size:18px;}
h5{font-weight:700;font-size:18px;}
h1, h2, h3, h4, h5, h6 {
    color: #050505;
    word-wrap: break-word;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    -o-hyphens: auto;
    hyphens: auto;
}
p,
button,
input,
textarea,
.control,
.label,
.notice {
	text-align: center;
	margin: 0 auto;
}
.title {
  color:#d9ee1c;
  font-weight: 700;
}
a:hover, a:focus, a:active {
    color: #010508;
}
.content a {
    color: #ffffff;
}
.read-more {
  font-family: 'Mukta Malar', sans-serif;
	font-weight: 700;
	font-size: 23px;
	padding: 16px;
  color: rgb(248, 244, 183);
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased !important;
	-moz-font-smoothing: antialiased !important;
	text-rendering: optimizelegibility !important;
  overflow-x: hidden;
  word-wrap: break-word;
}
.read-random {
	display: flex;
	flex-grow: 0.3;
  font-family: 'Mukta Malar', sans-serif;
	font-weight: 700;
	font-size: 13px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
	border-radius: 32px;
	padding: 10px;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased !important;
	-moz-font-smoothing: antialiased !important;
	text-rendering: optimizelegibility !important;
}
.input-box,
textarea,
.sign-button {
	width: 45rem !important;
	min-height: 3rem;
}
button {
    max-width: 100%;
}
table {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    padding: 12px;
    -moz-osx-font-smoothing: grayscale;
   -webkit-font-smoothing: antialiased !important;
   -moz-font-smoothing: antialiased !important;
   text-rendering: optimizelegibility !important;
   border-bottom:2px solid #bbb !important;background-color:#d3d3d3
}
th {
   white-space: nowrap;
}
.cooked table thead,.d-editor-preview table thead{border-bottom:2px solid #bbb !important;background-color:#d3d3d3}.cooked table tr,.d-editor-preview table tr{border-bottom:1px solid #bbb}
.is-horizontal-center {
    justify-content: center;
}
code {
    word-break: break-all;
}
pre code {
    padding: 0;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
}
.content h1 {
    font-size:28px;
    font-weight: 700;
}
.content h2 {
    font-size:21px;
    font-weight: 700;
}
.content h3 {
    font-size:20px;
    font-weight: 700;
}
.content h4 {
    font-size:18px;
    font-weight: 700;
}
.button-link {
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    margin: 5px 0;
    padding: 15px 32px;
    color: #fff !important;
    font-size: 16px;
    line-height: 1.0;
    font-weight: 700;
    text-align: center;
    text-shadow: 0 -1px 0 rgba(0,0,0,.1);
    background: linear-gradient(#4fb7f0,#29a0e0 60%,#29a0e0 90%,#36a6e2);
    border-radius: 32px;
    box-shadow: inset 0 0 0 1px rgba(0,0,0,.14);
    line-height: 26px;
    letter-spacing: .03em;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased !important;
    -moz-font-smoothing: antialiased !important;
    text-rendering: optimizelegibility !important;
    font-family: 'Mukta Malar', sans-serif;
}
.button-link:hover {
background: linear-gradient(#36a6e2,#29a0e0 60%,#29a0e0 90%,#4fb7f0);
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
.button-link:active, .button-link:focus { background: #209cdf; color: #fff !important; }
@media (max-width: 500px) {
    .button-link {
        margin: 10px 0 0 0;
        width: 100%;
    }
}
.subscribe-button {
    display: block;
    padding: 4px 10px;
    border: #fff 1px solid;
    color: #fff;
    font-size: 1.2rem;
    line-height: 1em;
    border-radius: 10px;
    opacity: 0.8;
}
.subscribe-button:hover {
    text-decoration: none;
    opacity: 1;
}
.subscribe-form button {
    opacity: 0.9;
}
.subscribe-form {
    margin: 1.5em 0;
    padding: 6.5vw 7vw 8vw;
    border: #c5d2d9 1px solid;
    text-align: center;
    background: #e5eff5;
    border-radius: 28px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
.subscribe-form-title {
    margin: 0 0 3px 0;
    padding: 0;
    color: #15171A;
    font-size: 3.5rem;
    line-height: 1;
    font-weight: 600;
}
.subscribe-form-description {
    margin-bottom: 0.2em 0 1em;
    color: #738a94;
    font-size: 2.1rem;
    line-height: 1.55em;
}
@media (max-width: 650px) {
    .subscribe-form-title {
        font-size: 2.4rem;
    }

    .subscribe-form-description {
        font-size: 1.6rem;
    }
}
footer p {
    font-size: 15px;
    font-weight: 700;
}
</style>
