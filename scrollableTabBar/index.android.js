//参考：http://www.jianshu.com/p/b7788c3d106e
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ScrollableTabView, {ScrollableTabBar } from 'react-native-scrollable-tab-view';

const Homelistbygeneral=()=>{
  return <Text>
    综合排序
  </Text>
};

const Homelistbysales=()=>{
  return <Text>
    销量最高
  </Text>
};

const Homelistbydiscount=()=>{
  return<Text>
    距离最近
  </Text>
};

export default class scrollableTabBar extends Component {
  render() {
    return (
      <ScrollableTabView
                        // renderTabBar={() => <DefaultTabBar/>}
                         initialPage={0}
                         tabBarPosition='top'
                         locked={false}
                         tabBarUnderlineColor='#FF0000'
                         tabBarBackgroundColor='#FFFFFF'
                         tabBarActiveTextColor='#9B30FF'
                         tabBarInactiveTextColor='#7A67EE'
                         tabBarTextStyle={{fontSize: 18}}
                         scrollWithoutAnimation={true}

      >
        <Homelistbygeneral tabLabel="综合排序" />
        <Homelistbysales tabLabel="销量最高" />
        <Homelistbydiscount tabLabel="距离最近" />
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('scrollableTabBar', () => scrollableTabBar);
