function ShowLoginScreen(lang)
{
    
    gigya.accounts.showScreenSet({
            screenSet: ' Localization-China-RegistrationLogin',
            startScreen: 'gigya-login-screen',
            //customLang: customLangParams,
            containerID: 'LoginScreen',
            lang: lang
            
        });

    
}
