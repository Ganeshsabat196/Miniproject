import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../Base/Header';

export default function Result() {
    const { state } = useLocation();
    console.log(state.data1, state.data2);
    return (
        <>
           
            <Header/>
            <div style={{ minHeight: 0 }}>
                <div
                    className="container typing-speed-test-result"
                    data-ga-category="Typing Speed Test Result"
                >
                    <div className="row">
                        <div className="col-xs-12 text-center" />
                    </div>
                    <div className="row margin-top-40">
                        <div className="col-xs-12 col-sm-10 col-sm-offset-1 text-center">
                            <h3 className="margin-bottom-40">
                                <span>Your typing speed is</span>{" "}
                                <b>
                                    <span>{state.data1}</span>
                                </b>
                            </h3>
                            <div className="col-xs-12 col-lg-8 col-lg-offset-2">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="col-xs-6 col-md-3">
                                            <div className="row text-center">
                                                <h6 className="margin-bottom-5">
                                                    <span>Accuracy</span>
                                                </h6>
                                                <h3 className="margin-top-0 margin-bottom-5">
                                                {state.data2}
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-md-3">
                                            <div className="row text-center">
                                                <h6 className="margin-bottom-5">
                                                    <span>Typing Speed</span>
                                                </h6>
                                                <h3 className="margin-top-0 margin-bottom-5">
                                                    {state.data1}
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-md-3">
                                            <div className="row text-center better">
                                                <h6>
                                                    <span>
                                                        It is better than <h3 className="text-success">22.16%</h3>{" "}
                                                        of all users
                                                    </span>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-md-3">
                                            <div className="row text-center">
                                                <h6 className="margin-bottom-5">
                                                    <span>Ranking in last 24hrs</span>
                                                </h6>
                                                <h3 className="margin-top-0 margin-bottom-5">319</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    <div className="row margin-top-30">
                        <div className="col-xs-12 col-sm-10 col-sm-offset-1">
                            <div className="pull-left">
                                <h5 className="inline-block margin-bottom-0 margin-top-5 margin-right-5">
                                    <span>Be proud and share your score</span>:{" "}
                                </h5>
                                <div className="addthis_toolbox addthis_default_style addthis_32x32_style pull-right">
                                    <a className="addthis_button_preferred_1" />
                                    <a className="addthis_button_preferred_2" />
                                    <a className="addthis_button_preferred_3" />
                                    <a className="addthis_button_preferred_4" />
                                    <a className="addthis_button_compact" />
                                </div>
                            </div>
                            <a
                                className="btn btn-primary pull-right btn-lg"
                                data-ga-label="Start New Test"
                                href="/typing-speed-test/1m"
                            >
                                <i className="fa fa-dashboard" aria-hidden="true" />{" "}
                                <span>Start New Test</span>
                            </a>
                        </div>
                    </div>
                    <div className="row margin-top-40">
                        <div className="col-xs-12 col-sm-10 col-sm-offset-1">
                            <div>
                                <div className="row">
                                    <section className="col-md-4">
                                        <h5>How can I improve my typing speed?</h5>
                                        <p>
                                            You need to practice typing regularly. We created this typing
                                            tutor to reinforce your learning process. Check out our
                                            {/* */}
                                            <a href="/typing-courses">typing courses</a> to learn fast
                                            keyboarding.
                                        </p>
                                    </section>
                                    <section className="col-md-4">
                                        <h5>
                                            Is typing
                                            {/* */}15
                                            {/* */}WPM good?
                                        </h5>
                                        <p>
                                            It is better than
                                            {/* */}22.16
                                            {/* */}% of all our users. Touch typing is all about muscle
                                            memory, so more you type faster you are. Look at our ranking
                                            below. Still, there is room to improve your keyboard skills.
                                        </p>
                                    </section>
                                    <section className="col-md-4">
                                        <h5>What is the average typing speed?</h5>
                                        <p>
                                            An average typing speed score on TheTypingCat is 30WPM. A
                                            professional typist usually type at 60-70WPM in their native
                                            language.
                                        </p>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row margin-top-40">
                        <div className="col-xs-12 col-sm-10 col-sm-offset-1">
                            <h4>
                                <span>Test History</span>
                            </h4>
                            <canvas />
                            <p className="text-center">
                                <small>
                                    <span>Last updated a few seconds ago</span>
                                </small>
                            </p>
                        </div>
                    </div>
                    <div className="row margin-top-40">
                        <div className="col-md-6 col-md-offset-3 margin-top-60">
                            <div className="panel panel-primary margin-bottom-5 margin-top-10 shadow">
                                <div className="styledComponents__PanelHeading-sc-1ufkixz-2 jsgdPv panel-heading">
                                    <h5 className="text-white margin-top-0 margin-bottom-0">
                                        Ranking -1m
                                    </h5>
                                </div>
                                <div className="btn-group btn-group-justified">
                                    <a
                                        type="button"
                                        className="text-notransform btn btn-primary"
                                        data-toggle="tooltip"
                                        title="Last 24h"
                                    >
                                        <span>Last 24h</span>
                                    </a>
                                    <a
                                        type="button"
                                        className="text-notransform btn btn-default"
                                        data-toggle="tooltip"
                                        title="All Time"
                                    >
                                        <span>All Time</span>
                                    </a>
                                </div>
                            </div>
                            <div className="panel panel-primary margin-bottom-10 shadow">
                                <div
                                    className="list-group ranking"
                                    style={{
                                        position: "relative",
                                        height: 470,
                                        overflow: "auto",
                                        WebkitOverflowScrolling: "touch",
                                        willChange: "transform",
                                        direction: "ltr"
                                    }}
                                >
                                    <div style={{ height: 0, width: "100%" }} />
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-xs-12 text-center" />
                    </div>
                </div>
            </div>

        </>
    )
}
