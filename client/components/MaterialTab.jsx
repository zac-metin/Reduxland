import React from 'react'
import { connect } from 'react-redux'
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

class TabsExampleControlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
      data: props.data
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    console.log(this.props);
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}>
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
              {`var express = require('express')`}<br />
          {`var router = express.Router()`}<br />
          {`var bananasDb = require('../db/bananas')`}<br />
          {`router.get('/', (req, res) => {`}<br />
            {`let db = req.app.get('db')`}<br />
            {`bananasDb.getBananas(db)`}<br />
              {`.then(bananas => {`}<br />
                {`res.json(bananas)`}<br />
              {`})`}<br />
          {`})`}<br />
          {`module.exports = router`}
            </Paper>
          </div>
        </Tab>
        <Tab label="Testing" value="c">
          <div>
            <Paper style={style} zDepth={4}>
            <h2 style={styles.headline}>Testing</h2>
            </Paper>
          </div>
        </Tab>
      </Tabs>
    );
  }
}

const mS2P = (state) => {
  return {
    data: state.data
  }
}

export default connect(mS2P)(TabsExampleControlled)
