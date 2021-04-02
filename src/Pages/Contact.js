//You have to use the link component to link between you pages 
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <form>
                        <h1 class="formheader">Contact</h1>

                        <div class="form-group">
                            <label for="exampleFormControlInput1">Name</label>
                            <input class="form-control" type="text" placeholder="Name" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Email</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;