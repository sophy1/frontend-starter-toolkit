import React, { ReactElement } from 'react';
import { hot } from 'react-hot-loader/root';

const App: React.SFC<{}> = (): ReactElement => <div>Hello World</div>;
App.displayName = 'App';
export default hot(App);
