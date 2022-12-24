
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function ({ children }) {
   
    
    return (
        <div>
            <Header />
                {children}
            <Footer />
        </div>
    );
}
