import React from 'react'
import './Style.css';
import h2_icon from './h2_icon.png';
import home from './home.jpg';
import {Sidebar} from './sidebar';



export class Homepage extends React.Component {
  render() {
    return (
        <div className="container-fluid">
        
        
                  <div className="row">
        
                    <div className="col-12 col-lg-9">
        
                      <div className="w-100"></div>
                      
                      <div className="col-12">
                        <h2>
                          Home
                        </h2>
                      </div>
        
                      <div className="w-100"></div>
        
                      <div className="col-12">
                        <img src={home} className="imgLeft" alt="amorgos_beach" />
                        <p><span className="logoColor">Meditationdailyhabit</span>  is a result of my passion about meditation and my will to help other people establish a practice in their daily life. The information and instructions in this website originate from my own experience in meditation.</p>
                        <p><span className="logoColor">Meditationdailyhabit</span> is not supporting any specific meditation technique but most likely a gathering of details from many traditions and techniques. I believe that following a technique is essential for one's development but I also believe that it's not necessary to follow strictly one specific technique. All of us are unique, therefore what works for each of us best, is different.</p>
                        <p>Therefore, having a basic guideline about what to do exactly in your practice is very important; but the details included in the guideline is your decision.
                          The guideline that I support is directing your attention to one object while keeping your awareness. That means practicing concentration meditation and mindfulness at the same time.
                          The content in this website is based on this guideline.</p>
                        <p>This might sound complicated for a beginner, and that’s why there are necessary steps that needs be followed before you will be able to achieve and understand the state of mind that I just described.</p>
                        <p>You don’t need to get your mind overwhelmed with information before you start. Just go to <a href="/">Get started</a> and follow the instructions.</p>    
                        <p className="note"><span className="Note">Note:</span> If you are looking for a specific meditation technique this website may not be for you. On the other hand, it can help you explore yourself and overcome obstacles that will occur while establishing your practice.</p>    
                      </div>
        
                      <div className="w-100"></div>
                    
                      <div className="col-12">
                        <h3>How to use this website</h3> 
                        <p>Under the <span className="bold">"Get started"</span> section you have all the steps you need to follow in order to start and establish your meditation practice.</p>   
                        <p>You will find two categories under <span className="bold">"Meditation essentials"</span>:</p>
                        <ul>
                          <li>
                            <span className="bold">"Meditation Assistance"</span>, where you will find solutions to problems and obstacles that may occur while you’re meditating. Like boredom, how to deal with the distractions in an effective way etc. So, every time you feel that you have come across a rock and you cannot overcome it, go to the assistance section. If you cannot find what you’re looking for, you can just leave a comment on the relevant page, and I will try to help or redirect you if needed.
                          </li>
                          <li>
                            And <span className="bold">"Meditation Instructions"</span>, where you will be directed when I’m going through the steps. It’s about how to sit, how to start your session etc.
                          </li>
                        </ul>
                      
                        <p>The <a href="/">"Personal development"</a> category, is on the right sidebar. Visit this category every time you feel like giving up or need some motivation.
                          You can read about the importance of motivation in many of my articles.</p>
                        <p>Under the section <a href="/">"Reviews"</a> you will find programs and products that can assist you with your practice and that I have reviewed myself.</p>
                        <p>By clicking on some images or links on my articles, you will be redirected to another website where you can purchase any of the products/programs that I recommend. I have an affiliate relationship with many of these websites and that means that I may receive an affiliate commission. All the websites that I recommend are legit and high quality.</p>
                        <p>Thank you for visiting my website :) I wish you all the best and keep in mind that I'm here for any concerns or questions. To get in contact with me you can just send me an e-mail.</p> 
                        <p>Athanasia,
                        <br />    
                        meditationdailyhabit@gmail.com</p>  
                      </div> 
        
                    </div>
        
                   <Sidebar /> 
        
                </div>
        
              </div>
    );
   }
}     