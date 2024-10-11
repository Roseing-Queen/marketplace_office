// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from "./modules/en.ts";
import zh_cn from "./modules/zh_cn.ts";
import zh_tw from "./modules/zh_tw.ts";
import jp from "./modules/jp.ts";

i18n
    .use(initReactI18next) // 将 React i18next 连接到 i18next
    .init({
        resources: {
            en: {
                translation: {
                    ...en
                },
            },
            zh_cn: {
                translation: {
                    ...zh_cn
                },
            },
            zh_tw: {
                translation: {
                    ...zh_tw
                },
            },
            jp:{
                translation: {
                    ...jp
                }
            }
        },
        lng: "en", // 默认语言
        fallbackLng: "en", // 备用语言
        interpolation: {
            escapeValue: false, // React 已经安全处理
        },
    });

export default i18n;
