import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
// ./ says look in the folder we are in aka current directory
// webpack looks for all the js files named CommentDetail
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    commentText="This is wow." 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Alex" 
                    timeAgo="Today at 1:00AM" 
                    commentText="Like crazy." 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Gigi" 
                    timeAgo="Yesterday at 8:00AM" 
                    commentText="What?! OMG." 
                />
            </ApprovalCard>


            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Wimpy" 
                    timeAgo="Today at 2:30PM" 
                    commentText="Really Dude?" 
                />
            </ApprovalCard>

            

            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Donut" 
                    timeAgo="Yesterday at 10:00AM" 
                    commentText="What tha?! Ha Ha HA." 
                />
            </ApprovalCard>


            
           
           
            
           
        </div>
    );
};

ReactDom.render(<App />, document.querySelector('#root'));

