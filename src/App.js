import './App.sass';

function App() {
    return (
        <div className="login">
            <div className="login_title">Регистрация</div>
            <div className="login_content">
                <div className="login_content_input">
                    <div className="login_content_input-title">Фамилия</div>
                    <input type="text" className="login_content_input-input"/>
                </div>

                <div className="login_content_input">
                    <div className="login_content_input-title">Имя</div>
                    <input type="text" className="login_content_input-input"/>
                </div>

                <div className="login_content_input">
                    <div className="login_content_input-title">email</div>
                    <input type="email" className="login_content_input-input"/>
                </div>

                <div className="login_content_input">
                    <div className="login_content_input-title">Запомнить меня</div>
                    <input type="checkbox" className="login_content_input-checkbox"/>
                </div>
            </div>
            <div className="login_btns">
                <div className="login_btns_sign_in">
                    Уже есть аккаунт
                </div>
                <div className="login_btns_auth">
                    Зарегистрироваться
                </div>
            </div>
        </div>
    );
}

export default App;
