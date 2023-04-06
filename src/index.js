import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs: ['en', 'fr', 'pt', 'es', 'ar', 'de'],
        fallbackLng: 'en',
        detection: {
            order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
            caches: ['cookie']
        },
        backend: {
            loadPath: '/assets/locales/{{lng}}/translation.json',
        },
        react: { useSuspense: false }
    });


ReactDOM.render(<App/>, document.querySelector("#root"));
