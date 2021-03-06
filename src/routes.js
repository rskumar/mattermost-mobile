/* eslint-disable
  class-methods-use-this,
  react/require-optimization */

import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';

import ChannelsListContainer from 'containers/channels_list_container';
import LoginContainer from 'containers/login_container';
import SelectServerContainer from 'containers/select_server_container';
import SelectTeamContainer from 'containers/select_team_container';
import PostsListContainer from 'containers/posts_list_container';
import Logout from 'components/logout';
import * as logout from 'actions/logout';

import {injectIntl, intlShape} from 'react-intl';

class Routes extends Component {
    static propTypes = {
        intl: intlShape.isRequired
    }

    render() {
        const {formatMessage} = this.props.intl;

        return (
            <Router>
                <Scene key='root'>
                    <Scene
                        key='goToLogin'
                        component={LoginContainer}
                        title={formatMessage({id: 'mobile.routes.login', defaultMessage: 'Login'})}
                    />
                    <Scene
                        key='goToSelectServer'
                        component={SelectServerContainer}
                        title={formatMessage({id: 'mobile.routes.enterServerUrl', defaultMessage: 'Enter Server URL'})}
                        initial={true}
                    />
                    <Scene
                        key='goToChannelsList'
                        component={ChannelsListContainer}
                        title={formatMessage({id: 'mobile.routes.channels', defaultMessage: 'Channels'})}
                        renderRightButton={() =>
                            <Logout actions={logout}/>
                        }
                    />
                    <Scene
                        key='goToSelectTeam'
                        component={SelectTeamContainer}
                        title={formatMessage({id: 'mobile.routes.selectTeam', defaultMessage: 'Select Team'})}
                        renderRightButton={() =>
                            <Logout actions={logout}/>
                        }
                    />
                    <Scene
                        key='goToPostsList'
                        component={PostsListContainer}
                        title={formatMessage({id: 'mobile.routes.postsList', defaultMessage: 'Posts List'})}
                        renderRightButton={() =>
                            <Logout actions={logout}/>
                        }
                    />
                </Scene>
            </Router>
        );
    }
}

export default injectIntl(Routes);
