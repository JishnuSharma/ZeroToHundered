import TitleBar from './components/TitleBar'
import './index.css'
import HomePage from './components/HomePage';
import VideoPlayer from './components/VideoPlayer';

function App() {
    return (
        <div className='bg-gray-900 h-max'>
            <TitleBar />
            {/* <HomePage /> */}
            <VideoPlayer />
        </div>
    );
}

export default App;