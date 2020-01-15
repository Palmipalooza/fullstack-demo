import React from 'react';
import Nav from './Nav.jsx';
import BugTile from './BugTile.jsx';
import exampleData from '../example-data/exampleData';

import '../styles/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'None',
      bugs: exampleData,
    };
    this.filterHandler = this.filterHandler.bind(this);
  }

  filterHandler(priority) {
    console.log('clicked', priority)
    this.setState({ filter: priority });
    console.log(this.state)
  }

  render() {
    return (
      <table>
        <Nav
          filterHandler={this.filterHandler}
        />
        {this.state.bugs.map((bug) => {
          // dont map over values that dont match the conditional below
          if (bug.threatLevel === this.state.filter || this.state.filter === 'None') {
            return (
              <BugTile
                bugName={bug.bugName}
                bugDescription={bug.bugDescription}
                reportedBy={bug.reportedBy}
                createdDate={bug.createdDate}
                assignedTo={bug.assignedTo}
                threatLevel={bug.threatLevel}
                key={bug.bugName}
              />
            )
          }
        })}
      </table>
    );
  }
}

export default App;


// FRONT-END
// Filter bugs by the threat level set by the user.

// Create a modal that will allow users to submit new bugs. A bug report must contain:

// Assigned Team Member
// Threat Level
// Description
// Reporter
// Populate the client with bug reports sent back from the server.