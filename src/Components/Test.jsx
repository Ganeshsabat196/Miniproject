import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../Base/Header'
import Footer from '../Base/Footer'
import "./Css/style.css"
import Mp1 from './Mp1'
import Mp2 from './Mp2'
import Mp3 from './Mp3'
export default function Test() {
  const [form,setForm]=useState("60")
  return (
      <>
      <Header />
      <div id="body">
        <div>
          <div className="layout bright-theme">

            <div style={{ minHeight: 0 }}>
              <div className="styledComponents__Content-sc-1vj1a5a-0 gSVpzJ">
                <div className="styledComponents__AdSectionWrapper-sc-1vj1a5a-5 xJtye" />
                <div className="styledComponents__ContentWrapper-sc-1vj1a5a-3 cFrXt">
                  <div className="styledComponents__Content-sc-1vj1a5a-0 gSVpzJ">


                    <div className="styledComponents__LaptopWrapper-sc-1vj1a5a-2 eYyIdT main1">
                      <div
                        className="container typing-speed-test"
                        data-ga-category="Typing Speed Test"
                      >
                        <div className="styledComponents__LaptopWrapper-sc-59mtpj-3 hrvfMM" >
                          <div className="styledComponents__Headerbar-sc-59mtpj-4 dWaShw row">
                            <div className="col-xs-12 margin-top-10">
                              <h3 className="inline-block margin-bottom-0 margin-top-0">
                                <span
                                 style={{ marginLeft: "20px"}}
                                >Typing Speed Test</span>
                              </h3>
                              <div className="pull-right">
                                <NavLink
                                  className="text-notransform btn btn-sm btn-primary"
                                  title="1 Minute"
                                  data-ga-label="1 minute"
                                  // to="/typing-speed-test/1m"
                                  onClick={()=>{
                                    setForm("60")
                                  }}
                                >
                                  <span>1 Minute</span>
                                </NavLink>
                                <NavLink
                                  className="text-notransform btn btn-sm btn-primary"
                                  title="3 Minutes"
                                  data-ga-label="3 minute"
                                  // to="/test"
                                  onClick={()=>{
                                    setForm("180")
                                  }}
                                >
                                  <span>3 Minutes</span>
                                </NavLink>
                                <NavLink
                                  className="text-notransform btn btn-sm btn-primary"
                                  title="5 Minutes"
                                  data-ga-label="5 minute"
                                  // to="/test"
                                  onClick={()=>{
                                    setForm("300")
                                  }}
                                >
                                  <span>5 Minutes</span>
                                </NavLink>
                               
                               </div>
                            </div>
                          </div>
                         
                          <div className="main">
                            {/* tv code starts here */}
                            <div className="tv-box">
                              <div className="main-screen">


                               { form==="60" && <Mp1 />}
                               { form==="180" && <Mp2/>}
                               { form==="300" && <Mp3/>}

                                {/* <div className="brightnessBox hide">
                                  <p>
                                    Brighness <span className="brNo">5</span>0
                                  </p>
                                </div>
                                <div className="volumeBox hide">
                                  <p>
                                    Volume <span className="volNo" />
                                  </p>
                                </div> */}
                              </div>
                            </div>
                            <div className="tv-stand" />

                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  {/* <div className="row margin-bottom-20">
                                    <div className="col-xs-12 text-center" />
                  </div> */}

                  <div className="sections" style={{ marginTop: "100px" }}>
                    <div className="row">
                      <section className="col-md-4">
                        <h5>How to improve typing speed?</h5>
                        <p>
                          Typing is all about muscle memory, so the only way to
                          improve is to practice typing regularly. We created
                          TheTypingCat to give you a tool to learn and practice touch
                          typing in the most effective way. The process of developing
                          proper habits requires you to train your fingers
                          periodically and to be patient. You should first focus
                          foremost on accuracy and high typing speed will
                          come with time. 
                        </p>
                      </section>
                      <section className="col-md-4">
                        <h5>How is the text of this test constructed?</h5>
                        <p>
                          Using AI, we analyzed 1000 most common English books. The AI
                          produced a statistical tree of most connected word chains.
                          The output text is trying to mimic real sentences with the
                          most used word connections, which gives more accurate
                          results. However, it cannot be exactly grammatically correct
                          as it relies on machine learning.
                        </p>
                      </section>
                      <section className="col-md-4">
                        <h5>Why do I need to see Ads?</h5>
                        <p>
                          We want to make this typing test free. Our idea is to keep a
                          significant portion of our typing software free of charge so
                          everybody can work on improving typing skills, but still, we
                          need to pay our bills. So Ads make TheTypingCat free for
                          simple usage and essential practice and let people
                          constantly reinforce keyboarding skills.
                        </p>
                      </section>
                    </div>
                    <div className="row">
                      <section className="col-md-4">
                        <h5>Words Per Minute (WPM)</h5>
                        <p>
                          The WPM stands for words per minute, and it is a measure of
                          typing speed, commonly used in the recruitment process and
                          typing speed tests. It is standardized to five characters or
                          keystrokes. The benefits of a measurement of
                          input speed are that it enables comparison across language.
                          
                        </p>
                      </section>
                      <section className="col-md-4">
                        <h5>Character Per Minute (CPM)</h5>
                        <p>
                          The CPM stands for characters per minute. So CPM is WPM
                          divided by 5. Sometimes people use a keystroke as an
                          equivalent, but it is not the same thing. Keystroke is the
                          single hit on the keyboard. So for the capital letter “A”,
                          which is a single character, we count two keystrokes. (SHIFT
                          + a){" "}
                        </p>
                      </section>
                      <section className="col-md-4">
                        <h5>Should I practice regularly? </h5>
                        <p>
                          {/* Yes, for sure, there is nothing better than taking daily
                          typing lessons. Repeating ten minutes typing practice will
                          have a significant impact on your writing skills. */}
                          TheTypingCat is made to reinforce continuous learning of how
                          to type. We track your progress so you can see how your
                          typing speed and accuracy increase over time. Regular
                          activities are a critical factor in achieving professional
                          typing skills.
                        </p>
                      </section>
                    </div>
                    <div className="row">
                      <section className="col-md-4">
                        <h5>Why typing speed matter?</h5>
                        <p>
                          Touch typing lets you focus on your main activity. Being
                          less distracted by how fast you can type gives you enormous
                          productivity boosts. It allows you to make your work done
                          better and higher quality. You will make much fewer type
                          errors, and your work will be much more valuable. You would
                          be able to communicate faster and better.
                        </p>
                      </section>
                      <section className="col-md-4">
                        <h5>What is the proper finger position while typing?</h5>
                        <p>
                          You should always start typing by placing your fingers on
                          the home row. There are the small bumps on the F and J key,
                          which indicate the initial position of your index fingers.
                          It helps you find this starting position on the keyboard
                          without looking at it. 
                        </p>
                      </section>
                      <section className="col-md-4">
                        <h5>What is the best keyboard layout?</h5>
                        <p>
                          TLTR; The one you like the most, and you feel best with.
                          Right now, you can find a vast number of keyboard layouts.
                          Besides the most widely spread “Qwerty”, you can try many
                          more on TheTypingCat like Colemak, Dvorak, Workman, and many
                          more*. 
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}
