
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import main from '../assets/images/main.svg'
import { Link } from 'react-router-dom'

const Landing = ()=>{
    return (
        <Wrapper>
        <main>
            <nav>
            <Logo></Logo>
            </nav>
            <div className='container page'>
                <div className='info'>
                    <h1>job <span>tracking</span> app</h1>
                    <p>Williamsburg green juice vibecession, asymmetrical tonx tacos mlkshk same fixie stumptown. Synth listicle affogato seitan selfies umami health goth tonx. Polaroid aesthetic green juice disrupt letterpress, kinfolk distillery ugh.</p>
                    <Link to='/register' className='btn btn-hero'>Login/Register</Link>
                </div>
                <img src={main} alt='job hunt' className='img main-img'></img>
            </div>
        </main>
        </Wrapper>
    )
}



export default Landing;