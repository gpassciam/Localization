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
function ShowForgotPassScreen()
{
    
    gigya.accounts.showScreenSet({
            screenSet: 'Localization-China-RegistrationLogin',
            startScreen: 'gigya-forgot-password-screen',
            //customLang: customLangParams,
            containerID: 'ShowForgotPassScreen'
            
        });

    
    
}
function ShowResetPassScreen()
{
    
    gigya.accounts.showScreenSet({
            screenSet: 'coral-dev--RegistrationLogin',
            startScreen: 'gigya-reset-password-screen',
            //customLang: customLangParams,
            containerID: 'ShowResetPassScreen'
            
        });

    
    
}
