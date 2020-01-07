import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
// ./ says look in the folder we are in.
// webpack looks for all the js files named CommentDetail
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                avatar={faker.image.avatar()} 
                author="Sam" 
                timeAgo="Today at 4:45PM" 
                commentText="This is wow." 
            />
            <CommentDetail 
                avatar={faker.image.avatar()} 
                author="Alex" 
                timeAgo="Today at 1:00AM" 
                commentText="Like crazy." 
            />
            <CommentDetail 
                avatar={faker.image.avatar()} 
                author="Gigi" 
                timeAgo="Yesterday at 8:00AM" 
                commentText="What?! OMG." 
            />
            <CommentDetail 
                avatar={faker.image.avatar()} 
                author="Wimpy" 
                timeAgo="Today at 2:30PM" 
                commentText="Really Dude?" 
            />
            <CommentDetail 
                avatar={faker.image.avatar()} 
                author="Donut" 
                timeAgo="Yesterday at 10:00AM" 
                commentText="What tha?! Ha Ha HA." 
            />
        </div>
    );
};

ReactDom.render(<App />, document.querySelector('#root'));

