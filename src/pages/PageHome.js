import NavSort from '../components/NavSort';
import Movies from '../components/Movies';

function PageHome() {
    return (
        <section className="home-page">
            <NavSort />
            <Movies />
        </section>
    )
}

export default PageHome
