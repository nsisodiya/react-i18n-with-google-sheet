import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import langData from "./langData.json";

interface IResources {
  [langCode: string]: {
    translation: {
      [langKey: string]: string;
    };
  };
}
interface ILangOjb {
  [key: string]: string;
}
const resources: IResources = {};

langData.forEach((o: ILangOjb) => {
  Object.keys(o).forEach((key) => {
    var langCode: string, langKey: string, langKeyVal: string;
    if (key !== "key") {
      langCode = key;
      langKey = o.key;
      langKeyVal = o[key];
      if (resources[langCode] === undefined) {
        resources[langCode] = {
          translation: {},
        };
      }
      resources[langCode].translation[langKey] = langKeyVal;
    }
  });
});

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
