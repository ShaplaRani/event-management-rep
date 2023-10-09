import Banner from "../../Header/Banner/Banner";
import Future from "../../components/Future/Future";
import Services from "../../components/Services/Services";
import Skills from "../../components/Skills/Skills";


const Home = () => {
    return (
        <div className="w-10/12 mx-auto">
            <Banner></Banner>
            <Services></Services>
            <Future></Future>
            <Skills></Skills>
        </div>
    );
};

export default Home;