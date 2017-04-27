import React from 'react';
import Dapp from '../containers/dapp';

class DappList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { dapps, featuredDapps } = this.props;
    return (
      <section ref='dappSection' className='dapps row'>
        {
          featuredDapps.map((dapp, index) => (
            <Dapp key={index} dapp={dapp}/>
          ))
        }
        {

          (dapps) ? dapps.map((dapp, index) => (
            <Dapp key={index} dapp={dapp}/>
          )) :
          <div className='no-results center-align white-text flow-text section'>
            <p>No Dapps Found</p>
          </div>
        }
      </section>
    );
  }
}

export default DappList;
