'use strict';

class  Dailyhabit extends React.Component {
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
                            Lorem ipsum dolor sit amet, ne
                        </h2>
                    </div>
                </div>    

                <div className="row">
                    <div className="col-100">

                        <img src="img/daily_habit/girl-sitting-on-veranda.jpg 900w, img/daily_habit/girl-sitting-on-veranda_small.jpg 400w"
                        sizes="(max-width: 109em) 53vw, (max-width: 75em) 65vw, (max-width: 31em) 100vw, 900px"
                        alt="girl sitting on veranda"
                        className="imgcenter"
                        src="img/daily_habit/girl-sitting-on-veranda.jpg" />

                        <h3> Lorem ipsum dolor sit amet, ne prompta noluisse his, at eos?</h3>
                        <img src="img/daily_habit/relax.jpg 426w, img/daily_habit/relax_small.jpg 200w"
                        sizes="(max-width: 109em) 22vw, (max-width: 75em) 26vw, (max-width: 31em) 25vw, 426px"
                        alt="girl thinking"
                        className="imgRight"
                        src="img/daily_habit/relax.jpg" />

                
                        <p>Lorem ipsum dolor sit amet, ne prompta noluisse his, at eos nemore detraxit, malorum admodum his cu. Porro dicunt eleifend eu sed, legimus molestiae quo ex. Id exerci voluptatibus vim. Viderer mol</p>
                        <p>Lorem ipsum dolor sit amet, ne prompta noluisse his, at eos nemore detraxit, malorum admodum his cu. Porro dicunt eleifend eu sed, legimus molestiae quo ex. Id exerci voluptatibus vim. Viderer molestiae in per, et per omnes detracto. Id paulo tamquam sea, eu timeam argumentum has. Vim doming utroque percipit te, eu nam explicari vituperatoribus.</p>
                        <p>Lorem ipsum dolor sit amet, ne prompta noluisse his, at eos nemore detraxit, malorum admodum his cu. Porro dicunt eleifend eu sed, legimus molestiae quo ex. Id exerci voluptatibus vim. Viderer molestiae in per, et per omnes detracto. Id paulo tamquam sea, eu timeam argumentum has. 
                        <br />Vim doming utroque percipit te, eu nam explicari vituperatoribus.
                        </p>
                        <p>Lorem ipsum dolor sit amet, ne prompta noluisse his, at eos nemore detraxit, malorum admodum his cu. Porro dicunt eleifend eu sed, legimus molestiae quo ex. Id exerci voluptatibus vim. Viderer 
                           molestiae in per, et per omnes detracto. Id paulo tamquam sea, eu timeam argumentum has. Vim doming utroque percipit te, eu nam explicari vituperatoribus.
                        </p>

                        <h3>Lorem ipsum dolor sit amet, vituperatoribus.</h3>
                        <p>Lorem ipsum dolor sit amet, ne prompta noluisse his, at eos nemore detraxit, malorum admodum his cu. Porro dicunt eleifend eu sed, legimus molestiae quo ex. Id exerci voluptatibus vim. Viderer molestiae in per, et per omnes detracto. Id paulo tamquam sea</p>
                        <p>Lorem ipsum dolor sit amet, ne prompta noluisse his, at eos nemore detraxit, malorum admodum his cu. Porro dicunt eleifend eu sed, legimus molestiae quo ex. Id exerci voluptatibus vim. Viderer molestiae in per, et per omnes detracto. Id paulo tamquam sea, eu timeam argumentum has. Vim doming utroque percipit te, eu nam explicari vituperatoribus.</p>
                        <p className="quote">“We are what we repeatedly do. Excellence, then, is not an act, but a habit."
                         <br /> ~~ Aristotle~~
                        </p>

                        <h4>Lorem ipsum dolor sit amet, ne!</h4>

                        <img src="img/daily_habit/woman_meditating.jpg 848w, img/daily_habit/woman_meditating_small.jpg 400w"
                            sizes="(max-width: 109em) 49vw, (max-width: 75em) 70vw, (max-width: 31em) 100vw, 848px"
                            alt="girl sitting on veranda"
                            className="imgcenter"
                            src="img/daily_habit/woman_meditating.jpg" />

                        <p>Lorem ipsum dolor sit amet, ne prompta noluisse his, at eos nemore detraxit, malorum admodum his cu. Porro dicunt eleifend eu sed, legimus molestiae quo ex. Id exerci voluptatibus vim. Viderer molestiae in per, et per omnes detracto. Id paulo tamquam sea, eu timeam argumentum has. Vim doming utroque percipit te, eu nam explicari vituperatoribus.</p>
                        <p>Lorem ipsum dolor sit amet, ne prompta noluisse his, at eos nemore detraxit, malorum admodum his cu. Porro dicunt eleifend eu sed, legimus molestiae quo ex. Id exerci voluptatibus vim. Viderer molestiae in</p>
                
                        <h5>Lorem ipsum dolor sit amet</h5>
                        <p>Lorem ipsum dolor sit amet, ne prompta noluisse his, at eos nemore detraxit, malorum admodum his cu. Porro dicunt eleifend eu sed, legimus molestiae quo ex. Id exerci voluptatibus vim. Viderer molestiae in per, 
                        <br />et per omnes detracto. Id paulo tamquam sea, eu timeam argumentum has. Vim doming utroque percipit te, eu nam explicari vituperatoribus.
                        </p>
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

let domContainer = document.querySelector('#daily_habit');
ReactDOM.render(<Dailyhabit />, domContainer);