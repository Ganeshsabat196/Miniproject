import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../Base/Header'
import Footer from '../Base/Footer'
import "./Css/style.css"
import Mp1 from './Mp1'
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
                                <a
                                  className="text-notransform btn btn-sm btn-default"
                                  title="5 Minutes"
                                  data-ga-label="5 minutes"
                                  href="/typing-speed-test/5m"
                                >
                                  <span>5 Minutes</span>
                                </a>
                                <div className="text-notransform btn btn-sm btn-default">
                                  <div className="styledComponents__IconWrapper-sc-59mtpj-1 cxiIbD">
                                    <i
                                      name="comment-o"
                                      className="styledComponents__Icon-sc-59mtpj-0 jaBFqZ fa fa-comment-o"
                                    />{" "}
                                    <span>Feedback</span>
                                  </div>
                                </div>
                                <div className="text-notransform btn btn-sm btn-default">
                                  <div className="styledComponents__IconWrapper-sc-59mtpj-1 cxiIbD">
                                    <i
                                      name="cog"
                                      className="styledComponents__Icon-sc-59mtpj-0 jaBFqZ fa fa-cog"
                                    />{" "}
                                    <span>Settings</span>
                                  </div>
                                </div>
                                {/* <div className="styledComponents__SettingsWrapper-sc-59mtpj-2 jqVMQw">
                              <div className="panel panel-primary margin-bottom-10 shadow">
                                <div className="panel-heading link">
                                  <strong>
                                    <span>Basic Settings</span>
                                  </strong>
                                  <i
                                    className="fa fa-close pull-right fa-2x"
                                    aria-hidden="true"
                                  />
                                </div>
                                <div
                                  className="panel-body collapse in"
                                  id="settings-panel-body"
                                >
                                  <form>
                                    <div className="row">
                                      <div className="form-group col-xs-12">
                                        <label htmlFor="volume">
                                          <span>Volume</span>
                                        </label>
                                        <input
                                          type="range"
                                          id="volume"
                                          data-setting="volume"
                                          min={0}
                                          max={1}
                                          step="0.025"
                                          defaultValue="0.1"
                                        />
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="form-group col-xs-12">
                                        <label>
                                          <span>Screen</span>
                                        </label>
                                        <div>
                                          <a
                                            href="#"
                                            className="btn-link text-notransform"
                                          >
                                            <i
                                              className="fa fa-arrows-alt margin-right-5"
                                              aria-hidden="true"
                                            />
                                            <span>Toggle fullscreen</span>
                                          </a>
                                        </div>
                                        <label htmlFor="font-size">
                                          <span>Font size</span>
                                        </label>
                                        <div>
                                          <input
                                            type="range"
                                            id="font-size"
                                            data-setting="screen_font_size"
                                            min={18}
                                            max={48}
                                            step={1}
                                            defaultValue={32}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="form-group col-xs-12">
                                        <label htmlFor="keyboard">
                                          <span>Keyboard</span>
                                        </label>
                                        <div>
                                          <label htmlFor="keyboard_hidden">
                                            <input
                                              type="checkbox"
                                              data-setting="keyboard_hidden"
                                              id="keyboard_hidden"
                                            />{" "}
                                            <span>Hidden</span>
                                          </label>
                                        </div>
                                        <div>
                                          <label htmlFor="highlight_all_fingers">
                                            <input
                                              type="checkbox"
                                              data-setting="highlight_all_fingers"
                                              id="highlight_all_fingers"
                                              defaultChecked=""
                                            />{" "}
                                            <span>Hightlight all fingers</span>
                                          </label>
                                        </div>
                                        <div>
                                          <label htmlFor="highlight_only_one_finger">
                                            <input
                                              type="checkbox"
                                              data-setting="highlight_only_one_finger"
                                              id="highlight_only_one_finger"
                                            />{" "}
                                            <span>
                                              Hightlight only active finger
                                            </span>
                                          </label>
                                        </div>
                                      </div>
                                      <div className="form-group col-xs-6">
                                        <select
                                          data-setting="keyboard"
                                          name="keyboard"
                                          id="keyboard"
                                          className="form-control"
                                        >
                                          <option selected="" value="ansi">
                                            ANSI
                                          </option>
                                          <option value="iso">ISO</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="form-group col-xs-6">
                                        <label htmlFor="layout">
                                          <span>Layout</span>
                                        </label>
                                        <select
                                          name="layout"
                                          id="layout"
                                          data-setting="layout"
                                          className="form-control"
                                        >
                                          <option selected="" value={1}>
                                            Qwerty
                                          </option>
                                          <option value={2}>Dvorak</option>
                                          <option value={3}>Colemak</option>
                                          <option value={4}>Workman</option>
                                          <option value={5}>
                                            Workman Programmer
                                          </option>
                                          <option value={6}>Azerty</option>
                                          <option value={7}>Qzerty</option>
                                          <option value={8}>Qwertz</option>
                                          <option value={9}>Qwpr</option>
                                          <option value={10}>Capewell</option>
                                          <option value={11}>Asset</option>
                                          <option value={12}>Norman</option>
                                          <option value={13}>Minimak 4</option>
                                          <option value={14}>Minimak 8</option>
                                          <option value={15}>Minimak 12</option>
                                          <option value={16}>
                                            Dvorak Programmer
                                          </option>
                                          <option value={17}>Tarmak 1</option>
                                          <option value={18}>Tarmak 2</option>
                                          <option value={19}>Tarmak 3</option>
                                          <option value={20}>Tarmak 4</option>
                                        </select>
                                      </div>
                                      <div className="form-group col-xs-6">
                                        <label htmlFor="layout_emulated_on">
                                          <input
                                            type="checkbox"
                                            data-setting="layout_emulated_enabled"
                                            id="layout_emulated_on"
                                            style={{ marginLeft: "-25px" }}
                                          />{" "}
                                          <span>Emulate with</span>
                                        </label>
                                        <i
                                          className="fa fa-arrow-right emulate-arrow"
                                          aria-hidden="true"
                                        />
                                        <select
                                          data-setting="layout_emulated"
                                          className="form-control"
                                          name="layout_emulated"
                                          id="layout_emulated"
                                          disabled=""
                                        >
                                          <option selected="" value={1}>
                                            Qwerty
                                          </option>
                                          <option value={2}>Dvorak</option>
                                          <option value={3}>Colemak</option>
                                          <option value={4}>Workman</option>
                                          <option value={5}>
                                            Workman Programmer
                                          </option>
                                          <option value={6}>Azerty</option>
                                          <option value={7}>Qzerty</option>
                                          <option value={8}>Qwertz</option>
                                          <option value={9}>Qwpr</option>
                                          <option value={10}>Capewell</option>
                                          <option value={11}>Asset</option>
                                          <option value={12}>Norman</option>
                                          <option value={13}>Minimak 4</option>
                                          <option value={14}>Minimak 8</option>
                                          <option value={15}>Minimak 12</option>
                                          <option value={16}>
                                            Dvorak Programmer
                                          </option>
                                          <option value={17}>Tarmak 1</option>
                                          <option value={18}>Tarmak 2</option>
                                          <option value={19}>Tarmak 3</option>
                                          <option value={20}>Tarmak 4</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="form-group col-xs-12">
                                        <label htmlFor="hands">
                                          <span>Hands</span>
                                        </label>
                                        <div>
                                          <label htmlFor="hands_hidden">
                                            <input
                                              type="checkbox"
                                              data-setting="hands_hidden"
                                              id="hands_hidden"
                                            />{" "}
                                            <span>Hidden</span>
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="form-group col-xs-12">
                                        <label htmlFor="theme">
                                          <span>Theme</span>
                                        </label>
                                        <a
                                          className="btn btn-info btn-sm btn-block text-notransform"
                                          href="/pricing-plans"
                                        >
                                          <span>
                                            Upgrade account to enable this
                                            setting.
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="form-group col-xs-12">
                                        <label htmlFor="logic">
                                          <span>Logic</span>
                                        </label>
                                        <div>
                                          <label htmlFor="logic_stop_on_error">
                                            <input
                                              type="checkbox"
                                              data-setting="logic_stop_on_error"
                                              id="logic_stop_on_error"
                                            />{" "}
                                            <span>Stop on error</span>
                                          </label>
                                        </div>
                                        <div>
                                          <label htmlFor="logic_disable_backspace">
                                            <input
                                              type="checkbox"
                                              data-setting="logic_disable_backspace"
                                              id="logic_disable_backspace"
                                            />{" "}
                                            <span>Disable backspace</span>
                                          </label>
                                        </div>
                                        <div>
                                          <label htmlFor="logic_use_opposite_shift">
                                            <input
                                              type="checkbox"
                                              data-setting="logic_use_opposite_shift"
                                              id="logic_use_opposite_shift"
                                            />{" "}
                                            <span>Use opposite shift</span>
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div> */}
                              </div>
                            </div>
                          </div>
                          {/* <div>
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
                                <div className="text unselectable text-center" />
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
                          <div className="hands finger-active-0">
                            <div className="hand hand-l">
                              <div
                                className="finger finger-0"
                                style={{ backgroundColor: "#61A93D" }}
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
                                style={{ backgroundColor: "#F4ECC1" }}
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
                      </div> */}
                          <div className="main">
                            {/* tv code starts here */}
                            <div className="tv-box">
                              <div className="main-screen">


                               { form==="60" && <Mp1 />}

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
                    {/* <div className="styledComponents__PromoSection-sc-1vj1a5a-1 eeDgvf">
                      <div
                        orientation="vertical"
                        className="styledComponents__Container-sc-1tf5b7j-0 bdBbTV"
                      >
                        <div className="styledComponents__Description-sc-1tf5b7j-2 cNsAWE">
                          <h2
                            orientation="vertical"
                            className="styledComponents__Header-sc-1tf5b7j-1 inuNAl"
                          >
                            <span>
                              Save your progress and get access to exclusive member
                              only discounts
                            </span>
                          </h2>
                          <a href="/sign-up">
                            <span className="styledComponents__Button-sc-1tf5b7j-9 frYHjn">
                              <span>Get your FREE account today</span>
                            </span>
                          </a>
                          <a
                            className="styledComponents__SignInLink-sc-1tf5b7j-11 fcqsI"
                            href="/sign-in"
                          >
                            <span>Already registered? Login</span>
                          </a>
                        </div>
                      </div>
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
                    </div> */}
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
