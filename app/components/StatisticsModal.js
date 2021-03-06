import React, {
  Component,
  PropTypes,
} from 'react';
import {
  Modal,
  ART,
  LayoutAnimation,
  Dimensions,
  StyleSheet,
  ListView,
  View,
  TouchableHighlight,
  Button,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import Theme from '../statistics/theme/colors';
import Pie from '../statistics/charts/PieChart'



export default class StatisticsModal extends Component {
  // var arcs = d3.shape.pie()

  constructor(props) {
    super(props);
    console.log(this.props.habitStats)
    this.state = {
      habitId: this.props.id,
      habitStats: this.props.habitStats,
      habitName: this.props.habitName,
      activeIndex: null,
      // spendingsPerYear: data.spendingsPerYear
    }
    this._onReminderItemSelected = this._onReminderItemSelected.bind(this);
  }

  _onReminderItemSelected(newIndex){
    this.setState({...this.state, activeIndex: newIndex});
  }

  render() {
    const height = 160;
    const width = 340;
    return (
      <View style={{
        flex: 1,
        width: '100%',
        alignItems: 'center',
      }}>
        <Pie
          pieWidth={120}
          pieHeight={120}
          onItemSelected={this._onReminderItemSelected}
          colors={Theme.colors}
          width={width}
          height={height}
          // data={data.spendingsLastMonth} />
          data={this.state.habitStats} />
      </View>
    );
  }
}

const data = {
  spendingsLastMonth: [
    {"number":  42, "name": 'Yes'},
    {"number": 58, "name": 'No'}
  ],
};