import Footer from "../components/Footer";
import Header from "../components/Header";
import './Introduce.css';
const Introduce = () => {
    return `${Header()}
     <div class="banner-container">
        <div class="row">
            <!-- Content -->
            <div class="col-sm-4">
                <h1>Explore our University Web Game!</h1>
                <pre>
            Learn, protect the environment, and discover what makes our campus special 
            through fun and interactive challenges!
            </pre>
                <a class="btn btn-warning" href="#" role="button">Play Now</a>
            </div>
            <!-- Ảnh game hot đại diện - Bé Green -->
            <div class="thumbnail col-sm-8">
                <!-- responsize, canh lề và tạo hiệu ứng cho ảnh -->
                <img src="../Image/Trang/Bé Green5.png" class="pulse img-fluid float-end">
            </div>
        </div>
    </div>
    ${Footer()}`
};

export default Introduce;   
