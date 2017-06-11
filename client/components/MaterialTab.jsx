import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs'
import Paper from 'material-ui/Paper'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
}

const style = {
  height: 300,
  width: 600,
  margin: 20,
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
  overflow: 'scroll'
}

export default class TabsExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Description" value="a">
          <div>
            <Paper style={style} zDepth={4}>
            <h2 style={styles.headline}>Purpose</h2>
            Purpose Goes Here
            </Paper>
          </div>
        </Tab>
        <Tab label="Code" value="b">
          <div>
            <Paper style={style} zDepth={4}>
            <h2 style={styles.headline}>Code Example</h2>
              Example Goes Here
            </Paper>
          </div>
        </Tab>
        <Tab label="Testing" value="c">
          <div>
            <Paper style={style} zDepth={4}>
            <h2 style={styles.headline}>Testing</h2>
            Testing Goes Here
            </Paper>
          </div>
        </Tab>
      </Tabs>
    );
  }
}
