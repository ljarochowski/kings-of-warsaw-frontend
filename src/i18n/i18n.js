import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            welcome: "Welcome to the User Management System",
            login: "Login",
            register: "Register",
            username: "Username",
            password: "Password",
            roles: {
                user: "User",
                organizer: "Organizer",
                admin: "Admin",
            },
            success: "Operation completed successfully",
            error: "An error occurred",
        },
    },
    pl: {
        translation: {
            welcome: "Witamy w systemie zarządzania użytkownikami",
            login: "Zaloguj się",
            register: "Zarejestruj się",
            username: "Nazwa użytkownika",
            password: "Hasło",
            roles: {
                user: "Użytkownik",
                organizer: "Organizator",
                admin: "Administrator",
            },
            success: "Operacja zakończona sukcesem",
            error: "Wystąpił błąd",
        },
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
