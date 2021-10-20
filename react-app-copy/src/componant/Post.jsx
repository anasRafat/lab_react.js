export const Post = (props) => { 
    
    return  (<dl>
    <dt>{props.todo}</dt>
    <dd>{props.description}</dd>
    </dl>);
};