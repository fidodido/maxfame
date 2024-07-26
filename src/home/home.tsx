import Bottombar from "./bottombar"
import Famous from "./famous"
import Topbar from "./topbar"


function Home() {

    return (
        <div style={{ 'width': '400px' }}>
            <Topbar></Topbar>
            <Bottombar></Bottombar>
            <Famous></Famous>
        </div>
    )
}

export default Home
