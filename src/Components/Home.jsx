import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div style={{ minHeight: 0 }}>

                <div className="landing" data-ga-category="Index">
                    
                    {/* Home banner starts  */}
                    <header>
                        <div
                            className="styledComponents__HeroSection-sc-1fkpody-2 jJCNw padding-bottom-m-50 padding-bottom-100"
                            role="navigation"
                        >
                            <div className="container margin-top-80">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 margin-top-30 desc-col margin-bottom-30">
                                        <h1>Type the future</h1>
                                        <h4>
                                            Improve your typing speed and accuracy{" "}
                                            <span>by 10 minutes</span> daily exercises
                                        </h4>
                                        <div>
                                            <ul className="list-unstyled margin-top-30 margin-bottom-30 margin-left-15">
                                                <li>
                                                    <i
                                                        className="fa fa-hand-paper-o"
                                                        aria-hidden="true"
                                                    />
                                                    <span>Learn keyboarding online</span>
                                                </li>
                                                <li>
                                                    <i className="fa fa-tachometer" aria-hidden="true" />
                                                    <span>Measure typing speed</span>
                                                </li>
                                                <li>
                                                    <i className="fa fa-line-chart" aria-hidden="true" />
                                                    <span>Get faster results</span>
                                                </li>
                                                <li>
                                                    <i className="fa fa-coffee" aria-hidden="true" />
                                                    <span>Be more productive</span>
                                                </li>
                                                <li>
                                                    <i className="fa fa-keyboard-o" aria-hidden="true" />
                                                    <span>Try different keyboard layouts</span>
                                                </li>
                                            </ul>
                                        </div>
                                        
                                        <Link
                                            to="/test"
                                            className="btn btn-success btn-start text-notransform margin-bottom-20"
                                            data-ga-label="Typing Speed Test"
                                        >
                                            <i className="fa fa-tachometer margin-right-5" />
                                            <span>Typing Test</span>
                                        </Link>{" "}
                                       
                                    </div>
                                    <div className="laptop-col">
                                        {/* <video src="https://www.typing.com/dist/site_typing/images/benefits/curriculum.mp4"></video> */}
                                        <div>
                                            <div className="laptop">
                                                <div className="screen shadow">
                                                    <div className="screen-border">
                                                        <div className="screen-display ">
                                                            <div className="indicators clearfix">
                                                                <table>
                                                                    <thead>
                                                                        <tr>
                                                                            <th>
                                                                                <span>Accuracy</span>
                                                                            </th>
                                                                            <th colSpan={2}>
                                                                                <span>Speed</span>
                                                                            </th>
                                                                            <th>
                                                                                <span>Time</span>
                                                                            </th>
                                                                            <th>
                                                                                <span>Errors</span>
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <h3>
                                                                                    <b>100</b>
                                                                                    <small>%</small>
                                                                                </h3>
                                                                            </td>
                                                                            <td className="wpm">
                                                                                <h3>
                                                                                    <b>0</b>
                                                                                    <small>WPM</small>
                                                                                </h3>
                                                                            </td>
                                                                            <td>
                                                                                <h3>
                                                                                    <b>0</b>
                                                                                    <small>CPM</small>
                                                                                </h3>
                                                                            </td>
                                                                            <td>
                                                                                <h3>
                                                                                    <b>0</b>
                                                                                    <small>s</small>
                                                                                </h3>
                                                                            </td>
                                                                            <td>
                                                                                <h3>
                                                                                    <b>0</b>/<small>0</small>
                                                                                </h3>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div className="text unselectable text-center">
                                                                <div className="line active">
                                                                    <span
                                                                        className="word"
                                                                        data-word="thetypingcat.com⏎"
                                                                    >
                                                                        <span
                                                                            color="#F1E246"
                                                                            className="Line__CharSpan-copnkx-0 lfqOzy char active "
                                                                            data-char="t"
                                                                        >
                                                                            t
                                                                        </span>
                                                                        hetypingcat.com⏎
                                                                    </span>
                                                                    <span className="char" />
                                                                </div>
                                                                <div className="line next">
                                                                    <span className="char">
                                                                        <span>
                                                                            Keyboard<i className="spacer"></i>typing
                                                                            <i className="spacer"> </i>tutor⏎
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                                <div className="line next">
                                                                    <span className="char">
                                                                        <span>
                                                                            try<i className="spacer"> </i>it
                                                                            <i className="spacer"> </i>now
                                                                            <i className="spacer"> </i>start
                                                                            <i className="spacer"></i>typing⏎
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                                <div className="line next">
                                                                    <span className="char">
                                                                        <span>
                                                                            Do<i className="spacer"> </i>you
                                                                            <i className="spacer"> </i>like
                                                                            <i className="spacer"> </i>it?⏎
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                                <div className="line next">
                                                                    <span className="char">
                                                                        <span>
                                                                            I<i className="spacer"> </i>hope
                                                                            <i className="spacer"> </i>yes.⏎
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                                <div className="line">
                                                                    You are simply the best.⏎
                                                                </div>
                                                                <div className="line">Enjoy typing tutor!⏎</div>
                                                                <div className="line">
                                                                    ...and become a typing cheetah⏎
                                                                </div>
                                                                <div className="line">
                                                                    The end - Thanks! &lt;3⏎
                                                                </div>
                                                                <div className="line"> ⏎</div>
                                                                <div className="line"> ⏎</div>
                                                                <div className="line"> ⏎</div>
                                                                <div className="line"> ⏎</div>
                                                                <div className="line"> ⏎</div>
                                                                <div className="line"> ⏎</div>
                                                                <div className="line">I said the end! :)⏎</div>
                                                                <div className="line"> ⏎</div>
                                                                <div className="line"> ⏎</div>
                                                                <div className="line"> ⏎</div>
                                                                <div className="line"> ⏎</div>
                                                                <div className="line"> ⏎</div>
                                                                <div className="line">
                                                                    Oh ah you are still typing.⏎
                                                                </div>
                                                                <div className="line">
                                                                    Do you feel addicted?⏎
                                                                </div>
                                                                <div className="line">There you go⏎</div>
                                                                <div className="line">
                                                                    A long time ago, in a catlaxy far, far
                                                                    away...⏎
                                                                </div>
                                                                <div className="line">
                                                                    It is a period of dogs war. Cats⏎
                                                                </div>
                                                                <div className="line">
                                                                    spaceships, striking from a hidden⏎
                                                                </div>
                                                                <div className="line">
                                                                    base, have won their first victory⏎
                                                                </div>
                                                                <div className="line">
                                                                    against the evil Dogs Empire.⏎
                                                                </div>
                                                                <div className="line">THE REAL END⏎</div>
                                                            </div>
                                                        </div>
                                                        <div />
                                                    </div>
                                                </div>
                                                <div className="keyboard shadow unselectable short ansi">
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 bWIjRw key key-96 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 14, 5, 1, 1)"
                                                        }}
                                                    >
                                                        <div>
                                                            <span>
                                                                <sub>`</sub>
                                                                <sup>~</sup>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 bWIjRw key key-49 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 68, 5, 1, 1)"
                                                        }}
                                                    >
                                                        <div>
                                                            <span>
                                                                <sub>1</sub>
                                                                <sup>!</sup>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 hKPQXC key key-50 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 122, 5, 1, 1)"
                                                        }}
                                                    >
                                                        <div>
                                                            <span>
                                                                <sub>2</sub>
                                                                <sup>@</sup>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 iIuwub key key-51 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 176, 5, 1, 1)"
                                                        }}
                                                    >
                                                        <div>
                                                            <span>
                                                                <sub>3</sub>
                                                                <sup>#</sup>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 HMfLA key key-52 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 230, 5, 1, 1)"
                                                        }}
                                                    >
                                                        <div>
                                                            <span>
                                                                <sub>4</sub>
                                                                <sup>$</sup>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 HMfLA key key-53 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 284, 5, 1, 1)"
                                                        }}
                                                    >
                                                        <div>
                                                            <span>
                                                                <sub>5</sub>
                                                                <sup>%</sup>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 fXPubB key key-54 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 338, 5, 1, 1)"
                                                        }}
                                                    >
                                                        <div>
                                                            <span>
                                                                <sub>6</sub>
                                                                <sup>^</sup>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 fXPubB key key-55 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 392, 5, 1, 1)"
                                                        }}
                                                    >
                                                        <div>
                                                            <span>
                                                                <sub>7</sub>
                                                                <sup>&amp;</sup>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 iIuwub key key-56 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 446, 5, 1, 1)"
                                                        }}
                                                    >
                                                        <div>
                                                            <span>
                                                                <sub>8</sub>
                                                                <sup>*</sup>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 hKPQXC key key-57 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 500, 5, 1, 1)"
                                                        }}
                                                    >
                                                        <div>
                                                            <span>
                                                                <sub>9</sub>
                                                                <sup>(</sup>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 bWIjRw key key-48 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 554, 5, 1, 1)"
                                                        }}
                                                    >
                                                        <div>
                                                            <span>
                                                                <sub>0</sub>
                                                                <sup>)</sup>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 bWIjRw key key-45 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 608, 5, 1, 1)"
                                                        }}
                                                    >
                                                        <div>
                                                            <span>
                                                                <sub>-</sub>
                                                                <sup>_</sup>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 bWIjRw key key-61 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 662, 5, 1, 1)"
                                                        }}
                                                    >
                                                        <div>
                                                            <span>
                                                                <sub>=</sub>
                                                                <sup>+</sup>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 bWIjRw key key-8 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 716, 5, 1, 1)"
                                                        }}
                                                    >
                                                        <div>backspace</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 bWIjRw key key-tab disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 14, 59, 1, 1)"
                                                        }}
                                                    >
                                                        <div>tab</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 bWIjRw key key-113 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 103, 59, 1, 1)"
                                                        }}
                                                    >
                                                        <div>q</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 hKPQXC key key-119 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 157, 59, 1, 1)"
                                                        }}
                                                    >
                                                        <div>w</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 iIuwub key key-101 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 211, 59, 1, 1)"
                                                        }}
                                                    >
                                                        <div>e</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 HMfLA key key-114 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 265, 59, 1, 1)"
                                                        }}
                                                    >
                                                        <div>r</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 HMfLA key key-116 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 319, 59, 1, 1)"
                                                        }}
                                                    >
                                                        <div>t</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 fXPubB key key-121 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 373, 59, 1, 1)"
                                                        }}
                                                    >
                                                        <div>y</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 fXPubB key key-117 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 427, 59, 1, 1)"
                                                        }}
                                                    >
                                                        <div>u</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 iIuwub key key-105 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 481, 59, 1, 1)"
                                                        }}
                                                    >
                                                        <div>i</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 hKPQXC key key-111 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 535, 59, 1, 1)"
                                                        }}
                                                    >
                                                        <div>o</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 bWIjRw key key-112 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 589, 59, 1, 1)"
                                                        }}
                                                    >
                                                        <div>p</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 bWIjRw key key-91 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 643, 59, 1, 1)"
                                                        }}
                                                    >
                                                        <div>
                                                            <span>
                                                                <sub>[</sub>
                                                                <sup>{"{"}</sup>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 bWIjRw key key-93 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 697, 59, 1, 1)"
                                                        }}
                                                    >
                                                        <div>
                                                            <span>
                                                                <sub>]</sub>
                                                                <sup>{"}"}</sup>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 bWIjRw key key-92 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 751, 59, 1, 1)"
                                                        }}
                                                    >
                                                        <div>
                                                            <span>
                                                                <sub>\</sub>
                                                                <sup>|</sup>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 bWIjRw key key-20 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 14, 113, 1, 1)"
                                                        }}
                                                    >
                                                        <div>capslock</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 bWIjRw key key-97 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 120, 113, 1, 1)"
                                                        }}
                                                    >
                                                        <div>a</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 hKPQXC key key-115 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 174, 113, 1, 1)"
                                                        }}
                                                    >
                                                        <div>s</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 iIuwub key key-100 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 228, 113, 1, 1)"
                                                        }}
                                                    >
                                                        <div>d</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 HMfLA key key-102 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 282, 113, 1, 1)"
                                                        }}
                                                    >
                                                        <div>f</div>
                                                        <div className="Key__KeyBump-bl7j1m-1 cHYiEz" />
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 HMfLA key key-103 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 336, 113, 1, 1)"
                                                        }}
                                                    >
                                                        <div>g</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 fXPubB key key-104 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 390, 113, 1, 1)"
                                                        }}
                                                    >
                                                        <div>h</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 fXPubB key key-106 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 444, 113, 1, 1)"
                                                        }}
                                                    >
                                                        <div>j</div>
                                                        <div className="Key__KeyBump-bl7j1m-1 cHYiEz" />
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 iIuwub key key-107 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 498, 113, 1, 1)"
                                                        }}
                                                    >
                                                        <div>k</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 hKPQXC key key-108 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 552, 113, 1, 1)"
                                                        }}
                                                    >
                                                        <div>l</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 bWIjRw key key-59 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 606, 113, 1, 1)"
                                                        }}
                                                    >
                                                        <div>
                                                            <span>
                                                                <sub>;</sub>
                                                                <sup>:</sup>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 bWIjRw key key-39 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 660, 113, 1, 1)"
                                                        }}
                                                    >
                                                        <div>
                                                            <span>
                                                                <sub>'</sub>
                                                                <sup>"</sup>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 bWIjRw key key-13 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 714, 113, 1, 1)"
                                                        }}
                                                    >
                                                        <div>enter</div>
                                                        <div
                                                            className="key enter-bottom"
                                                            style={{ background: "#92BF7B" }}
                                                        />
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 bWIjRw key key-lshift disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 14, 167, 1, 1)"
                                                        }}
                                                    >
                                                        <div>lshift</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 bWIjRw key key-122 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 142, 167, 1, 1)"
                                                        }}
                                                    >
                                                        <div>z</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 hKPQXC key key-120 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 196, 167, 1, 1)"
                                                        }}
                                                    >
                                                        <div>x</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 iIuwub key key-99 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 250, 167, 1, 1)"
                                                        }}
                                                    >
                                                        <div>c</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 HMfLA key key-118 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 304, 167, 1, 1)"
                                                        }}
                                                    >
                                                        <div>v</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 HMfLA key key-98 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 358, 167, 1, 1)"
                                                        }}
                                                    >
                                                        <div>b</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 fXPubB key key-110 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 412, 167, 1, 1)"
                                                        }}
                                                    >
                                                        <div>n</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 fXPubB key key-109 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 466, 167, 1, 1)"
                                                        }}
                                                    >
                                                        <div>m</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 iIuwub key key-44 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 520, 167, 1, 1)"
                                                        }}
                                                    >
                                                        <div>
                                                            <span>
                                                                <sub>,</sub>
                                                                <sup>&lt;</sup>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 hKPQXC key key-46 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 574, 167, 1, 1)"
                                                        }}
                                                    >
                                                        <div>
                                                            <span>
                                                                <sub>.</sub>
                                                                <sup>&gt;</sup>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 bWIjRw key key-47 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 628, 167, 1, 1)"
                                                        }}
                                                    >
                                                        <div>
                                                            <span>
                                                                <sub>/</sub>
                                                                <sup>?</sup>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 bWIjRw key key-rshift disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 682, 167, 1, 1)"
                                                        }}
                                                    >
                                                        <div>rshift</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 bWIjRw key key-fn disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 14, 221, 1, 1)"
                                                        }}
                                                    >
                                                        <div>fn</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 bWIjRw key key-ctrl disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 68, 221, 1, 1)"
                                                        }}
                                                    >
                                                        <div>ctrl</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 bWIjRw key key-lalt disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 122, 221, 1, 1)"
                                                        }}
                                                    >
                                                        <div>lalt</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 elFMEp key key-lmeta disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 176, 221, 1, 1)"
                                                        }}
                                                    >
                                                        <div>lmeta</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 kDfapK key key-32 disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 230, 221, 1, 1)"
                                                        }}
                                                    >
                                                        <div>space</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 elFMEp key key-rmeta disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 540, 221, 1, 1)"
                                                        }}
                                                    >
                                                        <div>rmeta</div>
                                                    </div>
                                                    <div
                                                        className="Key__KeyDiv-bl7j1m-0 elFMEp key key-ralt disabled"
                                                        style={{
                                                            transform:
                                                                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0,  1, 0, 594, 221, 1, 1)"
                                                        }}
                                                    >
                                                        <div>ralt</div>
                                                    </div>
                                                </div>
                                                <div className="hands finger-active-3">
                                                    <div className="hand hand-l">
                                                        <div
                                                            className="finger finger-0"
                                                            style={{ backgroundColor: "#CCDFC2" }}
                                                        />
                                                        <div
                                                            className="finger finger-1"
                                                            style={{ backgroundColor: "#B8C5E0" }}
                                                        />
                                                        <div
                                                            className="finger finger-2"
                                                            style={{ backgroundColor: "#D1BBD6" }}
                                                        />
                                                        <div
                                                            className="finger finger-3"
                                                            style={{ backgroundColor: "#F1E246" }}
                                                        />
                                                        <div
                                                            className="finger finger-4"
                                                            style={{ backgroundColor: "#cccccc" }}
                                                        />
                                                        <div className="hand-b hand-b-l shadow" />
                                                    </div>
                                                    <div className="hand hand-r">
                                                        <div
                                                            className="finger finger-5"
                                                            style={{ backgroundColor: "#cccccc" }}
                                                        />
                                                        <div
                                                            className="finger finger-6"
                                                            style={{ backgroundColor: "#EDD8B6" }}
                                                        />
                                                        <div
                                                            className="finger finger-7"
                                                            style={{ backgroundColor: "#D1BBD6" }}
                                                        />
                                                        <div
                                                            className="finger finger-8"
                                                            style={{ backgroundColor: "#B8C5E0" }}
                                                        />
                                                        <div
                                                            className="finger finger-9"
                                                            style={{ backgroundColor: "#CCDFC2" }}
                                                        />
                                                        <div className="hand-b hand-b-r shadow" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="styledComponents__HeroSectionSeparator-sc-1fkpody-3 iTqtiU separator navbar-inverse" />
                    </header>

                    {/* variety section  */}
                    <section className="courses">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 margin-bottom-50">
                                    <h2>
                                        <span>Variety of courses</span>
                                    </h2>
                                </div>
                            </div>
                            <div className="courses">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-4 course">
                                        <a
                                            data-ga-label="Course: Basic"
                                            href="typing-courses/basic.html"
                                        >
                                            <div className="course-header">
                                                <div className="LazyLoad" />
                                                <h3>Basic</h3>
                                            </div>
                                            <p>
                                                Learn basic touch typing skills. These typing lessons
                                                are dedicated to people who want to start learning how
                                                to type correctly without looking at the keyboard.
                                            </p>
                                        </a>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 course">
                                        <a
                                            data-ga-label="Course: Advanced"
                                            href="typing-courses/advanced.html"
                                        >
                                            <div className="course-header">
                                                <div className="LazyLoad" />
                                                <h3>Advanced</h3>
                                            </div>
                                            <p>
                                                Learn advanced touch typing skills. Set of typing
                                                lessons that introduce capitalization, punctuation, and
                                                number row. It will make you sophisticated typists.
                                            </p>
                                        </a>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 course">
                                        <a
                                            data-ga-label="Course: Ngrams"
                                            href="typing-courses/ngrams.html"
                                        >
                                            <div className="course-header">
                                                <div className="LazyLoad" />
                                                <h3>Ngrams</h3>
                                            </div>
                                            <p>
                                                Practice typing English ngrams. The most effective way
                                                to improve typing speed by repeating the most used
                                                continuous letter sequences.
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-4 course">
                                        <a
                                            data-ga-label="Course: Famouse law quotes"
                                            href="typing-courses/legal-famouse-law-quotes.html"
                                        >
                                            <div className="course-header">
                                                <div className="LazyLoad" />
                                                <h3>Famouse law quotes</h3>
                                            </div>
                                            <p>
                                                Practice famouse law quotes. This course is dedicated to
                                                a legal typist who wants to take action and type faster.
                                            </p>
                                        </a>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 course">
                                        <a
                                            data-ga-label="Course: Glossary of Legal Terms"
                                            href="typing-courses/glossary-of-legal-terms.html"
                                        >
                                            <div className="course-header">
                                                <div className="LazyLoad" />
                                                <h3>Glossary of Legal Terms</h3>
                                            </div>
                                            <p>
                                                Another set of legal terms to improve keyboard skills.
                                                This one is the list of 200+ legal terms.
                                            </p>
                                        </a>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 course">
                                        <a
                                            data-ga-label="Course: List of Latin legal terms"
                                            href="typing-courses/list-of-latin-legal-terms.html"
                                        >
                                            <div className="course-header">
                                                <div className="LazyLoad" />
                                                <h3>List of Latin legal terms</h3>
                                            </div>
                                            <p>
                                                The list of 300+ Latin legal terms for daily typing
                                                practice.
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-4 course">
                                        <a
                                            data-ga-label="Course: Brocard"
                                            href="typing-courses/brocard.html"
                                        >
                                            <div className="course-header">
                                                <div className="LazyLoad" />
                                                <h3>Brocard</h3>
                                            </div>
                                            <p>Set of 60 the most common latin legal brocards.</p>
                                        </a>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 course">
                                        <a
                                            data-ga-label="Course: Anatomy"
                                            href="typing-courses/anatomy.html"
                                        >
                                            <div className="course-header">
                                                <div className="LazyLoad" />
                                                <h3>Anatomy</h3>
                                            </div>
                                            <p>
                                                Anatomy glossary drill for health workers. The massive
                                                list of terms with descriptions.
                                            </p>
                                        </a>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 course">
                                        <a
                                            data-ga-label="Course: Infectious Disease"
                                            href="typing-courses/infectious-disease.html"
                                        >
                                            <div className="course-header">
                                                <div className="LazyLoad" />
                                                <h3>Infectious Disease</h3>
                                            </div>
                                            <p>Infectious disease drill.</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-4 course">
                                        <a
                                            data-ga-label="Course: Medications"
                                            href="typing-courses/medications.html"
                                        >
                                            <div className="course-header">
                                                <div className="LazyLoad" />
                                                <h3>Medications</h3>
                                            </div>
                                            <p>
                                                List of 200 most used medications to practice typing
                                                prescriptions.
                                            </p>
                                        </a>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 course">
                                        <a
                                            data-ga-label="Course: Geography"
                                            href="typing-courses/geography.html"
                                        >
                                            <div className="course-header">
                                                <div className="LazyLoad" />
                                                <h3>Geography</h3>
                                            </div>
                                            <p>
                                                Typing lessons for students to practice typing
                                                geographical locations. Containing random sets of
                                                states, cities, and world capitals.
                                            </p>
                                        </a>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 course">
                                        <a
                                            data-ga-label="Course: Math"
                                            href="typing-courses/math.html"
                                        >
                                            <div className="course-header">
                                                <div className="LazyLoad" />
                                                <h3>Math</h3>
                                            </div>
                                            <p>
                                                Improve typing mathematical formulas, symbols, and
                                                numbers. Practice for intense math typists.
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-4 course">
                                        <a
                                            data-ga-label="Course: Business Jargon"
                                            href="typing-courses/business-jargon.html"
                                        >
                                            <div className="course-header">
                                                <div className="LazyLoad" />
                                                <h3>Business Jargon</h3>
                                            </div>
                                            <p>
                                                Comprehensive typing course for practicing business
                                                typing skills. Dedicated mostly to improve the typing
                                                speed of office workers.
                                            </p>
                                        </a>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 course">
                                        <a
                                            data-ga-label="Course: Excel"
                                            href="typing-courses/excel.html"
                                        >
                                            <div className="course-header">
                                                <div className="LazyLoad" />
                                                <h3>Excel</h3>
                                            </div>
                                            <p>
                                                Reinforce your excel skills with good keyboard skills.
                                            </p>
                                        </a>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 course">
                                        <a
                                            data-ga-label="Course: Words and ngrams"
                                            href="typing-courses/words.html"
                                        >
                                            <div className="course-header">
                                                <div className="LazyLoad" />
                                                <h3>Words and ngrams</h3>
                                            </div>
                                            <p>
                                                Practice 3000 the most common English words together
                                                with ngrams. It is an even more effective typing course
                                                for learning how to type faster.
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-4 course">
                                        <a
                                            data-ga-label="Course: Funny"
                                            href="typing-courses/funny.html"
                                        >
                                            <div className="course-header">
                                                <div className="LazyLoad" />
                                                <h3>Funny</h3>
                                            </div>
                                            <p>
                                                Practice touch typing by writing funny exercises.
                                                Improve your typing speed by rewriting funny sentences
                                                and quotes. E.g., Murphy's laws, why did the chicken
                                                cross the road.
                                            </p>
                                        </a>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 course">
                                        <a
                                            data-ga-label="Course: ES6"
                                            href="typing-courses/es6.html"
                                        >
                                            <div className="course-header">
                                                <div className="LazyLoad" />
                                                <h3>ES6</h3>
                                            </div>
                                            <p>
                                                EcmaScript 6 examples. Javascript programming typing
                                                practice dedicated to frontend developers to improve
                                                their coding speed.
                                            </p>
                                        </a>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 course">
                                        <a
                                            data-ga-label="Course: HTML5"
                                            href="typing-courses/html5.html"
                                        >
                                            <div className="course-header">
                                                <div className="LazyLoad" />
                                                <h3>HTML5</h3>
                                            </div>
                                            <p>
                                                Practice typing HTML structures. Focus on markup
                                                specific characters and char connections.
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-4 course">
                                        <a
                                            data-ga-label="Course: CSS3"
                                            href="typing-courses/css3.html"
                                        >
                                            <div className="course-header">
                                                <div className="LazyLoad" />
                                                <h3>CSS3</h3>
                                            </div>
                                            <p>
                                                CSS 3 examples. Cascading style sheets exercises for
                                                improving CSS specific syntax.
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="layouts">
                        <div className="container ">
                            <div className="row">
                                <div className="col-xs-12">
                                    <h2>
                                        <span>Multiple keyboard layouts</span>
                                    </h2>
                                    <p>
                                        <span>
                                            With The Typing Cat you can learn following keyboard
                                            layouts:
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="row margin-top-30">
                                <div className="col-xs-12 col-sm-5">
                                    <div className="LazyLoad" />
                                </div>
                                <div className="col-sm-7">
                                    <h4>Qwerty</h4>
                                    <p>
                                        Qwerty is the most common widespread modern-day keyboard
                                        layout. It was designed based on a layout created for the
                                        Sholes and Glidden typewriter in 1873.
                                    </p>
                                    <a
                                        href="course/qwerty.html"
                                        className="btn btn-primary btn-sm margin-top-15"
                                        data-ga-label="Learn Qwerty"
                                    >
                                        <span className="fa fa-play" /> Learn Qwerty
                                    </a>
                                </div>
                            </div>
                            <div className="row margin-top-30">
                                <div className="col-xs-12 col-sm-5">
                                    <div className="LazyLoad" />
                                </div>
                                <div className="col-xs-12 col-sm-7">
                                    <h4>Dvorak</h4>
                                    <p>
                                        Dvorak was created in 1930 and patented in 1936 by Dr.
                                        August Dvorak. It proponents claim this layout uses less
                                        finger motion, increases typing rate and reduces errors
                                        compared to Qwerty.
                                    </p>
                                    <a
                                        href="course/dvorak.html"
                                        className="btn btn-primary btn-sm margin-top-15"
                                        data-ga-label="Learn Dvorak"
                                    >
                                        <span className="fa fa-play" /> Learn Dvorak
                                    </a>
                                </div>
                            </div>
                            <div className="row margin-top-30">
                                <div className="col-xs-12 col-sm-5">
                                    <div className="LazyLoad" />
                                </div>
                                <div className="col-xs-12 col-sm-7">
                                    <h4>Colemak</h4>
                                    <p>
                                        Colemak is a keyboard layout created for touch typing in
                                        English. It is designed to be a practical alternative to the
                                        Qwerty and Dvorak keyboard layouts. It was released on
                                        01-Jan-2006 and boasted impressive metrics in terms of
                                        finger travel, hand alternation, and same finger frequency.
                                        Colemak is the 3rd most popular keyboard layout for touch
                                        typing in English, after QWERTY and Dvorak.
                                    </p>
                                    <a
                                        href="course/colemak.html"
                                        className="btn btn-primary btn-sm margin-top-15"
                                        data-ga-label="Learn Colemak"
                                    >
                                        <span className="fa fa-play" /> Learn Colemak
                                    </a>
                                </div>
                            </div>
                            <div className="row margin-top-30">
                                <div className="col-xs-12 col-sm-5">
                                    <div className="LazyLoad" />
                                </div>
                                <div className="col-xs-12 col-sm-7">
                                    <h4>Workman</h4>
                                    <p>
                                        Workman is a keyboard layout optimized for horizontal and
                                        vertical finger stretching. It accounts for wrist movement
                                        to the middle columns and the reaching and folding
                                        preferences of each finger. Workman was created and released
                                        by OJ Bucao on Labor Day in honor of all who type on
                                        keyboards for a living. See more on{/* */}{" "}
                                        <a
                                            href="https://workmanlayout.org/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            www.workmanlayout.com
                                        </a>
                                        .
                                    </p>
                                    <a
                                        href="course/workman.html"
                                        className="btn btn-primary btn-sm margin-top-15"
                                        data-ga-label="Learn Workman"
                                    >
                                        <span className="fa fa-play" /> Learn Workman
                                    </a>
                                </div>
                            </div>
                            <div className="row margin-top-60">
                                <div className="col-xs-12 col-sm-5" />
                                <div className="col-xs-12 col-sm-7">
                                    <p>
                                        and many more{/* */}{" "}
                                        <a
                                            href="course/dvorak-programmer.html"
                                            title="Learn Dvorak Programmer"
                                            data-ga-label="Learn Dvorak Programmer"
                                        >
                                            Dvorak Programmer
                                        </a>
                                        ,{/* */}{" "}
                                        <a
                                            href="course/workman-programmer.html"
                                            title="Learn Workman Programmer"
                                            data-ga-label="Learn Workman Programmer"
                                        >
                                            Workman Programmer
                                        </a>
                                        ,{/* */}{" "}
                                        <a
                                            href="course/azerty.html"
                                            title="Learn Azerty"
                                            data-ga-label="Learn Azerty"
                                        >
                                            Azerty
                                        </a>
                                        ,{/* */}
                                        <a
                                            href="course/qzerty.html"
                                            title="Learn Qzerty"
                                            data-ga-label="Learn Qzerty"
                                        >
                                            Qzerty
                                        </a>
                                        ,{/* */}
                                        <a
                                            href="course/qwertz.html"
                                            title="Learn Qwertz"
                                            data-ga-label="Learn Qwertz"
                                        >
                                            Qwertz
                                        </a>
                                        ,{/* */}
                                        <a
                                            href="course/qwpr.html"
                                            title="Learn Qwpr"
                                            data-ga-label="Learn Qwpr"
                                        >
                                            Qwpr
                                        </a>
                                        ,{/* */}{" "}
                                        <a
                                            href="course/capewell.html"
                                            title="Learn Capewell"
                                            data-ga-label="Learn Capewell"
                                        >
                                            Capewell
                                        </a>
                                        ,{/* */}{" "}
                                        <a
                                            href="course/asset.html"
                                            title="Learn Asset"
                                            data-ga-label="Learn Asset"
                                        >
                                            Asset
                                        </a>
                                        ,{/* */}{" "}
                                        <a
                                            href="course/norman.html"
                                            title="Learn Norman"
                                            data-ga-label="Learn Norman"
                                        >
                                            Norman
                                        </a>
                                        ,{/* */}{" "}
                                        <a
                                            href="course/minimak-4.html"
                                            title="Learn Minimak-4"
                                            data-ga-label="Learn Minimak-4"
                                        >
                                            Minimak-4
                                        </a>
                                        ,{/* */}{" "}
                                        <a
                                            href="course/minimak-8.html"
                                            title="Learn Minimak-8"
                                            data-ga-label="Learn Minimak-8"
                                        >
                                            Minimak-8
                                        </a>
                                        ,{/* */}{" "}
                                        <a
                                            href="course/minimak-12.html"
                                            title="Learn Minimak-12"
                                            data-ga-label="Learn Minimak-12"
                                        >
                                            Minimak-12
                                        </a>
                                        ,{/* */}{" "}
                                        <a
                                            href="course/tarmak-1.html"
                                            title="Learn Tarmak-1"
                                            data-ga-label="Learn Tarmak-1"
                                        >
                                            Tarmak-1
                                        </a>
                                        ,{/* */}{" "}
                                        <a
                                            href="course/tarmak-2.html"
                                            title="Learn Tarmak-2"
                                            data-ga-label="Learn Tarmak-2"
                                        >
                                            Tarmak-2
                                        </a>
                                        ,{/* */}{" "}
                                        <a
                                            href="course/tarmak-3.html"
                                            title="Learn Tarmak-3"
                                            data-ga-label="Learn Tarmak-3"
                                        >
                                            Tarmak-3
                                        </a>
                                        ,{/* */}{" "}
                                        <a
                                            href="course/tarmak-4.html"
                                            title="Learn Tarmak-4"
                                            data-ga-label="Learn Tarmak-4"
                                        >
                                            Tarmak-4
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="themes">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 margin-bottom-50">
                                    <h2>
                                        <span>Different themes</span>
                                    </h2>
                                    <p>
                                        <span>Practice typing in color scheme you like best</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-10 col-xs-offset-1">
                                    <div className="col-xs-6 col-md-2">
                                        <div className="row text-center">
                                            <div className="LazyLoad" />
                                            <small>Yeti</small>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-md-2">
                                        <div className="row text-center">
                                            <div className="LazyLoad" />
                                            <small>United</small>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-md-2">
                                        <div className="row text-center">
                                            <div className="LazyLoad" />
                                            <small>Superhero</small>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-md-2">
                                        <div className="row text-center">
                                            <div className="LazyLoad" />
                                            <small>Spacelab</small>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-md-2">
                                        <div className="row text-center">
                                            <div className="LazyLoad" />
                                            <small>Slate</small>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-md-2">
                                        <div className="row text-center">
                                            <div className="LazyLoad" />
                                            <small>Sandstone</small>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-md-2">
                                        <div className="row text-center">
                                            <div className="LazyLoad" />
                                            <small>Readable</small>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-md-2">
                                        <div className="row text-center">
                                            <div className="LazyLoad" />
                                            <small>Lumen</small>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-md-2">
                                        <div className="row text-center">
                                            <div className="LazyLoad" />
                                            <small>Darkly</small>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-md-2">
                                        <div className="row text-center">
                                            <div className="LazyLoad" />
                                            <small>Journal</small>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-md-2">
                                        <div className="row text-center">
                                            <div className="LazyLoad" />
                                            <small>Flatly</small>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-md-2">
                                        <div className="row text-center">
                                            <div className="LazyLoad" />
                                            <small>Cyborg</small>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-md-2">
                                        <div className="row text-center">
                                            <div className="LazyLoad" />
                                            <small>Cosmo</small>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-md-2">
                                        <div className="row text-center">
                                            <div className="LazyLoad" />
                                            <small>Cerulean</small>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-md-2">
                                        <div className="row text-center">
                                            <div className="LazyLoad" />
                                            <small>Paper</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="testimonials">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <h2>
                                        <span>Testimonials</span>
                                    </h2>
                                    <p>
                                        <span>What people are saying about The Typing Cat:</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row text-center margin-top-30">
                                <div className="col-xs-12 col-md-offset-1 col-md-10">
                                    <div
                                        id="carousel-testimonials"
                                        className="carousel slide"
                                        data-ride="carousel"
                                    >
                                        <div className="carousel-inner" role="listbox">
                                            <div className="item active">
                                                <div className="carousel-caption">
                                                    <div>
                                                        <sup>
                                                            <i
                                                                className="fa fa-quote-left"
                                                                aria-hidden="true"
                                                            />
                                                        </sup>
                                                        &nbsp;{/* */}Very nice software so far =). I like
                                                        that it slowly builds and exercises on real words as
                                                        much as possible. I also really appreciate that it
                                                        trains for multiple keyboard layouts and not just
                                                        qwerty.{/* */}&nbsp;
                                                        <sub>
                                                            <i
                                                                className="fa fa-quote-right"
                                                                aria-hidden="true"
                                                            />
                                                        </sub>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item ">
                                                <div className="carousel-caption">
                                                    <div>
                                                        <sup>
                                                            <i
                                                                className="fa fa-quote-left"
                                                                aria-hidden="true"
                                                            />
                                                        </sup>
                                                        &nbsp;{/* */}I like how your website has different
                                                        varieties of tests. By taking your courses and
                                                        tests, I have been able to be one of the most
                                                        fastest typing geniuses in my school amongst
                                                        children and our family children. Thank you for the
                                                        help, I hope to see more!{/* */}&nbsp;
                                                        <sub>
                                                            <i
                                                                className="fa fa-quote-right"
                                                                aria-hidden="true"
                                                            />
                                                        </sub>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item ">
                                                <div className="carousel-caption">
                                                    <div>
                                                        <sup>
                                                            <i
                                                                className="fa fa-quote-left"
                                                                aria-hidden="true"
                                                            />
                                                        </sup>
                                                        &nbsp;{/* */}Great typing practicing facility. Well
                                                        done &amp; congrats to the Typing Cat team!{/* */}
                                                        &nbsp;
                                                        <sub>
                                                            <i
                                                                className="fa fa-quote-right"
                                                                aria-hidden="true"
                                                            />
                                                        </sub>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item ">
                                                <div className="carousel-caption">
                                                    <div>
                                                        <sup>
                                                            <i
                                                                className="fa fa-quote-left"
                                                                aria-hidden="true"
                                                            />
                                                        </sup>
                                                        &nbsp;{/* */}Great tool, using it for the second
                                                        time to learn another layout.{/* */}&nbsp;
                                                        <sub>
                                                            <i
                                                                className="fa fa-quote-right"
                                                                aria-hidden="true"
                                                            />
                                                        </sub>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item ">
                                                <div className="carousel-caption">
                                                    <div>
                                                        <sup>
                                                            <i
                                                                className="fa fa-quote-left"
                                                                aria-hidden="true"
                                                            />
                                                        </sup>
                                                        &nbsp;{/* */}I love the way the courses are set up
                                                        and that it tracks your progress! Plus it's free!
                                                        The old one I used you had to pay for, but the
                                                        typing cat is the next best thing!{/* */}&nbsp;
                                                        <sub>
                                                            <i
                                                                className="fa fa-quote-right"
                                                                aria-hidden="true"
                                                            />
                                                        </sub>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item ">
                                                <div className="carousel-caption">
                                                    <div>
                                                        <sup>
                                                            <i
                                                                className="fa fa-quote-left"
                                                                aria-hidden="true"
                                                            />
                                                        </sup>
                                                        &nbsp;{/* */}I am learning to type significantly
                                                        better within the first 10 minutes.{/* */}&nbsp;
                                                        <sub>
                                                            <i
                                                                className="fa fa-quote-right"
                                                                aria-hidden="true"
                                                            />
                                                        </sub>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item ">
                                                <div className="carousel-caption">
                                                    <div>
                                                        <sup>
                                                            <i
                                                                className="fa fa-quote-left"
                                                                aria-hidden="true"
                                                            />
                                                        </sup>
                                                        &nbsp;{/* */}The website has evolved a lot over
                                                        time. I pretty much followed along for almost a year
                                                        now and only thanks to this website I learned
                                                        touch-typing really effectively! The option of
                                                        emulating keyboard layouts is very unique and helped
                                                        me learn Colemak on the fly on a different machine
                                                        when I was bored. The new speed test has changed a
                                                        lot, but I like it how it is a lot different than
                                                        traditional tests, in that it gives you a realistic
                                                        view of your actual skills. Keep the good work up!
                                                        {/* */}&nbsp;
                                                        <sub>
                                                            <i
                                                                className="fa fa-quote-right"
                                                                aria-hidden="true"
                                                            />
                                                        </sub>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item ">
                                                <div className="carousel-caption">
                                                    <div>
                                                        <sup>
                                                            <i
                                                                className="fa fa-quote-left"
                                                                aria-hidden="true"
                                                            />
                                                        </sup>
                                                        &nbsp;{/* */}The website is made good colourful and
                                                        the sound on every keydown reminds me of type-writer
                                                        which seems so cool.{/* */}&nbsp;
                                                        <sub>
                                                            <i
                                                                className="fa fa-quote-right"
                                                                aria-hidden="true"
                                                            />
                                                        </sub>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item ">
                                                <div className="carousel-caption">
                                                    <div>
                                                        <sup>
                                                            <i
                                                                className="fa fa-quote-left"
                                                                aria-hidden="true"
                                                            />
                                                        </sup>
                                                        &nbsp;{/* */}I Absolutely Love Typing Cat, It
                                                        Definitely Increases My Accuracy I Always Have To
                                                        Backspace Because I Misspell Something While Typing
                                                        Fast.{/* */}&nbsp;
                                                        <sub>
                                                            <i
                                                                className="fa fa-quote-right"
                                                                aria-hidden="true"
                                                            />
                                                        </sub>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item ">
                                                <div className="carousel-caption">
                                                    <div>
                                                        <sup>
                                                            <i
                                                                className="fa fa-quote-left"
                                                                aria-hidden="true"
                                                            />
                                                        </sup>
                                                        &nbsp;{/* */}It is very important to type fast and
                                                        accurately and The Typing Cat has great lessons to
                                                        follow up. I really find it very useful for me and
                                                        the keyboard tutorial is well developed.{/* */}
                                                        &nbsp;
                                                        <sub>
                                                            <i
                                                                className="fa fa-quote-right"
                                                                aria-hidden="true"
                                                            />
                                                        </sub>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item ">
                                                <div className="carousel-caption">
                                                    <div>
                                                        <sup>
                                                            <i
                                                                className="fa fa-quote-left"
                                                                aria-hidden="true"
                                                            />
                                                        </sup>
                                                        &nbsp;{/* */}Super awesome user interface and very
                                                        easy to follow instruction. Exactly what I was
                                                        looking for. :)){/* */}&nbsp;
                                                        <sub>
                                                            <i
                                                                className="fa fa-quote-right"
                                                                aria-hidden="true"
                                                            />
                                                        </sub>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item ">
                                                <div className="carousel-caption">
                                                    <div>
                                                        <sup>
                                                            <i
                                                                className="fa fa-quote-left"
                                                                aria-hidden="true"
                                                            />
                                                        </sup>
                                                        &nbsp;{/* */}Thanks for providing this service. It
                                                        is helping me improve my typing skills{/* */}&nbsp;
                                                        <sub>
                                                            <i
                                                                className="fa fa-quote-right"
                                                                aria-hidden="true"
                                                            />
                                                        </sub>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item ">
                                                <div className="carousel-caption">
                                                    <div>
                                                        <sup>
                                                            <i
                                                                className="fa fa-quote-left"
                                                                aria-hidden="true"
                                                            />
                                                        </sup>
                                                        &nbsp;{/* */}I love the simplicity of the interface.
                                                        It clean. I also like comparing my success to the
                                                        others in the typing improvement community.{/* */}
                                                        &nbsp;
                                                        <sub>
                                                            <i
                                                                className="fa fa-quote-right"
                                                                aria-hidden="true"
                                                            />
                                                        </sub>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item ">
                                                <div className="carousel-caption">
                                                    <div>
                                                        <sup>
                                                            <i
                                                                className="fa fa-quote-left"
                                                                aria-hidden="true"
                                                            />
                                                        </sup>
                                                        &nbsp;{/* */}I love the layout, it's neat and easy
                                                        on the eye. The lessons are great with nice
                                                        structuring of the introduction of the new keys as
                                                        you progress.{/* */}&nbsp;
                                                        <sub>
                                                            <i
                                                                className="fa fa-quote-right"
                                                                aria-hidden="true"
                                                            />
                                                        </sub>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item ">
                                                <div className="carousel-caption">
                                                    <div>
                                                        <sup>
                                                            <i
                                                                className="fa fa-quote-left"
                                                                aria-hidden="true"
                                                            />
                                                        </sup>
                                                        &nbsp;{/* */}One of the best applications for
                                                        learning alternative layouts like Colemak.{/* */}
                                                        &nbsp;
                                                        <sub>
                                                            <i
                                                                className="fa fa-quote-right"
                                                                aria-hidden="true"
                                                            />
                                                        </sub>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item ">
                                                <div className="carousel-caption">
                                                    <div>
                                                        <sup>
                                                            <i
                                                                className="fa fa-quote-left"
                                                                aria-hidden="true"
                                                            />
                                                        </sup>
                                                        &nbsp;{/* */}The Typing Cat really helped me improve
                                                        my typing speed and accuracy.{/* */}&nbsp;
                                                        <sub>
                                                            <i
                                                                className="fa fa-quote-right"
                                                                aria-hidden="true"
                                                            />
                                                        </sub>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item ">
                                                <div className="carousel-caption">
                                                    <div>
                                                        <sup>
                                                            <i
                                                                className="fa fa-quote-left"
                                                                aria-hidden="true"
                                                            />
                                                        </sup>
                                                        &nbsp;{/* */}Awesome program! Helps a heap ton with
                                                        typing without looking at the keyboard. Thanks guys!
                                                        {/* */}&nbsp;
                                                        <sub>
                                                            <i
                                                                className="fa fa-quote-right"
                                                                aria-hidden="true"
                                                            />
                                                        </sub>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item ">
                                                <div className="carousel-caption">
                                                    <div>
                                                        <sup>
                                                            <i
                                                                className="fa fa-quote-left"
                                                                aria-hidden="true"
                                                            />
                                                        </sup>
                                                        &nbsp;{/* */}I've been looking for something like
                                                        this for a while now. I've tried several apps from
                                                        the App Store (some of them costing in excess of
                                                        $150 (I tried them and quickly returned them and
                                                        because they did not meet my expectations). I love
                                                        the fact that there's no clock visible clock to
                                                        distract me while typing, that only puts me under
                                                        unnecessary pressure which leads to decreased typing
                                                        speed. I love that the texts are fairly long
                                                        compared to other apps and programs I've tried.
                                                        {/* */}&nbsp;
                                                        <sub>
                                                            <i
                                                                className="fa fa-quote-right"
                                                                aria-hidden="true"
                                                            />
                                                        </sub>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item ">
                                                <div className="carousel-caption">
                                                    <div>
                                                        <sup>
                                                            <i
                                                                className="fa fa-quote-left"
                                                                aria-hidden="true"
                                                            />
                                                        </sup>
                                                        &nbsp;{/* */}It has helped already! To start with I
                                                        wasn't that good but as I progressed, I got much
                                                        better!{/* */}&nbsp;
                                                        <sub>
                                                            <i
                                                                className="fa fa-quote-right"
                                                                aria-hidden="true"
                                                            />
                                                        </sub>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item ">
                                                <div className="carousel-caption">
                                                    <div>
                                                        <sup>
                                                            <i
                                                                className="fa fa-quote-left"
                                                                aria-hidden="true"
                                                            />
                                                        </sup>
                                                        &nbsp;{/* */}You are simply awesome and might reduce
                                                        the rush of needy students who are looking for good
                                                        typing clases.{/* */}&nbsp;
                                                        <sub>
                                                            <i
                                                                className="fa fa-quote-right"
                                                                aria-hidden="true"
                                                            />
                                                        </sub>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item ">
                                                <div className="carousel-caption">
                                                    <div>
                                                        <sup>
                                                            <i
                                                                className="fa fa-quote-left"
                                                                aria-hidden="true"
                                                            />
                                                        </sup>
                                                        &nbsp;{/* */}I loved it! The teacher suggested it to
                                                        me, and I got addicted to it!{/* */}&nbsp;
                                                        <sub>
                                                            <i
                                                                className="fa fa-quote-right"
                                                                aria-hidden="true"
                                                            />
                                                        </sub>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item ">
                                                <div className="carousel-caption">
                                                    <div>
                                                        <sup>
                                                            <i
                                                                className="fa fa-quote-left"
                                                                aria-hidden="true"
                                                            />
                                                        </sup>
                                                        &nbsp;{/* */}Really the best app I have ever come
                                                        across! Thumps up{/* */}&nbsp;
                                                        <sub>
                                                            <i
                                                                className="fa fa-quote-right"
                                                                aria-hidden="true"
                                                            />
                                                        </sub>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item ">
                                                <div className="carousel-caption">
                                                    <div>
                                                        <sup>
                                                            <i
                                                                className="fa fa-quote-left"
                                                                aria-hidden="true"
                                                            />
                                                        </sup>
                                                        &nbsp;{/* */}Best website I've used so far for touch
                                                        typing. Love the many options for text, especially
                                                        the HTML5 and ES6 syntax. Great practice!{/* */}
                                                        &nbsp;
                                                        <sub>
                                                            <i
                                                                className="fa fa-quote-right"
                                                                aria-hidden="true"
                                                            />
                                                        </sub>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item ">
                                                <div className="carousel-caption">
                                                    <div>
                                                        <sup>
                                                            <i
                                                                className="fa fa-quote-left"
                                                                aria-hidden="true"
                                                            />
                                                        </sup>
                                                        &nbsp;{/* */}Well done to the organisation who set
                                                        this program up...learning to type faster has
                                                        improved my speed thank you so much{/* */}&nbsp;
                                                        <sub>
                                                            <i
                                                                className="fa fa-quote-right"
                                                                aria-hidden="true"
                                                            />
                                                        </sub>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item ">
                                                <div className="carousel-caption">
                                                    <div>
                                                        <sup>
                                                            <i
                                                                className="fa fa-quote-left"
                                                                aria-hidden="true"
                                                            />
                                                        </sup>
                                                        &nbsp;{/* */}I find that the material is showing me
                                                        exactly where I am going wrong. Thanks.{/* */}&nbsp;
                                                        <sub>
                                                            <i
                                                                className="fa fa-quote-right"
                                                                aria-hidden="true"
                                                            />
                                                        </sub>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a
                                            className="left carousel-control"
                                            href="#carousel-testimonials"
                                            role="button"
                                            data-slide="prev"
                                        >
                                            <span className="fa fa-chevron-left" aria-hidden="true" />
                                            <span className="sr-only">
                                                <span>Previous</span>
                                            </span>
                                        </a>
                                        <a
                                            className="right carousel-control"
                                            href="#carousel-testimonials"
                                            role="button"
                                            data-slide="next"
                                        >
                                            <span
                                                className="fa fa-chevron-right"
                                                aria-hidden="true"
                                            />
                                            <span className="sr-only">
                                                <span>Next</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-offset-1 col-md-10 text-right margin-top-20">
                                    <span>...and many many more. Thanks to all authors!</span>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="browsers">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <h2>
                                        <span>Supported browsers</span>
                                    </h2>
                                    <p>
                                        <span>
                                            The Typing Cat has been built to work only with browsers
                                            listed below:
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="row text-center margin-top-30">
                                <div className="col-xs-6 col-sm-3">
                                    <div className="LazyLoad" />
                                    <h4>Google Chrome</h4>
                                    <a
                                        href="http://www.google.com/chrome"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span>Download</span> {/* */}Google Chrome
                                    </a>
                                </div>
                                <div className="col-xs-6 col-sm-3">
                                    <div className="LazyLoad" />
                                    <h4>Safari</h4>
                                    <a
                                        href="http://support.apple.com/downloads/#safari"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span>Download</span> {/* */}Safari
                                    </a>
                                </div>
                                <div className="col-xs-6 col-sm-3">
                                    <div className="LazyLoad" />
                                    <h4>Firefox</h4>
                                    <a
                                        href="http://www.mozilla.org/firefox/new/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span>Download</span> {/* */}Firefox
                                    </a>
                                </div>
                                <div className="col-xs-6 col-sm-3">
                                    <div className="LazyLoad" />
                                    <h4>Microsoft Edge</h4>
                                    <a
                                        href="http://www.microsoft.com/windows/microsoft-edge"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span>Download</span> {/* */}Microsoft Edge
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </>
    )
}
