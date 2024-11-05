import './App.css'
import { RecoilRoot, useRecoilStateLoadable, useRecoilValue } from 'recoil'
import { jobsAtom, messaginAtom, networkAtom, notificationAtom, todosAtomFamily, totalNotificationCount } from './store/atoms'

function App() {

    return (
        <>
            <RecoilRoot>
                <MainBar></MainBar>
            </RecoilRoot>
        </>
    )
}

function MainBar() {

    const networkNotificationCount = useRecoilValue(networkAtom);
    const jobNotificationCount = useRecoilValue(jobsAtom);
    const messageNotificationCount = useRecoilValue(messaginAtom);
    const notificationCount = useRecoilValue(notificationAtom);
    const total = useRecoilValue(totalNotificationCount)

    return (
        <>
            <button>My Network {networkNotificationCount > 99 ? '99+' : networkNotificationCount}</button>
            <button>Jobs</button>
            <button>Messaging</button>
            <button>Notificatons</button>
            <button>Me {total}</button>
        </>
    )
}

function Todo() {
    const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily({ id }));

    // this returns
    // contents
    // state
    // state is 'loading' or 'hasValue'

    if (todo.state == 'loading') {
        return (
            <div>
                Loading...
            </div>
        )
    }
    else if (todo.state == 'hasValue') {
        return (
            <div>
                {todo.contents.title}
                {todo.contents.description}
            </div>
        )
    }
    else if (todo.state == 'hasError') {
        return (
            <div>
                Error while getting data
            </div>
        )
    }
}

export default App
