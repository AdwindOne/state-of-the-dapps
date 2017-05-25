import React from "react";

class SubmitModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optIn: false
    };
  }

  pressOptIn() {
    const {optIn} = this.state;
    console.log(optIn);
    event.preventDefault();
    this.setState({optIn: !optIn});
  }


  submitQueue() {
    const {create} = this.props;
    let $thisForm = $(this.refs.submissionForm);
    const getFormData = () => {
      let dataObj = {};
      $thisForm.serializeArray().forEach((item, i) => {
        dataObj[item.name] = item.value;
      });
      return dataObj;
    };
    let res = create(this.refs.antiSpam.value, getFormData(), $thisForm);
    console.log(res);

  }

  render() {
    const {optIn} = this.state;
    return (
      <div id='submitModal' className='modal'>
        <div className='modal-content'>
          <div className='row slim-row center-align'>
            <h4>Submit a Dapp</h4>
            <p>
              Complete the form below or email <a href='mailto:dapps@ethercasts.com' target='_blank'>dapps@ethercasts.com</a>
            </p>
          </div>
          <form ref='submissionForm'>
            <div className='row slim-row'>
              <div className='input-field col s12 m6'>
                <input className='validate' name='dapp_name' type='text' required maxLength='32'/>
                <label>Dapp Name *</label>
              </div>
              <div className='input-field col s12 m6'>
                <input className='validate' name='description' type='text' required maxLength='64'/>
                <label>Dapp Description *</label>
              </div>
            </div>
            <div className='row slim-row'>
              <div className='input-field col s12 m6'>
                <input className='validate' name='contact' type='text' required maxLength='32'/>
                <label>Organisation / Contact Name *</label>
              </div>
              <div className='input-field col s12 m6'>
                <input className='validate' name='contact_email' type='email' required maxLength='32'/>
                <label>Contact Email (not shown publicly) *</label>
              </div>
            </div>
            <div className='row slim-row'>
              <div className='input-field col s12 m6'>
                <input name='site' type='url' pattern="https?://.+" required maxLength='64'/>
                <label>Site URL *</label>
              </div>
              <div className='input-field col s12 m6'>
                <input name='reddit' type='url' pattern="https?://.+" maxLength='128'/>
                <label>Reddit URL</label>
              </div>
            </div>
            <div className='row slim-row'>
              <div className='input-field col s12 m6'>
                <input name='github' type='url' pattern="https?://.+" maxLength='64'/>
                <label>GitHub URL</label>
              </div>
              <div className='input-field col s12 m6'>
                <input name='slack' type='url' pattern="https?://.+" maxLength='64'/>
                <label>Slack URL</label>
              </div>
            </div>
            <div className='row slim-row'>
              <div className='input-field col s12 m6'>
                <select className='browser-default validate' required name='license'>
                  <option value='' defaultValue>Software License *</option>
                  <option value='BSD-2-Clause'>(BSD-2-Clause)</option>
                  <option value='BSD-3-Clause'>(BSD-3-Clause)</option>
                  <option value='AFL-3.0'>(AFL-3.0)</option>
                  <option value='APL-1.0'>(APL-1.0)</option>
                  <option value='Apache-2.0'>(Apache-2.0)</option>
                  <option value='APSL-2.0'>(APSL-2.0)</option>
                  <option value='Artistic-2.0'>(Artistic-2.0)</option>
                  <option value='AAL'>(AAL)</option>

                  <option value='BSL-1.0'>(BSL-1.0)</option>

                  <option value='CECILL-2.1'>(CECILL-2.1)</option>

                  <option value='CATOSL-1.1'>(CATOSL-1.1)</option>

                  <option value='CDDL-1.0'>(CDDL-1.0)</option>
                  <option value='EPL-1.'> (EPL-1.0)</option>

                  <option value='OTHERS'>(OTHERS)</option>

                </select>
              </div>
            </div>
            <div className='row slim-row'>
              <div className='input-field col s12 m6'>
                <input name='contract_address_mainnet' type='text' pattern="(0x)?[0-9a-fA-F]{40}" maxLength='42'/>
                <label>Mainnet contract address</label>
              </div>
              <div className='input-field col s12 m6'>
                <input name='contract_address_ropsten' type='text' pattern="(0x)?[0-9a-fA-F]{40}" maxLength='42'/>
                <label>Ropsten contract address</label>
              </div>
            </div>
            <div className='row slim-row'>
              <div className='input-field col s12'>
                <input name='tags' type='text' maxLength='128'/>
                <label>Tags (comma separated)</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s12 m6'>
                <select className='browser-default validate' required name='status'>
                  <option value='' defaultValue>Project Status *</option>
                  <option value='1. Abandoned'>Abandoned</option>
                  <option value='2. On Hold'>On Hold</option>
                  <option value='3. Stealth Mode'>Stealth Mode</option>
                  <option value='4. Concept'>Concept</option>
                  <option value='5. Work In Progress'>Work In Progress</option>
                  <option value='6. Demo'>Demo</option>
                  <option value='7. Working Prototype'>Working Prototype</option>
                  <option value='8. Live'>Live</option>
                </select>
              </div>
              <div className='input-field col s12 m6'>
                <input className="filled-in" type="checkbox" id="test5" name="opt_in" checked={optIn}
                       onChange={this.pressOptIn.bind(this)}
                />
                <label htmlFor="test5"> It's ok to send me (very occasional) email about the State of the Dapps
                  service.</label>
              </div>
              <div className='input-field col s12 m6'>
                <input ref='antiSpam' className='anti-spam validate' required type='text' maxLength='3'/>
                <label>Anti Spam: 40 + 2 = ?</label>
              </div>
            </div>
            <div className='row center-align slim-row'>
              <a href='#' className='modal-action modal-close waves-effect waves-green btn-flat'>Cancel</a>
              &nbsp;&nbsp;
              <button type='button'
                      className='waves-effect waves-blue btn light-blue'
                      onClick={this.submitQueue.bind(this)}>Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SubmitModal;
