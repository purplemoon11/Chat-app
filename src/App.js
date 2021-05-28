import { ChatEngine }  from 'react-chat-engine';
import './App.css'
import ChatFeed from './Components/ChatFeed';
import LoginForm from './Components/LoginForm';

const App = () => {

    if(!localStorage.getItem('username'))
    return(
        <LoginForm />
    )

    return (
        <ChatEngine 
            height="100vh"
            projectID="eddf129c-87b2-45eb-b32b-08aaabe444a5"
            userName= {localStorage.getItem('username')}
            userSecret= {localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;
