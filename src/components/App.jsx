import React from 'react';
import './App.less';
import { Layout } from 'antd';
import Routing from './Routing';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <Layout
                    theme='light'
                    style={styles.layout}
                >
                    <Layout.Header style={styles.header}>
                        <div>nav</div>
                    </Layout.Header>
                    <Layout.Content>
                        <Routing/>
                    </Layout.Content>
                </Layout>
            </div>
        );
    }
}

const styles = {
    layout: {
        height: '100vh',
    },
    header: {
        marginBottom: '10px',
    },
};

export default App;