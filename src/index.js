import React from 'react';
import ReactDom from 'react-dom';
//import faker from 'faker';
// ./ says look in the folder we are in.
// webpack looks for all the js files named CommentDetail
import CommentDetail from './CommentDetail'; 

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" />
            <CommentDetail author="Alex" />
            <CommentDetail author="Gigi" />
            <CommentDetail author="Wimpy" />
            <CommentDetail author="Donut" />
        </div>
    );
};

ReactDom.render(<App />, document.querySelector('#root'));

