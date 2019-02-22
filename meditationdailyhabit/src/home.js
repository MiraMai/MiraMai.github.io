'use strict';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="row">
            <div className="col-66">

                <div className="row">
                    <div className="col-100">
                        <h2>
                            Home
                        </h2>
                    </div>
                </div>  
            
                <div className="row">
                    <div className="col-100">
                    
                        <img srcSet="img/home.jpg 300w, img/home_small.jpg 150w"
                             sizes="(max-width: 109em) 22vw, (max-width: 75em) 26vw, (max-width: 31em) 25vw, 300px"   
                             alt="amorgos_beach"
                             className="imgLeft"
                             src="img/home.jpg" />

                        <p><span className="logoColor">Admodum his cu</span> Lorem ipsum dolor sit amet, ne prompta noluisse his, at eos nemore detraxit, malorum admodum his cu. Porro dicunt eleifend eu sed, legimus molestiae quo ex. Id exerci voluptatibus vim. Viderer molestiae in per, et per omnes detracto. Id paulo tamquam sea, eu timeam argumentum has. Vim doming utroque percipit te, eu nam explicari vituperatoribus.</p>
                        <p><span className="logoColor">Admodum his cu</span> Lorem ipsum dolor sit amet, ne prompta noluisse his, at eos nemore detraxit, malorum admodum his cu. Porro dicunt eleifend eu sed, legimus molestiae quo ex. Id exerci voluptatibus vim. Viderer molestiae in per, et per omnes detracto. Id paulo tamquam sea, eu timeam argumentum has. Vim doming utroque percipit te, eu nam explicari vituperatoribus.</p>
                        <p>Lorem ipsum dolor sit amet, ne prompta noluisse his, at eos nemore detraxit, malorum admodum his cu. Porro dicunt eleifend eu sed, legimus molestiae quo ex. 
                        Id exerci voluptatibus vim. Viderer molestiae in per, et per omnes detracto. Id paulo tamquam sea, eu timeam argumentum has. Vim doming utroque percipit te, eu nam explicari vituperatoribus.</p>
                        <p>Lorem ipsum dolor sit amet, ne prompta noluisse his, at eos nemore detraxit, malorum admodum his cu. Porro dicunt eleifend eu sed, legimus molestiae quo ex. Id exerci voluptatibus vim. Viderer molestiae in per, et per omnes detracto. Id paulo tamquam sea, eu timeam argumentum has. Vim doming utroque</p>
                        <p>Lorem ipsum dolor sit amet, ne prompta noluisse his, at eos nemore detraxit, malorum admodum his cu. Porro dicunt eleifend eu se</p>    
                        <p className="note"><span className="Note">Note:</span>Lorem ipsum dolor sit amet, ne prompta noluisse his, at eos nemore detraxit, malorum admodum his cu. Porro dicunt eleifend eu sed, legimus molestiae quo ex. Id exerci voluptatibus vim. Viderer molestiae in per, et per omnes detracto. Id paulo tamquam sea, eu timeam argumentum</p>    
                    </div>
                    <div className="col-100">
                        <h3>Lorem ipsum dolor</h3> 
                        <p>Under the <span className="bold">"Get started"</span> Lorem ipsum dolor sit amet, ne prompta noluisse his, at eos nemore detraxit, malorum adm</p>   
                        <p>You will find two categories under <span className="bold">"Meditation essentials"</span>:</p>
                        <ul>
                            <li>
                                <span className="bold">"Lorem ipsum dolor"</span>, Lorem ipsum dolor sit amet, ne prompta noluisse his, at eos nemore detraxit, malorum admodum his cu. Porro dicunt eleifend eu sed, legimus molestiae quo ex. Id exerci voluptatibus vim
                            </li>
                            <li>
                                And <span className="bold">"Lorem ipsum dolor"</span> Lorem ipsum dolor sit amet, ne prompta noluisse his, at eos nemore detraxit, malorum admodum his cu. Porro dicunt eleifend eu sed, legimus molestiae quo ex. Id exerci voluptatibus vim. Viderer molestiae
                            </li>
                        </ul>
                    
                        <p>The <a href="#">"Personal development"</a> Lorem ipsum dolor sit amet, ne prompta noluisse his, at eos nemore detraxit, malorum admodum his cu. Porro dicunt eleifend eu 
                        sed, legimus molestiae quo ex. Id exerci voluptatibus vim. Viderer molestiae in per, et per omnes</p>
                        <p>Under the section <a href="#">"Reviews"</a> Lorem ipsum dolor sit amet, ne prompta noluisse his, at eos nemore detraxit, malorum admodum his cu. Porro dicunt eleifend eu sed.</p>
                        <p>Lorem ipsum dolor sit amet, ne prompta noluisse his, at eos nemore detraxit, malorum admodum his cu. Porro dicunt eleifend eu sed, legimus molestiae quo ex. Id exerci voluptatibus vim. Viderer molestiae in per, et per omnes detracto. Id paulo tamquam sea, eu timeam argumentum has. Vim doming utroque percipit te, eu nam explicari vituperatoribus.</p>
                        <p>Lorem ipsum dolor sit amet, ne prompta noluisse his, at eos nemore detraxit, malorum admodum his cu. Porro dicunt eleifend eu sed, legimus molestiae quo ex. Id exerci voluptatibus vim. Viderer molestiae in per, et per omnes detracto. Id paulo tamquam sea, eu timeam argumentum has.</p>   
                    </div>                 
                </div> 
            </div>

            <div className="col-33">
                <div className="sidebar">
                    <div className="col-33 smth">smth</div>
                    <div className="col-66">
                        <p className="search_by_category">Search by category</p>
                        <ul className="list_in_sidebar">
                            <li>Anti-stress</li>
                            <li>Chacras</li>
                            <li>Etheric body</li>
                            <li>Guided Meditations</li>
                            <li>Mantras</li>
                            <li>Meditation Tools</li>
                            <li>Personal Development</li>
                            <li>Yoga</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>   
                       
    );
  }
}

let domContainer = document.querySelector('#home');
ReactDOM.render(<Home />, domContainer);